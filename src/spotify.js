

export const authEndpoint = "https://accounts.spotify.com/authorize"; // will be used to show authorize popup to access your Spotify account from your app.
                                                                    
const redirectUri = "http://localhost:3000/";          // will be the URL where you want the user to be redirected once the user is authorized successfully.          
                                                          
const clientId = "0ce6ae9e52b0477a86e4b06d7135b5d2"; 

const scopes = [                                
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {                            
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join( 
                                                                                              
                                                                                                                                                                                                                          
                                                                                                                
  "%20"
)}&response_type=token&show_dialog=true`;