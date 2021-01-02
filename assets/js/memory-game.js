let myArray = [];

let myArray2 = [];

$("#playbtn").click(function(){
    let a = Math.floor(Math.random() * 9 + 1);
    if (a == 1) {
        $("#one").addClass("highlight");
        setTimeout(function() {
	    $("#one").removeClass("highlight");
        }, 500);
        myArray.push(1);
    } else if (a == 2) {
        $("#two").addClass("highlight");
        setTimeout(function() {
	    $("#two").removeClass("highlight");
        }, 500);
        myArray.push(2);
    } else if (a == 3) {
        $("#three").addClass("highlight");
        setTimeout(function() {
	    $("#three").removeClass("highlight");
        }, 500);
        myArray.push(3);
    } else if (a == 4) {
        $("#four").addClass("highlight");
        setTimeout(function() {
	    $("#four").removeClass("highlight");
        }, 500);
        myArray.push(4);
    } else if (a == 5) {
        $("#five").addClass("highlight");
        setTimeout(function() {
	    $("#five").removeClass("highlight");
        }, 500);
        myArray.push(5);
    } else if (a == 6) {
        $("#six").addClass("highlight");
        setTimeout(function() {
	    $("#six").removeClass("highlight");
        }, 500);
        myArray.push(6);
    } else if (a == 7) {
        $("#seven").addClass("highlight");
        setTimeout(function() {
	    $("#seven").removeClass("highlight");
        }, 500);
        myArray.push(7);
    } else if (a == 8) {
        $("#eight").addClass("highlight");
        setTimeout(function() {
	    $("#eight").removeClass("highlight");
        }, 500);
        myArray.push(8);
    } else if (a == 9) {
        $("#nine").addClass("highlight");
        setTimeout(function() {
	    $("#nine").removeClass("highlight");
        }, 500);
        myArray.push(9);
    }
    console.log(myArray)
});



$("#one").click(function(){
    myArray2.push(1);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#two").click(function(){
    myArray2.push(2);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#three").click(function(){
    myArray2.push(3);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#four").click(function(){
    myArray2.push(4);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#five").click(function(){
    myArray2.push(5);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#six").click(function(){
    myArray2.push(6);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#seven").click(function(){
    myArray2.push(7);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#eight").click(function(){
    myArray2.push(8);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});
$("#nine").click(function(){
    myArray2.push(9);
    if (arrayEquals(myArray, myArray2) == true) {
    console.log("success")
}
});

function arrayEquals(myArray, myArray2) {
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
};

function play()








