$(document).ready(function() {

  $("#celsiusForm").submit(function(event) {
    //prevent the form from refreshing automatically
    event.preventDefault();

    //get the value from the input
    //store it in a variable
    var celsius = $("#celsius").val();

    //convert it to Fahrenheit
    var convertedToFahrenheit = celsius * (9/5) + 32;

    //display the conversion
    $("#fahrenheit").val(convertedToFahrenheit);

    //display a background image for the temperature
    // if(celsius < 0) {
    //   $("body").css({"background": "../img/"})
    // }

  });

  $("#fahrenheitForm").submit(function(event) {
    //prevent the form from refreshing automatically
    event.preventDefault();

    //get the value from the input
    //store it in a variable
    var fahrenheit = $("#fahrenheit2").val();

    //convert it to Celsius
    var convertToCelsius = (fahrenheit - 32) * (5/9);

    //display the conversion
    $("#celsius2").val(convertToCelsius)

  });

  //reset the form when the user clicks reset
  $("#resetCelsiusForm").click(function() {
    $("#celsiusForm").each(function() {
      this.reset();
    });
  });

  $("#resetFahrenheitForm").click(function() {
    $("#fahrenheitForm").each(function() {
      this.reset();
    });
  });

});
