var news = {
    expires: "2025-09-15 00:00:00",
    title: "New Single!",
    text: "Sometimes We Go to Dark Places",
    image: "https://f4.bcbits.com/img/a3957884858_16.jpg",
    cta: "https://open.spotify.com/track/4um5oqbPTpHtc8mRrs7BnH?si=2a419193aafd4284",
    ctaText:"Listen now!"
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
            if (news.cta !== "#") {
                document.querySelector('.news-cta').href = news.cta;
            } else {
                document.querySelector('.news-cta').removeAttribute('href');
            }
            document.querySelector('.news-cta').innerHTML = news.ctaText;
        }
});
