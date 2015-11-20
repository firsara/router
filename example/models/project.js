define(['router/index'], function(Router){
  function Project(data){
    for (var k in data) {
      this[k] = data[k];
    }
  }

  Project.prototype.listPath = function(path){
    return Router.generate('users/' + this.user + '/projects');
  };

  Project.prototype.showPath = function(path){
    return Router.generate('users/' + this.user + '/projects/' + this.id);
  };

  Project.prototype.editPath = function(path){
    return Router.generate('users/' + this.user + '/projects/' + this.id + '/edit');
  };

  Project.prototype.userPath = function(path){
    return Router.generate('users/' + this.user);
  };

  Project.all = function(){
    return projects;
  };

  Project.find = function(id){
    for (var i = 0, _len = projects.length; i < _len; i++) {
      if (projects[i].id.toString() === id.toString()) return projects[i];
    }

    return null;
  };

  var projects = [];
  var fixtures = [
    {
      id: 1,
      user: 1,
      name: 'Awesome Project',
      description: 'Random description'
    },
    {
      id: 2,
      user: 1,
      name: 'Boring Project',
      description: 'without description'
    }
  ];

  for (var i = 0, _len = fixtures.length; i < _len; i++) {
    projects.push(new Project(fixtures[i]));
  }

  return Project;
});
