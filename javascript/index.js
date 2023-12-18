function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");

  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <div class="refresh"><a href="index.html">Return to homepage 🌎</a></div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
