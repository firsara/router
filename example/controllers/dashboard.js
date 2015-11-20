define([
  'hbs!views/dashboard'
], function(
  template
){
  function Dashboard(controller){
    this.controller = controller;
  }

  Dashboard.prototype.actionIndex = function(){
    this.controller.layout.content.html(template());
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  return Dashboard;
});
