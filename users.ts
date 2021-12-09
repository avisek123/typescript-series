class users{
    name:'';
    age:'';
    email:'';

    addUser(user){
        return `${user} added`;

    }
    removeUser(user){
        return `${user} removed`;

    }
}
let user1 = new users();
 let result = user1.addUser('John');
 let removeResult = user1.removeUser('John');
 console.log(result);
    console.log(removeResult);