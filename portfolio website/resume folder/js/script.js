"use strict" ;

var navBarLinks=document.getElementsByClassName('nav-bar-links') ;

for(let i=0;i<navBarLinks.length;i++){
    navBarLinks[i].addEventListener('click',function(event){
        event.preventDefault() ;
    }) ;
}

for(let i=0;i<navBarLinks.length;i++){
    navBarLinks[i].addEventListener('click',function(event){
        var currPos=window.pageYOffset ;
        var targetPos=document.getElementById(event.target.getAttribute('data-section')).getBoundingClientRect().y ;
        var scroller=setInterval(function(){
            if(currPos>=targetPos){
                clearInterval(scroller) ;
                return ;
            }

            window.scrollBy(0,20) ;
            currPos+=20 ;
        },5) ;
    }) ;
}

var skillsBlue=document.getElementsByClassName('skill-level-blue') ;
var skillsOrange=document.getElementsByClassName('skill-level-orange') ;

var blueFilledTracker=new Array(skillsBlue.length) ;
var orangeFilledTracker=new Array(skillsOrange.length) ;

for(let i=0;i<skillsBlue.length;i++){
	blueFilledTracker[i]=false ;
}

for(let i=0;i<skillsOrange.length;i++){
	orangeFilledTracker[i]=false ;
}

function fillSkill(skillBar){

	var currWidth=0 ;
	var targetWidth=skillBar.getAttribute('data-skill-level') ;

	var smoothFill=setInterval(function(){
		if(currWidth>=targetWidth){
			clearInterval(smoothFill) ;
			return ;
		}

		currWidth++ ;
		skillBar.style.width=currWidth+'%' ;
	},5) ;
} ;

function autoFillSkills(){

	for(let i=0;i<skillsBlue.length;i++)
    {
        if((skillsBlue[i].getBoundingClientRect().top<=window.innerHeight-skillsBlue[i].getBoundingClientRect().height)&&(!blueFilledTracker[i])&&(skillsBlue[i].getBoundingClientRect().top>=0)){
            blueFilledTracker[i]=true ;
            fillSkill(skillsBlue[i]) ;
        }

        else if((skillsBlue[i].getBoundingClientRect().top>window.innerHeight)||(skillsBlue[i].getBoundingClientRect().top<-1*skillsBlue[i].getBoundingClientRect().height)){
        	blueFilledTracker[i]=false ;
            skillsBlue[i].style.width="0%"
        }
    }

    for(let i=0;i<skillsOrange.length;i++)
    {
        if((skillsOrange[i].getBoundingClientRect().top<=window.innerHeight-skillsOrange[i].getBoundingClientRect().height)&&(!orangeFilledTracker[i])&&(skillsOrange[i].getBoundingClientRect().top>=0)){
            orangeFilledTracker[i]=true ;
            fillSkill(skillsOrange[i]) ;
        }

        else if((skillsOrange[i].getBoundingClientRect().top>window.innerHeight)||(skillsOrange[i].getBoundingClientRect().top<-1*skillsOrange[i].getBoundingClientRect().height)){
        	orangeFilledTracker[i]=false ;
            skillsOrange[i].style.width="0%"
        }
    }
}

window.addEventListener('scroll', autoFillSkills) ;
