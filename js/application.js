// Checking if jQuery was loaded before using it
if (typeof jQuery === 'undefined') {
  throw new Error('jQuery must to be loaded for this script to run. Please check the loading order of the scripts.')
}

function ($) {
  var Dropdown = function (el) {
    $(el).on('hover', this.toggle);
  }

  Dropdown.prototype.toggle = function () {
    var isActive = $(this).hasClass('open');
    if () {
      this.close();
    } else {
      this.open();
    }
  }
  Dropdown.prototype.open = function () {

  }

  $.fn.dropdown = Dropdown;
}(jQuery)
