var users= [
  {
    name: 'Gino',
    surname: 'Paoli',
    id:1
  },
  {
    name: 'Renato',
    surname: 'Carosone',
    id:2
  },
  {
    name: 'Rita',
    surname: 'Pavone',
    id:3
  },
  {
    name: 'Adriano',
    surname: 'Celentano',
    id:4
  },
  {
    name: 'Caterina',
    surname: 'Caselli',
    id:5
  }]

var clone= function(obj){
  return JSON.parse(JSON.stringify(obj));
}

var backup = clone(users);

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
    users = clone(backup); //è un modo per creare un clone e ingannare java
}

console.log(this.addUser({name:"Alessia", surname:"Ciccarello"}));
console.log(this.getUsers());
console.log(this.reset());
console.log(this.getUsers());
