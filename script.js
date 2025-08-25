// full date functionality

let date = new Date();

let year = date.getFullYear();
let day = date.getDate();

function getDayName() {
  let today = date.getDay();

  switch (today) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
      break;
  }

  return dayName;
}

function getMonth() {
  let monthName = date.getMonth();

  switch (monthName) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
    default:
      monthName = "Invalid month";
      break;
  }

  return monthName;
}

function getDayInitial() {
  if (day.toString().endsWith("1")) {
    return "st";
  } else if (day.toString().endsWith("2")) {
    return "nd";
  } else if (day.toString().endsWith("3")) {
    return "rd";
  } else {
    return "th";
  }
}

let fullDate = `${getDayName()}, ${getMonth()} ${day}${getDayInitial()}, ${year}`;

let clockDate = document.querySelector(".date");
clockDate.innerText = fullDate;

// Clock functionality
let clockFunc = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);

  let getHours = (hours % 12 || 12).toString().padStart(2, "0");
  let getHoursInitial = hours > 11 ? "PM" : "AM";

  let fullTime = `${getHours} : ${minutes} : ${seconds} ${getHoursInitial}`;
  let clockTime = document.querySelector(".time");
  clockTime.innerText = fullTime;
};

clockFunc();

setInterval(clockFunc, 1000);
