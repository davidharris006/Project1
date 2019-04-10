$(document).ready(function () {
    var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"
    // var queryURL = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/"

    // Sets up the variables
    var from = "";
    var destination = "";
    var start = "";
    var end = "";
    
    var hotel = "";
    var car = "";
    var random = "";

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        // Takes the user inputs from the specified IDs
        from = $("#from").val().trim();
        destination = $("#destination").val().trim();
        start = $("#startDate").val().trim();
        end = $("#endDate").val().trim();

        // var originPlace =""
        // var destinationPlace =""
        // // Clears the values inputed once submit is clicked

        // $.ajaxPrefilter(function(options){
        //     if (options.crossDomain && $.support.cors){
        //         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        //     }
        // });
        


  $.ajax({
            url: `${queryURL}?location=sandiego,ca`, 
            headers: {
                'Authorization': auth_header,
                'X-Yahoo-App-Id': app_id 
              }
            method: "GET"
        }).then(function (response) {
            console.log(response)
        })
        
        $("#from").val("");
        $("#destination").val("");
        $("#startDate").val("");
        $("#endDate").val("");


    })

    //     $.ajax({
    //         url: `http://partners.api.skyscanner.net/apiservices/pricing/v1.0/US/USD/en-US/PARI-sky/LHR-sky/"2019-15-5"/?apiKey=ra66933236979928`,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response)
    //     })
        
        $("#from").val("");
        $("#destination").val("");
        $("#startDate").val("");
        $("#endDate").val("");

    })

})