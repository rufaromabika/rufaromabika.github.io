var app = document.getElementById('about');
console.log(app)
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Some say pictures speak louder than words.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Scroll down to see more 👇 .')
  .pauseFor(1000)
  .start();