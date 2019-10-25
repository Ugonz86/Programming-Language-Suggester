var which = $("input:radio[name=question1]:checked").val();

$(document).ready(function() {
  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var why = $("input:radio[name=question1]:checked").val();
    var what = $("input:radio[name=question2]:checked").val();
    var which = $("input:radio[name=question3]:checked").val();

    var result = "";
    if (why === "developer" && what === "web" && which === "manager") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }
    if (why === "developer" && what === "web" && which === "developer") {
      result = "HTML5 for web development and Swift, Java and C# for web development";
    }
    if (why === "developer" && what === "web" && which === "scientist") {
      result = "R and Python are are the best languages to start in the analysis and big data areas.";
    }



    if (why === "developer" && what === "games" && which === "manager") {
      result = "C# and C++ are the best languages for game designing and development.";
    }
    if (why === "developer" && what === "games" && which === "developer") {
      result = "C# and C++ are the best languages for game designing and development.";
    }
    if (why === "developer" && what === "games" && which === "scientist") {
      result = "C# and C++ are the best languages for game designing and development.";
    }

    if (why === "developer" && what === "data" && which === "manager") {
      result = "C# and C++ are the best languages for game designing and development.";
    }
    if (why === "developer" && what === "data" && which === "developer") {
      result = "C# and C++ are the best languages for game designing and development.";
    }
    if (why === "developer" && what === "data" && which === "scientist") {
      result = "C# and C++ are the best languages for game designing and development.";
    }



    if (why === "skill" && what === "web" && which === "manager") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }
    if (why === "skill" && what === "web" && which === "developer") {
      result = "HTML5 for web development and Swift, Java and C# for web development";
    }
    if (why === "skill" && what === "web" && which === "scientist") {
      result = "R and Python are the best languages in this field.";
    }


    if (why === "skill" && what === "games" && which === "manager") {
      result = "Python, C# and Ruby";
    }
    if (why === "skill" && what === "games" && which === "developer") {
      result = "HTML5 and C#";
    }
    if (why === "skill" && what === "games" && which === "scientist") {
      result = "HTML5 and C#";
    }


    if (why === "skill" && what === "data" && which === "manager") {
      result = "R and Python are the ideal langueges for you.";
    }
    if (why === "skill" && what === "data" && which === "developer") {
      result = "R and Python are the ideal langueges for you.";
    }
    if (why === "skill" && what === "data" && which === "scientist") {
      result = "R and Python are the ideal langueges for you.";
    }



    if (why === "fun" && what === "web" && which === "manager") {
      result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    }
    if (why === "fun" && what === "web" && which === "developer") {
      result = "HTML5 for web development and Swift, Java and C# for web development";
    }
    if (why === "fun" && what === "web" && which === "scientist") {
      result = "R and Python are are the best languages to start in the analysis and big data areas.";
    }


    //
    // if (why === "skill" && what === "create" && which === "manager") {
    //   result = "Java, Python, Ruby and/or PHP are the most used web languages at a corporate level";
    // }
    // if (why === "skill" && what === "create" && which === "developer") {
    //   result = "HTML5 for web development and Swift, Java and C# for web development";
    // }
    // if (why === "skill" && what === "create" && which === "scientist") {
    //   result = "Java";
    // }
    //
    //
    // if (why === "fun" && what === "create" && which === "manager") {
    //   result = "Javascript, Python and Ruby;
    // }
    // if (why === "fun" && what === "create" && which === "developer") {
    //   result = "For web developement HTML5 and JavaScript. For mobile development, HMTL5, Swift, Java and C#. For games, also HTML5, Python, and C#;
    // }
    // if (why === "fun" && what === "create" && which === "scientist") {
    //   result = "Javascript, Python and Ruby";
    // }
    //
    //
    // if (why === "fun" && what === "create" && which === "manager") {
    //   result = "Javascript, Python and Ruby;
    // }
    // if (why === "fun" && what === "create" && which === "developer") {
    //   result = "For web developement HTML5 and JavaScript. For mobile development, HMTL5, Swift, Java and C#. For games, also HTML5, Python, and C#;
    // }
    // if (why === "fun" && what === "create" && which === "scientist") {
    //   result = "Javascript, Python and Ruby";
    // }




    $("#lang").text(result);
    $("#result").show();
  });
});
