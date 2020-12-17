// Model
export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  currentTrack: null,
  currentArtist: null,
  currentAlbum: null,
  player: null,
  currentUser: null,
  likedSongs: [],
};

const reducer = (state, action) => { //A special function called reducer is implemented here to act as a dispatch gun 
  
   console.log(state)
   console.log(action)                                 // to shoot out data whenever needed and to save data to the wall(data layer)
  switch (action.type) {            // switch is used to perform different actions based on different conditions
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENTTRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      }
    case "SET_CURRENTARTIST":
      return {
        ...state,
        currentArtist: action.currentArtist, 
      }
      case "SET_CURRENTALBUM":
        return {
          ...state,
          currentAlbum: action.currentAlbum, 
        }
    
    case "SET_PLAYER":
      return {
        ...state,
        player: action.player,
      };

      case "SET_CURRENTUSER":
        return {
          ...state,
          currentUser: action.currentUser,
        };
      
      case "SET_LIKEDSONGS":
        
          return {
            ...state,
            likedSongs:action.likedSongs,
          }

        

    default:
      return state;
  }
};

export default reducer; 
