
console.log('______Календарь______');

let month = [];

for (let i = 1; i < 32; ++i) {
  month.push(`${i} января`);
}

// console.log(month);

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// console.log(week);

let weekDay ='Четверг';

let index;

for (let x = 0; x < 7; ++x) {
  week[x];
  // console.log(week[x]);
  if (week[x] == weekDay) {
    // console.log(week.indexOf(week[x]));
     index = week.indexOf(week[x]);
  } else {
    continue;
  }
  // console.log(index);

}

for (let r = 0; r < 31; ++r) {
    console.log(`${month[r]}: ${week[index]}`);
    if (index == 6) {
      index = 0;
  } else ++index;
}
