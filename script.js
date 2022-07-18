// Week 2 - Adding a CYF Block Solution to your CYF Personal Home Page

// find the element with the id of daymode (in this case a button)
// listen for a click event on this element
// find the html elements main, header, ul > li > a, footer
// adjust the css properties of each (font-color and background-color)
document.getElementById('daymode').addEventListener('click', (event) => {
  let main = document.querySelector('main');
  main.style.color = 'black';
  main.style.backgroundColor = 'hsla(240, 67%, 94%, 0.9)';

  let header = document.querySelector('header');
  header.style.backgroundColor = 'hsla(240, 80%, 70%, 0.9)';

  let headerLinks = document.querySelectorAll('ul > li > a');
  for (let link of headerLinks) {
    link.style.color = 'black';
  }

  let footer = document.querySelector('footer');
  footer.style.color = 'black';
  footer.style.backgroundColor = 'hsla(240, 80%, 70%, 0.9)';

  let spans = document.querySelectorAll('span')
  for (let span of spans) {
    span.style.color = 'hsla(268, 100%, 10%, 1)';
  }
});

// find the element with the id of nightmode (in this case a button)
// listen for a click event on this element
// find the html elements main, header, ul > li > a, footer
// adjust the css properties of each (font-color and background-color)
document.getElementById('nightmode').addEventListener('click', (event) => {
  let main = document.querySelector('main');
  main.style.color = 'white';
  main.style.backgroundColor = 'hsl(261, 44%, 20%, 0.9)';

  let header = document.querySelector('header');
  header.style.backgroundColor = 'hsla(240, 38%, 12%, 0.9)';
  

  let headerLinks = document.querySelectorAll('ul > li > a');
  for (let link of headerLinks) {
    link.style.color = 'white';
  }

  let footer = document.querySelector('footer');
  footer.style.color = 'white';
  footer.style.backgroundColor = 'hsla(240, 38%, 12%, 0.9)';

  let spans = document.querySelectorAll('span')
  for (let span of spans) {
    span.style.color = 'hsla(268, 100%, 90%, 1)';
  }
});