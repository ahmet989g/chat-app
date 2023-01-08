import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Connecting...");
    socket = io('http://localhost:3000', {
        transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Connected!"));
}

export const sendMessage = (message) => {
    console.log("sendMessage: yeni Mesaj");
    if(socket) socket.emit("new-message", message);
}

export const subscribeChat = (cb) => {
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("subscribeChat: farklı mesaj var");
        cb(message);
    })
}

export const subscribeInitialMessages = (cb) => {
    if (!socket) return;

    socket.on("message-list", (message) => {
        console.log("subscribeInitialMessages: mesaj listele");
        cb(message);
    })
}