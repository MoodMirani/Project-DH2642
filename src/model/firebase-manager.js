import fire from "../firebase-config"

// Encoder for spotify user.id since there are some carachters that are not allowed in firebase
function encoder(userID) {
  const newID = userID.replace(".", "1").replace("#", "2").replace("$", "3").replace("[", "4").replace("]", "5").replace("&", "6")
  return newID}

function decoder(encodedID) {
  const oldID = encodedID.replace("1",".").replace("2","#").replace("3","$").replace("4","[").replace("5","]").replace("6", "&")
  return oldID}

const getLikes = (user, dispatch)=>{
  const userID = user.id
  
  return fire.database().ref('users/' + encoder(userID)).once("value", snapshot => {
    if (snapshot.val()) {
      const likedList = Object.values(snapshot.val())
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: likedList[0],
    });
      //console.log("inside getuserlikes ",snapshot.val)
      } 
    })
}

const songIncluded = (likedSongs, currentTrack) => {
  if(likedSongs) {
  for (let index = 0; index < likedSongs.length; index++) {
    if(likedSongs[index].id === currentTrack.id){
      return true;
    }
  }
  }
  return false;
}

const Likes = (currentTrack, user, dispatch, likedSongs) => {

    if(!songIncluded(likedSongs, currentTrack)){
      const data = [currentTrack, ...likedSongs.flat()];
      //console.log("inside likes2", likedSongs)
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: data,
      });
      console.log("Data från firebase manager", data)
      updateDatabase(user, data)
      //console.log("inside likes",newLikeSongs)
    }
}

const unLike = (currentTrack, user, dispatch, likedSongs) => {

  if(songIncluded(likedSongs, currentTrack)){
    const data = likedSongs.filter(track => track.id !== currentTrack.id);
    dispatch({
      type: "SET_LIKEDSONGS",
      likedSongs: data,
    });
    updateDatabase(user, data)
    console.log(currentTrack, "was unliked")
  }
}

const updateDatabase = (user, data)=>{
  fire.database().ref('users/' + encoder(user.id)).set({
    Likes: data
  });
}


export {Likes, unLike, getLikes}