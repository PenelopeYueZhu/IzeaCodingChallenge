/**
 * File to ajust post data key to JSON standard
 */

import DS from 'ember-data';

function buildNormalizedPost( source ){
  return {
    id: source.id,
    type: 'post',
    attributes: {
      userId: source.userId,
      title: source.title,
      body: source.body
    }
  };
}

export default DS.RESTSerializer.extend( {
  keyForAttribute( attr ) {
    return attr;
  },

  /**
   * Function to take rest data into json form
   * @param {model} modelClass the model of data we want
   * @param {object} resourceHash the rest data
   * @return {json document} the json data from rest data
   */
  normalize( modelClass, resourceHash ){
    var data = {
      id: resourceHash.id,
      type: modelClass.modelName,
      attributes: {
        userId: resourceHash.userId,
        title: resourceHash.title,
        body: resourceHash.body
      }
    };
    return { data: data };
  },

  /**
   * Function to take in a raw response from rest and turn into a series of
   * JSON API data.
   * @param {DS.store} store the ember data store
   * @param {model} primaryModelCalss the model of data we want
   * @param {object} payload the actual response
   * @param {string/number} id not used
   * @param {string} requestType not used
   * @return JSON API document
   */
  normalizeResponse( store, primaryModelClass, payload, id, requestType ){

    // Create the array we are going to store JSON data in
    var data = [];
    // If payload has more than one objects
    if( payload.length ){
      // Now loop through the payload and normalize each response
      payload.map( function( singlePost ){
          var normalizedPost = buildNormalizedPost( singlePost );
          // push it into the array
          data.push( normalizedPost );
      });
    } else { // otherwise the payload is just one obect
      var normalizedPost = buildNormalizedPost( payload ) ;
      data.push( normalizedPost );
    }


    //return this._super(store, primaryModelClass, data, id, requestType);

    // Now we have the entire array normalized, return
    return {data: data};
  }
} );
