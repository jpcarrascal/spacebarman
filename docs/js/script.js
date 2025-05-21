var news = {
    expires: "2025-05-31 00:00:00",
    title: "New Single!",
    text: "Los Monstruos de Esta Ciudad",
    image: "https://f4.bcbits.com/img/a2589993008_2.jpg",
    cta: "https://open.spotify.com/track/1I8hAZ9RmHRozAAz9jRmX4?si=f5f80c105b874faf",
    ctaText:"Listen Now"
};


document.addEventListener('DOMContentLoaded', function() {
    // Check if the news has expired
    var currentDate = new Date();
    var eventDate = new Date(news.expires);
        if (eventDate > currentDate) {
            // news has expired, hide the banner
            document.querySelector('.news').style.display = 'block';
            if (news.image) {
                document.querySelector('.news-image').src = news.image;
                document.querySelector('.news-image').alt = news.title;
            }
            document.querySelector('.news-text').innerHTML = `
                <h2>${news.title}</h2>
                <p>${news.text}</p>`;
            document.querySelector('.news-cta').href = news.cta;
            document.querySelector('.news-cta').innerHTML = news.ctaText;
        }
});
