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
    $("#one").addClass("highlight");
    setTimeout(function() {
    $("#one").removeClass("highlight");
    }, 500);
    myArray2.push(1);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#two").click(function(){
    $("#two").addClass("highlight");
    setTimeout(function() {
    $("#two").removeClass("highlight");
    }, 500);
    myArray2.push(2);
    if (arrayEquals(myArray, myArray2) == true) {
   playClick();
}
});
$("#three").click(function(){
    $("#three").addClass("highlight");
    setTimeout(function() {
    $("#three").removeClass("highlight");
    }, 500);
    myArray2.push(3);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#four").click(function(){
    $("#four").addClass("highlight");
    setTimeout(function() {
    $("#four").removeClass("highlight");
    }, 500);
    myArray2.push(4);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#five").click(function(){
    $("#five").addClass("highlight");
    setTimeout(function() {
    $("#five").removeClass("highlight");
    }, 500);
    myArray2.push(5);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#six").click(function(){
    $("#six").addClass("highlight");
    setTimeout(function() {
    $("#six").removeClass("highlight");
    }, 500);
    myArray2.push(6);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#seven").click(function(){
    $("#seven").addClass("highlight");
    setTimeout(function() {
    $("#seven").removeClass("highlight");
    }, 500);
    myArray2.push(7);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#eight").click(function(){
    $("#eight").addClass("highlight");
    setTimeout(function() {
    $("#eight").removeClass("highlight");
    }, 500);
    myArray2.push(8);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});
$("#nine").click(function(){
    $("#nine").addClass("highlight");
    setTimeout(function() {
    $("#nine").removeClass("highlight");
    }, 500);
    myArray2.push(9);
    if (arrayEquals(myArray, myArray2) == true) {
    playClick();
}
});

function arrayEquals(myArray, myArray2) {
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
};

function playClick(){
    $("#playbtn").click();
}

let i;
for (i = 0; i < myArray.length; i++) {
    
}









