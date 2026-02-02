const messagesDiv = document.getElementById("messages");

// kayıtlı mesajları yükle
let messages = JSON.parse(localStorage.getItem("forumMessages")) || [];

function renderMessages() {
    messagesDiv.innerHTML = "";
    messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `<span>${msg.user}</span>: ${msg.text}`;
        messagesDiv.appendChild(div);
    });
}

function sendMessage() {
    const user = document.getElementById("username").value;
    const text = document.getElementById("message").value;

    if (user === "" || text === "") {
        alert("Kullanıcı adı ve mesaj yaz!");
        return;
    }

    const newMsg = { user, text };
    messages.push(newMsg);

    localStorage.setItem("forumMessages", JSON.stringify(messages));

    document.getElementById("message").value = "";
    renderMessages();
}

renderMessages();

