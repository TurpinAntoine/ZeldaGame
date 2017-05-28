var mydata = map;
var mydata2 = map2;
var grid = 50;

function redirMap2() {
  document.location.href = "map2.html";
}

function monsterLife() {
  monster1.life -= 1;
  console.log(monster1.life + ' mob life');
}

var maping = function () {

  this.createTest = function () {

    for (x = 0; x < mydata.length; x++) {
      for (y = 0; y < mydata.length; y++) {
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
  this.lifebar;
  this.heart;
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

  this.linkLife = function () {

    this.lifebar = document.createElement("div");
    this.lifebar.setAttribute("class", "lifebar");
    this.lifebar.style.position = "absolute";
    this.lifebar.style.width = "100px";
    this.lifebar.style.height = "10px";
    this.lifebar.style.top = "0";
    this.lifebar.style.right = "0";
    this.lifebar.style.zIndex = "9";
    this.lifebar.style.backgroundColor = "red";
    this.displayLifeBar();

  }

  this.displayLifeBar = function() {

    document.querySelector("body").appendChild(this.lifebar);
  }

  this.refreshLifebar = function(){

      var that = this;
      setInterval(function(){

          that.lifebar.style.width = (that.life * 10) + "px";
      }, 1)

  }

  this.createHeart = function(){

    this.heart = document.createElement("div");
    this.heart.setAttribute("class", "heart");
    this.heart.style.top = Math.floor(Math.random() * 300) + "px";
    this.heart.style.left = Math.floor(Math.random() * 300) + "px";
    this.displayHeart();

  }

  this.displayHeart = function() {

    document.querySelector("body").appendChild(this.heart);
  }

  this.addLife = function() {

    var that = this;
    setInterval(function(){

      if (that.posX && that.posY == that.heart.style.top && that.heart.style.left)
      {

        console.log('LOOOURD')
      }
    }, 1)
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

    var that = this;
    window.addEventListener('keypress', function (e) {


      e.preventDefault();
      if (e.keyCode == that.cross[4]) {
        var monsterXmax = monster1.posX + 30;
        var monsterXmin = monster1.posX;
        var monsterYmax = monster1.posY + 30;
        var monsterYmin = monster1.posY;

        if (that.attackDirection == 1) {

          that.div.style.backgroundPosition = "-96px -96px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px -96px"
          }, 200);


          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monsterLife();
          }
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter")) {
            redirMap2();
          }

        } else if (that.attackDirection == 2) {

          that.div.style.backgroundPosition = "-96px -64px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px -64px"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monsterLife();
          }
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter")) {
            redirMap2();
          }

        } else if (that.attackDirection == 3) {

          that.div.style.backgroundPosition = "-96px 0";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px 0"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monsterLife();
          }
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter")) {
            redirMap2();
          }

        } else if (that.attackDirection == 4) {

          that.div.style.backgroundPosition = "-96px -32px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "0px -32px"
          }, 200);

          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monsterLife();
          }
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter")) {
            redirMap2();
          }

        }

      }
    }, false);
  }

  this.linkDespawn = function ( ){

    setInterval(function(){

      if (zelda1.life == 0){

        if(confirm('You are dead ! Try again ?')){
        window.location.reload();
        }

      }
    }, 100)

  }


}

var zelda1 = new link("Pierre", 465, 265);
zelda1.cross = [122, 100, 115, 113, 32];
zelda1.transform = [101, 97];
zelda1.createLink();
zelda1.linkLife();
zelda1.refreshLifebar();
zelda1.linkDespawn();
zelda1.bougerLink();
zelda1.createHeart();
zelda1.addLife();



// Mobs

var monster = function (posX, posY) {

  this.posX = Math.floor(Math.random() * 800);
  this.posY = Math.floor(Math.random() * 800);
  this.div;
  this.life = 3;

  this.createMob = function () {

    this.div = document.createElement("div");
    this.div.setAttribute("class", "mob");
    this.div.style.backgroundPosition = "-125px 0px";
    this.div.style.top = this.posY + "px";
    this.div.style.left = this.posX + "px";
    this.displayMob();

  }

  this.displayMob = function () {

    document.querySelector("body").appendChild(this.div);

  }

  this.moveMob = function () {

    var that = this;

    setInterval(function () {

      that.posX += Math.cos(Math.atan2(zelda1.posY - that.posY, zelda1.posX - that.posX)) * 2;
      that.posY += Math.sin(Math.atan2(zelda1.posY - that.posY, zelda1.posX - that.posX)) * 2;
      that.div.style.top = that.posY + "px";
      that.div.style.left = (that.posX - 25) + "px";

    }, 50);
  }


  this.mobDespawn = function(){

    console.log(monster1.life);
    if (monster1.life == 2)(

      console.log("lourd")
    )
  }




}

var monster1 = new monster(this.posY, this.posX, this.life);
monster1.createMob();
monster1.displayMob();
monster1.moveMob();
monster1.mobDespawn();


zelda1.attackDirection = [];
zelda1.attack();
