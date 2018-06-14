'use strict';

document.addEventListener("DOMContentLoaded", loadscript);

var queue = ["0", "0", "0", "0", "0", "0"];

function loadscript() {
    var data = FooBar.getData();
    var myJson = JSON.parse(data);
    var queueKnow = myJson.queue.length;

    // Henter info in omkring bartanderne og billderne
    var bartenderNameZero = myJson.bartenders[0].name;
    var bartenderStatusZero = myJson.bartenders[0].status;
    var bartenderNameOne = myJson.bartenders[1].name;
    var bartenderStatusOne = myJson.bartenders[1].status;
    var bartenderNameTwo = myJson.bartenders[2].name;
    var bartenderStatusTwo = myJson.bartenders[2].status;

    document.querySelector(".peter h3").textContent = bartenderNameZero;
    document.querySelector(".peter h4").textContent = bartenderStatusZero;
    document.querySelector(".jonas h3").textContent = bartenderNameOne;
    document.querySelector(".jonas h4").textContent = bartenderStatusOne;
    document.querySelector(".martin h3").textContent = bartenderNameTwo;
    document.querySelector(".martin h4").textContent = bartenderStatusTwo;

    // Ligger overlay på bartanderne, får det til at skifte alt efter om de arbejder eller står klar.

    if (bartenderStatusZero == "WORKING") {
        document.querySelector(".peter .overlay").style.display = "none";
        document.querySelector(".peter .overlay2").style.display = "block";
    }if (bartenderStatusZero == "READY") {
        document.querySelector(".peter .overlay").style.display = "block";
        document.querySelector(".peter .overlay2").style.display = "none";
    }if (bartenderStatusOne == "WORKING") {
        document.querySelector(".jonas .overlay").style.display = "none";
        document.querySelector(".jonas .overlay2").style.display = "block";
    }if (bartenderStatusOne == "READY") {
        document.querySelector(".jonas .overlay").style.display = "block";
        document.querySelector(".jonas .overlay2").style.display = "none";
    }if (bartenderStatusTwo == "WORKING") {
        document.querySelector(".martin .overlay").style.display = "none";
        document.querySelector(".martin .overlay2").style.display = "block";
    }if (bartenderStatusTwo == "READY") {
        document.querySelector(".martin .overlay").style.display = "block";
        document.querySelector(".martin .overlay2").style.display = "none";
    }

    //Chart (søjlediagram)

    queue.unshift(queueKnow);
    queue.pop();

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Now", "10s ago", "20s ago", "30s ago", "40s ago", "50s ago"],
            datasets: [{
                label: 'peopel',
                data: queue,
                backgroundColor: ['rgba(51, 190, 51, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(51, 190, 51, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            },
            legend: {
                display: false
            }
        }
    });

    //Definere hvornår der skal advares om der skal skiftes KEG

    if (myJson.taps[0].level <= "500") {
        document.querySelector(".check1").style.display = "grid";
    }
    document.querySelector(".check1 .beer-name").textContent = myJson.taps[0].beer;

    if (myJson.taps[1].level <= "500") {
        document.querySelector(".check2").style.display = "grid";
    }
    document.querySelector(".check2 .beer-name").textContent = myJson.taps[1].beer;

    if (myJson.taps[2].level <= "500") {
        document.querySelector(".check3").style.display = "grid";
    }
    document.querySelector(".check3 .beer-name").textContent = myJson.taps[2].beer;

    if (myJson.taps[3].level <= "500") {
        document.querySelector(".check4").style.display = "grid";
    }
    document.querySelector(".check4 .beer-name").textContent = myJson.taps[3].beer;

    if (myJson.taps[4].level <= "500") {
        document.querySelector(".check5").style.display = "grid";
    }
    document.querySelector(".check5 .beer-name").textContent = myJson.taps[4].beer;

    if (myJson.taps[5].level <= "500") {
        document.querySelector(".check6").style.display = "grid";
    }
    document.querySelector(".check6 .beer-name").textContent = myJson.taps[5].beer;

    if (myJson.taps[6].level <= "500") {
        document.querySelector(".check7").style.display = "grid";
    }
    document.querySelector(".check7 .beer-name").textContent = myJson.taps[6].beer;

    // Tap level 

    document.querySelector(".tap1 .tap-level").style.width = myJson.taps[0].level / myJson.taps[0].capacity * 100 + "%";
    document.querySelector(".tap2 .tap-level").style.width = myJson.taps[1].level / myJson.taps[1].capacity * 100 + "%";
    document.querySelector(".tap3 .tap-level").style.width = myJson.taps[2].level / myJson.taps[2].capacity * 100 + "%";
    document.querySelector(".tap4 .tap-level").style.width = myJson.taps[3].level / myJson.taps[3].capacity * 100 + "%";
    document.querySelector(".tap5 .tap-level").style.width = myJson.taps[4].level / myJson.taps[4].capacity * 100 + "%";
    document.querySelector(".tap6 .tap-level").style.width = myJson.taps[5].level / myJson.taps[5].capacity * 100 + "%";
    document.querySelector(".tap7 .tap-level").style.width = myJson.taps[6].level / myJson.taps[6].capacity * 100 + "%";

    // Tap navne

    document.querySelector(".tap1 .beer-name").textContent = myJson.taps[0].beer;
    document.querySelector(".tap2 .beer-name").textContent = myJson.taps[1].beer;
    document.querySelector(".tap3 .beer-name").textContent = myJson.taps[2].beer;
    document.querySelector(".tap4 .beer-name").textContent = myJson.taps[3].beer;
    document.querySelector(".tap5 .beer-name").textContent = myJson.taps[4].beer;
    document.querySelector(".tap6 .beer-name").textContent = myJson.taps[5].beer;
    document.querySelector(".tap7 .beer-name").textContent = myJson.taps[6].beer;

    // Tap procent
    document.querySelector(".tap1 .procent").textContent = myJson.taps[0].level / myJson.taps[0].capacity * 100 + "%";
    document.querySelector(".tap2 .procent").textContent = myJson.taps[1].level / myJson.taps[1].capacity * 100 + "%";
    document.querySelector(".tap3 .procent").textContent = myJson.taps[2].level / myJson.taps[2].capacity * 100 + "%";
    document.querySelector(".tap4 .procent").textContent = myJson.taps[3].level / myJson.taps[3].capacity * 100 + "%";
    document.querySelector(".tap5 .procent").textContent = myJson.taps[4].level / myJson.taps[4].capacity * 100 + "%";
    document.querySelector(".tap6 .procent").textContent = myJson.taps[5].level / myJson.taps[5].capacity * 100 + "%";
    document.querySelector(".tap7 .procent").textContent = myJson.taps[6].level / myJson.taps[6].capacity * 100 + "%";

    beerType();
}
setInterval(loadscript, 10000);

//Cloner til slider

var data2 = FooBar.getData();
var myJson2 = JSON.parse(data2);
var beer = myJson2.beertypes;
var templateBeer = document.querySelector("#slider");
var clone = void 0;

function beerType() {
    beer.forEach(function (addBeer) {

        clone = templateBeer.content.cloneNode(true);

        clone.querySelector(".mySlides .overskrift-ikon").textContent = addBeer.name;
        clone.querySelector(".mySlides img").setAttribute("src", addBeer.label);
        clone.querySelector("button").setAttribute("data-id", addBeer.name);
        clone.querySelector("button").addEventListener("click", readmore);
        addBeer.name;

        document.querySelector("#slideshow-container").appendChild(clone);
    });

    showSlides(slideIndex);
}

//får data ind til modal vindue

function readmore(event) {
    var mitID = event.currentTarget.getAttribute("data-id");
    var viewMore = beer.find(function (element) {
        return element.name == mitID;
    });

    document.querySelector(".modal-beer").style.display = "grid";
    document.querySelector(".modal-text .info").textContent = viewMore.name;
    document.querySelector(".modal-text .billede").setAttribute("src", viewMore.label);
    document.querySelector(".modal-text .ca").innerHTML = "<strong>Category: </strong>" + viewMore.category;
    document.querySelector(".modal-text .po").innerHTML = "<strong>Popularity: </strong>" + viewMore.popularity;
    document.querySelector(".modal-text .alc").innerHTML = "<strong>Alc: </strong>" + viewMore.alc;
    document.querySelector(".modal-text .ar").innerHTML = "<strong>Aroma: </strong>" + viewMore.description.aroma;
    document.querySelector(".modal-text .ap").innerHTML = "<strong>Appearance: </strong>" + viewMore.description.appearance;
    document.querySelector(".modal-text .fl").innerHTML = "<strong>Flavor: </strong>" + viewMore.description.flavor;
    document.querySelector(".modal-text .mo").innerHTML = "<strong>Mouthfeel: </strong>" + viewMore.description.mouthfeel;
    document.querySelector(".modal-text .ov").innerHTML = "<strong>Overall impression: </strong>" + viewMore.description.overallImpression;
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i = void 0;
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function countdown() {

    //Sætter den til hvad vi skal tælle ned til
    var countDownDate = new Date("Sep 5, 3000 22:00:00").getTime();

    //Update the count down every 1 second
    var x = setInterval(function () {

        //Får det nuværnende tidspunkt for dagen
        var now = new Date().getTime();

        //Finder ud af hvor lang tid der er fra nuværende tidspunkt til nedtællings tidspunkt
        var distance = countDownDate - now;

        //Tiden for timer, minutter og sekunder
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

        //Får resultatet ud til id="closingtime"
        document.getElementById("closingtime").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        //Hvis tiden er gået over tid skriver den noget tekst
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("closingtime").innerHTML = "EXPIRED";
        }
    }, 1000);
}
countdown();
