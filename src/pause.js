
function Pause({
    playerInstance: {
      _options: {
        getOAuthToken
      }
    }
  }) {

    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/pause`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        },
      });
    });
}

  export default Pause;