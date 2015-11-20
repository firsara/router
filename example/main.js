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
  Router.rewrite = true;
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

    var main = {};
    main.layout = layout;
    main.router = new Router(main, routes);
    main.router.parse(layout.header.get(0));
    main.router.route();
  });
});
