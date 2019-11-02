$(document).ready(function() {

  $("#intro").click(function() {
  $("#intro").hide("fadeOut");
  $("#userForm").fadeIn("slow");
  });

  $("#nameBtn").click(function() { //This saves the user name as user input.
     $("#userName").hide("fadeOut");
     $("#question1").fadeIn("slow");
   });

   $("#question1Button").click(function() { //Branching starts here:
     event.preventDefault();
     var questionOne = $("input:radio[name=question1]:checked").val();

     if (questionOne === "developer") {
       $("#question1").hide("fadeOut");
       $("#question2").fadeIn("slow");

       $("#question2Button").click(function() {
         var questionTwo = $("input:radio[name=question2]:checked").val();
          if (questionTwo === "web") {
            $("#question2").hide("fadeOut");
            $("#result").fadeIn("slow");
            result = "The first programming languages you should learn are HTML5 and JavaScript";
            $("#lang").text($("#nameInput").val() + "!" + " " + result);
          }
          else if (questionTwo === "games") {
            $("#question2").hide("fadeOut");
            $("#result").fadeIn("slow");
            result = "C# is often the recommended language to use when making games";
            $("#lang").text($("#nameInput").val() + "!" + " " + result);
          }
          else if (questionTwo === "mobile") {
            $("#question2").hide("fadeOut");
            $("#result").fadeIn("slow");
            result = "Swift for iOS, C# for Windows and Java for Android are the first languages you should learn for mobile development";
            $("#lang").text($("#nameInput").val() + "!" + " " + result);
          } else {
            alert ("Please select an answer!");
          }
        });

     } else if (questionOne === "skill") {
       $("#question1").hide("fadeOut");
       $("#question3").fadeIn("slow");

       $("#question3Button").click(function() {
        var questionThree = $("input:radio[name=question3]:checked").val();

       if (questionThree === "manager") {
         $("#question3").hide("fadeOut");
         $("#result").fadeIn("slow");
         result = "PHP is the first language you should learn";
         $("#lang").text($("#nameInput").val() + "!" + " " + result);
       }
       else if (questionThree === "developer") {
         $("#question3").hide("fadeOut");
         $("#result").fadeIn("slow");
         result = "HTML5 is the first language you should learn along with JavaScript";
         $("#lang").text($("#nameInput").val() + "!" + " " + result);
       }
       else if (questionThree === "scientist") {
         $("#question3").hide("fadeOut");
         $("#result").fadeIn("slow");
         result = "For anyone interested in research and big data analysis, Python can be a powerful language to start with";
         $("#lang").text($("#nameInput").val() + "!" + " " + result);
       } else {
         alert ("Please select an answer!");
       }
     });
     } else if (questionOne === "fun") {
       $("#question1").hide("fadeOut");
       $("#result").fadeIn("slow");
       result = "Besides online learning, you should checkout a local workshop or meetup to explore development in a casual, fun setting!";
       $("#lang").text($("#nameInput").val() + "!" + " " + result);
     } else {
       alert ("Please select an answer!");
     }
     //More questions will be added shortly.
   });
});
