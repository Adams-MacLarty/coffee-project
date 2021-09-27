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
    coffeeSearch.addEventListener('keyup', function() {
        var searchStr = coffeeSearch.value.toLowerCase();
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(searchStr)) {
                searchedCoffees.push(coffee);
            }
            tbody.innerHTML = renderCoffees(searchedCoffees);
        })
    })
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // var declaring roast value of user input
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    // looping through coffees array to compare roast values
    coffees.forEach(function (coffee) {

        // if roast selection is all push all coffees to filtered coffees array
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)

            // if user selects a specific roast push all coffees of selected roast to filtered coffees array
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    // rendering filtered coffees array using render coffees function
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addACoffee(e) {
    // don't submit the form, we just want to update the data
    e.preventDefault();

    // getting the html element by id and storing it in a variable
    var addCoffee = document.querySelector('#search-roasts');

    // user input new roast selection
    var selectedRoast = roastSelection2.value;

    // user input new coffee name
    var newCoffeeName = addCoffee.value;

    // converting new user input into a new object
    var newCoffee = {id: (coffees.length + 1), name: newCoffeeName, roast: selectedRoast};

    // pushing the new coffee object to the coffee array
    coffees.push(newCoffee);

    // storing the user data in local storage
    localStorage.setItem('coffees', JSON.stringify(newCoffee));

    // appending the inner html of the tbody element to include user input
    tbody.innerHTML = renderCoffees(coffees);
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

// accessing local storage data for use in our html
var storedCoffees = localStorage.getItem('coffees')
var parsedStoredCoffees = JSON.parse(storedCoffees)

// if no coffees pull from array
if (storedCoffees === null) {
    localStorage.setItem('coffees', JSON.stringify(coffees));
} else {
    coffees = parsedStoredCoffees;
}

// global variables
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submit2 = document.querySelector('#submit-2');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#roast-selection-2');
// inner html variable
tbody.innerHTML = renderCoffees(coffees);
// button variables with functions attached to an on click event
submitButton.addEventListener('click', updateCoffees);
submit2.addEventListener('click', addACoffee);



