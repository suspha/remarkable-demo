function checkAvailability(select) {
  var availableIn = ['AF', 'NO', 'GB', 'US', 'ES', 'SE', 'FR']

  if (availableIn.includes(select.value)) {
    document.querySelector('#available').style.display = 'block'
    document.querySelector('#unavailable').style.display = 'none'
  } else {
    document.querySelector('#available').style.display = 'none'
    document.querySelector('#unavailable').style.display = 'block'
  }
}

function renderCountries(data) {
  const countries = document.querySelector('#countries')
  if (!data) {
    return countries.innerHTML = `<div class="error">Data not available.</div>`
  }
  countries.innerHTML = `
    <select onchange="checkAvailability(this)">
      <option>Select your country</option>
      ${data.map(country => `<option value="${country.alpha2Code}">${country.name}</option>`).join('\n')}
    </select>
  `
}
console.log(countries)

function loadApi(fn) {
  fetch("https://rapidapi.p.rapidapi.com/all", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "88a847281amsh7cc2a9dc52cf77cp16561ejsnc253d8fee2cd"
    }
  })
  .then(response => response.json())
  .then(data => {
    renderCountries(data)
  })
  .catch(err => {
    console.error(err)
    renderCountries()
  })
}

// Set text clients active
function setText(a) {
  const name = a.getAttribute('data-name')
  const clients = document.querySelectorAll('.clients')
  clients.forEach(function(el) {
    if (el.classList.contains(name)) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })

  const icons = document.querySelectorAll('.client-icon')
  icons.forEach(function(el) {
    el.classList.remove('active')
  })
  a.classList.add('active')
}

// Slideshow
function loadSlider() {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })
}
