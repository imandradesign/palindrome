var reverse = function(lowerWord){
  return lowerWord.split('').reverse().join('');
}

$(document).ready(function(){
  $(".results").hide();

  $("form#pali-form").submit(function(event){
    $(".results").hide();
    event.preventDefault();

    var word = $("input#userword").val();
    var lowerWord = word.toLowerCase();
    var reverseWord = reverse(lowerWord);

    $("#word-yes").text(word);
    $("#word-no").text(word);

    if (lowerWord === reverseWord){
      $("#pali-yes").show();
    } else {
      $("#pali-no").show();
    }
  });
});
