define(['handlebars', 'router/index'], function(Handlebars, Router){
  Handlebars.registerHelper('link', function(value, options){
    return Router.generate(value);
  });
});
