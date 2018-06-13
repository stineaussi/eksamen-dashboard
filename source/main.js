'use strict'

document.addEventListener("DOMContentLoaded", loadscript);

let queue = ["0", "0", "0", "0","0", "0"];

function loadscript(){
    let data = FooBar.getData();
    let myJson = JSON.parse(data);
    let queueKnow = myJson.queue.length;
    // let template = document.querySelector("#level").content;



    let bartenderNameZero = myJson.bartenders[0].name;
    let bartenderStatusZero = myJson.bartenders[0].status;
    let bartenderNameOne = myJson.bartenders[1].name;
    let bartenderStatusOne = myJson.bartenders[1].status;
    let bartenderNameTwo = myJson.bartenders[2].name;
    let bartenderStatusTwo = myJson.bartenders[2].status;

    document.querySelector(".peter h3").textContent = bartenderNameZero;
    document.querySelector(".peter h4").textContent = bartenderStatusZero;
    document.querySelector(".jonas h3").textContent = bartenderNameOne;
    document.querySelector(".jonas h4").textContent = bartenderStatusOne;
    document.querySelector(".martin h3").textContent = bartenderNameTwo;
    document.querySelector(".martin h4").textContent = bartenderStatusTwo;
    if(bartenderStatusZero == "WORKING"){
        document.querySelector(".peter .overlay").style.display = "none";
        document.querySelector(".peter .overlay2").style.display = "block";
    }if(bartenderStatusZero == "READY"){
        document.querySelector(".peter .overlay").style.display = "block";
        document.querySelector(".peter .overlay2").style.display = "none";
    }if(bartenderStatusOne == "WORKING"){
        document.querySelector(".jonas .overlay").style.display = "none";
        document.querySelector(".jonas .overlay2").style.display = "block";
    }if(bartenderStatusOne == "READY"){
        document.querySelector(".jonas .overlay").style.display = "block";
        document.querySelector(".jonas .overlay2").style.display = "none";
    }if(bartenderStatusTwo == "WORKING"){
        document.querySelector(".martin .overlay").style.display = "none";
        document.querySelector(".martin .overlay2").style.display = "block";
    }if(bartenderStatusTwo == "READY"){
        document.querySelector(".martin .overlay").style.display = "block";
        document.querySelector(".martin .overlay2").style.display = "none";
    }
        



//Chart (søjlediagram)

queue.unshift(queueKnow);
queue.pop();

    let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Now", "10s ago", "20s ago", "30s ago", "40s ago", "50s ago"],
        datasets: [{
            label: 'peopel',
            data: queue,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        animation: {
            duration: 0
        },
        legend:{
            display: false,
        }
    }
});

if(myJson.taps[0].level <= "2500"){
    document.querySelector(".check1").style.display = "block";
}
document.querySelector(".check1 .beer-name").textContent = myJson.taps[0].beer;

if(myJson.taps[1].level <= "2500"){
    document.querySelector(".check2").style.display = "block";
}
document.querySelector(".check2 .beer-name").textContent = myJson.taps[1].beer;

if(myJson.taps[2].level <= "2500"){
    document.querySelector(".check3").style.display = "block";
}
document.querySelector(".check3 .beer-name").textContent = myJson.taps[2].beer;

if(myJson.taps[3].level <= "2500"){
    document.querySelector(".check4").style.display = "block";
}
document.querySelector(".check4 .beer-name").textContent = myJson.taps[3].beer;

if(myJson.taps[4].level <= "500"){
    document.querySelector(".check5").style.display = "block";
}
document.querySelector(".check5 .beer-name").textContent = myJson.taps[4].beer;

if(myJson.taps[5].level <= "500"){
    document.querySelector(".check6").style.display = "block";
}
document.querySelector(".check6 .beer-name").textContent = myJson.taps[5].beer;

if(myJson.taps[6].level <= "500"){
    document.querySelector(".check7").style.display = "block";
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

    let data2 = FooBar.getData();
    let myJson2 = JSON.parse(data2);
    let beer = myJson2.beertypes;
    let templateBeer = document.querySelector("#slider");
    let clone;

function beerType(){
    beer.forEach(function(addBeer){

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

function readmore(event){
    let mitID = event.currentTarget.getAttribute("data-id");
    let viewMore = beer.find(function(element){
        return element.name == mitID;
    })

    document.querySelector(".modal-beer").style.display = "block";
    document.querySelector(".modal-text .info").textContent = viewMore.name;
    document.querySelector(".modal-text .billede").setAttribute("src", viewMore.label);
    document.querySelector(".modal-text .ar").textContent = viewMore.description.aroma;
    document.querySelector(".modal-text .ap").textContent = viewMore.description.appearance;
    document.querySelector(".modal-text .fl").textContent = viewMore.description.flavor;
    document.querySelector(".modal-text .mo").textContent = viewMore.description.mouthfeel;
    document.querySelector(".modal-text .ov").textContent = viewMore.description.overallImpression;
}


let slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots = [slideIndex-1].className += "active";
}





