/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuMaker(arr) {
  //creating a div element called menu
  const menu = document.createElement("div");
  //assigning the div the class menu
  menu.classList.add("menu");

  //creating an unordered list element
  const ul = document.createElement("ul");

  //using the forEach method on each item of the array
  arr.forEach(item => {
    //creating a list item element
    const li = document.createElement("li");
    //assisigning text content of the li to the item on the array
    li.textContent = item;

    //appending li to ul
    ul.appendChild(li);
  });

  //query selecting the menu button
  const menuButton = document.querySelector(".menu-button");

  //appending the ul to menu
  menu.appendChild(ul);

  //adding event listener to the menu botton. Toggle is a method in the classlist
  menuButton.addEventListener("click", e => {
    menu.classList.toggle("menu--open");
  });

  return menu;
}

//adding the menu to the DOM
const myMenu = menuMaker(menuItems);
const header = document.querySelector(".header");

//appending myMenu to header
header.appendChild(myMenu);
