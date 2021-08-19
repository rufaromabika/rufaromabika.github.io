var app = document.getElementById('dreams');
console.log(app)
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('If you can dream it, you can do it.” —Walt Disney')
  .pauseFor(1000)
  .start();