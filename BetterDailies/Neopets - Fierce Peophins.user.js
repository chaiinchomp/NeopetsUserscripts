// ==UserScript==
// @name         Neopets - Fierce Peophins
// @version      0.2
// @author       /u/chaiinchomp
// @description  What do you do if fierce peophins has eaten too much tin of olives?
// @match        https://www.neopets.com/medieval/grumpyking.phtml
// ==/UserScript==

$('#qp1').val('What');
$('#qp2').val('do');
$('#qp3').val('you do if');
$('#qp4').prop('selectedIndex', 1);
$('#qp5').val('fierce');
$('#qp6').val('Peophins');
$('#qp7').prop('selectedIndex', 1);
$('#qp8').val('has eaten too much');
$('#qp9').prop('selectedIndex', 1);
$('#qp10').val('tin of olives');
