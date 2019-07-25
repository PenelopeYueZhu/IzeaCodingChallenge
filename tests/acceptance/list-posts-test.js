/**
 * File that tests if the list of posts are behaving correctly
 */

 import { module, test } from 'qunit';
 import {
   //click,
   // currentURL,
   visit
 } from '@ember/test-helpers';
 import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);

  // Test to see if the number of posts loaded are correct
  test('Should load 5 posts', async function(assert) {
    await visit('/');

    assert.equal(this.element.querySelectorAll('.single-post').length, 5);
  });
});
