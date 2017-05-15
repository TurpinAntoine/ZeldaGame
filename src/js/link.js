var mydata = map; //json
//this.div.setAttribute("class", mydata[0].val0);

var link= function(name, posX, posY)
{
  
  this.name = name;
  this.posX = posX;
  this.posY = posY;
  this.cross = new Array();
  this.transform = new Array();
  this.div;
  
  this.createLink = function()
  {
    
    this.div = document.createElement("div");
    this.div.setAttribute("class", "zelda");
    this.div.style.top = this.posY + "px";
    this.div.style.left = this.posX + "px";
    
    this.afficherLink();
    
    
  }
  
  this.createTest = function(){
    this.div = document.createElement("div");
    this.div.setAttribute("class", mydata[0].val0);
        this.div.style.left = this.posX + "px";
    
    this.afficherLink();
  }
  
  this.afficherLink = function()
  {
    document.querySelector("body").appendChild(this.div);
  }
  
  this.bougerLink = function()
  {
   var that = this; 
    window.addEventListener('keypress', function (e) {
      
      
    if(e.keyCode==that.cross[0])
       {
        
        that.posY -= 10;
         
         if(e.keyCode==that.transform[1])
        that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 -96px";
        setTimeout(function(){ that.div.style.backgroundPosition = "-64px -96px" }, 200); 

         
       }
  
      
    else if(e.keyCode==that.cross[1])
      {
        that.posX += 10;
        if(e.keyCode==that.transform[1])
        that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 -64px";
        setTimeout(function(){ that.div.style.backgroundPosition = "-64px -64px" }, 200); 
        
      }
        
    else if(e.keyCode==that.cross[2])
      {
    
        that.posY += 10;
        if(e.keyCode==that.transform[1])
        that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 0";
        setTimeout(function(){ that.div.style.backgroundPosition = "-64px 0" }, 200); 
       
              
      }
    else if(e.keyCode==that.cross[3])
      {
        that.posX -= 10;
        if(e.keyCode==that.transform[1])
        that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "-64px -32px";
        setTimeout(function(){ that.div.style.backgroundPosition = "0px -32px" }, 200);
       
      }
      
     else if(e.keyCode==that.transform[0])
       
       {
         
        that.div.setAttribute("class", "darkZelda");
        
       }
      
      if(e.keyCode==that.transform[1])
       
       {
         
        that.div.setAttribute("class", "zelda");
        
       }
    
      that.div.style.top = that.posY+"px";
      that.div.style.left = that.posX+"px";
}, false);
 
    
  }
   
}

var zelda1 = new link("Pierre", 465, 265);
zelda1.cross=[122,100,115,113];
zelda1.transform=[101, 97];
zelda1.createLink();
zelda1.createTest();
zelda1.bougerLink();

