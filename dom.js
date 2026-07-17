const nav = document.querySelector('nav');
console.log(nav.parentElement);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

const article = document.querySelector('article');
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

const navLinks = document.querySelectorAll('a');

const h1 = document.querySelector('h1');

console.log(h1.textContent);
console.log(h1.innerText);
h1.textContent = "New Title";

const article = document.querySelector("article");

console.log(article.innerHTML);
article.innerHTML = "<h2>New Article Title</h2><p>This is the updated content of the article.</p>";

const userInput = "<script>alert('hack!');</script>";
article.textContent =userInput;

const link = document.querySelector('.nav-link');
console.log(link.getAttribute('href'));
console.log(link.href);
link.setAttribute('href', 'https://www.example.com');
link.href = 'https://www.example.com';
console.log(link.hasAttribute('target'));
link.removeAttribute('target');

const element = document.querySelector('[data-id]');
console.log(element.dataset.id);
console.log(element.dataset.category);
element.dataset.newAttr = 'value';

const container = document.querySelector('.container');
container.style.backgroundColor = 'lightblue';
container.style.padding = '30px';
container.style.borderRadius = '8px';

object.assign(container.style, {
  backgroundColor: 'lightblue',
  padding: '30px',
  color: 'darkblue',
  fontSize: '18px',
  textAlign: 'center'
}); 

const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

const article = document.querySelector('article');
article.appendChild(newParagraph);

const firstParagraph = article.querySelector('p');
article.insertBefore(newParagraph, firstParagraph);

article.prepend(newParagraph);
article.append(newParagraph);
firstParagraph.before(newParagraph);
firstParagraph.after(newParagraph);

const footer = document.querySelector('footer');
footer.remove();

const nav = document.querySelector('nav');
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

while (article.firstChild) {
  article.removeChild(article.firstChild);
}

const navItems = document.querySelectorAll(".nav link").parentElement;
const clone =navItems.cloneNode(true);
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

function addNavItem(text, href) {
  const newNavItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.textContent = text;
  newLink.href = href;
  newNavItem.appendChild(newLink);
  document.querySelector(".nav-list").appendChild(newNavItem);
}

addNavItem("Blog", "/blog");
addNavItem("portfolio", "/portfolio");

const button = document.createElement("button");
button.textContent = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

button.addEventListener("click", () => {
  console.log("clicked again!");
});

function handleClick() {
  console.log("Handled!");
}
button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);

element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);


input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);


form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("change", handler);
input.addEventListener("input", handler);


window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

let count =0;

const countDisplay = document.createElement("count");
const increaseBtn = document.createElement("increase");
const decreaseBtn = document.createElement("decrease");
const resetBtn = document.createElement("reset");

increaseBtn.addEventListerner("click", function () {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListerner("click", function () {
  if (count > 0){
      count--;
      countDisplay.textcontent = count;
  }
})

resetBtn.addEventListerner("click", function () {
  count = 0;
  countDisplay.textcontent = count;
});

<div id="grandparent">
  Grandparent
  <div id="parent">
    <div id="child">
      
    </div>
  </div>
</div>

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
})

document.getElementById("parent").addEventListener("click", () => {
  console.log("parent clicked");
})

document.getElementById("child").addEventListener("click", () => {
  console.log("child clicked");
})

document.querySelector("ul").addEventListener("click", function(event){
  if (event.target.matches("li")) {
    handleClick(event);
  }
});

const form = document.geteLElementById("contact-form");
  const nameInput =document.geteLElementById("name");
  const emailInput =document.geteLElementById("email");


nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
      showError(nameInput, "Name must be at least 2 characters");
    } else {
      clearError(nameInput);
    }
  });

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailregex = /^[^#s@]+@[^\s@]+\.[^\s@]+$/:
    
    if (!emailregex.test(value)) {
      showError(emailInput, "please ewnter a valid email");
    } else {
      clearError(emailInput);
    }
  });
