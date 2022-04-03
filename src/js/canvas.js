import utils from "./utils";

/*----------------- Collision Part1 ------------------------ */

// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// const mouse = {
//   x: 10,
//   y: 10,
// };

// const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// // Event Listeners
// addEventListener("mousemove", (event) => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });

// addEventListener("resize", () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   init();
// });

// // Objects
// class Circle {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//   }

//   draw() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.fillStyle = this.color;
//     c.fill();
//     c.closePath();
//   }

//   update() {
//     this.draw();
//   }
// }

// // Implementation
// let circle1;
// let circle2;
// function init() {
//   circle1 = new Circle(300, 300, 100, "black");
//   circle2 = new Circle(undefined, undefined, 30, "red");

//   for (let i = 0; i < 400; i++) {
//     // objects.push()
//   }
// }

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);

//   // objects.forEach(object => {
//   //  object.update()
//   // })
//   circle1.update();
//   circle2.x = mouse.x;
//   circle2.y = mouse.y;
//   circle2.update();

//   if (
//     utils.distance(circle1.x, circle1.y, circle2.x, circle2.y) <
//     circle1.radius + circle2.radius
//   ) {
//     circle1.color = "red";
//   } else {
//     circle1.color = "black";
//   }
// }

// init();
// animate();

/*----------------- Collision Part2 ------------------------ */

// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// const mouse = {
//   x: 10,
//   y: 10,
// };

// const colors = ["#1B1A17", "#F0A500", "#E45826", "#E6D5B8"];

// // Event Listeners
// addEventListener("mousemove", (event) => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });

// addEventListener("resize", () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   init();
// });

// // Objects
// class Particle {
//   constructor(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.velocity = {
//       x: (Math.random() - 0.5) * 5,
//       y: (Math.random() - 0.5) * 5,
//     };
//     this.radius = radius;
//     this.color = color;
//     this.mass = 1;
//     this.opacity = 0;
//   }

//   draw() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.save();
//     c.globalAlpha = this.opacity;
//     c.fillStyle = this.color;
//     c.fill();
//     c.restore();
//     c.strokeStyle = this.color;
//     c.stroke();
//     c.closePath();
//   }

//   update(particles) {
//     this.draw();

//     for (let i = 0; i < particles.length; i++) {
//       // To prevent to collision with itself
//       if (this === particles[i]) continue;
//       if (
//         utils.distance(this.x, this.y, particles[i].x, particles[i].y) -
//           this.radius * 2 <
//         0
//       ) {
//         utils.resolveCollision(this, particles[i]);
//       }
//     }
//     // To keep all the circles inside the viewport in the x axis
//     if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
//       this.velocity.x = -this.velocity.x;
//     } else if (
//       this.y - this.radius <= 0 ||
//       this.y + this.radius >= innerHeight
//     ) {
//       this.velocity.y = -this.velocity.y;
//     }
//     // mouse collisions detection
//     if (
//       utils.distance(mouse.x, mouse.y, this.x, this.y) < 120 &&
//       this.opacity < 0.2
//     ) {
//       this.opacity += 0.02;
//     } else if (this.opacity > 0) {
//       this.opacity -= 0.02;
//       this.opacity = Math.max(0, this.opacity);
//     }
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;
//   }
// }

// // Implementation
// let particles;
// function init() {
//   particles = [];

//   for (let i = 0; i < 100; i++) {
//     const radius = 15;
//     let x = utils.randomIntFromRange(radius, canvas.width - radius);
//     let y = utils.randomIntFromRange(radius, canvas.height - radius);
//     const color = utils.randomColor(colors);

//     if (i !== 0) {
//       for (let j = 0; j < particles.length; j++) {
//         if (
//           utils.distance(x, y, particles[j].x, particles[j].y) - radius * 2 <
//           0
//         ) {
//           x = utils.randomIntFromRange(radius, canvas.width - radius);
//           y = utils.randomIntFromRange(radius, canvas.height - radius);
//           j = -1;
//         }
//       }
//     }

//     particles.push(new Particle(x, y, radius, color));
//   }
// }

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);

//   particles.forEach((particle) => {
//     particle.update(particles);
//   });
// }

// init();
// animate();

/*----------------- Collision Part3(Rectangles) ------------------------ */

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#1A1A23";
  c.fillRect(0, 0, canvas.width, canvas.height);
  // x coordinates and y coordinates
  if (
    mouse.x + 100 >= canvas.width / 2 - 50 &&
    mouse.x <= canvas.width / 2 - 50 + 100 &&
    mouse.y + 100 >= canvas.height / 2 - 50 &&
    mouse.y <= canvas.height / 2 - 50 + 100
  ) {
    console.log("colliding");
  }

  // red rectangle
  c.fillStyle = "#E86262";
  c.fillRect(mouse.x, mouse.y, 100, 100);

  // blue rectangle
  c.fillStyle = "#92ABEA";
  c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
}

animate();
