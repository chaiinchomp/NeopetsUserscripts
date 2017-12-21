// ==UserScript==
// @name         Neopets - Better SDB Item Removal
// @version      0.1
// @author       /u/chaiinchomp
// @description  Adds buttons for easier removal of SDB items
// @match        http://www.neopets.com/safetydeposit.phtml*
// ==/UserScript==

buttonFunctionScripts = '<script>' +
    'function incrementRemoveCount(buttonElement, removeCount) {' +
    '    inputBox = $(buttonElement).parent().find(".remove_safety_deposit");' +
    '    currentValue = $(inputBox).val();' +
    '    $(inputBox).val(parseInt(currentValue) + parseInt(removeCount));' +
    '    $(inputBox).attr("data-remove_val", "y");' +
    '}' +
    'function replaceRemoveCount(buttonElement, removeCount) {' +
    '    inputBox = $(buttonElement).parent().find(".remove_safety_deposit");' +
    '    currentValue = $(inputBox).val();' +
    '    $(inputBox).val(removeCount);' +
    '    $(inputBox).attr("data-remove_val", "y");' +
    '}' +
    'function removeAll() {' +
    '    $(".replaceRemoveCount").each(function(k,v) {' +
    '        $(v).trigger("click");' +
    '    });' +
    '    $(".submit_data").trigger("click");' +
    '}' +
    '</script>';

$(buttonFunctionScripts).appendTo("head");

$(".remove_safety_deposit").each(function(k,v) {
    $(v).after(makeReplaceButton($(v).attr("data-total_count")))
        .after(makeIncrementButton(5))
        .after(makeIncrementButton(1))
        .after("<br>");
});

$(".submit_data").before(makeRemoveAllButton());

function makeIncrementButton(removeCount) {
    return '<input value="+' + removeCount + '" type="button" class="incrementRemoveCount" onclick="incrementRemoveCount(this, ' + removeCount + ')">';
}

function makeReplaceButton(removeCount) {
    return buttonHtml = '<input value="all" type="button" class="replaceRemoveCount" onclick="replaceRemoveCount(this, ' + removeCount + ')">';
}

function makeRemoveAllButton() {
    return '<input value="Remove All Items" type="button" onclick="removeAll()">';
}