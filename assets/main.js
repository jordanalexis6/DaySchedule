//logic to render local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

// on click events are at the bottom
$(".saveBtn").click(function () {
  let textValue = $(this).siblings(".description").val();
  let timeKey = $(this).parent().attr("id");
  localStorage.setItem(timeKey, textValue);
});

$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  // set colors for past, present and future
  // $("#description").addClass("past");
  // click into text block and saves into local storage when hit saze button
});
