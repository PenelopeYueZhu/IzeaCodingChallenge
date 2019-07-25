/**
 * File to test if the searching function is working properly
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

// Setting up fake data for the test to search from
const ITEMS = [ {title: 'hey', body: 'there'},
                {title: 'what', body: 'hey'},
                {title: 'year', body: 'date'},
                {title: 'okay', body: 'hat'}];

// Setting up the fake result
const FILTERED_ITEMS = [ {title: 'what', body: 'hey'},
                        {title: 'year', body: 'date'},
                        {title: 'okay', body: 'hat'}];

module('Integration | Component | posts-filter', function(hooks) {
  setupRenderingTest(hooks);

  // First test to check if all the posts are posted without any action
  test( 'should initially list all posts', async function( assert ) {
    // Testing the promise to avoid async issue
    this.set( 'filterByKeyword', () => Promise.resolve( {results: ITEMS} ) );

    await render( hbs`
      <PostsFilter @filter = {{action filterByKeyword}} as |results|>
        <ul>
          {{#each results as |item|}}
            <li class="title">
              {{item.title}}
            </li>
          {{/each}}
        </ul>
      </PostsFilter>`
    );

    await settled();

    // No action, all titles should be displayed with keyword in it
    assert.equal( this.element.querySelectorAll('.title').length, 4);
    assert.dom( this.element.querySelector('.title')).hasText('hey');
  }); // end test

  // Now test if the filter is actually working
  test( 'should update with matching posts', async function( assert ){
    this.set( 'filterByKeyword', (val) => {
      if( val == '' ){ // If the user doesn't type in anything
        return Promise.resolve( {
          query: val,
          results: ITEMS
        });
      } else { // If the user typed in 'at'
        return Promise.resolve( {
          query: val,
          results: FILTERED_ITEMS
        });
      }
    }); // end set

    // Render the dom
    await render( hbs`
      <PostsFilter @filter = {{action filterByKeyword}} as |results|>
        <ul>
          {{#each results as |item|}}
            <li class="title">
              {{item.title}}
            </li>
          {{/each}}
        </ul>
      </PostsFilter>`
    );

    // Fill in the input field with 'at'
    await fillIn( this.element.querySelector('.posts-filter input'), 'at');
    // Keyup to trigger an action that will filter the posts
    await triggerKeyEvent( this.element.querySelector( '.posts-filter input'),
                            "keyup", 84);
    await settled();

    // Now we check if there is only three results left displayed
    // No action, all titles should be displayed with keyword in it
    assert.equal( this.element.querySelectorAll('.title').length, 3);
    //assert.dom( this.element.querySelector('.title')).hasText('at')
  }); // End test

});
