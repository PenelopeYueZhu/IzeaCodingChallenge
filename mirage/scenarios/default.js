export default function(/* server */ server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList( 'user', 3);
  //server.createList( 'comment', 55);
}
