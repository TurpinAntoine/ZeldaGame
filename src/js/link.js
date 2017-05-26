var mydata = map;
var grid = 50;


var maping = function () {

  this.createTest = function () {

    for (x = 0; x < map.length; x++) {
      for (y = 0; y < map.length; y++) {
        var value = "val" + y
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

var posX = posX;
var posY = posY;

var link = function (name, posX, posY) {

  this.name = name;
  this.posX = posX;
  this.posY = posY;
  globposX = posX;
  globposY = posY;
  this.cross = new Array();
  this.transform = new Array();
  this.div;
  this.attackDirection;
  this.life = 10;

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
        if (that.verification(0, -10)) {
          that.posY -= 10;
          that.attackDirection = 1;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");
          that.div.style.backgroundPosition = "0 -96px";
        }



      } else if (e.keyCode == that.cross[1]) {
        if (that.verification(10, 0)) {
          that.posX += 10;
          that.attackDirection = 2;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");
          that.div.style.backgroundPosition = "0 -64px";
        }

      } else if (e.keyCode == that.cross[2]) {

        if (that.verification(0, 10)) {
          that.posY += 10;
          that.attackDirection = 3;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");
          that.div.style.backgroundPosition = "0 0";
        }


      } else if (e.keyCode == that.cross[3]) {
        if (that.verification(-10, 0)) {
          that.posX -= 10;
          that.attackDirection = 4;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");
          that.div.style.backgroundPosition = "-64px -32px";
          
          
        }

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

    this.verification = function (dirX, dirY) {
      var bool = false;
      newPosX = this.posX + dirX;
      newPosY = this.posY + dirY;

      blockYMin = Math.floor((newPosY + 15) / grid);
      blockYMax = Math.floor((newPosY + 15) / grid);
      blockX = Math.floor((newPosX + 14.9) / grid);



      var monsterXmax = monster1.posX + 14;
      var monsterXmin = monster1.posX;
      var monsterYmax = monster1.posY + 14;
      var monsterYmin = monster1.posY;

      console.log(monsterYmax + " mob y max");
      console.log(monsterYmin + " mob y min");
      console.log(newPosX + " link x");
      console.log(newPosY + " link y");


      if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {

        this.life -= 1;
        console.log(this.life + ' link life');
      }


      if ((map[blockYMin]["val" + blockX] == "pass" && map[blockYMax]["val" + blockX] == "pass") || (map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter")) {
        return true;

      } else {
        return false;
      }




    }


  }
  this.attack = function () {



    var monsterXmax = monster1.posX + 30;
    var monsterXmin = monster1.posX;
    var monsterYmax = monster1.posY + 30;
    var monsterYmin = monster1.posY;

    var that = this;
    window.addEventListener('keypress', function (e) {
      e.preventDefault();
      if (e.keyCode == that.cross[4]) {

        if (that.attackDirection == 1) {

          that.div.style.backgroundPosition = "-96px -96px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px -96px"
          }, 200);


          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monster1.life -= 1;
            console.log(monster1.life + ' mob life');
          }


        } else if (that.attackDirection == 2) {

          that.div.style.backgroundPosition = "-96px -64px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px -64px"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monster1.life -= 1;
            console.log(monster1.life + ' mob life');
          }

        } else if (that.attackDirection == 3) {

          that.div.style.backgroundPosition = "-96px 0";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px 0"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monster1.life -= 1;
            console.log(monster1.life + ' mob life');
          }

        } else if (that.attackDirection == 4) {

          that.div.style.backgroundPosition = "-96px -32px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "0px -32px"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monster1.life -= 1;
            console.log(monster1.life + ' mob life');
          }

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


// Mobs 

var monster = function (posX, posY) {

  this.posX = Math.floor(Math.random() * 800);
  this.posY = Math.floor(Math.random() * 800);
  this.div;
  this.life = 1;

  this.createMob = function () {

    this.div = document.createElement("div");
    this.div.setAttribute("class", "mob");
    this.div.style.backgroundPosition = "-128px -32px";
    this.div.style.top = this.posY + "px";
    this.div.style.left = this.posX + "px";
    this.displayMob();
  }

  this.displayMob = function () {

    document.querySelector("body").appendChild(this.div);

    
  }
  
  this.moveMob = function () {
    
    var that = this;
    
    setInterval(function() {
      
      
          that.posX += Math.cos(Math.atan2(zelda1.posY - that.posY, zelda1.posX - that.posX)) * 2;
          that.posY += Math.sin(Math.atan2(zelda1.posY - that.posY, zelda1.posX - that.posX)) * 2;
          that.div.style.top = that.posY + "px";
          that.div.style.left = that.posX + "px";
          
    }, 50);
  }


}

var monster1 = new monster(this.posY, this.posX);
monster1.createMob();
monster1.displayMob();
monster1.moveMob();
var monster2 = new monster(this.posY * .5, this.posX * .5);
monster2.createMob();
monster2.displayMob();
monster2.moveMob();
zelda1.attackDirection = [];
zelda1.attack();


var monsterCount = [1, 2, 3, 4, 5];
