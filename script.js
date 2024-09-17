function updateClock(){

  const clock = new Date();

  let hours = clock.getHours();
  const meridiem = hours>=12 ? "PM" : "AM";
  hours = hours%12 || 12;
  hours = hours.toString().padStart(2,0);

  const minutes = clock.getMinutes().toString().padStart(2,0);
  const seconds = clock.getSeconds().toString().padStart(2,0);

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;



  const month = (clock.getMonth() + 1).toString().padStart(2,0);
  const day = clock.getDate().toString().padStart(2,0);
  const year = clock.getFullYear().toString().padStart(2,0);

  document.getElementById('dateContainer').textContent = `${day}/${month}/${year}`;


}


updateClock();

setInterval(updateClock,1000);

