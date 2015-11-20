define([
  './controllers/dashboard',
  './controllers/users',
  './controllers/projects'
], function(
  dashboard,
  users,
  projects
){
  return {
    'defaults':                      {controller: dashboard},
    'users':                         {controller: users,    action: 'list'},
    'users/{id}':                    {controller: users,    action: 'show'},
    'users/{id}/edit':               {controller: users,    action: 'edit'},
    'users/{id}/projects':           {controller: projects, action: 'list'},
    'users/{id}/projects/{id}':      {controller: projects, action: 'show'},
    'users/{id}/projects/{id}/edit': {controller: projects, action: 'edit'}
  };
});
