"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<span class="coffee-name content">' + coffee.name + '<span class="roast-name">' + coffee.roast + '</span>' + '</span>';
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
    coffeeSearch.addEventListener('keyup', function (e) {
        var searchStr = e.target.value.toLowerCase();
        console.log(searchStr)
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(searchStr.toLowerCase())) {
                searchedCoffees.push(coffee);
            }
            tbody.innerHTML = renderCoffees(searchedCoffees);
        })
    })
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
    tbody2.innerHTML = ''
}

function addACoffee(e) {
    e.preventDefault()

    var newCoffeeArr = [];
    var addCoffee = document.querySelector('#search-roasts');
    var selectedRoast = roastSelection2.value
    var newCoffeeName = addCoffee.value;
    var newCoffee = {name: newCoffeeName, roast: selectedRoast};
    newCoffeeArr.push(newCoffee);
    console.log(newCoffee);
    localStorage.setItem('name', newCoffee.name);
    localStorage.setItem('roast', selectedRoast)
    tbody2.innerHTML = renderCoffees(newCoffeeArr);

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

// global variables
var tbody = document.querySelector('#coffees');
var tbody2 = document.querySelector('#new-coffees');
var submitButton = document.querySelector('#submit');
var submit2 = document.querySelector('#submit-2');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#roast-selection-2')
// inner html variable
tbody.innerHTML = renderCoffees(coffees);
// button variables with functions attached to an on click event
submitButton.addEventListener('click', updateCoffees);
submit2.addEventListener('click', addACoffee);