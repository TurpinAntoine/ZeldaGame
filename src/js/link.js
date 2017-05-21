var mydata = map; //json
//this.div.setAttribute("class", mydata[0].val0);
//var jambon = 0;
//
//var maping = function(name){
//  
//  for(){
//    this.div = document.createElement("div");
//    this.div.setAttribute("class", mydata[jambon].val0);
//    
//    this.afficherTest();
//  }
//}

var maping = function () { 

  this.createTest = function () {

    for (x = 0; x < map.length; x++) {
      for (y = 0; y < map.length; y++) {
        var value = "val"+y
        this.div = document.createElement("div");
        this.div.setAttribute("class", mydata[x][value]);

        this.afficherTest();
      }
    }
  }

  this.afficherTest = function () {
    document.querySelector("body").appendChild(this.div);
  }

}
var test = new maping()
test.createTest();




var link = function (name, posX, posY) {

  this.name = name;
  this.posX = posX;
  this.posY = posY;
  this.cross = new Array();
  this.transform = new Array();
  this.div;
  this.attackDirection;

  this.createLink = function () {

    this.div = document.createElement("div");
    this.div.setAttribute("class", "zelda");
    this.div.style.top = this.posY + "px";
    this.div.style.left = this.posX + "px";

    this.afficherLink();


  }

  this.afficherLink = function () {
    document.querySelector("body").appendChild(this.div);
  }

  this.bougerLink = function () {
    var that = this;
    window.addEventListener('keypress', function (e) {


      if (e.keyCode == that.cross[0]) {

        that.posY -= 10;
        that.attackDirection = 1;
        console.log(that.attackDirection);

        if (e.keyCode == that.transform[1])
          that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 -96px";
        setTimeout(function () {
          that.div.style.backgroundPosition = "-64px -96px"
        }, 200);


      } else if (e.keyCode == that.cross[1]) {
        that.posX += 10;
        that.attackDirection = 2;
        console.log(that.attackDirection);
        if (e.keyCode == that.transform[1])
          that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 -64px";
        setTimeout(function () {
          that.div.style.backgroundPosition = "-64px -64px"
        }, 200);

      } else if (e.keyCode == that.cross[2]) {

        that.posY += 10;
        that.attackDirection = 3;
        console.log(that.attackDirection);
        if (e.keyCode == that.transform[1])
          that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "0 0";
        setTimeout(function () {
          that.div.style.backgroundPosition = "-64px 0"
        }, 200);


      } else if (e.keyCode == that.cross[3]) {
        that.posX -= 10;
        that.attackDirection = 4;
        console.log(that.attackDirection);
        if (e.keyCode == that.transform[1])
          that.div.setAttribute("class", "zelda");
        that.div.style.backgroundPosition = "-64px -32px";
        setTimeout(function () {
          that.div.style.backgroundPosition = "0px -32px"
        }, 200);

      } else if (e.keyCode == that.transform[0])

      {

        that.div.setAttribute("class", "darkZelda");

      }

      if (e.keyCode == that.transform[1])

      {

        that.div.setAttribute("class", "zelda");

      }

      that.div.style.top = that.posY + "px";
      that.div.style.left = that.posX + "px";
    }, false);


  }
  
  this.attack = function(){
    
    var that = this;
    window.addEventListener('keypress', function (e) {
    e.preventDefault();
    if (e.keyCode == that.cross[4]){
      
      if (that.attackDirection == 1){
        
        console.log('up');

      }
      
      else if (that.attackDirection == 2){
        
        console.log('right');
        
      }
      
      else if (that.attackDirection == 3){
        
        console.log('down');
        
      }
      
      else if (that.attackDirection == 4){
        
        console.log('left');
     
      }
      
    }
    }, false);
  }
                            

}

var zelda1 = new link("Pierre", 465, 265);
zelda1.cross = [122, 100, 115, 113, 32];
zelda1.transform = [101, 97];
zelda1.createLink();
//zelda1.createTest();
zelda1.bougerLink();
zelda1.attackDirection = [];
zelda1.attack();