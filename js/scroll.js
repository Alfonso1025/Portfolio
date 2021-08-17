
//function scroll(target, duration){
//var target = document.querySelector(target)
//console.log(target);
//var targetPosition= target.getBoundingClientRect().top;
//var startPosition = window.pageYOffset;
//var distance= targetPosition-startPosition;
//var startTime= null;

//function animation(currentTime){
    //if(startTime===null){
       // startTime=currentTime
        //var timeElapsed= currentTime-startTime;
        //var run = ease(timeElapsed, startPosition, distance, duration);
        //window.scroll(0,run)
        //if(timeElapsed<duration) requestAnimationFrame(animation)
    //}

//}
//function ease(t,b,c,d){
   // t/=d/2;
    //if(t<1) return c/2 * t * t+b;
    //t--;
    //return -c/2*(t*(t-2)-1)+b;
//}
//requestAnimationFrame(animation)
//}

//var projectsScroll = document.querySelector('.scroll-projects');

//projectsScroll.addEventListener('click', function(){

    
    //scroll('.projects',1000);

//});

//option 2 Smooth Scroll with JQuery

$('.sidebar .scroll').on('click', function(e){
    var test = $('.sidebar .scroll');
    console.log(test);
    if(this.hash !== ''){
        e.preventDefault();
        const hash =this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top
            },
            800
        );
    }
});