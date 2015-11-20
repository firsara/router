define([
  'models/user',
  'hbs!views/users/list',
  'hbs!views/users/show',
  'hbs!views/users/edit'
], function(
  User,
  list,
  show,
  edit
){
  function Users(controller){
    this.controller = controller;
  }

  Users.prototype.actionList = function(){
    this.controller.layout.content.html(list(User.all()));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  Users.prototype.actionShow = function(userId){
    this.controller.layout.content.html(show(User.find(userId)));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  Users.prototype.actionEdit = function(userId){
    this.controller.layout.content.html(edit(User.find(userId)));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  return Users;
});
