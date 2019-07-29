/**
 * File that tests if the list of posts are behaving correctly
 */

import { module, test } from 'qunit';
import {
 click,
 currentURL,
 visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// To test with mirage
//import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);
  // To test with mirage
  //setupMirage(hooks);

  // Test to see if the number of posts loaded on the first page is correct
  test('Should load 10 posts on the first page', async function(assert) {
    await visit('/');

    assert.equal(this.element.querySelectorAll(".single-post").length, 10);
    // The author should be bret
    assert.ok(this.element.querySelector(".op").textContent.includes("Bret"));
  });

  test('Should load another 10 at the second page', async function( assert ) {
    await visit( '/' );

    await click( ".page-button");

    // Now we are on the second page, there should still be 10 posts
    assert.equal( this.element.querySelectorAll(".single-post").length, 10 );
    // The author shold be Antonette
    console.log(this.element.querySelector(".op").
                  textContent);
    assert.ok(this.element.querySelector(".op").
                  textContent.includes("Antonette"));
  })

  // Test to show if clicking on the title shows the detail of the page
  test( 'Should show details of a post', async function( assert ) {
    await visit( '/posts' );
    await click( ".post1" );

    assert.equal( currentURL(), '/posts/1', 'Should show details about a post');

  });
});
