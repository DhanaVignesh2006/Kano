// Creating a variable for Add Group button 
// ----------------------------------------------------------------------------------------------------------------------------------------- //
const add_group = document.querySelector(".add-group");
const container = document.querySelector(".container");
const add = document.querySelector(".add");
const group_container = document.querySelector(".group-container")
const profile_class = document.querySelector(".picture");
const close_input_modal = document.querySelector(".close-input-modal");
const input_modal_container = document.querySelector(".input-modal-container");
const image_input_modal = document.querySelector(".image");
const text_input_modal = document.querySelector(".text");
const input_modal_input = document.querySelector(".input-modal-input");
const ok_input_modal = document.querySelector(".input-modal-btn");
const text_container = document.querySelector(".text-container");
const input_background = document.querySelector(".background");
const alert_background = document.querySelector(".alert-background");
const close_alert_modal = document.querySelector(".close-alert-modal");
const alert_ok_btn = document.querySelector(".alert-ok-btn");
const alert_text = document.querySelector(".alert-p");
const empty_groups = document.querySelector(".empty-groups");
const name_close = document.getElementById("rename-close-id");
const rename_container = document.getElementById("rename-bg-id");
const alert_name = document.getElementsByClassName("alert-name")[0];
const alert_close = document.getElementById("alert-close-id");
const alert_span = document.getElementsByClassName("alert-span")[0];
const name_btn = document.getElementById("rename-btn-id");
const input_name = document.getElementById("input-rename");
const profile_name = document.getElementById("profile-name");
const menu = document.getElementById("cakeMenu");
const menus = document.getElementById("items");
const Change_Theme = document.getElementById("change-theme-group");
const change_them_modal = document.getElementsByClassName("change-theme-modal")[0];
const change_theme_bg = document.getElementsByClassName("change-theme-modal-bg")[0];
const close_change_theme = document.getElementsByClassName("close-change-theme")[0];
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Startups
// ----------------------------------------------------------------------------------------------------------------------------------------- //
Create_Essential_Local_Storage();
AskForName();
getGroups();
Check_ThemeBG_LS();
CheckEmptyGroups();
Close_Cake_menu();
setName();
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Event Listener for add group button
// ----------------------------------------------------------------------------------------------------------------------------------------- //
document.addEventListener("click", Close_burger_menu_when_window_isClicked);
add_group.addEventListener("click", open_input_modal);
close_input_modal.addEventListener("click", closeInputModal);
ok_input_modal.addEventListener("click", Add_Group);
text_container.addEventListener("dblclick", ClickTextContainer);
group_container.addEventListener("dblclick", ClickGroupContainer);
alert_ok_btn.addEventListener("click", CloseErrorMessage);
close_alert_modal.addEventListener("click", CloseErrorMessage)
name_close.addEventListener("click", Close_Name_Modal)
alert_close.addEventListener("click", () => {alert_name.style.transform = "translateX(-2500px)"})
name_btn.addEventListener("click", Name_Ok);
menu.addEventListener("click", OpenCakeMenu);
menus.addEventListener("click", DoSomethingInCakeMenu);
close_change_theme.addEventListener("click", () => {change_theme_bg.style.display = "none"})
change_them_modal.addEventListener("click", DoSomethingInChangeTheme);

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

function setName(){
  let name = localStorage.getItem("Name");
  let split = name.split(" ")
  ChangeName(split);
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_burger_menu_when_window_isClicked(event){
  let item = event.target.classList;
  if (item == "") Close_Cake_menu();
  if (item.contains("profile-container") || item.contains("picture") || item.contains("name") || item.contains("container") || item.contains("groups") || item.contains("add-group-div")) Close_Cake_menu();
  }

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_Cake_menu() {
  menus.classList.remove("toggle-cake-menu");    
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function DoSomethingInCakeMenu(event) {
  const item = event.target;
  if(item.classList.contains("change-name-group") || item.classList.contains("change-name-menu") || item.classList.contains("change-name-icon")){
    rename_container.style.display = "flex";
    menus.classList.remove("toggle-cake-menu");
  }
  if (item.classList.contains("print-group") || item.classList.contains("print-icon") || item.classList.contains("print-menu")){
    menus.classList.remove("toggle-cake-menu");
    print();
  }
  if (item.classList.contains("change-theme-group") || (item.classList.contains("change-theme-icon") || item.classList.contains("change-theme-menu"))){
    menus.classList.remove("toggle-cake-menu");
    change_theme_bg.style.display = "flex";
  }
  if (item.classList.contains("exit-group") || (item.classList.contains("exit-icon") || item.classList.contains("exit-menu"))){
    let text = localStorage.getItem("Text");
    if ( text === "" ) ShowAlertMessage("No groups had recently opened ")
    else window.location = "main.html";
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function OpenCakeMenu() {
  menus.classList.toggle("toggle-cake-menu");
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function AskForName(){
  let name = localStorage.getItem("Name");
  if (name === "") {
    rename_container.style.display = "flex";
  }
  else{
    rename_container.style.display = "none";
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ChangeName(array) {
  let letter = new Array;
  for (const iterator of array) {
    var first_letter = iterator[0];
    letter.push(first_letter);
  }
  let joined_letter = letter.join("");
  joined_letter.toUpperCase();
  profile_class.innerText = joined_letter
  profile_name.innerText = array.join(" ")
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Name_Ok(event) {
  event.preventDefault();
  let InputValue = input_name.value;

  if (InputValue == "") showInvalidError("Please Fill the field");
  else {
    let split_input = InputValue.split(" ");
    
    if (split_input.length <= 2) {
      console.log("two")
      localStorage.setItem("Name", input_name.value);
      rename_container.style.display = "none";
      ChangeName(split_input);
    }
    else {
      showInvalidError("Invalid name.. Please use only two strings");
    }
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Close_Name_Modal() {
  let name = localStorage.getItem("Name");
  
  if (name === "") showInvalidError("Please fill the name......");
  else {
    rename_container.style.display = "none"
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function showInvalidError(string){
  alert_span.innerText = string;
  alert_name.style.transform = "translateX(250px) translateY(50%)";
  setTimeout(() => {
    alert_name.style.transform = "translateX(-2500px) translateY(50%)";
  }, 5000);
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Create_Essential_Local_Storage(){
    let ls_array = ["Starred", "Completed", "Text", "Groups", "ThemeBG", "Name"];
    let Themes = ["blue", "coral", "violet", "greenery", "rose-quartz", "yellow", "serenity", "dark", "tide", "beach", "lighthouse", "forest", 'man', 'red-bg-hill', 'castle', 'texture-bg']
    if (localStorage.getItem(ls_array[0]) === null){
      localStorage.setItem(ls_array[0], JSON.stringify(new Array));
    }
    if (localStorage.getItem(ls_array[1]) === null){
      localStorage.setItem(ls_array[1], JSON.stringify(new Array));
    }
    if (localStorage.getItem(ls_array[2]) === null){
      localStorage.setItem(ls_array[2], "");
    }
    if (localStorage.getItem(ls_array[3]) === null){
      localStorage.setItem(ls_array[3], JSON.stringify(new Array));
    }
    if (localStorage.getItem(ls_array[4]) === null) {
      localStorage.setItem(ls_array[4], `${Generate_random_numbers(Themes)}`);
    }
    if (localStorage.getItem(ls_array[5]) === null){
      localStorage.setItem(ls_array[5], "");
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Generate_random_numbers(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Check_ThemeBG_LS() {
    let themebg_ls = localStorage.getItem("ThemeBG");
    console.log(themebg_ls)
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

function CheckEmptyGroups() {
    let groupsLS = JSON.parse(localStorage.getItem("Groups"));
    let length_of_list = groupsLS.length;

    if (length_of_list === 0){
        empty_groups.style.display = "block";
    }
    
    else{
    empty_groups.style.display = "none";
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ClickGroupContainer(item){
    let parent = item.target.innerText;
    let text = localStorage.getItem("Text");
    window.location = "main.html"
    localStorage.setItem("Text", parent)
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function ClickTextContainer(item){
    let parent = `${item.target.innerText}`;
    window.location = `${parent.toLowerCase()}.html`;
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function okInputModal(){
    let input_value = input_modal_input.value;
    closeInputModal();
    return input_value;
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function closeInputModal(){
    input_background.style.display = "none";
    input_background.style.height = "0";
    input_modal_input.value = ""
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function open_input_modal(){
    input_background.style.display = "flex";
    input_background.style.height = "100%";
    input_modal_input.focus();
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function saveLocalGroups(group) {
    let groups;
    if (localStorage.getItem("Groups") === null) {
      groups = [];
      group_ = JSON.parse(groups);

    } else {
      groups = JSON.parse(localStorage.getItem("Groups"));
    }
    groups.push(group);
    localStorage.setItem("Groups", JSON.stringify(groups));
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function Add_Group(event) {
    event.preventDefault();
    var prompt_val = okInputModal();

    if (prompt_val == ""){
        ShowAlertMessage("You Can't Enter the null value....😪😪😪🚀🚀")
        return false;
    }

    let boolean = CheckingIfTheNamesAreRepeatedInGroups(prompt_val);
    if(boolean){
        ShowAlertMessage("You have used these words already..😥😥😥😥..Please try someother🚀🚀🚀");
    }

    else if (prompt_val == "Uncompleted" ||
    prompt_val == "Container" ||
    prompt_val == "Groups" ||
    prompt_val == "Starred" ||
    prompt_val == "Completed" ||
    prompt_val == "All"||
    prompt_val == "Text") {

        ShowAlertMessage("These words are reserved, So you can't use that..Please try Some other words...😪😪😪🚀🚀");
        return ;

}

    else{
        var new_group = document.createElement("div");
        new_group.innerText = prompt_val;
        new_group.classList.add("groups");
        group_container.appendChild(new_group);
        localStorage.setItem(prompt_val, JSON.stringify([]));
        saveLocalGroups(prompt_val);
        CheckEmptyGroups();
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function CheckingIfTheNamesAreRepeatedInGroups(string){
    let GroupNames = JSON.parse(localStorage.getItem("Groups"));
    let trueorfalse = GroupNames.includes(string);
    return trueorfalse
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function getGroups(){
    let groups;
    if (localStorage.getItem("Groups") === null) {
        groups = [];
    } else {
        groups = JSON.parse(localStorage.getItem("Groups"));
    }
    groups.forEach(function (group) {
      const newGroups = document.createElement("div");
      newGroups.innerText = group;
      newGroups.classList.add("groups");
      group_container.appendChild(newGroups);
    });
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