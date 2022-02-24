
const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        // console.log(country);


        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("mt-5")
        div.innerHTML = `<div class="row  g-4">
                            <div class="col">
                                <div class="card">
                                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title"> ${country.name.common}</h5>
                                        <p class="card-text">${country.capital}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        countriesDiv.appendChild(div)
    })
}