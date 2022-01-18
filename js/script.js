$(document).ready(function() {
    var $toggleButton = $('.toggle-button');
    $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
    });
  });
  $(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
});
$(document).ready(function() {
    var $sidebarArrow = $('.sidebar-menu-arrow');
    $sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });
});