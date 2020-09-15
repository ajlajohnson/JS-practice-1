const name = "Ajla";
const age = 25;
const birthday = "March 30";
const detroitGC = false;
const lifeEvents = [
  "I was born in Bosnia.",
  "I got married on July 6, 2019",
  "In 2017, I got a puppy",
  "I moved to US in 1998.",
];

if (true) {
  console.log(
    `My name is ${name}, and i am a student at Grand Circus in Detroit, Michigan. I am ${age} years old and my birthday is on ${birthday}.`
  );
} else if (false) {
  console.log(
    `My name is ${name}, and i am a student at Grand Circus in Grand Rapids, Michigan. I am ${age} years old and my birthday is on ${birthday}.`
  );
}

if (age < 21) {
  console.log(`You are not allowed to drink margaritas!`);
} else if (age >= 21) {
  console.log(`You are allowed to drink margaritas!`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

counter = 0;
while (true) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !==5!`);
  } else if (randomNumber === 5) {
    counter++;
    console.log(`5 === 5. It took ${counter}
    iterations to randomly generate the number 5.`);
  }
  break;
}

// function printLongestName(name1, name2, name3) {
//   // Write code here.
//   if (name1.length > name2.length) {
//     // name1 > name2
//     if (name1.length > name3.length) {
//       // name1 is longest
//       console.log(`${name1} has the longest name.`);
//     } else if (name1.length < name3.length) {
//       //  name3 is longest
//       console.log(`${name3} has the longest name.`);
//     } // name1 == name3
//     else {
//       console.log(`${name1} and ${name3} tie for the longest name.`);
//     }
//   }

//   //-----------------------------------------------------
//   else if (name2.length > name1.length) {
//     // name2 > name 1
//     if (name2.length > name3.length) {
//       // name2 is longest
//       console.log(`${name2} has the longest name.`);
//     } else if (name2.length < name3.length) {
//       // name3 is longest
//       console.log(`${name3} has the longest name.`);
//     } // name2 == name3
//     else {
//       console.log(`${name2} and ${name3} tie for the longest name.`);
//     }
//   }

//   //----------------------------------------------------- // name1 == name2
//   else {
//     if (name1.length === name3.length) {
//       console.log(
//         `All three names, ${name1}, ${name2}, and ${name3}, are the same length.`
//       );
//     } else if (name1.length < name3.length) {
//       console.log(`${name3} has the longest name.`);
//     } else {
//       console.log(`${name1} and ${name2} tie for the longest name.`);
//     }
//   }
// }

const cars = [
  {
    make: "Audi",
    color: "black",
    awd: true,
    year: 2019,
  },

  {
    make: "BMW",
    color: "blue",
    awd: true,
    year: 2015,
  },

  {
    make: "Mazda",
    color: "red",
    awd: false,
    year: 2020,
  },
];

// console.log(car); // logging all of the cars in the objects array

console.log(cars.find((car) => car.make === "Mazda)"));

function changeModelYear(array) {}
