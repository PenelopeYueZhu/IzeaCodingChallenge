/**
 * File to ajust user data key to JSON standard
 */

import DS from 'ember-data';

function buildNormalizedUser( source ){
  return {
    id: source.id,
    type: 'user',
    attributes: {
      name: source.name,
      username: source.username,
      email: source.email,
      address: source.address,
      phone: source.phone,
      website: source.website,
      company: source.company
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
        id: resourceHash.id,
        name: resourceHash.name,
        username: resourceHash.username,
        email: resourceHash.email,
        address: resourceHash.address,
        phone: resourceHash.phone,
        website: resourceHash.website,
        company: resourceHash.company
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
      payload.map( function( singleUser ){
          var normalizedUser = buildNormalizedUser( singleUser );
          // push it into the array
          data.push( normalizedUser );
      });
    } else { // otherwise the payload is just one obect
      var normalizedUser = buildNormalizedUser( payload ) ;
      data.push( normalizedUser );
    }
    //return this._super(store, primaryModelClass, data, id, requestType);

    // Now we have the entire array normalized, return
    return {data: data};
  }
} );
