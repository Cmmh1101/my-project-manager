// clock

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// random quote genetator

const quoteText = document.getElementById('quote-text'),
      quoteTags = document.getElementById('quote-tags'), 
      quoteAuthor = document.getElementById('quote-author'),
      genQuoteBtn = document.getElementById('gen-quote-btn');

    function randomQuote(){
        fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
        quoteTags.textContent = data.tags;
        quoteAuthor.textContent = `- ${data.author} -`;
    });
}

randomQuote();
genQuoteBtn.addEventListener('click', () => {
    randomQuote();
}); 

