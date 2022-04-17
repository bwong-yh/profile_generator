/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/

const { SlowBuffer } = require("buffer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What do you like to be called? ",
  "What do you like to do in your free time? ",
  "When you clean, what do you listen to? ",
  "Are you a breakfast, lunch, or dinner person? ",
  "What's your go-to food for that meal? ",
  "What's your absolute favorite sport? ",
  "Do you want to show off your super power? ",
];

let i = 0;
rl.question(questions[i], name => {
  i++;
  rl.question(questions[i], hobby => {
    i++;
    rl.question(questions[i], listenTo => {
      i++;
      rl.question(questions[i], favMeal => {
        i++;
        rl.question(questions[i], favFood => {
          i++;
          rl.question(questions[i], favSport => {
            i++;
            rl.question(questions[i], superpower => {
              console.log(
                `Hi there, ${name} is the name and I love ${hobby}. Everybody hates cleaning, but we all gotta do it 😮‍💨. So to have a bit more fun, I listen to ${listenTo} when I clean. My go-to food is ${favFood} for ${favMeal} 😋. I absolutely love ${favSport} by the way. And let me let you know a little secret...I have a super power: ${superpower}.`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
