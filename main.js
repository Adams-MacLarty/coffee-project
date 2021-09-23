"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div class="coffeeid">' + coffee.id + '</div>';
    html += '<span class="coffee-name content">' + coffee.name + '<span class="roast-name">' + coffee.roast + '</span>' + '</span>';
    // html += '<p>' + coffee.roast + '<p>';
     html += '<div class="coffeeid">' + coffee.id + '</div>';
    html += '<div class="coffee-name">' + coffee.name + '</div>';
    html += '<p>' + coffee.roast + '<p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function searchCoffees() {
    var coffeeSearch = document.getElementById('coffee-form');
    var searchedCoffees = []
    // added an event listener to the coffee-form to capture user input
    coffeeSearch.addEventListener('keyup', function (e) {
        var searchStr = e.target.value.toLowerCase();
        console.log(searchStr)
        // TODO: add functionality to take user input (searchStr) and match it up with coffee names
        coffees.forEach(function(coffee) {
            if(coffee.name.toLowerCase().includes(searchStr.toLowerCase())) {
                searchedCoffees.push(coffee);
            }
            tbody.innerHTML = renderCoffees(searchedCoffees);
        })
    })


    // TODO:append the innerHTML to show results of search ,atched up with coffees names


}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addACoffee(e) {
    var addCoffee = document.querySelector('#search-roasts')
    addCoffee.addEventListener('keyup', function (e) {
        var input = e.target.value;
        console.log(input)
        localStorage.setItem('name', input)
    })

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submit2 = document.querySelector('#submit-2');
var roastSelection = document.querySelector('#roast-selection');


tbody.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);
submit2.addEventListener('click', addACoffee)