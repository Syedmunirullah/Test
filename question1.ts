// Question 1
const name1 = "Sumyan";

console.log(`Hello ${name1}, would you like to learn some Python today?`);


// Question 2
const name2 = "Moosa"

console.log(`Hello ${name2.toLowerCase()}, would you like to learn some Python today?`);
console.log(`Hello ${name2.toUpperCase()}, would you like to learn some Python today?`);
console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


// Question 3
console.log(`Altaïr Ibn-LaʼAhad said, "Only a mind free of impediment is capable of grasping the chaotic beauty of the world. This is our greatest asset.`);


// Question 4
const author = "Altaïr Ibn-LaʼAhad";
const quote = "It is not our right to punish one for thinking as he does, no matter how much we disagree.";

console.log(`${author} said, "${quote}`);


// Question 5
const author2 = "Altaïr Ibn-LaʼAhad";
const quote2 = "How Could I Regret The Only Life I've Ever Known?";
const message = `${author2} said, "${quote2}`;

console.log(message);


// Question 6
const name3 = "\t   John Doe\n";

console.log("Name with whitespace:");
console.log(name3);

const nameStripped = name3.trim();
console.log("Name after stripping whitespace:");
console.log(nameStripped);


// Question 7
console.log(`Addition: ${2 + 2 + 4}`);
console.log(`Subtraction: ${20 - 12}`);
console.log(`Multiplication: ${2 * 4}`);
console.log(`Division: ${24 / 3}`);


// Question 9
const favorite_number = 5;
console.log(`My Favorite Number Is ${favorite_number}.`);


// Question 11
const friends = ["Sumyan", "Moosa", "Ramin", "Uzair"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);


// Question 12
const friends_msg = ["Sumyan", "Moosa", "Ramin", "Uzair"];

console.log(`Assalam Alaikum, ${friends[0]}.`);
console.log(`Assalam Alaikum, ${friends[1]}.`);
console.log(`Assalam Alaikum, ${friends[2]}.`);
console.log(`Assalam Alaikum, ${friends[3]}.`);


// Question 13
const transport = [
  "Favorite Mode Of Transportation: Car",
  "Favorite Car: Toyota Supra A80",
  "Production Year: 1993 - 2002",
  "Engine: 2JZ-GTE 3.0-Liter Twin-Turbo Inline-Six",
  "Driveline: Rear-Wheel Drive",
  "Transmission: 4-Speed Automatic / 6-Speed Manual",
  "Reason For Being My Favorite Car: Japanese, Old, Rear-Wheel Drive, Manual, Fuel Engine instead of Electric"
]

console.log(transport[0]);
console.log(transport[1]);
console.log(transport[2]);
console.log(transport[3]);
console.log(transport[4]);
console.log(transport[5]);
console.log(transport[6]);


// Question 14 + 15 + 16
const guest_list3 = ["Smoky Nagata", "Mitsuru Haruguchi", "Keiichi Tsuchiya"];

console.log(`Hello, ${guest_list3[0]}! You are invited to my dinner party because you are a legendary tuner.`);
console.log(`Hello, ${guest_list3[1]}! You are invited to my dinner party because you were a legend drifting through reality with your RX7 FC3S.`);

guest_list3.pop();
guest_list3.push("Ken Nomura");
console.log(`Hello, ${guest_list3[2]}! You are invited to my dinner party because you are the legendary GT-R34 drifter himself.`);

guest_list3.unshift("Paul Walker");
guest_list3.splice(Math.floor(guest_list3.length / 2), 0, 'Tarzan Yamada')
guest_list3.push("Ken Block");
guest_list3.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to the dinner. Please join us.`);
});


// Question 17
while (guest_list3.length > 2) {
  let removedGuest = guest_list3.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guest_list3.forEach((guest) => {
  console.log(`${guest}, you're still invited to dinner.`);
});


// Question 19
let num_guests = guest_list3.length;
console.log(`You are inviting ${num_guests} guests to dinner.`)


// Question 18
let placesToVisit = ['Tokyo', 'Paris', 'New York', 'Sydney', 'Rome'];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort());

console.log("\nStill in original order:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());

console.log("\nStill in original order:");
console.log(placesToVisit);

console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nReversed order again (back to original):");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nSorted in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);


// Question 20
const list = ["Toyota", "Honda", "Subaru", "Mazda", "Nissan", "Mercedes", "Mitsubishi", "BMW"]