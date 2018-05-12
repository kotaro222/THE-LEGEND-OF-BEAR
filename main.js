enchant();
window.onload=function(){
   var core=new Core(320,320)
   core.preload('chara1.png','chara2.png','map1.png','ogachallenge6.png','male.png');
   core.fps=15;
   var timeLeft=400*core.fps;
   core.onload=function(){
   var time_Label=new Label('Time: 0');
   time_Label.x=5;
   time_Label.y=5;

   core.on('enterframe',function(){
     timeLeft--;
     time_Label.text='Time'+timeLeft;
     if(timeLeft<=0){alert("you lose");
     this.stop();
     }
    });
      var gameOverScene=new Scene();
      gameOverScene.backgroundColor='black';
      var bear=new Sprite(32,32);
      bear.image=core.assets['chara1.png'];
      bear.x=15;
      bear.y=250;
      bear.frame=1;
      bear.addEventListener('enterframe', function(){
      this.frame=this.age%3
        if(core.input.left){
            this.x-=5;}
        if(core.input.right){
            this.x+=5;}
        if(core.input.up){
            this.y-=5;}
        if(core.input.down){
            this.y+=5;}

      if(this.within(princess,10)){
          alert('game clear');
          this.stop;
        }else if(this.within(enemy_bear,10)){
            core.pushScene(gameOverScene);
            this.stop();
        }
    });
     
     var princess=new Sprite(32,32);
     princess.image=core.assets['chara1.png'];
     princess.x=260;
     princess.y=10;
     princess.frame=10;
    
     var enemy_bear=new Sprite(32,32);
     enemy_bear.image=core.assets['chara1.png'];
     enemy_bear.x=10;
     enemy_bear.y=100;
     enemy_bear.frame=5;

     var enemy_bear2=new Sprite(32,32);
     enemy_bear2.image=core.assets['chara1.png'];
     enemy_bear2.x=200;
     enemy_bear2.y=200;
     enemy_bear2.frame=5;

     var enemy_bear3=new Sprite(32,32);
     enemy_bear3.image=core.assets['chara1.png'];
     enemy_bear3.x=230;
     enemy_bear3.y=110;
     enemy_bear3.frame=5;



     var enemy_pig2=new Sprite(32,32);
     enemy_pig2.image=core.assets['chara2.png'];
     enemy_pig2.x=250;
     enemy_pig2.y=200;
     enemy_pig2.frame=1;

     var enemy_pig3=new Sprite(32,32);
     enemy_pig3.image=core.assets['chara2.png'];
     enemy_pig3.x=100;
     enemy_pig3.y=110;
     enemy_pig3.frame=1;

     var enemy_pig4=new Sprite(32,32);
     enemy_pig4.image=core.assets['chara2.png'];
     enemy_pig4.x=200;
     enemy_pig4.y=30;
     enemy_pig4.frame=1;



     var enemy_ogachan=new Sprite(32,34);
     enemy_ogachan.image=core.assets['ogachallenge6.png'];
     enemy_ogachan.x=50;
     enemy_ogachan.y=50;
     enemy_ogachan.frame=4

    var enemy_male=new Sprite(40,40);
    enemy_male.image=core.assets['male.png'];
    enemy_male.x=130;
    enemy_male.y=80;
    enemy_male.frame=12;
    
    var enemy_male2=new Sprite(40,40);
    enemy_male2.image=core.assets['male.png'];
    enemy_male2.x=110;
    enemy_male2.y=170;
    enemy_male2.frame=6;


    
     
      var map=new Map(16,16,);
      map.image=core.assets['map1.png'];
      map.loadData([
        [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,6],
        [6,53,53,6,53,6,53,6,53,6,53,6,53,6,53,6,7,28,28,7],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,28,28,7],
        [6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,53,53,7,7],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,53,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,53,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,6,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,6],
        [6,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,53,6],
        [6,53,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6,53,6],
        [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
      ]);

    


    map.collisionData=[ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
  
　　
    core.ontouchstart=function(e){
    if (map.hitTest(e.x,e.y) === true) {
        alert('mmmm') 
      };
    };


      core.rootScene.addChild(map);
      core.rootScene.addChild(bear);
      core.rootScene.addChild(princess);
      core.rootScene.addChild(enemy_bear);
      core.rootScene.addChild(enemy_bear2);
      core.rootScene.addChild(enemy_bear3);
      core.rootScene.addChild(enemy_pig2);      
      core.rootScene.addChild(enemy_pig3);
      core.rootScene.addChild(enemy_pig4);
      core.rootScene.addChild(enemy_ogachan);
      core.rootScene.addChild(time_Label);
      core.rootScene.addChild(enemy_male);
      core.rootScene.addChild(enemy_male2);
   };
core.start();
};
