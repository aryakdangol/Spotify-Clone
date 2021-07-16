import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from './player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
const [{user, token}, dispatch] = useDataLayerValue();

  //Run code based on a condition
  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log(_token)
    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((username) =>{
        dispatch({
          type: "SET_USER",
          user: username,
        });
      });

      spotify.getUserPlaylists().then((_playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: _playlists,
        })
      })

      spotify.getPlaylist('37i9dQZF1E35vfEr7Rm8Qn').then((response)=>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

    }
    
  }, []);

  return (
    <div className="App">
     {
       token ? <Player spotify = {spotify} /> : <Login />
     }

    </div>
  );
}

export default App;
