// Connecting classes to javascript file
// ----------------------------------------------------------------------------------------------------------------------------------------- //
const todo_container = document.getElementsByClassName("todo-container")[0];
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const leftBtn = document.getElementsByClassName("left")[0];
const cOntainer = document.getElementsByClassName("container")[0];
const empty = document.getElementsByClassName("empty-groups")[0];
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Event Listeners
// ----------------------------------------------------------------------------------------------------------------------------------------- //
todo_container.addEventListener("click", arrowOnClick);
leftArrow.addEventListener("click", NavigateToFrontPage);
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Startups
// ----------------------------------------------------------------------------------------------------------------------------------------- //
AddLocalStorageName();
Check_ThemeBG_LS();
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// Functions
// ----------------------------------------------------------------------------------------------------------------------------------------- //

function NavigateToFrontPage() {
    window.location.replace("frontpage.html")
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

function AddLocalStorageName(){
    const GroupLS = JSON.parse(localStorage.getItem("Groups"));

    if (GroupLS.length === 0){
        empty.style.display = "block";
    }
    
    else{
        for (const iterator of GroupLS) {
            var extendContainer = document.createElement('div');
            extendContainer.id = "extendContainer";
            let extendable = document.createElement("div");
            extendable.classList.add("extend");
            let arrow = document.createElement("div");
            arrow.classList.add("arrow");
            arrow.classList.add("fas");
            arrow.classList.add("fa-chevron-down");
            extendable.innerText = iterator;
            extendable.appendChild(arrow);
            extendContainer.appendChild(extendable)
            todo_container.appendChild(extendContainer);
            const Container = document.createElement("div");
            Container.classList.add("container");
            extendContainer.appendChild(Container);
            let LSName = JSON.parse(localStorage.getItem(iterator));
            if(LSName.length === 0){
                const empty_div = document.createElement("div");
                empty_div.classList.add("empty-div");
                const empty_li = document.createElement("li");
                empty_li.classList.add("empty-li");
                empty_li.innerText = "No Todos";
                empty_div.appendChild(empty_li);
                Container.appendChild(empty_div);
            }
            else{
                LSName.forEach(element => {
                    const todoDiv = document.createElement("div");
                    todoDiv.classList.add("todo");

                    const newTodo = document.createElement("li");
                    newTodo.innerText = element;
                    newTodo.classList.add("todo-item");
                    
                    Container.appendChild(todoDiv);
                    todoDiv.appendChild(newTodo);
                });
            }
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------- //

function arrowOnClick(e){
    const item = e.target; 
    
    if (item.classList.contains("arrow")){
        if (item.style.transform == "rotate(-90deg)"){
            item.style.transform = "rotate(0deg)";
            setTimeout(() => {
                item.parentElement.parentElement.children[1].style.display = "flex";
            }, 300)
        }
        else{
            item.style.transform = "rotate(-90deg)";
            item.parentElement.parentElement.children[1].style.display = "none";
        }
    }
}
// ----------------------------------------------------------------------------------------------------------------------------------------- //
