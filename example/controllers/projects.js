define([
  'models/project',
  'hbs!views/projects/list',
  'hbs!views/projects/show',
  'hbs!views/projects/edit'
], function(
  Project,
  list,
  show,
  edit
){
  function Projects(controller){
    this.controller = controller;
  }

  Projects.prototype.actionList = function(){
    this.controller.layout.content.html(list(Project.all()));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  Projects.prototype.actionShow = function(userId, projectId){
    this.controller.layout.content.html(show(Project.find(projectId)));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  Projects.prototype.actionEdit = function(userId, projectId){
    this.controller.layout.content.html(edit(Project.find(projectId)));
    this.controller.router.parse(this.controller.layout.content.get(0));
  };

  return Projects;
});
