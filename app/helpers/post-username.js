import { helper } from '@ember/component/helper';
import Ember from 'ember';

/**
 * Takes an userId from a post and return its username
 * @param {string} userId the userId on a post
 * @return {string} the username
 */
export function postUsername( [userId] ) {
  console.log( userId );
  // First parse the string usreId
  var userIdInt = parseInt( userId );
  if( userIdInt > 0 && userIdInt <= 10 ) { // Magic number 10 T-T
    return Ember.get('store').queryRecord( 'user', {id: userId} ).then (
      user => {
        return user.get('username');
      }
    );
  } else {
    return 'unknown';
  }
}

export default helper(postUsername);
