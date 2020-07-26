var list = document.getElementById("list");
function addTodo() {
  var todo_item = document.getElementById("todo-item");
  if (todo_item.value === "") {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
  }

  //Delete Button
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("onclick", "deleteItem(this)");
  delBtn.appendChild(delText);
  //Create Edit button
  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("onclick", "editItem(this)");
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  li.appendChild(liText);
  list.appendChild(li);
  todo_item.value = "";
  console.log(li);
}
function deleteItem(e) {
  e.parentNode.remove();
}
function editItem(e) {
  var x = e.parentNode.lastChild;
  var editValue = prompt("Update Task: ", x);
  x.nodeValue = editValue;
  console.log(x);
}
function delAll() {
  list.innerHTML = "";
}
