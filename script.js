const menu = document.querySelector(".mainMenu")
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelectorAll(".mainMenu li")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("active");
    hamburger.classList.toggle("active")
})
menuItems.forEach((item)=>{
  item.addEventListener("click",()=>{
    console.log("hello");
    menu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})
window.onload = function () {
  setTimeout(appeardiv,1000);
}
function appeardiv() {
  document.querySelector('.myself h1').classList.add("active");
}

class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 400;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

//SKILLS SECTION
  let numberOne= document.getElementById("numberOne");

    let counter=0;
    setInterval(()=>{
        if(counter==65){
            clearInterval();
        }else{
            counter++;
            numberOne.innerHTML= counter +"%";
        }
    
    },21.6);/*1300ms/60=21.6*/

    let numberTwo= document.getElementById("numberTwo");

    let counterTwo=0;
    setInterval(()=>{
        if(counterTwo==75){
            clearInterval();
        }else{
            counterTwo++;
            numberTwo.innerHTML= counterTwo +"%";
        }
    
    },18.6);/*1300ms/70=18.6*/

    let numberThree= document.getElementById("numberThree");

    let counterThree=0;
    setInterval(()=>{
        if(counterThree==50){
            clearInterval();
        }else{
            counterThree++;
            numberThree.innerHTML= counterThree +"%";
        }
    
    },26);/*1300ms/50=26*/

    let numberFour= document.getElementById("numberFour");

    let counterFour=0;
    setInterval(()=>{
        if(counterFour==25){
            clearInterval();
        }else{
            counterFour++;
            numberFour.innerHTML= counterFour +"%";
        }
    
    },52);/*1300ms/25=52*/

// ScrollReveal
const sr =ScrollReveal({
  distance:"60px",
  duration:2500,
  delay:400,
  // reset:true
})
sr.reveal(`.section-title`,{delay:100,origin:'top'})
sr.reveal(`.about-right`,{delay:100,origin:'bottom'})
sr.reveal(`.contact-img`,{delay:100,origin:'left'})
sr.reveal(`.contact-infos`,{delay:100,origin:'right'})
sr.reveal(`.skill`,{delay:05, origin:'left'})
sr.reveal(`.project`,{origin:'left',delay:20,interval:100})
sr.reveal(`.social-item`,{origin:'left',delay:20,interval:100})



const circles = document.querySelectorAll(".circle")
document.addEventListener("scroll",()=>{
  var scrollPos = window.scrollY;
  console.log(scrollPos);
  if(window.matchMedia("(min-width:760px")){
    animateCircle(850);
  }
  function animateCircle(reqdheight){
    if(scrollPos>reqdheight){
      circles.forEach(circle=>{
        circle.classList.add("active")
      })
    }else{
      circles.forEach(circle=>{
        circle.classList.remove("active")
      })
    }
  }
})

