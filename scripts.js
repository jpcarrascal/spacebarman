const links = [
    {"include":true,  "expires": "2023-10-06 21:00:00", name:"event",    text:"Preventa: Spacebarman+Flames of Foe", link:"https://entradium.com/events/flames-of-foe-spacebarman", icon:""},
    {"include":true,  "expires": "no", name:"spotify",    text:"listen on", link:"https://open.spotify.com/album/1NBr6aZbhbvWyyQJ3THhzP?si=a4uTPQ5oQjGoQdS2TyFzHw", icon:"logo-spotify.png"},
    {"include":true,  "expires": "no", name:"bandcamp",   text:"listen on", link:"https://spacebarman.bandcamp.com/album/el-ansia", icon:"logo-bandcamp.png"},
    {"include":true,  "expires": "no", name:"soundcloud", text:"listen on", link:"https://soundcloud.com/spacebarman/sets/el-ansia", icon:"logo-soundcloud.png"},
    {"include":true,  "expires": "no", name:"youtube",    text:"", link:"https://youtube.com/spacebarmanvideo", icon:"logo-youtube.png"},
    {"include":false, "expires": "no", name:"deezer", text:"", link:"https://www.deezer.com/en/artist/4246882", icon:"logo-deezer.png"},
    {"include":false, "expires": "no", name:"amazon", text:"", link:"https://music.amazon.com/artists/B009VU5FNW/spacebarman", icon:"logo-amazon.png"},
    {"include":false, "expires": "no", name:"applumusic", text:"", link:"https://music.apple.com/us/artist/spacebarman/525428256", icon:"logo-applemusic.png"},
    {"include":true,  "expires": "no", name:"bio", text:"Bio", link:"bio/", icon:""},
    {"include":true,  "expires": "no", name:"facebook", text:"Facebook", link:"https://www.facebook.com/spacebarman", icon:""},
    {"include":true,  "expires": "no", name:"instagram", text:"Instagram", link:"https://www.instagram.com/spacebarman", icon:""},
    {"include":true,  "expires": "no", name:"subscribe", text:"Subscribe to our mailing list", link:"https://spacebarman.us21.list-manage.com/subscribe?u=eebe2ae40abe6e1bfafe680d8&id=8652641ff4", icon:""}
];

window.onload = function() {

    for(var i=0; i<links.length; i++) {
        var localTime = Date.now();
        if(links[i].expires !== "no") {
            var expires = Date.parse(links[i].expires);
            console.log("expires: " + (expires - localTime));
            if(expires > localTime)
                addLink(links[i]);
        } else {
            addLink(links[i]);
        }
    }
};

function addLink(link) {
    if(link.include) {
        var linksContainer = document.querySelector('#links-container');
        var linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'link-item');
        if(link.text != "")  {
            if(link.icon != "")
                linkDiv.innerHTML = "<span class='link-item-text-smaller'>" + link.text + "</span>" ;
            else
                linkDiv.innerHTML = "<span class='link-item-text'>" + link.text + "</span>" ;
        }
        if(link.icon != "") {
            linkDiv.innerHTML += '<img src="images/' + link.icon + '" alt="' + link.name + ' logo" class="service-logo">';
        }
        var linkElement = document.createElement('a');
        linkElement.setAttribute("service-link", link.name)
        linkElement.setAttribute('href', link.link);
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('class', 'link-item-link');

        linkElement.appendChild(linkDiv);
        linksContainer.appendChild(linkElement);
    }
}