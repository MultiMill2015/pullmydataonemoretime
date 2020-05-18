

(function() {
    var httpRequest;
    document.getElementById('ajaxButton').addEventListener('click', makeRequest);

    function makeRequest() {
        var itemIdNumber
        itemIdNumber = parseInt(document.getElementById('itemNumber').value);

        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://api.guildwars2.com/v2/items/' + itemIdNumber);
        httpRequest.send();

    

    }
    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
             }  else {
                    alert('There was a problem with a request');
                }
            }
        }
    }
)();


