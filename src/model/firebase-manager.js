import React from "react";
import fire from "../firebase-config"
import { useDataLayerValue } from "../DataLayer";


const getLikes = (user)=>{
  
  return fire.database().ref('users/' + user.id).once("value", snapshot => {
    if (snapshot.val()) {
      Object.values(snapshot.val())
      
      //console.log("inside getuserlikes ",snapshot.val)
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
const Likes = (currentTrack, user) => {

  
    // const tracks = ["2aafaaa", "bb2fbbb", "ccf2ccc", "ddfddd"]

    fire.database().ref('users/' + user).set({
        Likes: currentTrack
      });
    /*  
    let ref =  fire.database().ref("Steve");
    fire.database().ref("Steve").push({Likes: currentTrack});*/
    console.log("its done")
}



export {Likes, getLikes}