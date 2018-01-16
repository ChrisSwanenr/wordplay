$(document).ready(function() {
  $("#sentenceForm").submit(function(event) {

    var sentence = $("input#text").val();
    var textArray = (sentence).split(" ");
    var returnArray = []
    debugger;
    textArray.forEach(function(word) {
      var wordLength = word.length;
      if (wordLength >= 3) {
         returnArray.push(word);
      }
    });

    var reverseArray = returnArray.reverse();
    var joinArray = reverseArray.join(" ");
    $(".result").text(joinArray);

    event.preventDefault();
  });
});
