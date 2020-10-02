import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi(); // new instance (constructor) (used to communicate with spotify)

function App() {

 // const [token,setToken] = useState(null);
  //to access from datalayer
  const[{ user,token },dispatch] = useDataLayerValue(); //check amazon video for context api 

  //Run code based on a given condition
  useEffect(() => {
      //code...
      const hash = getTokenFromUrl();
      window.location.hash = ""; //for security reason we hide hash 

      const _token = hash.access_token; //here token and _token are different (used in production level)

      if(_token){
          //setToken(_token);
          dispatch({
            type:'SET_TOKEN',
            token:_token
          })
          spotify.setAccessToken(_token); //giving toke to spotify webapi
          spotify.getMe().then((user) => {
           // console.log(user);

            dispatch({
              type: 'SET_USER',
              user: user, //declaring for datalayer
            });
          });
          spotify.getUserPlaylists().then((playlists) =>{
            dispatch({
              type: "SET_PLAYLISTS",
              playlists: playlists,
            });
          });

          spotify.getPlaylist('37i9dQZEVXcOEQE1FmSlUd').then((response) => {
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
          } )
          
      }


      console.log("token receved 😎", token)
  },[]);


 console.log(user); // to check pulling for datalayer
 console.log(token);


  return (
    <div className="app">
    {
      token ? (
        //on successfull authentication
        // <h1>Login successful </h1>
        <Player spotify = {spotify}/>
      ):(
        //else
        <Login />
      )
    }

    {/*<Login />*/}
  
      
    </div>
  ); 
}

export default App;
