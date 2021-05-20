var UserI = /** @class */ (function () {
    function UserI(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangabaleNames = firstName;
    }
    UserI.prototype.changeUnchangableNAme = function () {
        // this.unchangabaleNames = "foo";
    };
    UserI.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName + " Welcome to TypeScript";
    };
    return UserI;
}());
var userix1 = new UserI("Amila", "Kulathunga");
console.log(userx1.firstName);
