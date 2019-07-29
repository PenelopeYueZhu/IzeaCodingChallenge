/**
 * A componet to control pagination
 * Followed tutorial on
 * https://timmyomahony.com/blog/simple-pagination-component-ember/
 */

import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // Setting up some basic properites
  currentPage: 1, // Default to first page
  postsPerPage: 10, // 10 posts per page

  totalNumPages: computed( 'posts', function() {
    if( this.get('posts') ){
      var numOfPosts = this.get('posts').length;
      var postsPerPage = parseInt( this.get( 'postsPerPage' ) );
      return Math.ceil( numOfPosts / postsPerPage );
    }
    else return 1;
  }),

  // The posts on that page
  pagedContent: computed('posts', 'currentPage', function(){
    if( this.get('posts') ){
      var pageNum = parseInt( this.get( 'currentPage' ) );
      var postNum = parseInt( this.get( 'postsPerPage') );
      // Getting the id of the frst post on the page
      var startingId = ( pageNum - 1 ) * postNum;
      // The id of the last post on the page
      var endingId = startingId + postNum;
      return this.get('posts').slice( startingId, endingId );
    }
    else return ' ';
  } ),

  // Array of numbers to represent pages
  pageNumbers: computed( 'totalNumPages', function() {
    var list = [];
    var numPages = parseInt( this.get('totalNumPages' ) );
    for( var i = 1 ; i <= numPages ; i++ ){
      list.push( i );
    }
    return list;
  }),

  actions: {

    // Go to the clicked page number
    pageClicked( pageNumber ){
      this.set( 'currentPage', pageNumber );
      // Scroll back to top
      window.scrollTo( 0,0 );
    }
  }


});
