var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserIII = /** @class */ (function () {
    function UserIII(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangabaleNames = firstName;
    }
    UserIII.prototype.changeUnchangableNAme = function () {
        // this.unchangabaleNames = "foo";
    };
    UserIII.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName + " Welcome to TypeScript";
    };
    UserIII.maxAge = 50;
    return UserIII;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(UserIII));
var useriiix1 = new UserIII("Amila", "Kulathunga");
console.log(userx1.firstName);
console.log(UserII.maxAge);
var admin = new Admin("Darshana", "Kulathunga");
console.log(admin.firstName);
console.log(admin.setEditor("yes"));
console.log(admin.getEditor());
