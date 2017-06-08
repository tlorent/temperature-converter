$(document).ready(function() {

  var imageURL = './assets/img/freeze1-min.jpg'
  var imageURL2 = './assets/img/cold2-min.jpg'
  var imageURL3 = './assets/img/medium1-min.jpg'
  var imageURL4 = './assets/img/hot1-min.jpg'
  var imageURL5 = './assets/img/heat1-min.jpg'
  var imageURL6 = './assets/img/heat2-min.jpg'

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
    if(celsius <= 0) {
      // $("html").css({"background-image": "url(../img/freeze1-min.jpg);"})
      $("html").css('background-image', 'url(' + imageURL + ')');
    } else if (celsius <= 10) {
      $("html").css('background-image', 'url(' + imageURL2 + ')');
    } else if (celsius <= 25) {
      $("html").css('background-image', 'url(' + imageURL3 + ')');
    } else if (celsius <= 40) {
      $("html").css('background-image', 'url(' + imageURL4 + ')');
    } else if (celsius <= 70) {
      $("html").css('background-image', 'url(' + imageURL5 + ')');
    } else if (celsius <= 99999999999999) {
      $("html").css('background-image', 'url(' + imageURL6 + ')');
    }

  });

  $("#fahrenheitForm").submit(function(event) {
    //prevent the form from refreshing automatically
    event.preventDefault();

    //get the value from the input
    //store it in a variable
    var fahrenheit = $("#fahrenheit2").val();

    //convert it to Celsius
    var convertedToCelsius = (fahrenheit - 32) * (5/9);

    //display the conversion
    $("#celsius2").val(convertedToCelsius)

    //display a background image for the temperature
    if(convertedToCelsius <= 0) {
      // $("html").css({"background-image": "url(../img/freeze1-min.jpg);"})
      $("html").css('background-image', 'url(' + imageURL + ')');
    } else if (convertedToCelsius <= 10) {
      $("html").css('background-image', 'url(' + imageURL2 + ')');
    } else if (convertedToCelsius <= 25) {
      $("html").css('background-image', 'url(' + imageURL3 + ')');
    } else if (convertedToCelsius <= 40) {
      $("html").css('background-image', 'url(' + imageURL4 + ')');
    } else if (convertedToCelsius <= 70) {
      $("html").css('background-image', 'url(' + imageURL5 + ')');
    } else if (convertedToCelsius <= 99999999999999) {
      $("html").css('background-image', 'url(' + imageURL6 + ')');
    }

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
