// Model
export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  currentTrack: null,
};

const reducer = (state, action) => { //A special function called reducer is implemented here to act as a dispatch gun 
  // to shoot out data whenever needed and to save data to the wall(data layer)
  switch (action.type) { // switch is used to perform different actions based on different conditions
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
    default:
      return state;
  }
};

export default reducer; 
