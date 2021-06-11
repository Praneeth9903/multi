class Form{
    constructor(){
        this.box=createInput("")
        this.button=createButton("LETS GO..")
      
        this.greeting=createElement("h2");
    }
    hide(){
        this.box.hide();
        this. button.hide();
        title.hide();
        b.hide();
    }

    
display(){
    
    var title=createElement("h2")
     
title.html("C͜͡A͜͡R͜͡ ͜͡R͜͡A͜͡S͜͡I͜͡N͜͡G͜͡ ͜͡G͜͡A͜͡M͜͡E͜͡")
 
title.position(345,90)
title.shapeColor=("red");

var b=createElement("h4");
b.html("ENTER YOUR NAME");
b.position(345,150);



this.box.position(345,190);

this.button.position(760,580);
    
this.button.mousePressed(()=>{
    this.box.hide();
     this. button.hide();
     title.hide();
     b.hide();
  player.name=this.box.value();
   playerCount+=1;
   player.updateCount(playerCount);
    
   this.greeting.html("PLAYER NAME: "+player.name);
   this.greeting.position(380,120)
var loading=createElement("h5");
   loading.html("██████████████]99%")
   loading.position(550,550);
    background("white");
})



}
}