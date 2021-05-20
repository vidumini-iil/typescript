//Access Modifiers: public, private, protected
//Private means that we can use it only inside a class
//Protected is allowed in class and it's children
//readonly - Unchangable names - Read only property
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangabaleNames = firstName;
    }
    User.prototype.changeUnchangableNAme = function () {
        // this.unchangabaleNames = "foo";
    };
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName + " Welcome to TypeScript";
    };
    return User;
}());
var userx1 = new User("Amila", "Kulathunga");
console.log(userx1.firstName);
