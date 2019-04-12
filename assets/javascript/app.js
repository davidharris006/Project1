$(document).ready(function () {

    var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"
    // var queryURL = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/"
    var countryURL = "http://api.travelpayouts.com/v1/prices/cheap?"
    // Sets up the variables
    var from = "";
    var destination = "";
    var start = "";
    var end = "";

    var hotel = "";
    var car = "";
    var random = "";

    function createAirlinedata(somearr) {
        var box = $('<div>')
        for (let i =0; i <10; i++) {
            var data= $('<div>')
            data.text('Flight Price: ' + somearr.data[i].value)
            console.log(somearr.data[i].value)
            box.append(data)
        }
        $('#apidata').append(box)
    }

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        // Takes the user inputs from the specified IDs
        from = $("#from").val().trim();
        destination = $("#destination").val().trim();
        start = moment($("#startDate").val().trim())
        end = moment($("#endDate").val().trim());
        console.log(start)

        // var originPlace =""
        // var destinationPlace =""
        // // Clears the values inputed once submit is clicked

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
        });





        //   http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=
        //     $.ajax({
        //         url: `http://partners.api.skyscanner.net/apiservices/pricing/v1.0/US/USD/en-US/PARI-sky/LHR-sky/"2019-15-5"/?apiKey=ra66933236979928`,
        //         method: "GET"
        //     }).then(function (response) {
        //         console.log(response)
        //     })

        $("#from").val("");
        $("#destination").val("");



    });

});