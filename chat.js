const firebaseConfig = {
  apiKey: "AIzaSyB7RhoDSkp4i3t3JcLKkWU1WETEIoxLidw",
  authDomain: "caku-3dfaa.firebaseapp.com",
  databaseURL: "https://caku-3dfaa-default-rtdb.firebaseio.com",
  projectId: "caku-3dfaa",
  storageBucket: "caku-3dfaa.firebasestorage.app",
  messagingSenderId: "887477508029",
  appId: "1:887477508029:web:431a7e11f79adf4ba624d4",
  measurementId: "G-8TT28GNW7V"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref("messages");

const messagesDiv = document.getElementById("messages");

function sendMessage() {
    const user = document.getElementById("username").value;
    const text = document.getElementById("message").value;

    if (user === "" || text === "") return;

    messagesRef.push({
        user: user,
        text: text
    });

    document.getElementById("message").value = "";
}

messagesRef.on("child_added", function(snapshot) {
    const msg = snapshot.val();
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `<span>${msg.user}</span>: ${msg.text}`;
    messagesDiv.appendChild(div);
});
