//ES6 JS Classes

class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
};

//instance of the class/new object
let anonDude = new User("The Dude");
anonDude.greet();
anonDude.status();

//Super
class BronzeLevelUser extends User {
    //we add the cc info property to the user here.
    constructor(username, password, ccinfo) {
        super(username, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "1212121212121212");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);