function check() {
    var qz1 = document.quiz.qz1.value;
    var qz2 = document.quiz.qz2.value;
    var qz3 = document.quiz.qz3.value;
    var qz4 = document.quiz.qz4.value;
    var qz5 = document.quiz.qz5.value;
    var qz6 = document.quiz.qz6.value;
    var qz7 = document.quiz.qz7.value;
    var qz8 = document.quiz.qz8.value;
    var qz9 = document.quiz.qz9.value;
    var qz10 = document.quiz.qz10.value;
    var qz11 = document.quiz.qz11.value;
    var qz12 = document.quiz.qz12.value;
    var correct = 0;

    if (qz1 == "Ross"){
        correct++;
    }
    if(qz2 == "z1"){
        correct++ ;
    }    
    if(qz3 == "z3"){
        correct++ ;
    }  
    if(qz4 == "z4"){
        correct++ ;
    }  
    if(qz5 == "z2"){
        correct++ ;
    }  
    if(qz6 == "z4"){
        correct++ ;
    }  
    if(qz7 == "z1"){
        correct++ ;
    }
    if(qz8 == "z3"){
        correct++ ;
    }
    if(qz9 == "z2"){
        correct++ ;
    }
    if(qz10 == "z3"){
        correct++ ;
    }
    if(qz11 == "z1"){
        correct++ ;
    }
    if(qz12 == "z2"){
        correct++ ;
    }


var message = [ "It's alright, We're totally calm..." , "You go gurl!" , "Could i be anymore Fan!" ];
var pic = [(src='image/freakout.gif'), (src="image/fine.gif"), (src="image/clap.gif")];

 var Range;

 if(correct >= 9){
     Range = 2;          
 }
 if(correct <= 8){
     Range = 1;          
 }
 if(correct <= 4){
    Range = 0;          
}

document.getElementById("after_submit").style.visibility="visible";
document.getElementById("you").innerHTML = "You've Got " + correct;
document.getElementById("what").innerHTML =  message[Range];
document.getElementById("picture").src = pic[Range];
}