import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then( async connection => {

  console.log( "Inserting a new user into the database..." );
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  /*
  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);
  */

  connection.manager.save( user ).then( rsSaveUser => {
    console.log( "01 - Saved a new user with id: " + rsSaveUser.id );
  } )

  console.log( "02 - Loading users from the database..." );

  /*
  const users = await connection.manager.find( User );
  console.log( "Loaded users: ", users );
  */

  connection.manager.find( User ).then( ( rsFindUser: Array<User> ) => {
    console.log( "03 - Loaded users: ", rsFindUser );
  } )

  console.log( "04 - Here you can setup and run express/koa/any other framework." );

} ).catch( error => console.log( error ) );
