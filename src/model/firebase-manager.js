import fire from "../firebase-config"



const Likes = (currentTrack, user) => {
    console.log("In likes function", currentTrack, user)
    
    fire.database().ref('users/' + user).push({
        Likes: currentTrack,
        
      });
    /*  
    let ref =  fire.database().ref("Steve");
    fire.database().ref("Steve").push({Likes: currentTrack});*/
    console.log("its done")
    
}

export default Likes;