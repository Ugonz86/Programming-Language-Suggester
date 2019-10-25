var which = $("input:radio[name=question1]:checked").val();

$(document).ready(function() {
  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var why = $("input:radio[name=question1]:checked").val();
    var what = $("input:radio[name=question2]:checked").val();
    var which = $("input:radio[name=question3]:checked").val();

    var result = "";
    if (why === "developer" && what === "create" && which === "ios") {
      result = "Swift";
    }

    $("#lang").text(result);
    $("#result").show();
  });
});
