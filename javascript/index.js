function updateTime() {
  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/Denver");

  denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
  denverTimeElement.innerHTML = denverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTime = moment().tz("Europe/Vienna");

  viennaDateElement.innerHTML = viennaTime.format("MMMM Do YYYY");
  viennaTimeElement.innerHTML = viennaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
