let myArray = [];
let myArray2 = [];
let repArr = [];
let i;
let AnimSpeed = 400;
let GameSpeed = 800;
let myArrL = myArray.length
const lastI = myArray[myArray.length - 1];
function arrayEquals(myArray, myArray2) {  // function was copied from https://masteringjs.io/tutorials/fundamentals/compare-arrays
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
}; 

function playClick(){
    score();
    disableBtn()
    $(".action>p").html("WATCH!");
    setTimeout(function(){
        repeat();
        setTimeout(function(){ 
            $("#playbtn").click();
            myArray2.length = 0;            
        }, GameSpeed * (myArray.length - 1));  
    }, GameSpeed);
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
                        }, AnimSpeed);  
                } else if (myArray[i] == 2) {
                        $("#two").addClass("highlight");
                        setTimeout(function() {
                        $("#two").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 3){
                        $("#three").addClass("highlight");
                        setTimeout(function() {
                        $("#three").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 4){
                        $("#four").addClass("highlight");
                        setTimeout(function() {
                        $("#four").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 5){
                        $("#five").addClass("highlight");
                        setTimeout(function() {
                        $("#five").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 6){
                        $("#six").addClass("highlight");
                        setTimeout(function() {
                        $("#six").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 7){
                        $("#seven").addClass("highlight");
                        setTimeout(function() {
                        $("#seven").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 8){
                        $("#eight").addClass("highlight");
                        setTimeout(function() {
                        $("#eight").removeClass("highlight");
                        }, AnimSpeed);
                } else if (myArray[i] == 9){
                        $("#nine").addClass("highlight");
                        setTimeout(function() {
                        $("#nine").removeClass("highlight");
                        }, AnimSpeed);  
                };
            };
        }, i * GameSpeed, i);
    };
};

function check(myArray, myArray2){
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray2.every((val, index) => val === myArray[index]);
};

function score(){
    if (check(myArray, myArray2) == true){
       document.getElementById("scvalue").innerHTML = myArray.length;
       console.log("score") 
    }
}

function resetScore(){
    document.getElementById("scvalue").innerHTML = myArray.length;
}

function gameOver(){
    
    setTimeout(function(){
    myArray.length = 0;
    myArray2.length = 0;
    console.log("OV")
    $(".action>p").html("Press Play to start");
    disableBtn()
    enablePlay()
    }, 200)
}

    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;

function disableBtn() {
    console.log("disable")
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
}

function enableBtn() {
    console.log("enable")
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
}

function disablePlay() {
    document.getElementById("playbtn").disabled = true;
}
function enablePlay() {
    document.getElementById("playbtn").disabled = false;
}

$("#playbtn").click(function(){
    disablePlay()
    resetScore()
    $(".action>p").html("WATCH!");
    setTimeout(function(){
    let a = Math.floor(Math.random() * 9 + 1);
    if (a == myArray[myArray.length - 1]) {
        $("#playbtn").click();
    } else
    if (a == 1) {
        $("#one").addClass("highlight");
        setTimeout(function() {
	    $("#one").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(1);
    } else if (a == 2) {
        $("#two").addClass("highlight");
        setTimeout(function() {
	    $("#two").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(2);
    } else if (a == 3) {
        $("#three").addClass("highlight");
        setTimeout(function() {
	    $("#three").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(3);
    } else if (a == 4) {
        $("#four").addClass("highlight");
        setTimeout(function() {
	    $("#four").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(4);
    } else if (a == 5) {
        $("#five").addClass("highlight");
        setTimeout(function() {
	    $("#five").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(5);
    } else if (a == 6) {
        $("#six").addClass("highlight");
        setTimeout(function() {
	    $("#six").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(6);
    } else if (a == 7) {
        $("#seven").addClass("highlight");
        setTimeout(function() {
	    $("#seven").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(7);
    } else if (a == 8) {
        $("#eight").addClass("highlight");
        setTimeout(function() {
	    $("#eight").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(8);
    } else if (a == 9) {
        $("#nine").addClass("highlight");
        setTimeout(function() {
	    $("#nine").removeClass("highlight");
        }, AnimSpeed);
        myArray.push(9);
    }
    console.log(myArray);
    $(".action>p").html("PLAY!");
    enableBtn()
    }, GameSpeed)
    
});




$("#one").click(function(){
    $("#one").addClass("highlight");
    setTimeout(function() {
    $("#one").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(1);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#two").click(function(){
    $("#two").addClass("highlight");
    setTimeout(function() {
    $("#two").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(2);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#three").click(function(){
    $("#three").addClass("highlight");
    setTimeout(function() {
    $("#three").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(3);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#four").click(function(){
    $("#four").addClass("highlight");
    setTimeout(function() {
    $("#four").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(4);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#five").click(function(){
    $("#five").addClass("highlight");
    setTimeout(function() {
    $("#five").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(5);
   if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#six").click(function(){
    $("#six").addClass("highlight");
    setTimeout(function() {
    $("#six").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(6);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#seven").click(function(){
    $("#seven").addClass("highlight");
    setTimeout(function() {
    $("#seven").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(7);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#eight").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#eight").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(8);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

});
$("#nine").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#nine").removeClass("highlight");
    }, AnimSpeed);
    myArray2.push(9);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, GameSpeed);
    } else
       if (check(myArray, myArray2) == false){
       alert(`Game Over. Your score is ${myArray.length - 1}. Play again?`)
       gameOver()
}

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
