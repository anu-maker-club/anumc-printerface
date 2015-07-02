Router.route('/', function() {
    this.render('dashboard');
}, {
    name: 'dashboard'
});

Router.route('/admin');

Router.route('/settings');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
