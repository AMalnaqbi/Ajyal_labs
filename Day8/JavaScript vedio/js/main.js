var ourButtom = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
for (i = 0; i < listItems.length - 1; i++) {
  // for (intial; condition, increment)
  listItems[i].addEventListener("click", activateItem);
  //   addEvent..(event, method name/event listener)
}

function activateItem() {
  ourHeadline.innerHTML = this.innerHTML;
  // this is context that mean the currunt value.
}

ourButtom.addEventListener("click", createNewItem);

// for (i = 0; i < listItems.length; i++) {       (change all items)
//     listItems[i].innerHTML = "Hello World.";
// }

// function activateItem() {      (when we click on any item will pop up alert)
//   alert("Click detected!");
// }
