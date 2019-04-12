$(document).ready(function () {

  var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"
  // var queryURL = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/"
  var countryURL = "http://api.travelpayouts.com/v1/prices/cheap?"

  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  // url: `${countryURL}origin=SAN&destination=SFO&depart_date=${start.format("YYYY-MM")}&return_date=2019-09&token=0ec4333c4c239dc2eae21220f6504c30&currency=USD`,

  $.ajax({
    url: `http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=LED&destination=HKT&month=${start.format("YYYY-MM-DD")}&show_to_affiliates=true&token=0ec4333c4c239dc2eae21220f6504c30&trip_duration=02`,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  })
  $.ajax({
    url: `http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=LED&destination=HKT&month=${end.format("YYYY-MM-DD")}&show_to_affiliates=true&token=0ec4333c4c239dc2eae21220f6504c30&trip_duration=02`,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  })


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/search?term=hotel&location=San%20Diego",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer 8PjqRtWKJIqnBZiMXVyB_Vj0DSnztb_o9Nrn-vYpgAjiDiTmtoUn94UwnrLNfBYKa64OCp9zHcSsHaNfGOO2AaFqYuGjtmz2iJjgcNQ2Zo4UExt_foAbVBEfxAWwXHYx",
      "cache-control": "no-cache",
      "Postman-Token": "9b6b8187-1188-4a33-a6b7-11e21b552914"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  // var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"
  // var queryURL = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/"

  $('#submit-btn').on('click', function (event) {
    event.preventDefault();

    let from = "";
    let destination = "";
    let startTrip = "";
    let end = "";

    // Takes the user inputs from the specified IDs
    from = $("#from").val().trim();
    destination = $("#destination").val().trim();
    startTrip = $("#startDate").val().trim();
    endTrip = $("#endDate").val().trim();

    $("#from").val("");
    $("#destination").val("");
    $("#startDate").val("");
    $("#endDate").val("");

    console.log(from, destination, startTrip, endTrip);

    var countChecked = function () {
      var n = $("input:checked").length;
      console.log(n);
    };
    countChecked();

    $("input[type=checkbox]").on("click", countChecked);

    return false;

  })

  var checkbox = ['Hotel', 'Rental Car', 'Destination'];

  function appendCheck() {
    var div = $("<div id=submit-btn>");

    for (var i = 0; i < checkbox.length; i++) {
      div.append("<input type='checkbox'" + ">" + "</input>" + "&nbsp&nbsp" + checkbox[i] + "<br><br>");
      // div.append(checkbox[i]);
    }
    $(".check").append(div);
  }

  appendCheck();
})



