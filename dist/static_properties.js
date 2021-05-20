var UserII = /** @class */ (function () {
    function UserII(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangabaleNames = firstName;
    }
    UserII.prototype.changeUnchangableNAme = function () {
        // this.unchangabaleNames = "foo";
    };
    UserII.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName + " Welcome to TypeScript";
    };
    UserII.maxAge = 50;
    return UserII;
}());
var useriix1 = new UserII("Amila", "Kulathunga");
console.log(userx1.firstName);
console.log(UserII.maxAge);
