
var firebaseConfig = {
    apiKey: "AIzaSyB1b-xdMjUiC-GTEQfpqYthTJQbC76DPdA",
    authDomain: "kwitter-40235.firebaseapp.com",
    databaseURL: "https://kwitter-40235-default-rtdb.firebaseio.com",
    projectId: "kwitter-40235",
    storageBucket: "kwitter-40235.appspot.com",
    messagingSenderId: "318131369161",
    appId: "1:318131369161:web:d94bbae87fb52c54f3c918"
  };

  
  
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name"          
    });
 localStorage.setItem("room_name" , room_name);
 window.location = "chat_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row ="<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'># " + Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "chat_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}