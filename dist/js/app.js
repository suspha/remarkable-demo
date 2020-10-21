function renderCountries(data) {
  var countries = document.querySelector('#countries')
  if (!data) {
    return countries.innerHTML = `<div class="error">Data not available.</div>`
  }

  console.log(data)
  // {name: "Afghanistan", topLevelDomain: Array(1), alpha2Code: "AF", alpha3Code: "AFG", callingCodes: Array(1), …}

  countries.innerHTML = data.slice(0, 10).map(country => `<div>${country.name}</div>`).join('\n')

}

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

function setText(a) {
  var name = a.getAttribute('data-name')
  var clients = document.querySelectorAll('.clients')
  clients.forEach(function(el) {
    if (el.classList.contains(name)) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })

  var icons = document.querySelectorAll('.client-icon')
  icons.forEach(function(el) {
    el.classList.remove('active')
  })
  a.classList.add('active')
}

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
