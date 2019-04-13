$(document).ready(function () {




  // var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"
  // var queryURL = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/"
  function createAirlinedata(somearr) {
    var box = $('<div>')
    for (let i = 0; i < 10; i++) {
      var data = $('<div>')
      data.text('Flight Price: ' + somearr.data[i].value)
      console.log(somearr.data[i].value)

    }
  }

  $('#submit-btn').on('click', function (event) {
    event.preventDefault();

    let from = "";
    let destination = "";
    let start = "";
    let end = "";

    // Takes the user inputs from the specified IDs
    from = $("#from").val().trim();
    destination = $("#destination").val().trim();
    start = moment($("#startDate").val().trim())
    end  = moment($("#endDate").val().trim());

    $("#from").val("");
    $("#destination").val("");
    $("#startDate").val("");
    $("#endDate").val("");

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
      createAirlinedata(response)
    })
    $.ajax({
      url: `http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=LED&destination=HKT&month=${end.format("YYYY-MM-DD")}&show_to_affiliates=true&token=0ec4333c4c239dc2eae21220f6504c30&trip_duration=02`,
      method: "GET"
    }).then(function (response) {
      console.log(response)
    })

    // Yelp API
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.yelp.com/v3/businesses/search?term=hotel&location=${destination}`,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer 8PjqRtWKJIqnBZiMXVyB_Vj0DSnztb_o9Nrn-vYpgAjiDiTmtoUn94UwnrLNfBYKa64OCp9zHcSsHaNfGOO2AaFqYuGjtmz2iJjgcNQ2Zo4UExt_foAbVBEfxAWwXHYx",
        "cache-control": "no-cache",
        "Postman-Token": "9b6b8187-1188-4a33-a6b7-11e21b552914"
      }
    }

    $.ajax(settings).done(function (response) {
      //console.log(response);
      var results = response.businesses;
      console.log(results);
      results.forEach(function (result) {
        // Creating a div to hold the hotel
        var hotelDiv = $("<div class='hotel'>");
  
        // Storing the name of the hotel
        var name = result.name;
        console.log(name);
  
        // Storing the price of the hotel
        var price = result.price;
        console.log(price);
  
        // Storing the URL of the hotel
        var url = result.url;
        console.log(url)
  
        // Creating a p tag with info
        var p = $("<p>").text("Name: " + name);
        
  
        // Appending the p tag to the Hotel Div we created
        hotelDiv.append(name)
  
        // Append the hotelDiv to the "#yelp" div in the HTML
        $("#yelp").append(hotelDiv);
      });
    });

    $("#yelp").html('<table class="table"><thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody>')


  });
 


  
  function appendCheck() {
    var div = $("<div id=submit-btn>");
    var checkbox = ['Hotel', 'Rental Car', 'Destination'];
    
    for (var i = 0; i < checkbox.length; i++) {
      div.append("<input type='checkbox' checked='yes'>" + "</input>" + "&nbsp&nbsp" + checkbox[i] + "<br><br>");
      // div.append(checkbox[i]);
    }
    $(".check").append(div);
  }
  appendCheck();
  
  
  

});
