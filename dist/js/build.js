(function($) {
$.fn.mycarousel = function(options) {
    var defaults = {
      imgWidth: 380,             //ширина слайда
      elSlider: 3,               //кол-во слайдов в окне слайдера
      textSize: 14,              //размер шрифтаподписи под картинкой
      textColor: '#676734',      //цвет подписи под картинкой
      borderColor: '#676734',    //цвет окантовки слайдра
      backgrArrow: '#676734',    //цвет фона стрелок навигации
      speedSlider: 800           //скорость смены слайдов
    };

    var settings = $.extend(defaults, options);

	var $toLeft = $('.carousel__arrow--left');
    var $toRight = $('.carousel__arrow--right');
    var $sliderList = $('.carousel__list');
    var imgHeight = settings.imgWidth/1.66;
    var elSize = settings.imgWidth + 6;
    var currentLeftValue = 0;
    var elementsCount = $sliderList.find('li').length;
    var minimumOffset = - ((elementsCount - settings.elSlider) * elSize);
    var maximumOffset = 0;
    var widthSlider = elSize * settings.elSlider;
 //Resizing elements
    $('.carousel__hider').css('width', widthSlider + 'px');
    $('.carousel__wrapper').css('width', (widthSlider + 110) + 'px');
    $('.carousel__title').css('width', (widthSlider + 110) + 'px');
    $('.carousel__img ').css({
          'height': imgHeight + 'px',
          'width': settings.imgWidth + 'px'
        });
     $('.carousel__arrow').css('margin-top', ((imgHeight - 25)/2) + 'px');

//event "click left"
    $toLeft.click(function(e) {        
        e.preventDefault();
        $toRight.css('background-color', settings.backgrArrow).find('span').css('background-position', '-14px -1px');
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += elSize;
            $sliderList.animate ({ 
            	left : currentLeftValue + "px"
            }, settings.speedSlider);
        } else {
            $toLeft.css('background-color','#f5f5f5').find('span').css('background-position', '-5px -35px');
        };
    });
//event "click right" 
    $toRight.click(function(e) {        
       e.preventDefault();
       $toLeft.css('background-color', settings.backgrArrow).find('span').css('background-position', '2px -1px');
       if (currentLeftValue != minimumOffset) {
            
            currentLeftValue -= elSize;
            $sliderList.animate ({ 
            	left : currentLeftValue + "px"
            }, settings.speedSlider);
        } else {
             $toRight.css('background-color','#f5f5f5').find('span').css('background-position', '-5px -35px');
        };
    });
//color theme
    $('.carousel__item p').css({
        'color': settings.textColor,
        'font-size': settings.textSize + 'px'
    });
    $('.carousel__wrapper').css('border-color', settings.borderColor);
    $('.carousel__arrow').css('background-color', settings.backgrArrow);

return this;
}
})(jQuery);
$(function() {
$('.carousel__wrapper').mycarousel({
    imgWidth: 280,
    elSlider: 3,
    textColor: '#448834',
    borderColor: '#аа6534',
    backgrArrow: '#448834'
    });
	

var profile = $('#profile').html();
var users = {
      name: 'Петров Петр Петрович',
      users__photo: 'src/img/image_student.jpg',
      study_place: 'Студент курса Frontend GoForIT#2GoIT',
      phone: '+38(062)XXX-XX-XX',
      facebook_url: 'https://www.facebook.com/tatyana.khokhlova.79',
      feedback: 'Если нужно, могу сверстать сайт',
      reasons: [
              'Это развивающееся направление в IT',
              'Это даст мне новую профессию',
              'Мне это нравиться'
             ]
    };

var content = tmpl (profile, {
    data: users
});
console.log(content);
$('.form__wrapper').append(content);

});
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();