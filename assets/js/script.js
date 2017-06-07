$(document).ready(function() {

  $("#myForm").submit(function(event) {
    //prevent the form from refreshing automatically
    event.preventDefault();

    //get the value from the input
    //store it in a variable
    var celsius = $("#celsius").val();
    var fahrenheit = $("#fahrenheit").val();

    if(celsius > 0 || celsius < 0) {
      //convert it to Fahrenheit
      var convertToFahrenheit = celsius * (9/5) + 32;

      //display the conversion
      $("#fahrenheit").val(convertToFahrenheit);

    } else if (fahrenheit > 0 || fahrenheit < 0) {
      //convert it to Celsius
      var convertToCelsius = (fahrenheit - 32) * (5/9);

      //display the conversion
      $("#celsius").val(convertToCelsius)
    }

  })

  //reset the form when the user clicks reset
  $("#reset").click(function() {

    $("#myForm")[0].reset();
    $("#myForm")[1].reset();

  });

  //switch the options when the user clicks on switch
  $("#switch").click(function() {
    $("#celsius").attr("readonly", "true")
    $("#fahrenheit").removeAttr("readonly")
  })

})
