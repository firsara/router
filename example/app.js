require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    handlebars: '../bower_components/handlebars/handlebars',
    text: '../bower_components/text/text',
    hbs: '../bower_components/requirejs-hbs/hbs',
    router: '../src'
  }
});


require(['router/index', 'helpers'], function(Router){
  Router.rewrite = false;
  Router.base = '/example/';

  require([
    'router/index',
    'routes',
    'layout',
    'jquery'
  ], function(
    Router,
    routes,
    layout,
    $
  ){
    $('body').append(layout.header);
    $('body').append(layout.content);

    $(document).on('click', '.save', function(e){
      e.preventDefault();
    });

    var app = {};
    app.layout = layout;
    app.router = new Router(app, routes);
    app.router.parse(layout.header.get(0));
    app.router.route();
  });
});
