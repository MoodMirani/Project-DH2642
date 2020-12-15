import fire from "../firebase-config"

const getLikes = (user, dispatch)=>{
  const userID = user.id
  
  return fire.database().ref('users/' + userID.replace(".", "/")).once("value", snapshot => {
    if (snapshot.val()) {
      const likedList = Object.values(snapshot.val())
      //console.log("inside getlikes",likedList)
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: likedList,
    });
      //console.log("inside getuserlikes ",snapshot.val)
      } 
    })
}

const Likes = (currentTrack, user, dispatch, likedSongs) => {
  
    if(!likedSongs.includes(currentTrack.name)){
      const newLikeSongs = [currentTrack.name, ...likedSongs.flat()];
      //console.log("inside likes2", likedSongs)
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: newLikeSongs,
      });
      //console.log("inside likes",newLikeSongs)

      fire.database().ref('users/' + user.id).set({
        Likes: newLikeSongs
      });
    }
   
}

export {Likes, getLikes}