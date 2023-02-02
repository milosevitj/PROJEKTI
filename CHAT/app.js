import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom = new Chatroom("#general", "kaca");

chatroom.getChats((data) => {
  console.log(data);
}); // pozivam funkicju callback

//////////////////////////

let ul = document.querySelector("ul");
let chatUI = new ChatUI(ul);

chatroom.getChats((data) => {
  chatUI.templateLI(data);
});

let inputPOr = document.getElementById("inpSend");
let btnSend = document.getElementById("send");
let inputUpdate = document.getElementById("inpText");
let btnUpdate = document.getElementById("btnUpd");

btnSend.addEventListener("click", () => {
  if (inputPOr.value.trim() !== "") {
    chatroom
      .addChat(inputPOr.value)
      .then(() => {
        console.log("uspesno dodat cet");
        inputPOr.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
