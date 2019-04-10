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

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();
    }

// Deletes the last row of data when clicked
$('#delete-btn').on('click', function () {
        document.getElementById("fromDatabase").deleteRow(-1);
    });

}