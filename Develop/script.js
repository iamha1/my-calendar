var timeArr = ["9 AM", "10 AM", "11 AM", "12 AM", "13 PM", "14 PM", "15 PM", "16 PM", "17 PM"]
var idContainer = $("#container");
for (i = 0; i < timeArr.length; i++) {

// var timeDiv = $("<div>");
// var eventDiv = $("<div>");
// var saveDiv = $("<div>");

var newRow = $("<div>");
var newRowTimeDiv = $("<div>");
var newRowEventDiv = $("<div>");
var newRowSaveDiv = $("<div>");

newRow.attr("class", "row");
newRowTimeDiv.attr("class", "col-1 Time text-center");
newRowEventDiv.attr("class", "col-10 Event");
newRowSaveDiv.attr("class", "col-1 Save");

newRowTimeDiv.text(timeArr[i]);
newRowEventDiv.text("");
newRowSaveDiv.text("")


idContainer.append(newRow);
newRow.append(newRowTimeDiv, newRowEventDiv, newRowSaveDiv);

var newIcon = $("<i>");
newIcon.attr("class", "far fa-save fa-2x pt-3");
newRowSaveDiv.append(newIcon);
}

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
