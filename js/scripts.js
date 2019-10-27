// var which = $("input:radio[name=question1]:checked").val();

$(document).ready(function() {

  $("#intro").click(function() {
  $("#intro").hide("fadeOut");
  $("#userForm").show("fadeIn");
  });

  $("form#userForm").submit(function(event) {
    event.preventDefault();

    var why = $("input:radio[name=question1]:checked").val();
    var what = $("input:radio[name=question2]:checked").val();
    var which = $("input:radio[name=question3]:checked").val();
    var four = $("input:radio[name=question4]:checked").val();
    var five = $("input:radio[name=question5]:checked").val();

    var result = "";
    if (why === "developer" && what === "web" && which === "manager" && four === "######" && five === "######") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }
    // if (why === "developer" && what === "web" && which === "developer") {
    //   result = "HTML5 for web development and Swift, Java and C# for web development";
    // }
    // if (why === "developer" && what === "web" && which === "scientist") {
    //   result = "R and Python are are the best languages to start in the analysis and big data areas.";
    // }



    // if (why === "developer" && what === "games" && which === "manager") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    // if (why === "developer" && what === "games" && which === "developer") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    // if (why === "developer" && what === "games" && which === "scientist") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    //
    // if (why === "developer" && what === "data" && which === "manager") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    // if (why === "developer" && what === "data" && which === "developer") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    // if (why === "developer" && what === "data" && which === "scientist") {
    //   result = "C# and C++ are the best languages for game designing and development.";
    // }
    //
    //
    //
    // if (why === "skill" && what === "web" && which === "manager") {
    //   result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    // }
    // if (why === "skill" && what === "web" && which === "developer") {
    //   result = "HTML5 for web development and Swift, Java and C# for web development";
    // }
    // if (why === "skill" && what === "web" && which === "scientist") {
    //   result = "R and Python are the best languages in this field.";
    // }
    //
    //
    // if (why === "skill" && what === "games" && which === "manager") {
    //   result = "Python, C# and Ruby";
    // }
    // if (why === "skill" && what === "games" && which === "developer") {
    //   result = "HTML5 and C#";
    // }
    // if (why === "skill" && what === "games" && which === "scientist") {
    //   result = "HTML5 and C#";
    // }
    //
    //
    // if (why === "skill" && what === "data" && which === "manager") {
    //   result = "R and Python are the ideal langueges for you.";
    // }
    // if (why === "skill" && what === "data" && which === "developer") {
    //   result = "R and Python are the ideal langueges for you.";
    // }
    // if (why === "skill" && what === "data" && which === "scientist") {
    //   result = "R and Python are the ideal langueges for you.";
    // }
    //
    //
    //
    // if (why === "fun" && what === "web" && which === "manager") {
    //   result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    // }
    // if (why === "fun" && what === "web" && which === "developer") {
    //   result = "HTML5 for web development and Swift, Java and C# for web development";
    // }
    // if (why === "fun" && what === "web" && which === "scientist") {
    //   result = "R and Python are are the best languages to start in the analysis and big data areas.";
    // }

    $("#lang").text($("#nameInput").val() + "!" + " " + result);
    $("#result").show("fadeOut");
    $("#userForm").hide("fadeIn");

  });

  $("#nameBtn").click(function() {
    $("#userName").hide("fadeOut");
    $("#question1").show("fadeIn");
  });
  $("#q1Btn").click(function() {
    $("#question1").hide("fadeOut");
    $("#question2").show("fadeIn");
  });
  $("#q2Btn").click(function() {
    $("#question2").hide("fadeOut");
    $("#question3").show("fadeIn");
  });
  $("#q3Btn").click(function() {
    $("#question3").hide("fadeOut");
    $("#question4").show("fadeIn");
  });
  $("#q4Btn").click(function() {
    $("#question4").hide("fadeOut");
    $("#question5").show("fadeIn");
  });
});
