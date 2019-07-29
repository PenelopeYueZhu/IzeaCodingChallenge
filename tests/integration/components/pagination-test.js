import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  findAll,
  find,
  settled,
  click
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pagination', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach( function() {
    this.user = [{
      id: 1,
      username: "bret",
      website: "hey@bret.com"
    }];

    this.posts = [{
      user: this.get('user'), userId: 1, id: 1, title: "1", body: "11"
    },{
      user: this.get('user'), userId: 1, id: 2, title: "2", body: "22"
    },{
      user: this.get('user'), userId: 1, id: 3, title: "3", body: "33"
    },{
      user: this.get('user'), userId: 1, id: 4, title: "4", body: "44"
    },{
      user: this.get('user'), userId: 1, id: 5, title: "5", body: "55"
    },{
      user: this.get('user'), userId: 1, id: 6, title: "6", body: "66"
    },{
      user: this.get('user'), userId: 1, id: 7, title: "7", body: "77"
    },{
      user: this.get('user'), userId: 1, id: 8, title: "8", body: "88"
    },{
      user: this.get('user'), userId: 1, id: 9, title: "9", body: "99"
    },{
      user: this.get('user'), userId: 1, id: 10, title: "10", body: "101"
    },{
      user: this.get('user'), userId: 1, id: 11, title: "11", body: "1011"
    }];
  });

  // Testing when there is no post to render
  test('it renders (no posts)', async function(assert) {

    // When we have no posts
    await render(hbs`
      {{#pagination }}
        <ul class="post-list" data-test-post-list>
          {{#each pagedPosts as |singlePost|}}
            <li>
              <IndividualPost @post = {{singlePost}} />
            </li>
          {{/each}}
        </ul>
      {{/pagination}}`);

    // There is no data entered, so there is no posts
    assert.equal( findAll('[data-test-post-list] li').length, 0,
                    'There should be no posts rendered');

    // There should only be page 1 at the bottom
    assert.equal( findAll( '[data-test-page-num-list] li').length, 1,
                    'There should be only one page');
    // And that page number is one
    assert.ok( find('[data-test-page-num-list]').innerText.includes('1') );
    //assert.ok( this.element.query.innerText.includes('1 2') );

  });

  // Testing the page page of a rendering
  test( 'it renders when provided posts', async function( assert ) {
    // Render 11 posts
    await render(hbs`
      {{#pagination posts=this.posts as |pagedPosts|}}
        <ul class="post-list" data-test-post-list>
          {{#each pagedPosts as |singlePost|}}
            <li>
              <IndividualPost @post = {{singlePost}} />
            </li>
          {{/each}}
        </ul>
      {{/pagination}}`);

    await settled();

    // There is 11 posts, 10 on the first page
    assert.equal( findAll('[data-test-post-list] li').length, 10,
                    'There should be 10 posts rendered');

    // There should only be page 1 at the bottom
    assert.equal( findAll( '[data-test-page-num-list] li').length, 2,
                    'There should be two pages');
    // And that page number is one
    assert.ok( find('[data-test-page-num-list]').innerText.includes('1') );
    assert.ok( find('[data-test-page-num-list]').innerText.includes('2') );

    // Now click on the second page, it should render the last post
    await click( find('[data-test-page-button="2"]') );

    // We should only have one post on the page
    assert.equal( findAll('[data-test-post-list] li').length, 1,
                    'There should be 1 posts rendered on the second page');
  });

  // Testing if clicking on pages change the paged content 
  test( 'Clicking on the page actually renders the next page',
    async function( assert ) {
    // Render 11 posts
    await render(hbs`
      {{#pagination posts=this.posts as |pagedPosts|}}
        <ul class="post-list" data-test-post-list>
          {{#each pagedPosts as |singlePost|}}
            <li>
              <IndividualPost @post = {{singlePost}} />
            </li>
          {{/each}}
        </ul>
      {{/pagination}}`);

      await settled();

      // Now click on the second page, it should render the last post
      await click( find('[data-test-page-button="2"]') );

      // We should only have one post on the page
      assert.equal( findAll('[data-test-post-list] li').length, 1,
                        'There should be 1 posts rendered on the second page');
  });
});
