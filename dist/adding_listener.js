//Working DOM Element inside TypeScript
var someElement2 = document.querySelector(".foo");
someElement2.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event ", target);
});
