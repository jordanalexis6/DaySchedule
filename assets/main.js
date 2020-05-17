$(document).ready(function () {
  // displaying current day on html
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  // lets the js know what the current hour is to implement colors
  // setting time to keep going up so we can use this in a for loop
  // if the currentHour is less than the time displayed use correct classes
  // if the currentHour is less than the time displayed use correct classes
  // save button function
  $(".saveBtn").click(function () {
    let textValue = $(this).siblings(".description").val();
    let timeKey = $(this).parent().attr("id");
    localStorage.setItem(timeKey, textValue);
  });
  //render local storage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
