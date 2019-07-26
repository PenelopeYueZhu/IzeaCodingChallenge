/**
 * File to ajust data key to JSON standard
 */

import DS from 'ember-data';

export default DS.RESTSerializer.extend( {
  keyForAttribute( attr ) {
    return attr;
  },

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
  }
} );
