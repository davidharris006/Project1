$(document).ready(function () {

    var queryURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss"

    // Sets up the variables
    var from = "";
    var destination = "";
    var start = "";
    var end = "";

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
        // Takes the user inputs from the specified IDs
        from = $("#from").val().trim();
        destination = $("#destination").val().trim();
        start = $("#startDate").val().trim();
        end = $("#endDate").val().trim();

        // Clears the values inputed once submit is clicked
        
        $.ajax({
            url: `${queryURL}?location=${destination},ca&format=json`,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        })
        
        $("#from").val("");
        $("#destination").val("");
        $("#startDate").val("");
        $("#endDate").val("");


    })

})