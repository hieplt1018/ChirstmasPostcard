$('.shine').each(function(){
  var t = $(this);
  for (i = 1; i < 4+1; i++){
    t.append('<div class="c__'+i+'"></div>');
  }
});

// Add sky effects
var map = { 
  obj: $("#sky"),
  
  bounderies: {
    w: $(document).width(),
    h: $(document).height()
  },

  stars: {
    template: $("<span></span>"),
    total: 550,
    star: []
  }
};

for(var index = 1; index <= map.stars.total; index++) {
  var star =  $("<span></span>"),
      star_top  = Math.round((Math.random() * map.bounderies.h) + 1),
      star_left = Math.round((Math.random() * map.bounderies.w) + 1),
      star_size = Math.round((Math.random() * 3) + 1),
      star_shine = Math.round(Math.random() * 100) + 1,
      star_shine_speed = "";

  star.addClass("star")
    .css({
    "top": star_top,
    "left": star_left,
    "width": star_size,
    "height": star_size
  });

  if(index % 3 == 0) {
    star_shine_speed = (Math.round(Math.random() * 2) + 1) % 2 == 0 ? "shine-fast" : "shine-slow";
    star.addClass(star_shine_speed);
  }
  map.obj.append(star);
}

// Animation Presents
TweenMax.from(".presents", 10, {x:-250, ease:Elastic.easeOut, repeat: -1}); 

// TweenMax.from("#merry-text", 3, {autoAlpha: 0, y: 8, delay: 1, ease:Power1.easeOut, repeat: -1})