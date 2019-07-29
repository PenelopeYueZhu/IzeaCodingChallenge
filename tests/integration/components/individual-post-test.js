/**
 * File that test the behavior of individual posts
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | individual-post', function(hooks) {
  setupRenderingTest(hooks);

  // Setting up fake data for the testers to use
  hooks.beforeEach( function() {
    this.fakeUser = {
      id: 1,
      username: "bret",
      website: "hey@bret.com"
    };

    this.fakePost = {
      user: this.get('fakeUser'),
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };

  });

  test('Should display show more at start', async function(assert) {

    await render(hbs`<IndividualPost @post={{this.fakePost}} />`);

    assert.ok(this.element.querySelector('.op').textContent.includes('bret'));
  });
});
