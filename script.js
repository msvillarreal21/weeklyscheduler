

  var date = moment().format('dddd, MMM  Do YYYY');
  $("#currentDay").html(date);

  $(document).ready(function () {
  
// event listener 
$(".saveBtn").on("click", function () {
  var text = $(this).child(".description").val();
  var time = $(this).parent().attr("id");

  // Save info in local storage
  localStorage.setItem(time, text);
})
   
function timeTracker() {
  //track time.
  var timeNow = moment().hour();

  // loop over time
$(".hour").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

// Check the Present/Past/Future times
if (blockTime < timeNow) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
}
  else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
      }
    })
  }

    // Get information from local storage 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

timeTracker();
})