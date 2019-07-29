/**
 * File that test the behavior of individual posts
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  find,
  click
} from '@ember/test-helpers';
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


    this.fakeComment = {
      id:1,
      postId: 1,
      name: 'fake commenter',
      email: 'fake@comment.com',
      body: 'some random text'
    };

    this.fakePost = {
      user: this.get('fakeUser'),
      comments: [this.get('fakeComment')],
      userId: 1,
      id: 1,
      title: "sunt aut",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
    };
  });

  // Test to see if it renders
  test('Should display only a title at first ', async function(assert) {

    await render(hbs`<IndividualPost @post={{this.fakePost}} />`);

    // There should be only the title viewable
    assert.equal( find('[data-test-post-title]').innerText.trim(), 'sunt aut');
    // But the post details should be hidden with height: 0
    let postDetailStyle = window.getComputedStyle(
                                find('[data-test-post-detail]') );
    let postDetailHeight = postDetailStyle.getPropertyValue('max-height');
    assert.equal( postDetailHeight.localeCompare('0px'), 0,
                    'post detail should have style: max-height: 0' );
    // And innerText won't show anything
    // And the label should say expand
    assert.ok( find('[data-test-post-expand-label]').
                  innerText.includes('expand') );

  });

  // Now test to see if clicking on the expand post buttom shows details
  test('Should display op and body and comment button when expand',
        async function( assert ){

    await render(hbs`<IndividualPost @post={{this.fakePost}} />`);

    await click( find('[data-test-post-expand-label]') );

    // Now the button should say collapse
    assert.ok( find('[data-test-post-expand-label]').
                  innerText.includes('collapse') );

    // Now we can see user and post body
    let opString = find('[data-test-original-poster]').innerText.trim();
    assert.equal( opString, 'Posted by: bret (hey@bret.com)');
    let bodyString = find('[data-test-post-body]').innerText.trim();
    assert.equal( bodyString,
          'quia et suscipit suscipit recusandae consequuntur expedita et cum');

    // And a load command button
    assert.equal( find('[data-test-comment-label]').innerText.trim(),
                  'load comments');

  });

  // Now test to see if clicking on the expand post comment shows details
  test('Should display commenter and comment body when load comment',
        async function( assert ){

    await render(hbs`<IndividualPost @post={{this.fakePost}} />`);

    await click( find('[data-test-post-expand-label]') );
    await click( find('[data-test-comment-label]') );

    // Now the button should say hide comments
    assert.ok( find('[data-test-comment-label]').
                  innerText.includes('hide comments') );

    // Now we can see commenter and comment body
    let commenterString = find('[data-test-commenter]').innerText.trim();
    assert.equal( commenterString, 'fake commenter(fake@comment.com)');
    let commentBodyString = find('[data-test-comment-body]').innerText.trim();
    assert.equal( commentBodyString, 'some random text');
  });
});
