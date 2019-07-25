/**
 * Test file for acceptance test for navbar at the top of each page
 */

import { module, test } from 'qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// To test with mirage
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | navbar', function(hooks) {
  setupApplicationTest(hooks);
  // To test with mirage
  setupMirage(hooks);

  // Test to see if front page is mapped to the right page
  test('index page should be the posts page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/posts',
                  // The error message when test fails
                  'index page should be posts page.');
  });

  // Test to see if clicking on the posts tab will direct you to posts tab
  test( 'posts tab should direct to posts', async function( assert ) {
    await visit('/');
    await click(".navbar-posts");

    assert.equal( currentURL(), '/posts', 'posts tab should direct to posts');
  });

  // Test to see if clicking on the users tab will direct you to users page
  test( 'users tab should direct to users', async function( assert ) {
    await visit('/');
    await click(".navbar-users");

    assert.equal( currentURL(), '/users', 'users tab should direct to users');
  });

  // Test to see if clicking on the photos tab will direct you to photos tab
  test( 'photos tab should direct to photos', async function( assert ) {
    await visit('/');
    await click(".navbar-photos");

    assert.equal( currentURL(), '/photos', 'photos tab should direct to phptos');
  });

});
