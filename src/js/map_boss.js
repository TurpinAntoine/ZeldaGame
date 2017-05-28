var mydata = map;
var mydata2 = map2;
var grid = 50;
var mobCount = 0;


var bossDeath = document.getElementById('bossDeath')
var bossHit = document.getElementById('bossHit');
var linkSlash = document.getElementById('linkSlash');
var linkDie = document.getElementById('linkDie');
var linkHit = document.getElementById('linkHit');
var linkSurprise = document.getElementById('linkSurprise');
var theme1 = document.getElementById('theme1');
var theme2 = document.getElementById('theme2');
var ending = document.getElementById('end');

linkSurprise.play();
theme2.play();

function linkLife()  {
  zelda1.life -= 2;
  monster1.posY -= 30;
  console.log(this.life + ' link life');

}

function monsterLife() {
  monster1.life -= 1;
  console.log(monster1.life + ' mob life');
  bossHit.play();
}

function resetMonsterLife() {
  monster1.life = 3;
  console.log(monster1.life + ' reset life mob');
}

var maping = function () {

  this.createTest = function () {

    for (x = 0; x < mydata2.length; x++) {
      for (y = 0; y < mydata.length; y++) {
        var value = "val" + y
        this.div = document.createElement("div");
        this.div.setAttribute("class", mydata2[x][value]);

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
  this.walkDirection = 1;

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
    this.lifebar.style.width = "250px";
    this.lifebar.style.height = "50px";
    this.lifebar.style.top = "20px";
    this.lifebar.style.right = "20px";
    this.lifebar.style.zIndex = "9";
    this.lifebar.style.backgroundImage = "url('../ZeldaGame/src/image/lifebar.png')";
    this.displayLifeBar();

  }

  this.displayLifeBar = function () {

    document.querySelector("body").appendChild(this.lifebar);
  }

  this.refreshLifebar = function () {

    var that = this;
    setInterval(function () {

      that.lifebar.style.width = (that.life * 25) + "px";
    }, 1)

  }

  this.createHeart = function () {

    this.heart = document.createElement("div");
    this.heart.setAttribute("class", "heart");
    this.heart.style.top = Math.floor(Math.random() * 250) + "px";
    this.heart.style.left = Math.floor(Math.random() * 600) + "px";
    this.displayHeart();

  }

  this.displayHeart = function () {

    document.querySelector("body").appendChild(this.heart);
  }

  this.addLife = function () {

    var that = this;
    setInterval(function () {

      if (that.posX && that.posY == that.heart.style.top && that.heart.style.left) {

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

          if (this.walkDirection == 1) {

            that.div.style.backgroundPosition = "0 -96px";
            this.walkDirection = 0;
          } else {

            that.div.style.backgroundPosition = "-64px -96px";
            this.walkDirection = 1;
          }

        }



      } else if (e.keyCode == that.cross[1]) {
        if (that.verification(10, 0)) {
          that.posX += 10;
          that.attackDirection = 2;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");

          if (this.walkDirection == 1) {

            that.div.style.backgroundPosition = "0 -64px";
            this.walkDirection = 0;
          } else {

            that.div.style.backgroundPosition = "-64px -64px";
            this.walkDirection = 1;
          }

        }

      } else if (e.keyCode == that.cross[2]) {

        if (that.verification(0, 10)) {
          that.posY += 10;
          that.attackDirection = 3;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");

          if (this.walkDirection == 1) {

            that.div.style.backgroundPosition = "0 0";
            this.walkDirection = 0;
          } else {

            that.div.style.backgroundPosition = "-64px 0";
            this.walkDirection = 1;
          }


        }


      } else if (e.keyCode == that.cross[3]) {
        if (that.verification(-10, 0)) {
          that.posX -= 10;
          that.attackDirection = 4;
          if (e.keyCode == that.transform[1])
            that.div.setAttribute("class", "zelda");

          if (this.walkDirection == 1) {

            that.div.style.backgroundPosition = "-64px -32px";
            this.walkDirection = 0;
          } else {

            that.div.style.backgroundPosition = "0 -32px";
            this.walkDirection = 1;
          }



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



      var monsterXmax = monster1.posX + 40;
      var monsterXmin = monster1.posX - 10;
      var monsterYmax = monster1.posY + 40;
      var monsterYmin = monster1.posY - 10;

      console.log(monsterYmax + " mob y max");
      console.log(monsterXmax + " mob X max");
      console.log(monsterYmin + " mob y min");
      console.log(monsterXmin + " mob X min");
      console.log(newPosX + " link x");
      console.log(newPosY + " link y");


      if ((newPosY >= monsterYmin && newPosY <= monsterYmax && monster1.life > 0) && (newPosX >= monsterXmin && newPosX <= monsterXmax && monster1.life > 0)) {

        this.life -= 1;
        console.log(this.life + ' link life');
      }


      if ((map2[blockYMin]["val" + blockX] == "pass1" && map2[blockYMax]["val" + blockX] == "pass1") || (map2[blockYMin]["val" + blockX] == "enter1" && map2[blockYMax]["val" + blockX] == "enter1")) {

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
        var monsterXmax = monster1.posX + 35;
        var monsterXmin = monster1.posX - 10;
        var monsterYmax = monster1.posY + 35;
        var monsterYmin = monster1.posY - 10;
        console.log(monsterXmax + ' X max mob attk');
        console.log(monsterXmin + ' X min mob attk');
        if (that.attackDirection == 1) {

          that.div.style.backgroundPosition = "-96px -96px";
          setTimeout(function () {
            that.div.style.backgroundPosition = "-64px -96px"
          }, 200);


          if ((newPosY >= monsterYmin && newPosY <= monsterYmax) && (newPosX >= monsterXmin && newPosX <= monsterXmax)) {
            monsterLife();
          }
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter" && mobCount >= 5)) {
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
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter" && mobCount >= 5)) {
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
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter" && mobCount >= 5)) {
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
          if ((map[blockYMin]["val" + blockX] == "enter" && map[blockYMax]["val" + blockX] == "enter" && mobCount >= 5)) {
            redirMap2();
          }

        }

      }
    }, false);
  }

  this.linkDespawn = function () {

    setInterval(function () {

      if (zelda1.life == 0) {

        if (confirm('You are dead ! Try again ?')) {
          window.location.reload();
        }

      }
    }, 100)

  }


}

var zelda1 = new link("Pierre", 55, 155);
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

  this.posX = 800;
  this.posY = 150;
  this.div;
  this.life = 10;
  this.lifeStatut = 1;
  this.animationState = 0;
  this.mobLifeBar;

  this.createMob = function () {

    this.div = document.createElement("div");
    this.div.setAttribute("class", "boss");
    this.div.style.backgroundPosition = "0px 0px";
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
      that.div.style.top = (that.posY - 50)+ "px";
      that.div.style.left = that.posX + "px";

    }, 50);
  }

  this.mobLife = function () {

    var that = this;
    setInterval(function () {

      if (that.life == 0 && that.lifeStatut == 1) {
        theme2.pause();
        bossDeath.play();
        ending.play();
        that.despawnMob();
      }
    }, 1)

  }

  this.animateMob = function (){

      var that = this;
      setInterval(function(){
      if(that.animationState == 0){

        setTimeout(function(){

          that.div.style.backgroundPosition = "-85px 0";
          that.animationState = 1;

        }, 100)
      }
      if (that.animationState == 1){

        setTimeout(function(){

          that.div.style.backgroundPosition = "-170px 0";
          that.animationState = 0;

        }, 100)
      }
    }, 1000)

  }

  this.despawnMob = function () {

    var that = this;
    that.div.style.transition = "2s";
    that.div.style.transform = "rotate(90deg)";
    setTimeout(function () {

      var elem = document.querySelector(".boss");
      elem.classList.remove('boss');
      document.querySelector("body").removeChild(that.div);
      elem.remove();


    }, 2000)

    that.lifeStatut = 0;




  }

  this.createMobLifeBar = function () {

    this.mobLifeBar = document.createElement("div");
    this.mobLifeBar.setAttribute("class", "mobmobLifeBar");
    this.mobLifeBar.style.position = "relative";
    this.mobLifeBar.style.width = "10px";
    this.mobLifeBar.style.height = "5px";
    this.mobLifeBar.style.top = "-10px";
    this.mobLifeBar.style.right = "0px";
    this.mobLifeBar.style.zIndex = "9";
    this.mobLifeBar.style.backgroundColor = "#2ecc71";
    this.displayMobLifeBar();

  }

  this.displayMobLifeBar = function () {

    document.querySelector(".boss").appendChild(this.mobLifeBar);
  }

  this.refreshMobLifebar = function () {

    var that = this;
    setInterval(function () {

      that.mobLifeBar.style.width = (that.life * 10) + "px";
    }, 1)

  }



}

var monster1 = new monster(this.posY, this.posX, this.life);
monster1.createMob();
monster1.displayMob();
monster1.moveMob();
monster1.mobLife();
monster1.animateMob();
monster1.createMobLifeBar();
monster1.refreshMobLifebar();



zelda1.attackDirection = [];
zelda1.attack();
