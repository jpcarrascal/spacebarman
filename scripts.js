window.onload = function() {
    var listenButton = document.querySelector('#listen-button');
    var listenDropdown = document.querySelector('#listen-dropdown');
    var tmpFomo = document.querySelector('#release-links');

    //if(findGetParameter("from").localeCompare("mailchimpfomo") == 0)
    //    listenDropdown.style.display = "block";

    listenButton.onclick = function(event){
        event.stopPropagation();
        const clickedItem = event.target;
        if(clickedItem.hasAttribute("service-link"))
        {
            const clickedService = clickedItem.getAttribute("service-link");
            gtag('event', clickedService, {
                'event_category': 'music-service-link-click',
                'event_label': 'FOMO-launch',
                'value': 0
              });
            console.log(clickedService + " clicked.")
        }
        if(listenDropdown.style.display == "block") {
            listenDropdown.style.display = "none";
            tmpFomo.style.display = "none";
        }
        else
            listenDropdown.style.display = "block";
    }

    window.onkeyup = function(event){
        if(event.key == "Escape") {
            listenDropdown.style.display = "none";
            tmpFomo.style.display = "none";
        }
    }
    document.querySelector("body").onclick = function(event){
        listenDropdown.style.display = "none";
        tmpFomo.style.display = "none";
    }

    /*
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        var items = location.search.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }
    */

};

