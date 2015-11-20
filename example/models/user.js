define(['router/index'], function(Router){
  function User(data){
    for (var k in data) {
      this[k] = data[k];
    }
  }

  User.prototype.showPath = function(path){
    return Router.generate('users/' + this.id);
  };

  User.prototype.editPath = function(path){
    return Router.generate('users/' + this.id + '/edit');
  };

  User.prototype.projectsPath = function(path){
    return Router.generate('users/' + this.id + '/projects');
  };

  User.all = function(){
    return users;
  };

  User.find = function(id){
    for (var i = 0, _len = users.length; i < _len; i++) {
      if (users[i].id.toString() === id.toString()) return users[i];
    }

    return null;
  };

  var users = [];
  var fixtures = [
    {
      id: 1,
      name: 'Jon Doe',
      email: 'jon@doe.com',
      address: 'random address',
      cv: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.',
      projects: [1, 2]
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@doe.com',
      address: '404',
      cv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.',
      projects: []
    }
  ];

  for (var i = 0, _len = fixtures.length; i < _len; i++) {
    users.push(new User(fixtures[i]));
  }

  return User;
});
