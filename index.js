function saveAndReload() {
  var x =document.getElementById("input").value;
   var j = localStorage.length;

  return localStorage.setItem(j, x);
}

function saveToLocalStorage() {
  window.location.reload(saveAndReload());
}

function view() {
  document.getElementById("span").innerHTML = localStorage.length;
}

function showData() {
  var x = [];

  for (var i = 0; i < localStorage.length; i++) {
 
    x.push(localStorage.getItem(i));
  }
  document.getElementById("show").innerHTML = x.join(", ");
  console.log(x);
}

function deleteData() {
  localStorage.clear();
}

function dataDelete() {
  window.location.reload(deleteData());
}

 
