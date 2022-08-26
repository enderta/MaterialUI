
import fetch from 'node-fetch';
import { Headers } from 'node-fetch';


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWFtMThfYWRtaW4iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTY2MTYwOTEwMX0.Iwm1vWWehszInPIyIEsCkLRF4Y59ToPZUAv8vCjPGpIXiOQdCIoekckP66W68Y8Nbz_NfYf8qP5pPEY5l4A27A");
myHeaders.append("Content-Type", "application/json");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};

let user=async ()=>{
    let res=[]
    const response= await fetch("https://www.gmibank.com/api/users", requestOptions)
    res=await response.json()
    return res
          
    
}
let id
console.log(user().then(res=>res[0].id));
console.log(id)


  export default id;

