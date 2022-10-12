var firebaseConfig = {
  apiKey: "AIzaSyCf0PB2T2izZfvUYcZubU6e9pr4kRc8A4w",
  authDomain: "kwitterapp-5ffba.firebaseapp.com",
  databaseURL: "https://kwitterapp-5ffba-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-5ffba",
  storageBucket: "kwitterapp-5ffba.appspot.com",
  messagingSenderId: "809078805563",
  appId: "1:809078805563:web:b64e06ffa4b5bd49de381e",
  measurementId: "G-DY7H9W25PJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });


  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("room_name="+Room_names)
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}
