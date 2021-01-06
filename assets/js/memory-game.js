let myArray = [];
let myArray2 = [];
let repArr = [];
let i;
let myAleng = myArray.length;
let lastI = myArray2[myArray2.length - 1];
var lastScore = myArray2.length;
function arrayEquals(myArray, myArray2) {  // function was copied from https://masteringjs.io/tutorials/fundamentals/compare-arrays
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
}; 

function playClick(){
    $(".action>p").html("WATCH!");
    repeat();
    
    setTimeout(function(){ 
        $("#playbtn").click();
        myArray2.length = 0;
        console.log(myArray);
        
    }, 1000 * (myArray.length));  
};


function repeat() {
    for (i = 0; i < myArray.length; i++) {
        setTimeout(function(i) {    // this timeout function was copied from https://stackoverflow.com/questions/7749090/how-to-use-setinterval-function-within-for-loop
            // console.log("%d => %d", i, myArray[i] += 0);
            if (arrayEquals(myArray, myArray2) == true) {
                if (myArray[i] == 1){
                        $("#one").addClass("highlight");
                        setTimeout(function() {
                        $("#one").removeClass("highlight");
                        }, 500);  
                } else if (myArray[i] == 2) {
                        $("#two").addClass("highlight");
                        setTimeout(function() {
                        $("#two").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 3){
                        $("#three").addClass("highlight");
                        setTimeout(function() {
                        $("#three").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 4){
                        $("#four").addClass("highlight");
                        setTimeout(function() {
                        $("#four").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 5){
                        $("#five").addClass("highlight");
                        setTimeout(function() {
                        $("#five").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 6){
                        $("#six").addClass("highlight");
                        setTimeout(function() {
                        $("#six").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 7){
                        $("#seven").addClass("highlight");
                        setTimeout(function() {
                        $("#seven").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 8){
                        $("#eight").addClass("highlight");
                        setTimeout(function() {
                        $("#eight").removeClass("highlight");
                        }, 500);
                } else if (myArray[i] == 9){
                        $("#nine").addClass("highlight");
                        setTimeout(function() {
                        $("#nine").removeClass("highlight");
                        }, 500);  
                };
            };
        }, i * 1000, i);
    };
};

function check(myArray, myArray2){
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray2.every((val, index) => val === myArray[index]);
};

function score(){
    if (check(myArray, myArray2) == true){
       document.getElementById("scvalue").innerHTML = myArray2.length;
       console.log("score") 
    }
}

function gameOver(){
    setTimeout(function(){
    myArray.length = 0;
    myArray2.length = 0;
    console.log("OV")
    }, 200)
}


$("#playbtn").click(function(){
    let a = Math.floor(Math.random() * 9 + 1);
    if (a == 1) {
        $("#one").addClass("highlight");
        setTimeout(function() {
	    $("#one").removeClass("highlight");
        }, 500);
        myArray.push(1);
        $(".action>p").html("WATCH!");
    } else if (a == 2) {
        $("#two").addClass("highlight");
        setTimeout(function() {
	    $("#two").removeClass("highlight");
        }, 500);
        myArray.push(2);
        $(".action>p").html("WATCH!");
    } else if (a == 3) {
        $("#three").addClass("highlight");
        setTimeout(function() {
	    $("#three").removeClass("highlight");
        }, 500);
        myArray.push(3);
        $(".action>p").html("WATCH!");
    } else if (a == 4) {
        $("#four").addClass("highlight");
        setTimeout(function() {
	    $("#four").removeClass("highlight");
        }, 500);
        myArray.push(4);
        $(".action>p").html("WATCH!");
    } else if (a == 5) {
        $("#five").addClass("highlight");
        setTimeout(function() {
	    $("#five").removeClass("highlight");
        }, 500);
        myArray.push(5);
        $(".action>p").html("WATCH!");
    } else if (a == 6) {
        $("#six").addClass("highlight");
        setTimeout(function() {
	    $("#six").removeClass("highlight");
        }, 500);
        myArray.push(6);
        $(".action>p").html("WATCH!");
    } else if (a == 7) {
        $("#seven").addClass("highlight");
        setTimeout(function() {
	    $("#seven").removeClass("highlight");
        }, 500);
        myArray.push(7);
        $(".action>p").html("WATCH!");
    } else if (a == 8) {
        $("#eight").addClass("highlight");
        setTimeout(function() {
	    $("#eight").removeClass("highlight");
        }, 500);
        myArray.push(8);
        $(".action>p").html("WATCH!");
    } else if (a == 9) {
        $("#nine").addClass("highlight");
        setTimeout(function() {
	    $("#nine").removeClass("highlight");
        }, 500);
        myArray.push(9);
        $(".action>p").html("WATCH!");
    }
    $(".action>p").html("PLAY!");
});




$("#one").click(function(){
    $("#one").addClass("highlight");
    setTimeout(function() {
    $("#one").removeClass("highlight");
    }, 500);
    myArray2.push(1);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#two").click(function(){
    $("#two").addClass("highlight");
    setTimeout(function() {
    $("#two").removeClass("highlight");
    }, 500);
    myArray2.push(2);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#three").click(function(){
    $("#three").addClass("highlight");
    setTimeout(function() {
    $("#three").removeClass("highlight");
    }, 500);
    myArray2.push(3);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#four").click(function(){
    $("#four").addClass("highlight");
    setTimeout(function() {
    $("#four").removeClass("highlight");
    }, 500);
    myArray2.push(4);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#five").click(function(){
    $("#five").addClass("highlight");
    setTimeout(function() {
    $("#five").removeClass("highlight");
    }, 500);
    myArray2.push(5);
   if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#six").click(function(){
    $("#six").addClass("highlight");
    setTimeout(function() {
    $("#six").removeClass("highlight");
    }, 500);
    myArray2.push(6);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#seven").click(function(){
    $("#seven").addClass("highlight");
    setTimeout(function() {
    $("#seven").removeClass("highlight");
    }, 500);
    myArray2.push(7);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#eight").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#eight").removeClass("highlight");
    }, 500);
    myArray2.push(8);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});
$("#nine").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#nine").removeClass("highlight");
    }, 500);
    myArray2.push(9);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray2.length - 1}. Play again?`)
       console.log(myArray2)
       console.log("s") 
       gameOver()
}
score();
});





// function one(){
//     setTimeout(function(){
//         $("#one").addClass("highlight");
//         setTimeout(function() {
//         $("#one").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function two(){
//     setTimeout(function(){
//         $("#two").addClass("highlight");
//         setTimeout(function() {
//         $("#two").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function three(){
//     setTimeout(function(){
//         $("#three").addClass("highlight");
//         setTimeout(function() {
//         $("#three").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function four(){
//     setTimeout(function(){
//         $("#four").addClass("highlight");
//         setTimeout(function() {
//         $("#four").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function five(){
//     setTimeout(function(){
//         $("#five").addClass("highlight");
//         setTimeout(function() {
//         $("#five").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function six(){
//     setTimeout(function(){
//         $("#six").addClass("highlight");
//         setTimeout(function() {
//         $("#six").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function seven(){
//     setTimeout(function(){
//         $("#seven").addClass("highlight");
//         setTimeout(function() {
//         $("#seven").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function eight(){
//     setTimeout(function(){
//         $("#eight").addClass("highlight");
//         setTimeout(function() {
//         $("#eight").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };
// function nine(){
//     setTimeout(function(){
//         $("#nine").addClass("highlight");
//         setTimeout(function() {
//         $("#nine").removeClass("highlight");
//         }, 500);
//     }, 1000);
// };




// const iter = myArray[Symbol.iterator]();
// let result;
// while (!(result = iter.next()).done) {
//   console.log(result.value);
// };
