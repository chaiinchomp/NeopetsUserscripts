// ==UserScript==
// @name         Neopets - Vending Machine Randomizer
// @version      0.1
// @description  Selects random options at the Neocola & Nerkmid vending machines
// @author       /u/chaiinchomp
// @match        http://www.neopets.com/moon/neocola2.phtml
// @match        http://www.neopets.com/vending2.phtml
// ==/UserScript==

// Nerkmid vending
if(document.URL.indexOf("vending") != -1) {
    randomOptionFromDropdown("nerkmid_id");
    randomOptionFromDropdown("large_button");
    randomOptionFromDropdown("small_button");
    randomOptionFromDropdown("button_presses");
    randomOptionFromDropdown("lever_pulls");
}

// Neocola vending
if(document.URL.indexOf("neocola") != -1) {
    randomOptionFromDropdown("token_id");
    randomOptionFromDropdown("neocola_flavor");
    randomOptionFromDropdown("red_button");
}

function randomOptionFromDropdown(name) {
    var select = $("select[name=" + name + "]");
    var numOptions = select.children().length;
    randomVal = getRandomInt(1, numOptions);
    select.prop('selectedIndex', randomVal);
}

function getRandomInt(min, max) { // min inclusive, max exclusive
    return Math.floor(Math.random() * (max - min)) + min;
}