let myArray = [];
let myArray2 = [];
let i;
let AnimSpeed = 500;
let GameSpeed = 800;

function arrayEquals(myArray, myArray2) {  // function was copied from https://masteringjs.io/tutorials/fundamentals/compare-arrays
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
}; 
function soundClick() {
    $(".clicks").trigger('play');
}
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
            if (arrayEquals(myArray, myArray2) == true) {
                if (myArray[i] == 1){
                    soundClick()
                        $("#one").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#one").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);  
                } else if (myArray[i] == 2) {
                    soundClick()
                        $("#two").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#two").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 3){
                    soundClick()
                        $("#three").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#three").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 4){
                    soundClick()
                        $("#four").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#four").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 5){
                    soundClick()
                        $("#five").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#five").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 6){
                    soundClick()
                        $("#six").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#six").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 7){
                    soundClick()
                        $("#seven").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#seven").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 8){
                    soundClick()
                        $("#eight").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#eight").removeClass("highlight").addClass("normal");
                        }, AnimSpeed);
                } else if (myArray[i] == 9){
                    soundClick()
                        $("#nine").removeClass("normal").addClass("highlight");
                        setTimeout(function() {
                        $("#nine").removeClass("highlight").addClass("normal");
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
    }
}

function resetScore(){
    document.getElementById("scvalue").innerHTML = myArray.length;
}

function gameOver(){
    setTimeout(function(){
        myArray.length = 0;
        myArray2.length = 0;
        $(".action>p").html("Press Start to play");
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

$("#slow").click(function() {
    soundClick()
    $(this).removeClass("speedBtnOff").addClass("speedBtnOn")
    $("#medium").removeClass("speedBtnOn").addClass("speedBtnOff")
    $("#fast").removeClass("speedBtnOn").addClass("speedBtnOff")
    AnimSpeed = 600;
    GameSpeed = 1100;
})
$("#medium").click(function() {
    soundClick()
    $(this).addClass("speedBtnOn").removeClass("speedBtnOff")
    $("#fast").removeClass("speedBtnOn").addClass("speedBtnOff")
    $("#slow").removeClass("speedBtnOn").addClass("speedBtnOff")
    AnimSpeed = 500;
    GameSpeed = 800;
})
$("#fast").click(function() {
    soundClick()
    $(this).removeClass("speedBtnOff").addClass("speedBtnOn")
    $("#medium").removeClass("speedBtnOn").addClass("speedBtnOff")
    $("#slow").removeClass("speedBtnOn").addClass("speedBtnOff")
    AnimSpeed = 300;
    GameSpeed = 500;
})

$("#playbtn").click(function(){
    disablePlay()
    resetScore()
    $(".action>p").html("WATCH!");
    let a = Math.floor(Math.random() * 9 + 1);
    if (a == myArray[myArray.length - 1]) {
        $("#playbtn").click();
    } else
    setTimeout(function(){
    if (a == 1) {
        soundClick()
        $("#one").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#one").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(1);
    } else if (a == 2) {
        soundClick()
        $("#two").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#two").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(2);
    } else if (a == 3) {
        soundClick()
        $("#three").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#three").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(3);
    } else if (a == 4) {
        soundClick()
        $("#four").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#four").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(4);
    } else if (a == 5) {
        soundClick()
        $("#five").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#five").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(5);
    } else if (a == 6) {
        soundClick()
        $("#six").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#six").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(6);
    } else if (a == 7) {
        soundClick()
        $("#seven").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#seven").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(7);
    } else if (a == 8) {
        soundClick()
        $("#eight").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#eight").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(8);
    } else if (a == 9) {
        soundClick()
        $("#nine").removeClass("normal").addClass("highlight");
        setTimeout(function() {
	    $("#nine").removeClass("highlight").addClass("normal");
        }, AnimSpeed);
        myArray.push(9);
    }
    console.log(myArray);
    setTimeout(function(){
    $(".action>p").html("PLAY!");
    }, GameSpeed)
    enableBtn()
    }, GameSpeed)
});

$("#one").click(function(){
    soundClick()
    $("#one").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#one").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#two").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#two").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#three").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#three").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#four").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#four").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#five").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#five").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#six").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#six").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#seven").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#seven").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#eight").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#eight").removeClass("highlight").addClass("normal");
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
    soundClick()
    $("#nine").removeClass("normal").addClass("highlight");
    setTimeout(function() {
    $("#nine").removeClass("highlight").addClass("normal");
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
$("#instBtn").click(function(){
    soundClick()
    $(".instructions>p").toggle( "fast" );
    $("#instBtn").toggleClass("highlight")
    $("#instBtn").toggleClass("normal")
})
