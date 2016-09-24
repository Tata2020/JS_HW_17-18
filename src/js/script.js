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