import { BASE_URL, requestHeader } from "./spotify"
import { searchErrorHandler } from "./searchErrorHandler";


const MusicSource = {
  search({ type, text, token }) {

    let index = type + "s"
    return fetch(BASE_URL + "/search?q=" + text + "&type=" + type, requestHeader(token))
    .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
        .then(data => data[index].items)
        .catch((error) => {
          console.log(error)
           
          });
},
  

    
    searchAlbum({ id, token }) {
        return fetch(`${BASE_URL}/albums/${id}/tracks`, requestHeader(token))
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
          .catch((error) => {
            console.log(error)
             
            });


    },
    searchTrack({ id, token }) {
        return fetch(`${BASE_URL}/tracks/${id}`, requestHeader(token))
            .then(data => data.json())

    }
};

export default MusicSource;


function status(res) {
  if (!res.ok) {
      throw new Error(res.statusText);
  }
  return res;
}



/*

 search({ type, text, token }) {

    let index = type + "s"
    return fetch(BASE_URL + "/search?q=" + text + "&type=" + type, requestHeader(token))
    .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error('Something went wrong, coul');
        }
      })
        .then(data => data[index].items)
        .catch((error) => {
          console.log(error)
            return error.toString()
          });
},
    
    */


    /*
search({ type, text, token }) {

        let index = type + "s"
        return fetch(BASE_URL + "/search?q=" + text + "&type=" + type, requestHeader(token))
        .then((response) => {
          if(response.ok){
            return response.json()
          }
          const responseError = {
            type: 'Error',
            message: response.message || 'Something went wrong',
            data: response.data || '',
            code: response.code || '',
            };
          
            let error = new Error();
            error = [ ...error, ...responseError ];
            throw (error); 
          
        })
        .then(data => data[index].items)

    */