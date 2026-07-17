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
