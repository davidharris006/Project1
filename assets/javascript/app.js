
$(document).ready(function () {



  function createAirlinedata(somearr) {

    // Creates the thead  
    function firstRow() {
      var newRow = $("<tr>").append(
        $("<td>").text("Flight Price"),
        $("<td>").text("Departure Date"),
        $("<td>").text("Flight Class"),
      );

      $('#bodytable').append(newRow)
    }

    firstRow();

    // Lists actual Flight Price, Departure Date, Flight Class

    for (let i = 0; i < 10; i++) {
      var wordedclass = "";
      var tripclass = somearr.data[i].trip_class;

      var tr = $('<tr>')
      if (tripclass === 0) {
        wordedclass = "Economy"
      }
      else if (tripclass === 1) {
        wordedclass = "Coach"
      }

      tr.html('<td>' + somearr.data[i].value + '' + '</td>' + '<td>' + somearr.data[i].depart_date + '' + '</td>' + '<td>' + wordedclass + '' + '</td>')

      $('#bodytable').append(tr)

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
    end = moment($("#endDate").val().trim());

    $("#from").val("");
    $("#destination").val("");
    $("#startDate").val("");
    $("#endDate").val("");

    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });

    var settings1 = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.yelp.com/v3/businesses/search?term=points%20of%20interest&location=${destinationcity}`,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer 8PjqRtWKJIqnBZiMXVyB_Vj0DSnztb_o9Nrn-vYpgAjiDiTmtoUn94UwnrLNfBYKa64OCp9zHcSsHaNfGOO2AaFqYuGjtmz2iJjgcNQ2Zo4UExt_foAbVBEfxAWwXHYx",
        "cache-control": "no-cache",
        "Postman-Token": "07addf4a-c766-4208-8aae-028e210c4bdb"
      }
    }

    $.ajax(settings1).done(function (response) {
      console.log(response);
    });

    // url: `${countryURL}origin=SAN&destination=SFO&depart_date=${start.format("YYYY-MM")}&return_date=2019-09&token=0ec4333c4c239dc2eae21220f6504c30&currency=USD`,

    $.ajax({
      url: `http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=${from}&destination=${destination}&month=${start.format("YYYY-MM-DD")}&show_to_affiliates=true&token=0ec4333c4c239dc2eae21220f6504c30` ,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      createAirlinedata(response)
    })
    $.ajax({
      url: `http://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=${from}&destination=${destination}&month=${start.format("YYYY-MM-DD")}&show_to_affiliates=true&token=0ec4333c4c239dc2eae21220f6504c30`,
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
      console.log(response);
      var result = response.businesses;
      console.log(result);
      for (let i = 0; i < 9; i++) {
        // Creating a div to hold the hotel

        var hotelDiv = $("<div class='hotel row'>");

        // Storing the name of the hotel
        var name = result[i].name;
        console.log(name);

        // Storing the price of the hotel
        var price = result[i].price;
        console.log(price);

        // Storing the URL of the hotel
        var url = result[i].url;
        console.log(url)

        // Creating a p tag with info
        var p = $("<p>").text("Name: " + name);
        var img = $('<img class="images" id ="image-' + i + '">')
        img.attr("src", result[i].image_url)


        // Appending the p tag to the Hotel Div we created

        hotelDiv.text(name + 'Price Range: ' + price + 'Contact: Phone Number ' + result[i].phone)

        hotelDiv.prepend(img)

        // Append the hotelDiv to the "#yelp" div in the HTML
        $("#yelp").append(hotelDiv);
      };
    });



  });




  function appendCheck() {
    var div = $("<div>");
    var checkbox = ["<img src=./images/hotel-gif.gif>", "<img src=./images/car.gif>"];

    for (var i = 0; i < checkbox.length; i++) {
      div.append("&nbsp&nbsp&nbsp" + "<div id=submit-btn>" + "<input type='checkbox' checked='yes'>" + "</input>" + "&nbsp&nbsp" + checkbox[i] + "&nbsp&nbsp&nbsp");
      // div.append(checkbox[i]);
    }
    $(".check").append(div);
  }
  appendCheck();




});

