const talkingCalendar = function(date) {
  let year = "";
  let month = "";
  let day = "";

  for (i=0; i<date.length; i++) {
    if (i < 4) {
      year += date[i];
    } else if (i > 4 && i < 7) {
      month += date[i];
    } else if (i > 7) {
      day += date[i];
    }
  }

  switch (month) {
    case '01' : 
      month = "January";
      break;
    case '02' : 
      month = "February";
      break;
    case '03' : 
      month = "March";
      break;
    case '04' : 
      month = "April";
      break;
    case '05' : 
      month = "May";
      break;
    case '06' : 
      month = "June";
      break;
    case '07' : 
      month = "July";
      break;
    case '08' : 
      month = "August";
      break;
    case '09' : 
      month = "September";
      break;
    case '10' : 
      month = "October";
      break;
    case '11' : 
      month = "November";
      break;
    case '12' : 
      month = "December";
      break;
  }

  if (day === '01' || day === '02' || day === '03' || day === '04' || day === '05' || day === '06' || day === '07' || day === '08' || day === '09') {
    day = day[1];
  }

  if (day === '1' || day === '21' || day === '31') {
    day += 'st';
  } else if (day === '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }
  
  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));