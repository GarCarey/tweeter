$(document).ready(function() {

  //fuction to count remaining characters after inputs 
  $('.new-tweet textarea').on('input', function() {
    const charCounter = $(this).val().length;
    let remainingChars = `${140 - charCounter}`;

    let counterView = $(".counter").text(remainingChars);
    
    //determines the colour of the remaining charcters
    if (remainingChars < 0) {
      $(counterView).css("color", "red");
    } else {
      $(counterView).css("color", "#545149");
    }
  });
});
