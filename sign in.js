function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

$(document).ready(function() {
    $("#log-form").submit(function(e) {
    e.preventDefault();
    var count = 0;
    var email = $('.uname').val();
    var password = $('.psw').val();
    
    $(".error1").remove();
    $(".error2").remove();
    $(".error3").remove();
    if (email.length< 1) {
      $('.uname').after('<span class="error1">Это поле обязательно</span>');
      count++;
    }
     else {
      var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('.uname').after('<span class="error3">Введите правильный email</span>');
        count++;
      }
    }
    if (password.length< 8) {
      $('.psw').after('<span class="error2">Пароль должен содержать не менее 8 символов</span>');
      count++
    }
    if(count==0){
      alert('Вы авторизовались!');
      document.location.href = "index.html";
    }
    if(email=="admin@mail.com" && password=="admin123"){
      alert("Добро пожаловать в панель администратора!");
      document.location.href = "admin.html";
    }
  });
});