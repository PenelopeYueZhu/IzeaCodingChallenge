/**
 * File that tests if the list of posts are behaving correctly
 */

import { module, test } from 'qunit';
import {
 click,
 visit,
 findAll,
 currentURL
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// To test with mirage
//import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);
  // To test with mirage
  //setupMirage(hooks);

  // Test to see if front page is mapped to the right page
  test('index page should be the posts page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/posts',
                  // The error message when test fails
                  'index page should be posts page.');
  });

  // Test to see if the number of posts loaded on the first page is correct
  test('Should load 10 posts on the first page', async function(assert) {
    await visit('/');

    assert.equal( findAll('[data-test-single-post]').length, 10,
                                    'Should be 10 posts in total loaded' );
  });

  // Testing if clicking the page button actually renders the next 10 posts 
  test('Should load another 10 at the second page', async function( assert ) {
    await visit( '/' );

    await click( '[data-test-page-button="2"]' );

    // Now we are on the second page, there should still be 10 posts
    assert.equal( findAll('[data-test-single-post]').length, 10,
                                    'Should be 10 posts in total loaded' );

  })

});
