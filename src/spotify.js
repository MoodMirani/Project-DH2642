// SETTINGS


const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"; // will be used to show authorize popup to access your Spotify account from your app.
const REDIRECT_URL = "http://localhost:3000/";          // will be the URL where you want the user to be redirected once the user is authorized successfully.                                
const CLIENT_ID = "0ce6ae9e52b0477a86e4b06d7135b5d2"; 
const SCOPES = [                                
    "streaming", 
    "user-read-email", 
    "user-read-private",
    "user-modify-playback-state"
];

export const BASE_URL = "https://api.spotify.com/v1";

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES.join("%20")}&response_type=token&show_dialog=true`;

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

export const requestHeader = token => {
    return {
        "method": "GET",
        "headers": {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }
};
