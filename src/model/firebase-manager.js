import React from "react";
import fire from "../firebase-config"
import { useDataLayerValue } from "../DataLayer";
/*
export const getItinerary = (userName) => {
  const temp = []
  return dispatch => {
      dispatch(itineraryFetchRequest())
      db.collection('itinerary').where('user', '==', userName.toLowerCase()).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          temp.push(doc.data())
        })
      })
        .then (itinerary => {
          if(temp.length === 0) dispatch({type: FETCH_ITINERARIES_EMPTY})
          else dispatch({type: FETCH_ITINERARIES_SUCCESS, payload: temp})
            
        })
      .catch(err => {
        console.log('Error getting documents', err);
  })
}}
*/

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
      console.log("inside getlikes",likedList)
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: likedList,
    });
      console.log("inside getuserlikes ",snapshot.val)
      } 
    })
}

/*
function GetUserLikes(user, likedSongs){
  if(user && likedSongs===null) {
    fire.database().ref('users/' + user.id).once("value", snapshot => {
      if (snapshot.val()) {
        const likedList = Object.values(snapshot.val())
        console.log("getuserlikes ",likedList)
        //console.log("inside getuserlikes ",snapshot.val)
        return likedList;
        }
      })
  }
  else{
    console.log("userlikes not work", user, likedSongs)
  }


}
*/
/*


function GetUserLikes(){
    const [{currentTrack, user, likedSongs }, dispatch] = useDataLayerValue();
    if(user && likedSongs===null) {
      fire.database().ref('users/' + user.id).once("value", snapshot => {
        if (snapshot.val()) {
          const likedSongs = Object.values(snapshot.val())
          console.log("getuserlikes ",likedSongs)
          //console.log("inside getuserlikes ",snapshot.val)
          }
        })
        dispatch({
          type: "SET_LIKEDSONGS",
          likedSongs: likedSongs,
      });
    }
    else {
      console.log("skipping GetUserLikes")
    }
}

*/
const Likes = (currentTrack, user, dispatch, likedSongs) => {
  console.log(encoder(user.id))
  console.log(decoder(encoder(user.id)))
 
  
    if(!likedSongs.includes(currentTrack.name)){
      const newLikeSongs = [currentTrack.name, ...likedSongs.flat()];
      
     
      dispatch({
        type: "SET_LIKEDSONGS",
        likedSongs: newLikeSongs,
      });
     

      fire.database().ref('users/' + encoder(user.id)).set({
        Likes: newLikeSongs
      });

      //console.log("its done")
    }
 
    /*  
    let ref =  fire.database().ref("Steve");
    fire.database().ref("Steve").push({Likes: currentTrack});*/
   
}



export {Likes, getLikes}