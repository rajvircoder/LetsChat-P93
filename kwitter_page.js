//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB_7940zjZXv7jEvj_Bw15gpUGv-jpjxhE",
      authDomain: "letschat-db739.firebaseapp.com",
      databaseURL: "https://letschat-db739-default-rtdb.firebaseio.com",
      projectId: "letschat-db739",
      storageBucket: "letschat-db739.appspot.com",
      messagingSenderId: "838628419172",
      appId: "1:838628419172:web:14a9a55db78278a5a4a171"
    };

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}