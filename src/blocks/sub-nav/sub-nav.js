$(function () {
  $('.header__menu-link').on('click', function () {
    $(this).next('.sub-nav').toggleClass('sub-nav--open');
    if ($('.header__menu-link').next('.sub-nav').hasClass('sub-nav--open')) {
      $(this).addClass('header__menu-link--open');
    } else {
      $(this).removeClass('header__menu-link--open');
    }
  });
});