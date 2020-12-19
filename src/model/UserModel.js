

// class User{
//     constructor(name="Steve", liked=[], disliked=[]) {
//         this.name = name;
//         this.liked = [].concat(liked)
//         this.disliked = [].concat(disliked)
//     }
    
//     setName(x) {
//         this.name = x;
//     }

//     likes(song) {
//         const songLiked = this.liked.includes(song);
//         if (songLiked) {

//         throw console.error("Song already liked");
//         }
//         else{
//         this.liked=[song, ...this.liked]
//     }
// }
//     dislikes(song){
//         const songDisliked = this.disliked.includes(song);
//         if (songDisliked) {
//         throw console.error("Song already disliked");
//         }
//         else{
//         this.disliked=[song, ...this.disliked]
//     }
//     }
// }

// export default User;