const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const yyyy = today.getFullYear();

const currentDate = mm + '/' + dd + '/' + yyyy;

document.querySelector(".copyright").innerHTML = "© " + currentDate + " Jonathan Jong";