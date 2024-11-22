// დაწერეთ for ციკლი, 0 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i

for (let i = 0; i <= 25; i++) {
  console.log(i);
}

// დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i

let o = 0;
while (o <= 20) {
  console.log(o);
  o++;
}

// დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 30);

// 444444444444444444444444444444444444444444444444444444444444444444444

const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // თუ რიცხვი ლუწია
    console.log(numbers[i]);
  }
}

// 555555555555555555555555555555555555555555555555555555555555555555555

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("შავი პარასკევი");
}
