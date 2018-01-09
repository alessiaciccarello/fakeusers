var users= [
  {
    name: 'Gino',
    surname: 'Paoli',
    email: 'ginopaoli@gmail.com',
    id:1.--.
  },
  {
    name: 'Renato',
    surname: 'Carosone',
    email: 'renatocarosone@gmail.com',
    id:2
  },
  {
    name: 'Rita',
    surname: 'Pavone',
    email: 'ritapavone@gmail.com',
    id:3
  },
  {
    name: 'Adriano',
    surname: 'Celentano',
    email: 'adrianocelentano@gmail.com',
    id:4
  },
  {
    name: 'Caterina',
    surname: 'Caselli',
    email: 'caterinacaselli@gmail.com',
    id:5
  }]

var backup = JSON.parse(JSON.stringify(users));

exports.getUsers= function(){
  return users;
}

exports.getUsersId = function(id){
  for (var i in users) {
    var user = users[i];
    if (user.id === id) {
      return user;
    }
  }
  return null;
}

exports.addUser = function(newUser) {
    var lastUserId = users[users.length - 1].id;
    users.push({
      name: newUser.name,
      surname: newUser.surname,
      id: lastUserId+1
    })
}

exports.deleteUser = function(id){
  for (var i in users) {
    var user = users[i];
    if (user.id === id) {
      return users.splice(i, 1);
    }
  }
  return null;
}

exports.modifyUser = function(id, newUser) {
  for (var i in users) {
    var user = users[i];
    if (user.id === id) {
      user.name = newUser.name;
      user.surname = newUser.surname;
      return user;
    }
  }
  return null;
}

exports.reset = function() {
    users = JSON.parse(JSON.stringify(backup)); //è un modo per creare un clone e ingannare java
}

console.log(this.getUsers())
