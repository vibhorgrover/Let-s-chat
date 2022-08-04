const firebaseConfig = {
    apiKey: "AIzaSyCIK_uWzzMsw8TJU3VL_1D-PWbhCElt5I8",
    authDomain: "lets-chat-74402.firebaseapp.com",
    databaseURL: "https://lets-chat-74402-default-rtdb.firebaseio.com",
    projectId: "lets-chat-74402",
    storageBucket: "lets-chat-74402.appspot.com",
    messagingSenderId: "320666453882",
    appId: "1:320666453882:web:2e889acfb8755fcd47f8c3",
    measurementId: "G-N5RF5QRKB9"
  };
  
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



