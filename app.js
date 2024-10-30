
let rNumber = (Math.floor((Math.random() * 10) + 1));
console.log(rNumber);
let chances = 0;

function login() {

    //(Math.floor((Math.random() * 10) + 1));

    let txtFieldValue = document.getElementById("txtField").value;
    //console.log(txtFieldValue);
    //alert(txtFieldValue);
    
    for (let i = 0; i < 3; i++) {
        if (rNumber == txtFieldValue) {
            //console.log("Game over! The correct number was " + rNumber);
            alert("Game over! The correct number was "+rNumber);
            break;
        } else {
            if (txtFieldValue > rNumber) {
                //alert("Your number is incorrect");
                chances = txtFieldValue - rNumber;
                alert(chances+" Your number is too high");
                break;
            } else {
                // alert("Your number is incorrect");
                chances = rNumber - txtFieldValue;
                alert(chances+" Your number is too low");
                break;
            }
        }
    }
    }
    

   





