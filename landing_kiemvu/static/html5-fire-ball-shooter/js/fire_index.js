bgColor = '#111';
gravity = 0.03; //0.03
particleColor = '#f73';

canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');

(onresize = function(){
  width = canvas.width = canvas.clientWidth;
  height = canvas.height = canvas.clientHeight;
  o = {x:Math.floor(width/2),y:Math.floor(height/2)};
  edge = {top:-o.y,right:width-o.x,bottom:height-o.y,left:-o.x}
})();

particles = {};


newParticle = (function(){
  var nextIndex = 10;
  return function(x,y,r,o,c,xv,yv,rv,ov){
    particles[++nextIndex] = {
      index: nextIndex,
      x: x,
      y: y,
      r: r,
      o: o,
      c: c,
      xv: xv,
      yv: yv,
      rv: rv,
      ov: ov
    };
  };
})();


fireballs = {};
newFireball = (function(){
  var nextIndex = 0;
  return function(x,y,xv,yv,life){
    fireballs[0] = {
      index: nextIndex,
      x: x,
      y: y,
	  
	    xv : xv,
	    yv : yv,
	  
      life: life
    };
	
  };
})();


charging = false;
pos1 = {x:100,y:50};
showInstructions = false;

/* BEGIN OF Add New by Tan */

newFireball(
	10,
	50,
	
	10,
	10,
	
	60000
);
/* END OF Add New by Tan */


time = 0;
requestAnimationFrame(loop = function(){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  //ctx.fillStyle = "#111"; //"rgba(0, 0, 200, 0.5)"
  ctx.clearRect(0,0,width,height);
  
  ctx.translate(o.x,o.y);
  
  /*
  if(charging){
    var c = Math.floor(30+mouse.d/2);
    ctx.strokeStyle = 'rgba('+c+','+c+','+c+',1)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pos1.x,pos1.y);
    ctx.lineTo(mouse.x,mouse.y);
    ctx.lineCap = 'round';
    ctx.stroke();
  }
  */
  
  
  ctx.globalCompositeOperation = 'lighter';
	

  for(var i in particles){
    var p = particles[i];
	
//	console.log(i);
	
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.globalAlpha = p.o;
    ctx.fillStyle = p.c;
    ctx.fill();
  }

  for(var i in particles){
    var p = particles[i];
    p.x += p.xv;
    p.y += p.yv;
    p.r += p.rv;
    p.o += p.ov;
    if(p.r<0)delete particles[p.index];
    if(p.o<0)delete particles[p.index];
  }
  
  //console.log(fireballs);return;
  
  for(var i in fireballs){
    f = fireballs[i];
	
	var numParticles = 2;
	
    //var numParticles = Math.sqrt(f.xv*f.xv+f.yv*f.yv)/5;
    if(numParticles<1)numParticles=1;
    var numParticlesInt = Math.ceil(numParticles),
        //numParticlesDif = numParticles/numParticlesInt;
		
		numParticlesDif = 8;
	
	
    for(var j=0;j<numParticlesInt;j++){
      newParticle(
        90,//f.x-f.xv*j/numParticlesInt,
        230,//f.y-f.yv*j/numParticlesInt,
        17,
        12,//numParticlesDif,
        particleColor,
        Math.random()*-1, //Math.random()*0.9-0.3
        Math.random()*-4, //Math.random()*0.9-0.3
        -0.3, //-0.3
        -0.05*numParticlesDif
      );
	  
	  newParticle(
        120,//f.x-f.xv*j/numParticlesInt,
        230,//f.y-f.yv*j/numParticlesInt,
        12,
        12,//numParticlesDif,
        particleColor,
        Math.random()*-1, //Math.random()*0.9-0.3
        Math.random()*-4, //Math.random()*0.9-0.3
        -0.3, //-0.3
        -0.05*numParticlesDif
    );

    newParticle(
        60,//f.x-f.xv*j/numParticlesInt,
        230,//f.y-f.yv*j/numParticlesInt,
        12,
        12,//numParticlesDif,
        particleColor,
        Math.random()*-1, //Math.random()*0.9-0.3
        Math.random()*-4, //Math.random()*0.9-0.3
        -0.3, //-0.3
        -0.05*numParticlesDif
    );

	  newParticle(
        -610,//f.x-f.xv*j/numParticlesInt,
        230,//f.y-f.yv*j/numParticlesInt,
        17,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*1, //Math.random()*0.9-0.3
        Math.random()*-4, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    //Nhung dom lua nho nho -------------------------------------------------------
    newParticle(
        -740,//f.x-f.xv*j/numParticlesInt,
        -130,//f.y-f.yv*j/numParticlesInt,
        8,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*1, //Math.random()*0.9-0.3
        Math.random()*-4, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        -710,//f.x-f.xv*j/numParticlesInt,
        -240,//f.y-f.yv*j/numParticlesInt,
        6,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        -660,//f.x-f.xv*j/numParticlesInt,
        200,//f.y-f.yv*j/numParticlesInt,
        6,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        -660,//f.x-f.xv*j/numParticlesInt,
        200,//f.y-f.yv*j/numParticlesInt,
        6,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        -620,//f.x-f.xv*j/numParticlesInt,
        65,//f.y-f.yv*j/numParticlesInt,
        4,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        -684,//f.x-f.xv*j/numParticlesInt,
        146,//f.y-f.yv*j/numParticlesInt,
        4,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        622,//f.x-f.xv*j/numParticlesInt,
        -80,//f.y-f.yv*j/numParticlesInt,
        4,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );

    newParticle(
        642,//f.x-f.xv*j/numParticlesInt,
        -110,//f.y-f.yv*j/numParticlesInt,
        4,
        12,//numParticlesDif,
        '#f75810',//'#f7e895',
        Math.random()*2, //Math.random()*0.9-0.3
        Math.random()*-3, //Math.random()*0.9-0.3
        -0.3, //-0.6
        -0.05*numParticlesDif //-0.05
    );


    }
	
    f.x += f.xv;
    f.y += f.yv;
    f.yv += gravity;
    var boundary;
	
    if(f.y<(boundary = edge.top+7)){
      f.y = boundary;
      f.yv *= -1;
    }else if(f.y>(boundary = edge.bottom-7)){
      f.y = boundary;
      f.yv *= -1;
    }
	
    if(f.x>(boundary = edge.right-7)){
      f.x = boundary;
      f.xv *= -1;
    }else if(f.x<(boundary = edge.left+7)){
      f.x = boundary;
      f.xv *= -1;
    }
	
    if(--f.life<0)delete fireballs[f.index];
  }
  
  
  requestAnimationFrame(loop);
  
});