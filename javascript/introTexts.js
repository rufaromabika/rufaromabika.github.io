var app = document.getElementById('intro');
console.log(app)
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hello Welcome To Galaxy Rufaro.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('This is my personal portfolio my small space in the World Wide Web.')
  .pauseFor(1000)
  .start();