/****** Important: Enum - a reserved word to create enumerable ******/
/****** Important: Enum is a Data type ******/
/*
const statuss = {
    notStarted: 0,
    inProgress: 1,
    done: 2.
}

console.log(statuss.inProgress);
*/
//Names with capital letter is adefault code style
/******~~ Importance: Values are with "=" sign ~~******/
//Asign values to our Statuss enum
var Statuss;
(function (Statuss) {
    Statuss["NotStarted"] = "notStarted";
    Statuss["InProgress"] = "inProgress";
    Statuss["Done"] = "done";
})(Statuss || (Statuss = {}));
console.log(Statuss.InProgress); // Ptint 'inProgress' **** Not '1' **** 
/******~~ Importance of Enum: We can use enum as a value and a data type ~~******/
/****** Important: Status as both data type and value ******/
var notStartedStatuss = Statuss.NotStarted;
//notStartedStatus = "foo";
notStartedStatuss = Statuss.Done;
