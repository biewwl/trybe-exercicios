window.addEventListener('DOMContentLoaded', function()
  {
    let $min = document.querySelector('.real [name="realDPX-min"]');

    $min.DatePickerX.init({
      mondayFirst: true,
      minDate    : new Date(),
    });
  });