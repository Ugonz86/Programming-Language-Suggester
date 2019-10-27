// var qThree = $("input:radio[name=question1]:checked").val();

$(document).ready(function() {

  $("#intro").click(function() {
  $("#intro").hide("fadeOut");
  $("#userForm").fadeIn("slow");
  });

  $("form#userForm").submit(function(event) {
    event.preventDefault();

    var qOne = $("input:radio[name=question1]:checked").val();
    var qTwo = $("input:radio[name=question2]:checked").val();
    var qThree = $("input:radio[name=question3]:checked").val();
    var qFour = $("input:radio[name=question4]:checked").val();
    var qFive = $("input:radio[name=question5]:checked").val();

    var result = "";
    if (qOne === "developer" && qTwo === "web" && qThree === "manager" && qFour === "logic" && qFive === "formula1") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }

    if (qOne === "developer" && qTwo === "web" && qThree === "manager" && qFour === "logic" && qFive === "formula1") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }


    $("#lang").text($("#nameInput").val() + "!" + " " + result);
    $("#result").fadeIn("slow");
    $("#userForm").hide("fadeOut");

  });

  $("#nameBtn").click(function() {
    $("#userName").hide("fadeOut");
    $("#question1").fadeIn("slow");
  });
  $("#q1Btn").click(function() {
    $("#question1").hide("fadeOut");
    $("#question2").fadeIn("slow");
  });
  $("#q2Btn").click(function() {
    $("#question2").hide("fadeOut");
    $("#question3").fadeIn("slow");
  });
  $("#q3Btn").click(function() {
    $("#question3").hide("fadeOut");
    $("#question4").fadeIn("slow");
  });
  $("#q4Btn").click(function() {
    $("#question4").hide("fadeOut");
    $("#question5").fadeIn("slow");
  });
});
