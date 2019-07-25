/**
 * File that tests if the list of posts are behaving correctly
 */

import { module, test } from 'qunit';
import {
 click,
 currentURL,
 visit,
 fillIn,
 triggerKeyEvent
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// To test with mirage
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);
  // To test with mirage
  setupMirage(hooks);

  // Test to see if the number of posts loaded are correct
  test('Should load 5 posts', async function(assert) {
    await visit('/');

    assert.equal(this.element.querySelectorAll('.single-post').length, 5);
  });

  // Test to see if it actually filters
  test('Should filter posts by keyword', async function( assert ){
    await visit('/');
    await fillIn( '.posts-filter input', '3');
    await triggerKeyEvent( '.posts-filter input', 'keyup', 51);

    // make sure we only have 1 post
    assert.equal( this.element.querySelectorAll('.results .single-post').length,
                  1,
                  'should contain only 1 result');
    // And that post does contain 3 in its title/body
    assert.ok( this.element.querySelector( '.single-post .title' ).textContent
                .includes('3'), 'should contain 1 result with 3 in its title');
  } );

  // Test to show if clicking on the title shows the detail of the page
  test( 'Should show details of a post', async function( assert ) {
    await visit( '/posts' );
    await click( ".post1" );

    assert.equal( currentURL(), '/posts/1', 'Should show details about a post');
    assert.ok( this.element.querySelector('.post-detail h2').textContent
                .includes('1'), "should show the title of post 1");
  });
});
