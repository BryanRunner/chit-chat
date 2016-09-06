App.Navigation = function Navigation() {
  this.initialize();
}

App.Navigation.prototype = {
  constructor: App.Navigation,

  initialize: function() {
    this.$nav      = $('#nav-masthead');
    this.$navOpen  = $('#nav-open');
    this.$navClose = $('#nav-close');
    this.setEvents();
  },

  setEvents: function() {
    $(this.$navOpen).click(this.toggleNav.bind(this, "open"));
    $(this.$navClose).click(this.toggleNav.bind(this, "close"));
    $(this.$nav).click('.nav-link', this.toggleNav.bind(this, "close", false));
  },

  toggleNav: function(type, preventDefault) {
    if (arguments[1] != false) {
      event.preventDefault();
    }
    switch (arguments[0]) {
      case "open":
        this.$nav.addClass('toggled');
        break;
      case "close":
        this.$nav.removeClass('toggled');
        break;
    }
  }
}
