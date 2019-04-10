$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCqR70MCikov5OiB4kdGir6iSMWcnJTMQ0",
        authDomain: "train-sark.firebaseapp.com",
        databaseURL: "https://train-sark.firebaseio.com",
        projectId: "train-sark",
        storageBucket: "train-sark.appspot.com",
        messagingSenderId: "317089221137"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

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

        // Sends the values to Firebase
        database.ref("/flightInfo").push({
            from: from,
            destination: destination,
            start: frequency,
            end: end,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        // Clears the values inputed once submit is clicked
        $("#from").val("");
        $("#destination").val("");
        $("#startDate").val("");
        $("#endDate").val("");

        return false;
    })


    // Deletes the last row of data when clicked
    $('#delete-btn').on('click', function () {
        document.getElementById("fromDatabase").deleteRow(-1);
    });

}