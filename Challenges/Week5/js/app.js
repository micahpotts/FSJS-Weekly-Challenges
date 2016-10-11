function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};


// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists


// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  

/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/

var pokeAPI = "http://pokeapi.co/api/v2/pokemon";
var poke;

function getPokemon(url) {
    //I don't need to pass data in .getJSON bc I'm using default
    $.getJSON(url, function(data) {
        console.log(data);
        poke = data;
        $(".poke-card").remove();
        $.each(poke.results, function(i, item) {
            addPokemon(item.name);
        });
        if(!poke.next) {//disable button
            $("#next").prop("disabled", true);
        } else {
            $("#next").prop("disabled", false);
        }
        if(!poke.previous) {//disable button
            $("#previous").prop("disabled", true);
        } else {
            $("#previous").prop("disabled", false);
        }
    });
};

getPokemon(pokeAPI);

$(".btn").click(function() {
    if($(this).attr("id") == "next") {
        getPokemon(poke.next);
    } else {
        getPokemon(poke.previous);
    }
});

/*$('#previous').click(function() {
    getPokemon(poke.previous);
});*/










