let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
 .to('.mist',3,{y : -300})
 .to('.boy' ,3,{y : -200},'-=3')
 .to('.bg ' ,3,{y :  -50},'-=3')
 .to('.content ' ,3,{top :'0%'},'-=3')
 .fromTo('.content-images', {opacity:0},{opacity:1 , duration:3})
 .fromTo('.text', {opacity:0},{opacity:1 , duration:3})

 let scene = new ScrollMagic.Scene({
   triggerElement: "section",
   duration      : "110%",
   triggerHook   :   0,
 })

.setTween(timeline)
.setPin  ("section")
.addTo(controller);
