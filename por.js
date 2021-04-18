
console.log("10");

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
var interval;

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionId);
    console.log(targetSection);
    interval=setInterval(scrollVertically,20,targetSection);
    });
}

function scrollVertically(targetSection){        
   var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50); 
}
 /* Percentage Scroll */ 
 document.addEventListener('scroll',toScroll);
function toScroll(){
 var scrollTop= window.scrollY;
 var bodyvar= document.getElementById('bodyy');
 var winheight= bodyvar.scrollHeight;
 var percent= ((scrollTop/winheight)*100);
 var x= parseInt(percent);
 var displayPer=document.getElementById('per-scr-number');
 displayPer.innerText=x;
 }

/* Auto fill scroll bars*/
var progressBars=document.querySelectorAll('.skill-progress>div');
console.log(progressBars);
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initializeBars(){
    for(let bar of progressBars){
        bar.style.width='0%';
    }
}
initializeBars();

function fillBars(){
    for(let bar of progressBars){

        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth + '%';
        },5);
}
}

function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('Skill Section Visible');
        fillBars();
    }
}
         
         
