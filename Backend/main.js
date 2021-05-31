// Connecting classes to Javascript
// ----------------------------------------------------------------------------------------------------------------------------------------- //
const completed = document.querySelector(".completed");
const left_arrow_class = document.querySelector(".left-arrow");
const delete_class = document.querySelector(".delete");
const todo_button = document.querySelector(".todo-button");
const todo_input = document.querySelector(".todo-input");
const todo_container = document.querySelector(".todo-container");
const empty_checking = document.querySelector(".empty");
const i_up_arrow = document.querySelector(".fa-arrow-up");
const groupName = document.querySelector(".group-name");
const complete_btn = document.querySelector(".complete-btn");
const trash_btn = document.querySelector(".trash-btn");
const svg = document.querySelector(".svg");
const delete_group = document.querySelector(".delete-group");
const alert_background = document.querySelector(".alert-background");
const close_alert_modal = document.querySelector(".close-alert-modal");
const alert_ok_btn = document.querySelector(".alert-ok-btn");
const alert_text = document.querySelector(".alert-p");
const completedSound = document.getElementById("completed-sound");
const ask_background = document.querySelector(".ask-background");
const close_ask_modal = document.querySelector(".close-ask-modal");
const ask_ok_btn = document.querySelector(".ask-ok-btn");
const ask_no_btn = document.querySelector(".ask-no-btn");
const ask_text = document.querySelector(".ask-p");
const print_todos = document.getElementById("print");
const go_back_to_frontpage = document.getElementById("navigate");
const menu = document.getElementById("cakeMenu");
const menus = document.getElementById("items");
const rename_btn = document.getElementById("rename-btn-id");
const rename_bg = document.getElementById("rename-bg-id");
const close_rename = document.getElementById("rename-close-id");
const Change_Theme = document.getElementById("change-theme-group");
const input_rename_group_id = document.getElementById("input-rename");
const change_them_modal = document.getElementsByClassName("change-theme-modal")[0];
const change_theme_bg = document.getElementsByClassName("change-theme-modal-bg")[0];
const close_change_theme = document.getElementsByClassName("close-change-theme")[0];
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Startups
// ----------------------------------------------------------------------------------------------------------------------------------------- //
todo_input.focus();
LoadText();
check_empty();
toggle_star();
toggle_completed();
Create_Essential_Local_Storage();
Check_ThemeBG_LS();
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Adding Event Listeners to varables
// ----------------------------------------------------------------------------------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", getTodos);
document.addEventListener("click", Close_Rename_Group_when_clicked_on_window)
left_arrow_class.addEventListener("click", left_arrow);
todo_button.addEventListener("click", todo_btn);
todo_container.addEventListener("click", DoSomethingInTodoContainer);
delete_group.addEventListener("click", DeleteGroup);
alert_ok_btn.addEventListener("click", CloseErrorMessage);
close_alert_modal.addEventListener("click", CloseErrorMessage)
print_todos.addEventListener("click", PrintTodos);
go_back_to_frontpage.addEventListener("click", GoBackToFrontPage);
menu.addEventListener("click", OpenCakeMenu);
menus.addEventListener("click", DoSomethingInCakeMenu);
rename_bg.addEventListener("click", (event) => {
  event.preventDefault();
});
todo_input.addEventListener("click", Close_Cake_menu);
change_them_modal.addEventListener("click", DoSomethingInChangeTheme);
close_rename.addEventListener("click", Close_Rename);
Change_Theme.addEventListener("click", ChangeTheme);
rename_btn.addEventListener("click", Rename_Group);
close_change_theme.addEventListener("click", () => {change_theme_bg.style.display = "none"})
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function DoSomethingInChangeTheme(event) {
  let className = event.target.classList[2];
  if (className == "blue"){
    localStorage.setItem("ThemeBG", "blue")
    Check_ThemeBG_LS();
  }
  if (className == "coral"){
    localStorage.setItem("ThemeBG", "coral")
    Check_ThemeBG_LS();
  }
  if (className == "violet"){
    localStorage.setItem("ThemeBG", "violet")
    Check_ThemeBG_LS();
  }
  if (className == "greenery"){
    localStorage.setItem("ThemeBG", "greenery")
    Check_ThemeBG_LS();
  }
  if (className == "rose-quartz"){
    localStorage.setItem("ThemeBG", "rose-quartz")
    Check_ThemeBG_LS();
  }
  if (className == "yellow"){
    localStorage.setItem("ThemeBG", "yellow")
    Check_ThemeBG_LS();
  }
  if (className == "serenity"){
    localStorage.setItem("ThemeBG", "serenity")
    Check_ThemeBG_LS();
  }
  if (className == "dark"){
    localStorage.setItem("ThemeBG", "dark")
    Check_ThemeBG_LS();
  }
  if (className == "tide"){
    localStorage.setItem("ThemeBG", "tide")
    Check_ThemeBG_LS();
  }
  if (className == "beach"){
    localStorage.setItem("ThemeBG", "beach")
    Check_ThemeBG_LS();
  }
  if (className == "lighthouse"){
    localStorage.setItem("ThemeBG", "lighthouse")
    Check_ThemeBG_LS();
  }
  if (className == "forest"){
    localStorage.setItem("ThemeBG", "forest")
    Check_ThemeBG_LS();
  }
  if (className == "man"){
    localStorage.setItem("ThemeBG", "man")
    Check_ThemeBG_LS();
  }
  if (className == "red-bg-hill"){
    localStorage.setItem("ThemeBG", "red-bg-hill")
    Check_ThemeBG_LS();
  }
  if (className == "castle"){
    localStorage.setItem("ThemeBG", "castle")
    Check_ThemeBG_LS();
  }
  if (className == "texture-bg"){
    localStorage.setItem("ThemeBG", "texture-bg")
    Check_ThemeBG_LS();
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Check_ThemeBG_LS() {
  let themebg_ls = localStorage.getItem("ThemeBG");
  if (themebg_ls == "blue") {
    document.body.style.background = "#34568B";
  }
  if (themebg_ls == "coral") {
    document.body.style.background = "#FF6F61";
  }
  if (themebg_ls == "violet") {
    document.body.style.background = "#6B5B95";
  }
  if (themebg_ls == "greenery") {
    document.body.style.background = "#88B04B";
  }
  if (themebg_ls == "rose-quartz") {
    document.body.style.background = "#F7CAC9";
  }
  if (themebg_ls == "serenity") {
    document.body.style.background = "#92A8D1";
  }
  if (themebg_ls == "yellow") {
    document.body.style.background = "#FD4";
  }
  if (themebg_ls == "dark") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "tide") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "beach") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "lighthouse") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "forest") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "man") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "red-bg-hill") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "castle") {
    document.body.style.background = "#808080";
  }
  if (themebg_ls == "beach"){
    document.body.style.backgroundImage = "url('Backgrounds/beach.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "tide"){
    document.body.style.backgroundImage = "url('Backgrounds/tide.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "lighthouse"){
    document.body.style.backgroundImage = "url('Backgrounds/lighthouse.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "forest"){
    document.body.style.backgroundImage = "url('Backgrounds/forest.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "man"){
    document.body.style.backgroundImage = "url('Backgrounds/man.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "red-bg-hill"){
    document.body.style.backgroundImage = "url('Backgrounds/red-bg-hill.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "castle"){
    document.body.style.backgroundImage = "url('Backgrounds/castle.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
  if (themebg_ls == "texture-bg"){
    document.body.style.backgroundImage = "url('Backgrounds/texture-bg.jpg')"
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat"
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_Cake_menu() {
  menus.classList.remove("toggle-cake-menu");    
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_Rename_Group_when_clicked_on_window(event) {
  let val = event.target.classList
  if (val == "" || val == "group-name" ||val == "todo-container" || val == "todo" || val == "todo-item" || val == "starring" || val == "trash-bin" || val == "trash-btn" || val == "completed" || val == "toggle-round" || val == "fa-check") {
    Close_Cake_menu();
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Rename_Group(){
  let group_name = groupName.innerText;
  let value = input_rename_group_id.value;
  let Groups = JSON.parse(localStorage.getItem("Groups"));
  let index = Groups.indexOf(group_name);
  let current_ls = JSON.parse(localStorage.getItem(group_name));

  if (value !== ""){
    if (group_name === value) {ShowAlertMessage("Please Choose Some Other Name");
    rename_bg.style.display = "none";}
    else{
      localStorage.setItem("Text", value);
      localStorage.setItem(value, JSON.stringify(current_ls));
      localStorage.removeItem(group_name);
      groupName.innerText = value;
      Groups[index] = value;
      localStorage.setItem("Groups", JSON.stringify(Groups));
      rename_bg.style.display = "none";
    }
  }
  if (value === "") {ShowAlertMessage("Please Enter Some Values..🚀🚀😪🚀🚀");
  rename_bg.style.display = "none";
}
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Create_Essential_Local_Storage() {
  let ls_array = ["Starred", "Completed", "Text", "Groups", "ThemeBG"]
  let Groups = JSON.parse(localStorage.getItem("groups"));
  if (localStorage.getItem(ls_array[0]) === null){
    localStorage.setItem(ls_array[0], JSON.stringify(new Array));
  }
  if (localStorage.getItem(ls_array[1]) === null){
    localStorage.setItem(ls_array[1], JSON.stringify(new Array));
  }
  if (localStorage.getItem(ls_array[2]) === null){
    localStorage.setItem(ls_array[2], JSON.stringify(new Array));
  }
  if (localStorage.getItem(ls_array[3]) === null){
    localStorage.setItem(ls_array[3], JSON.stringify(new Array));
  }
  if (localStorage.getItem(ls_array[4]) === null) {
    localStorage.setItem(ls_array[4], JSON.stringify(new Array));
  }
  if (localStorage.getItem(ls_array[5] === null)){
    localStorage.setItem(ls_array[5], "")
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ChangeTheme(){
  Close_Cake_menu();
  change_theme_bg.style.display = "flex"
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_Rename(){
  rename_bg.style.display = "none";
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function DoSomethingInCakeMenu(event) {
  const item = event.target;
  if(item.classList.contains("rename-group") || item.classList.contains("rename-menu") || item.classList.contains("rename-icon")){
    rename_bg.style.display = "flex";
    menus.classList.remove("toggle-cake-menu");
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function OpenCakeMenu() {
    menus.classList.toggle("toggle-cake-menu");
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function GoBackToFrontPage() {
  window.location.replace("frontpage.html");
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function PrintTodos(){
  print();
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ShowAlertMessage(string) {
  alert_text.innerText = string;
  alert_background.style.display = "flex";
  alert_background.style.height = "100%";
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function CloseErrorMessage() {
  alert_background.style.display = "none";
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ShowaskYesOrNo(string){
  ask_text.innerText = string;
  ask_background.style.display = "flex";
  ask_background.style.height = "100%";
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function LoadText(){
  let textName = localStorage.getItem("Text");
  if(textName === "") throw new Error();
  else{
  groupName.innerText = textName;
  LoadTodos(textName);
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function LoadTodos(LocalstorageName){
  let todos;
  if (localStorage.getItem(`${LocalstorageName}`) === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem(`${LocalstorageName}`));
    }
    todos.forEach(function (todo) {
      // Todo Div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      // Create LI
      const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "round fas fa-check"></i>';
    completedButton.classList.add("completed");
    // completedButton.style.display = "none";
    completedButton.style.outline = "none";
    todoDiv.appendChild(completedButton);
    // Star Button
    const starButton = document.createElement("button");
    starButton.innerHTML = "<i class = 'starring fas fa-star'></i>"
    starButton.classList.add("star-button");
    todoDiv.appendChild(starButton);
    // Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "trash-bin fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    trashButton.style.outline = "none";
    todoDiv.appendChild(trashButton);
    todo_container.appendChild(todoDiv);
  });
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function left_arrow() {
  window.location.replace("frontpage.html");
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function todo_btn(event){
  event.preventDefault();
  Close_Cake_menu();
  text_in_input = todo_input.value;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todo_input.value.trim();
  newTodo.classList.add("todo-item");

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "round tick fas fa-check"></i>';
  completedButton.classList.add("completed");

  const starButton = document.createElement("button");
  starButton.innerHTML = "<i class = 'starring fas fa-star'></i>"
  starButton.classList.add("star-button");

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "trash-bin fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  trashButton.style.outline = "none";

  let checkLocalStorage = CheckEachLocalStorage();

  if (todo_input.value === "") {
    ShowAlertMessage("Can't add Empty Todo...😪😪😪😪");
  } 

  else if (!checkLocalStorage) {
    let gName = GroupName();
    saveLocalTodos(gName, todo_input.value);
    todoDiv.appendChild(newTodo);
    todo_container.appendChild(todoDiv);
    todoDiv.appendChild(completedButton);
    todoDiv.appendChild(starButton);
    todoDiv.appendChild(trashButton);
    todo_container.scrollTop = todo_container.scrollHeight;
  }

  else if (checkLocalStorage) {
      ShowAlertMessage("You have used these words already..😥😥😥😥..Please try someother🚀🚀🚀");
  }

  todo_input.value = "";
  todo_input.focus();
  check_empty();
}
  
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function CheckEachLocalStorage(){
  let array = new Array;
  let GroupNames = JSON.parse(localStorage.getItem("Groups"));
  for (const iterator of GroupNames) {
    let LSName = JSON.parse(localStorage.getItem(iterator));
    var result = LSName.includes(todo_input.value);
    array.push(result)
  }
  let trueorfalse = array.includes(true)
  return trueorfalse
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function DoSomethingInTodoContainer(e){
  const item = e.target;
  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    let gName = GroupName();
    removeLocalTodos(gName, todo.children[0].innerText);
    removeLocalTodos("Starred", todo.children[0].innerText);
    Close_Cake_menu();
    setTimeout(function () {
      todo.remove();
    }, 100);
  }
  
  // Check Todo
  if (item.classList[0] === "completed") {
    const completed = item.parentElement;
    let inner_text = item.parentElement.children[0].innerText;
    completed.classList.toggle("complete");
    item.classList.toggle("toggle-complete-button");
    AddToCompleted(inner_text)
    Close_Cake_menu();
  }
  
  // Complete Todo
  if (item.classList[0] === "round"){
    const round = item.parentElement;
    let round_todo = round.parentElement;
    let inner_text = round.parentElement.children[0].innerText;
    round_todo.classList.toggle("complete");
    round.classList.toggle("toggle-complete-button");
    AddToCompleted(inner_text)
    Close_Cake_menu();
    item.classList.toggle("toggle-round")
  }
  
  // Delete icon
  if (item.classList[0] === "trash-bin"){
    const todo = item.parentElement;
    let TextForTodo = todo.parentElement;
    TextForTodo.classList.add("fall");
    let gName = GroupName();
    removeLocalTodos(gName, TextForTodo.children[0].innerText);
    removeLocalTodos("Starred", TextForTodo.children[0].innerText);
    Close_Cake_menu();
    setTimeout(() => {
      TextForTodo.remove();
    }, 1200)
  }
  
  // Star icon
  if (item.classList[0] === "starring"){
    const todo = item.parentElement;
    let TextForTodo = todo.parentElement.children[0].innerText;
    item.classList.toggle("toggle-star-button")
    Close_Cake_menu();
      AddToStarred(TextForTodo);
    }
    
    setTimeout(check_empty, 700);
  }

// ----------------------------------------------------------------------------------------------------------------------------------------- //
function AddToCompleted(Text){
  let local_storage = JSON.parse(localStorage.getItem("Completed"))
  let trueorfalse = local_storage.includes(Text);
  if (trueorfalse) {
    removeLocalTodos("Completed", Text);
  }
  else{
    saveLocalTodos("Completed", Text);
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function toggle_completed(){
  const completedItems = JSON.parse(localStorage.getItem("Completed"));
  const listItems_completed = document.querySelector('.todo-container').children;
  const listArray_completed = Array.from(listItems_completed);
  listArray_completed.shift();
  let array = []

  listArray_completed.forEach((item) => {
    let result = item.children[0].innerText;
    array.push(result);
  });  

  try {
    var result = array.filter(element => completedItems.includes(element));
  } catch (error) {
    return ;  
  }


  let get_index_of = getIndexOf(result, array);

  let index;
  for (index = 0; index < get_index_of.length; index++){
    listArray_completed[get_index_of[index]].children[1].children[0].classList.toggle("toggle-round");
    listArray_completed[get_index_of[index]].children[1].classList.toggle("toggle-complete-button");
    listArray_completed[get_index_of[index]].classList.toggle("complete");
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function toggle_star(){
  const starredItems = JSON.parse(localStorage.getItem("Starred"));
  const listItems = document.querySelector('.todo-container').children;
  const listArray = Array.from(listItems);
  listArray.shift();
  let array = []

   listArray.forEach((item) => {
    let result = item.children[0].innerText;
    array.push(result);
  });  

  try {
    var result = array.filter(element => starredItems.includes(element));
  } catch (error) {
    return ; 
  }

  let get_index_of = getIndexOf(result, array);

  let index;
  for (index = 0; index < get_index_of.length; index++){
    listArray[get_index_of[index]].children[2].children[0].classList.toggle("toggle-star-button");
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function getIndexOf(result, array){
  var Index_list = new Array;
  for (const iterator of result) {
    var Index_Of = array.indexOf(iterator)
    Index_list.push(Index_Of);
  }
  return Index_list;
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function AddToStarred(string){
  let ls = JSON.parse(localStorage.getItem("Starred"));
  let trueorfalse = ls.includes(string);
  if (trueorfalse) {
    removeLocalTodos("Starred", string);
  }
  else{
    saveLocalTodos("Starred", string);
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function checkStarred(){
  let listOfTodoText = EachTodoText();
  let starred_ls = JSON.parse(localStorage.getItem("Starred"));
  const result = listOfTodoText.filter(element => starred_ls.includes(element));
  return result;
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function DeleteGroup(){
  let groups = JSON.parse(localStorage.getItem("Groups"));
  let item = GroupName();

  Close_Cake_menu();
  let conf = confirm("Do you want to delete this group");

  if(conf){
    let index = groups.indexOf(item);
    groups.splice(index, 1);
    localStorage.setItem("Groups", JSON.stringify(groups));
    window.location.replace("frontpage.html");
    localStorage.removeItem(item);
  }
  if (!conf){
    return ;
  }

}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function GroupName() {
  return groupName.innerText;
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function check_empty(){
  if (JSON.parse(localStorage.getItem(`${groupName.innerText}`)).length == 0){
    svg.style.display = "block";
  }
  else{
    svg.style.display = "none";
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function removeLocalTodos(LocalStorageName, todo) {
  let todos;
  if (localStorage.getItem(`${LocalStorageName}`) === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem(`${LocalStorageName}`));
  }
  const todoIndex = todo;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem(`${LocalStorageName}`, JSON.stringify(todos));
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function saveLocalTodos(LocalStorageName, todo) {
    let todos;
    if (localStorage.getItem(`${LocalStorageName}`) === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem(`${LocalStorageName}`));
    }
    todos.push(todo);
    localStorage.setItem(LocalStorageName, JSON.stringify(todos));
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        // Todo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      newTodo.id = `id`;
      todoDiv.appendChild(newTodo);
      // Check Mark Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class = "fas fa-check"></i>';
      completedButton.classList.add("complete-btn");
      completedButton.style.outline = "none";
      todoDiv.appendChild(completedButton);
      // Trash Button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class = "trash fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      trashButton.style.outline = "none";
      todoDiv.appendChild(trashButton);
      todo_container.appendChild(todoDiv);
    });
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function EachTodoText(){
  var arr = [];
  for (const iterator of todo_container.children) {
    if (iterator.childElementCount === 1) null;
    else{
      let listOfTodoText = iterator.innerText;
      arr.push(listOfTodoText);
    }
  }
  return arr;
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //