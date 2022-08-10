function swap(){
    
    let input = document.getElementById("take").innerHTML;

    if(input == "Decimal:"){
        document.getElementById("take").innerHTML = "Binary:"
        document.getElementById("show").innerHTML = "Decimal:"
        document.getElementById("output").innerHTML = ""
        document.getElementById("dec").ariaPlaceholder = "binary"
        document.getElementById("dec").value = null;
        console.log("I am decimal")
    }else if(input == "Binary:"){
        document.getElementById("take").innerHTML = "Decimal:"
        document.getElementById("show").innerHTML = "Binary:"
        document.getElementById("output").innerHTML = ""
        document.getElementById("dec").value = null;
        console.log("I am binary")
    }
}


function convert(){
    let input = document.getElementById("take").innerHTML;
    if(input == "Decimal:"){
        var decimal = document.getElementById("dec").value;
        let binary = "";
        
        console.log(binary)
        while(decimal > 0){
            binary += decimal%2;
            decimal = Math.floor(decimal/2);
            
        console.log(binary)
        }

        binary = binary.split("").reverse().join("");

        console.log("i m deci")
        console.log(binary)
        let output = document.getElementById("output")
        // console.log(output)
        output.innerText = binary
    }else if(input == "Binary:"){

        let binary = document.getElementById("dec").value;
        var len = binary.toString().length-1;

        var sum=0;

        for(let i=0;i<=len;i++){
            if(binary.charAt(i) > 1){
                document.getElementById("output").innerHTML = "Not a Binary Number";
                return
            }
        }

        console.log(binary);

        sum = parseInt(binary,2);
        console.log(sum);
        document.getElementById("output").innerHTML = sum;

        console.log("i m binary")
        
    }
    console.log(input)

    console.log(decimal)
    
    
    
}
