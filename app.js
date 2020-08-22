const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(2020, 7, 20, 23, 30, 0); 

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes(); 

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];



giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${year} ${hours}:${minutes}am`;

// future date
const futureATime =  futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();

  const t = futureATime - today;

  // 
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60mins
  // 1d = 24hr

  // values in millsecond
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const day = Math.floor(t / oneDay);
  const hour = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMin);
  const seconods = Math.floor((t % oneMin) / 1000);

function format(item){
  if(item < 10){
    return item = `0${item}`;
  }else{
    return item;
  }
}; 

 let values = [day, hour, minutes, seconods];

  items.forEach(function(item, index){
    item.innerHTML = format(values [index]);
  });

  if(t < 0){
    clearInterval(countDown);

    deadline.innerHTML = `<h4 class="expired"> Sorry this giveaway has expired</h4>`;
  }
};
// conuntDown

let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
