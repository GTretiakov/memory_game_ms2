let myArray = [];

let myArray2 = [];

let repArr = [];

let i;

for (i = 0; i < myArray.length; i++) {
    
};
// let i2;

// for (i2 = 0; i2 < myArray2.length; i2++) {
    
// };

// let nextI = i + myArray.length;

myArray.forEach(element => console.log(element));

function arrayEquals(myArray, myArray2) {
  return Array.isArray(myArray) &&
    Array.isArray(myArray2) &&
    myArray.length === myArray2.length &&
    myArray.every((val, index) => val === myArray2[index]);
};

function playClick(){
    setTimeout(function(){
        repeat();
        
        // myArray.forEach(repeat);
        setTimeout(function(){ 
            $("#playbtn").click();
            myArray2.length = 0;
            console.log(myArray);
            
            // console.log(repArr);
            // console.log(myArray[nextI]);
            const iter = myArray[Symbol.iterator]();
            let result;
            while (!(result = iter.next()).done) {
            // console.log(result.value);
            };
        }, 1000);
    }, 1000);
    
};

$("#playbtn").click(function(){
    let a = Math.floor(Math.random() * 9 + 1);
    if (a == 1) {
        $("#one").addClass("highlight");
        setTimeout(function() {
	    $("#one").removeClass("highlight");
        }, 500);
        myArray.push(1);
        // repArr.push(one());
        
    } else if (a == 2) {
        $("#two").addClass("highlight");
        setTimeout(function() {
	    $("#two").removeClass("highlight");
        }, 500);
        myArray.push(2);
        // repArr.push(two());
        
    } else if (a == 3) {
        $("#three").addClass("highlight");
        setTimeout(function() {
	    $("#three").removeClass("highlight");
        }, 500);
        myArray.push(3);
        // repArr.push(three());
        
    } else if (a == 4) {
        $("#four").addClass("highlight");
        setTimeout(function() {
	    $("#four").removeClass("highlight");
        }, 500);
        myArray.push(4);
        // repArr.push(four());
        
    } else if (a == 5) {
        $("#five").addClass("highlight");
        setTimeout(function() {
	    $("#five").removeClass("highlight");
        }, 500);
        myArray.push(5);
        // repArr.push(five());
        
    } else if (a == 6) {
        $("#six").addClass("highlight");
        setTimeout(function() {
	    $("#six").removeClass("highlight");
        }, 500);
        myArray.push(6);
        // repArr.push(six());
        
    } else if (a == 7) {
        $("#seven").addClass("highlight");
        setTimeout(function() {
	    $("#seven").removeClass("highlight");
        }, 500);
        myArray.push(7);
        // repArr.push(seven());
        
    } else if (a == 8) {
        $("#eight").addClass("highlight");
        setTimeout(function() {
	    $("#eight").removeClass("highlight");
        }, 500);
        myArray.push(8);
        // repArr.push(eight());
        
    } else if (a == 9) {
        $("#nine").addClass("highlight");
        setTimeout(function() {
	    $("#nine").removeClass("highlight");
        }, 500);
        myArray.push(9);
        // repArr.push(nine());
        
    }
    // console.log(myArray[i])
});




$("#one").click(function(){
    $("#one").addClass("highlight");
    setTimeout(function() {
    $("#one").removeClass("highlight");
    }, 500);
    myArray2.push(1);
    // console.log(myArray2[i2++])
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#two").click(function(){
    $("#two").addClass("highlight");
    setTimeout(function() {
    $("#two").removeClass("highlight");
    }, 500);
    myArray2.push(2);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#three").click(function(){
    $("#three").addClass("highlight");
    setTimeout(function() {
    $("#three").removeClass("highlight");
    }, 500);
    myArray2.push(3);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
}
});
$("#four").click(function(){
    $("#four").addClass("highlight");
    setTimeout(function() {
    $("#four").removeClass("highlight");
    }, 500);
    myArray2.push(4);
    if (arrayEquals(myArray, myArray2) == true) {
   setTimeout(function(){playClick()}, 1000);
    
}
});
$("#five").click(function(){
    $("#five").addClass("highlight");
    setTimeout(function() {
    $("#five").removeClass("highlight");
    }, 500);
    myArray2.push(5);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#six").click(function(){
    $("#six").addClass("highlight");
    setTimeout(function() {
    $("#six").removeClass("highlight");
    }, 500);
    myArray2.push(6);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#seven").click(function(){
    $("#seven").addClass("highlight");
    setTimeout(function() {
    $("#seven").removeClass("highlight");
    }, 500);
    myArray2.push(7);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#eight").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#eight").removeClass("highlight");
    }, 500);
    myArray2.push(8);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});
$("#nine").click(function(){
    $(this).addClass("highlight");
    setTimeout(function() {
    $("#nine").removeClass("highlight");
    }, 500);
    myArray2.push(9);
    if (arrayEquals(myArray, myArray2) == true) {
    setTimeout(function(){playClick()}, 1000);
    
}
});


function repeat() {
    for (i = 0; i < myArray.length; i++) {
    

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
}};



function one(){
    setTimeout(function(){
        $("#one").addClass("highlight");
        setTimeout(function() {
        $("#one").removeClass("highlight");
        }, 500);
    }, 1000);
};
function two(){
    setTimeout(function(){
        $("#two").addClass("highlight");
        setTimeout(function() {
        $("#two").removeClass("highlight");
        }, 500);
    }, 1000);
};
function three(){
    setTimeout(function(){
        $("#three").addClass("highlight");
        setTimeout(function() {
        $("#three").removeClass("highlight");
        }, 500);
    }, 1000);
};
function four(){
    setTimeout(function(){
        $("#four").addClass("highlight");
        setTimeout(function() {
        $("#four").removeClass("highlight");
        }, 500);
    }, 1000);
};
function five(){
    setTimeout(function(){
        $("#five").addClass("highlight");
        setTimeout(function() {
        $("#five").removeClass("highlight");
        }, 500);
    }, 1000);
};
function six(){
    setTimeout(function(){
        $("#six").addClass("highlight");
        setTimeout(function() {
        $("#six").removeClass("highlight");
        }, 500);
    }, 1000);
};
function seven(){
    setTimeout(function(){
        $("#seven").addClass("highlight");
        setTimeout(function() {
        $("#seven").removeClass("highlight");
        }, 500);
    }, 1000);
};
function eight(){
    setTimeout(function(){
        $("#eight").addClass("highlight");
        setTimeout(function() {
        $("#eight").removeClass("highlight");
        }, 500);
    }, 1000);
};
function nine(){
    setTimeout(function(){
        $("#nine").addClass("highlight");
        setTimeout(function() {
        $("#nine").removeClass("highlight");
        }, 500);
    }, 1000);
};




// const iter = myArray[Symbol.iterator]();
// let result;
// while (!(result = iter.next()).done) {
//   console.log(result.value);
// };
