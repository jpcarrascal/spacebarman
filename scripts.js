const links = [
    {"include":true,  name:"spotify",    text:"listen on", link:"https://open.spotify.com/artist/1o8zzq05yXKrsdQUrMzZdc", icon:"logo-spotify.png"},
    {"include":true,  name:"bandcamp",   text:"", link:"https://spacebarman.bandcamp.com/album/no-place-for-us", icon:"logo-bandcamp.png"},
    {"include":true,  name:"soundcloud", text:"", link:"https://soundcloud.com/spacebarman/sets/no-place-for-us-single", icon:"logo-soundcloud.png"},
    {"include":true,  name:"youtube",    text:"", link:"https://youtube.com/spacebarmanvideo", icon:"logo-youtube.png"},
    {"include":false, name:"deezer", text:"", link:"https://www.deezer.com/en/artist/4246882", icon:"logo-deezer.png"},
    {"include":false, name:"amazon", text:"", link:"https://music.amazon.com/artists/B009VU5FNW/spacebarman", icon:"logo-amazon.png"},
    {"include":false, name:"applumusic", text:"", link:"https://music.apple.com/us/artist/spacebarman/525428256", icon:"logo-applemusic.png"},
    {"include":true, name:"bio", text:"Bio", link:"bio/", icon:""},
    {"include":true, name:"facebook", text:"Facebook", link:"https://www.facebook.com/spacebarman", icon:""},
    {"include":true, name:"instagram", text:"Instagram", link:"https://www.instagram.com/spacebarman", icon:""},
    {"include":true, name:"subscribe", text:"Subscribe to our mailing list", link:"https://spacebarman.us21.list-manage.com/subscribe?u=eebe2ae40abe6e1bfafe680d8&id=8652641ff4", icon:""}
];

window.onload = function() {
    var listenButton = document.querySelector('#listen-button');
    var listenDropdown = document.querySelector('#listen-dropdown');
    var tmpFomo = document.querySelector('#links-text');

    //if(findGetParameter("from").localeCompare("mailchimpfomo") == 0)
    //    listenDropdown.style.display = "block";

    for(var i=0; i<links.length; i++) {
        addLink(links[i]);
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

function addLink(link) {
    if(link.include) {
        var listenDropdown = document.querySelector('#links-container');
        var linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'link-item');
        var linkElement = document.createElement('a');
        linkElement.setAttribute("service-link", link.name)
        linkElement.setAttribute('href', link.link);
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('class', 'link-item-link');
        if(link.text != "")  {
            linkElement.innerHTML = "<span class='link-item-text'>" + link.text + "</span>" ;
        }
        if(link.icon != "") {
            linkElement.innerHTML = '<img src="images/' + link.icon + '" alt="' + link.name + ' logo" class="service-logo">';
        }
        linkDiv.appendChild(linkElement);
        listenDropdown.appendChild(linkDiv);
        console.log("adding " + link.name);
    }
}