var timeArr = ["9 AM", "10 AM", "11 AM", "12 AM", "13 PM", "14 PM", "15 PM", "16 PM", "17 PM"]
var idContainer = $("#container");
var id = 9;

for (i = 0; i < timeArr.length; i++) {

var idStr = id.toString();
var newRow = $("<div>");
var newRowTimeDiv = $("<div>");
var newRowEventDiv = $("<textarea>");
var newRowSaveDiv = $("<div>");

newRow.attr("class", "row");
newRow.attr("id", "hour-" + idStr);
newRowTimeDiv.attr("class", "col-1 Time text-center");
newRowEventDiv.attr("class", "col-10 Event");
newRowSaveDiv.attr("class", "col-1 Save");

newRowTimeDiv.text(timeArr[i]);
newRowEventDiv.text("");
newRowSaveDiv.text("")

idContainer.append(newRow);
newRow.append(newRowTimeDiv, newRowEventDiv, newRowSaveDiv);
var newIcon = $("<button>");

newIcon.attr("class", "far fa-save fa-2x pt-3");
newRow.append(newIcon);
id++;
}
$(document).on("click", ".far", function() {
// console.log("working", $(this).siblings(".Event").val()); 
var time = $(this).parent().attr("id");
var typedValue = $(this).siblings(".Event").val(); // grabbing the value from ".Event"
localStorage.setItem(time, typedValue);

})
// assigning Value to an element (the <textarea>) 
$("#hour-9 .Event").val(localStorage.getItem("hour-9")); 
$("#hour-10 .Event").val(localStorage.getItem("hour-10"));
$("#hour-11 .Event").val(localStorage.getItem("hour-11"));
$("#hour-12 .Event").val(localStorage.getItem("hour-12"));
$("#hour-13 .Event").val(localStorage.getItem("hour-13"));
$("#hour-14 .Event").val(localStorage.getItem("hour-14"));
$("#hour-15 .Event").val(localStorage.getItem("hour-15"));
$("#hour-16 .Event").val(localStorage.getItem("hour-16"));
$("#hour-17 .Event").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// create conditional if we're past a certain point
// change the color use bootstrap <style>