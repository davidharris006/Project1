




// Deletes the last row of data when clicked
$('#delete-btn').on('click', function () {
    document.getElementById("fromDatabase").deleteRow(-1);
});