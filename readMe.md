# FakeUsers-package
## Create your fake users
## Installation
    npm install fakeusersabc-package

## Usage

```javascript
var fakeusers = require('fakeusersabc-package');

console.log(this.getUsers()); // outputs all users
console.log(this.getUsersId(1)); // return user with id 1
console.log(this.addUsers({name: "Carmen", surname: "Consoli"})); // add new user
console.log(this.deleteUser(1)); // delete user with id 1
console.log(this.modifyUser(2,{name: "Raffaella", surname: "Carrà"}));
console.log(this.reset()); // reset fake users;

```
