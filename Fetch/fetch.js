
import fetch from 'node-fetch';
import { Headers } from 'node-fetch';


let res=[]
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWFtMThfYWRtaW4iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTY2MTYwOTEwMX0.Iwm1vWWehszInPIyIEsCkLRF4Y59ToPZUAv8vCjPGpIXiOQdCIoekckP66W68Y8Nbz_NfYf8qP5pPEY5l4A27A");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "team18_admin",
  "password": "Team18admin",
  "rememberme": false
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
 
  redirect: 'follow'
};
let user
fetch("https://www.gmibank.com/api/users", requestOptions)
    .then(response => response.json())
    .then(result => {
         user = result;
        //console.log(user);
        })
    .catch(error => console.log('error', error)).then(()=>{
        console.log(user);
    }
    );

  export default user;