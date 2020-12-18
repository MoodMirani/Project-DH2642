import fire from "../firebase-config"

function encoder(userID) {
  const newID = userID.replace(".", "1").replace("#", "2").replace("$", "3").replace("[", "4").replace("]", "5").replace("&", "6")
  return newID}

function decoder(encodedID) {
  const oldID = encodedID.replace("1",".").replace("2","#").replace("3","$").replace("4","[").replace("5","]").replace("6", "&")
  return oldID}



const getLikes = (user, dispatch)=>{
  
  return fire.database().ref('users/' + encoder(user.id)).once("value", snapshot => {
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
  //console.log(encoder(user.id))
  //console.log(decoder(encoder(user.id)))
 
  
    if(!likedSongs.includes(currentTrack.name)){
      const newLikeSongs = [currentTrack.name, ...likedSongs.flat()];
      
     
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: newLikeSongs,
      });
     

      fire.database().ref('users/' + encoder(user.id)).set({
        Likes: newLikeSongs
      });
    }
   
}

export {Likes, getLikes}