$(document).ready(function() {
  console.log("Script on!");

  $('.new-tweet textarea').on('keypress', function() {
    const charCounter = $(this).val().length;
    let remainingChars = `${140 - charCounter}`;

    let counterView = $(".counter").text(remainingChars);
    
    if (remainingChars < 0 ) {
      $(counterView).css("color", "red");
    }
  })
});
