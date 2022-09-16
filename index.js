// function swap(){
    
//     let input = document.getElementById("take").innerHTML;

//     if(input == "Decimal:"){
//         document.getElementById("take").innerHTML = "Binary:"
//         document.getElementById("show").innerHTML = "Decimal:"
//         document.getElementById("output").innerHTML = ""
//         document.getElementById("dec").ariaPlaceholder = "binary"
//         document.getElementById("dec").value = null;
//         console.log("I am decimal")
//     }else if(input == "Binary:"){
//         document.getElementById("take").innerHTML = "Decimal:"
//         document.getElementById("show").innerHTML = "Binary:"
//         document.getElementById("output").innerHTML = ""
//         document.getElementById("dec").value = null;
//         console.log("I am binary")
//     }
// }

function decToBin(decimal){

        let binary = "";
    
        while(decimal > 0){
            binary += decimal%2;
            decimal = Math.floor(decimal/2);
            
        console.log(binary)
        }

        binary = binary.split("").reverse().join("");
        
        return binary
}

function decToHexa(decimal){
        var n = decimal;

        var hexaDeciNum = Array.from({length: 100},
            (_, i) => 0);

            // counter for hexadecimal number array
            var i = 0;
            while (n != 0) {
            // temporary variable to store remainder
            var temp = 0;

            // storing remainder in temp variable.
            temp = n % 16;

            // check if temp < 10
            if (temp < 10) {
                hexaDeciNum[i] =
                String.fromCharCode(temp + 48);
                i++;
            }
            else {
                hexaDeciNum[i] =
                String.fromCharCode(temp + 55);
                i++;
            }

            n = parseInt(n / 16);
            }
            let oct = "";
            for (let j = i - 1; j >= 0; j--){
                oct += (hexaDeciNum[j]);
            }

            return oct;
}

function decToOct(decimal){
    let octalNum = new Array(100);
 
    let i = 0;
    while (decimal != 0) {
    
        octalNum[i] = decimal % 8;
        decimal = Math.floor(decimal / 8);
        i++;
    }
    let oct = "";
    for (let j = i - 1; j >= 0; j--){
        oct += (octalNum[j]);
    }
    return oct
}

function binToDec(binary){
    
    var sum=0;
    sum = parseInt(binary,2);
    return sum;
}

function hexToBin(hexdec)
{
    var i = 0;

    let sum = ""
 
    while (hexdec[i]) {
 
        switch (hexdec[i]) {
        case '0':
            sum += "0000";
            break;
        case '1':
            sum += "0001";
            break;
        case '2':
            sum += "0010";
            break;
        case '3':
            sum += "0011";
            break;
        case '4':
            sum += "0100";
            break;
        case '5':
            sum += "0101";
            break;
        case '6':
            sum += "0110";
            break;
        case '7':
            sum += "0111";
            break;
        case '8':
            sum += "1000";
            break;
        case '9':
            sum += "1001";
            break;
        case 'A':
        case 'a':
            sum += "1010";
            break;
        case 'B':
        case 'b':
            sum += "1011";
            break;
        case 'C':
        case 'c':
            sum += "1100";
            break;
        case 'D':
        case 'd':
            sum += "1101";
            break;
        case 'E':
        case 'e':
            sum += "1110";
            break;
        case 'F':
        case 'f':
            sum += "1111";
            break;
        default:
            sum += "\nInvalid hexadecimal digit " + hexdec[i];
        }
        i++;
    }
    return sum;
}

function checkHexadecimal(hexa){
    var i = 0;
    while(hexa[i]){
        switch (hexa[i]) {
            case '0':
                // sum += "0000";
                break;
            case '1':
                // sum += "0001";
                break;
            case '2':
                // sum += "0010";
                break;
            case '3':
                // sum += "0011";
                break;
            case '4':
                // sum += "0100";
                break;
            case '5':
                // sum += "0101";
                break;
            case '6':
                // sum += "0110";
                break;
            case '7':
                // sum += "0111";
                break;
            case '8':
                // sum += "1000";
                break;
            case '9':
                // sum += "1001";
                break;
            case 'A':
            case 'a':
                // sum += "1010";
                break;
            case 'B':
            case 'b':
                // sum += "1011";
                break;
            case 'C':
            case 'c':
                // sum += "1100";
                break;
            case 'D':
            case 'd':
                // sum += "1101";
                break;
            case 'E':
            case 'e':
                // sum += "1110";
                break;
            case 'F':
            case 'f':
                // sum += "1111";
                break;
            default:
                return false;
            }
            i++;
    }
    return true;
}

function octToDec(octal){
    let num = octal;
            let dec_value = 0;
        
            // Initializing base value to 1, i.e 8^0
            let base = 1;
        
            let temp = num;
            while (temp) {
        
                // Extracting last digit
                let last_digit = temp % 10;
                temp = Math.floor(temp / 10);
        
                // Multiplying last digit with appropriate
                // base value and adding it to dec_value
                dec_value += last_digit * base;
        
                base = base * 8;
        }
        return dec_value
}

function checkNum(number){
    var i = 0;
    while(number[i]){
        switch (number[i]) {
            case '0':
                // sum += "0000";
                break;
            case '1':
                // sum += "0001";
                break;
            case '2':
                // sum += "0010";
                break;
            case '3':
                // sum += "0011";
                break;
            case '4':
                // sum += "0100";
                break;
            case '5':
                // sum += "0101";
                break;
            case '6':
                // sum += "0110";
                break;
            case '7':
                // sum += "0111";
                break;
            case '8':
                // sum += "1000";
                break;
            case '9':
                // sum += "1001";
                break;default:
                return false;
            }
            i++;
    }
    return true;
}

function convert(){
    let input = document.getElementById("take").value;

    let output = document.getElementById("show").value;

    let outputNo = document.getElementById("output")

    console.log(output)
    console.log(input);
    if(input == "Decimal"){

        var decimal = document.getElementById("dec").value;
        const number = checkNum(decimal);
        if(number == false){
            alert("Enter a Number");
            return
        }
        if(output == "Binary"){
            
        var decimal = document.getElementById("dec").value;

        const binary = decToBin(decimal)
        outputNo.innerText = binary
        }
        else if(output == "Decimal"){

            var decimal = document.getElementById("dec").value;
            console.log(decimal);
            outputNo.innerText = decimal;

        }else if(output == "Hexadecimal"){
            let decimal = document.getElementById("dec").value;

            const hexadec = decToHexa(decimal);
            
            outputNo.innerText = hexadec

        }else if(output == "Octal"){
            var decimal = document.getElementById("dec").value;
        
            const oct = decToOct(decimal)

        
        outputNo.innerText = oct
        }
    }else    if(input == "Binary"){
            
        let binary = document.getElementById("dec").value;

        var len = binary.toString().length-1;

        for(let i=0;i<=len;i++){
            if(binary.charAt(i) > 1){
                document.getElementById("output").innerHTML = "Not a Binary Number";
                return
            }
        }

        if(output == "Decimal"){

        const sum = binToDec(binary)

        outputNo.innerText = sum;

        }else if(output == "Binary"){

            
            document.getElementById("output").innerHTML = binary;

            
        }else if(output == "Hexadecimal"){

            const dec = binToDec(binary);
            const hebi = decToHexa(dec);
            outputNo.innerText = hebi;

        
        }else if(output == "Octal"){

            const dec = binToDec(binary);
            const ocbi = decToOct(dec);
            outputNo.innerText = ocbi;
        }
        
    }else 
    
    if(input == "Hexadecimal"){

        var hexa = document.getElementById("dec").value;

        const checkHexa = checkHexadecimal(hexa);

        if(checkHexa == false){
            outputNo.innerText = "Not a Heaxadecimal Number";
            return
        }

        console.log(hexa);
        if(output == "Decimal"){
            const heToBin = hexToBin(hexa);
            const dec = binToDec(heToBin);
            outputNo.innerText = dec;

        }else if(output == "Binary"){

            const heToBin = hexToBin(hexa);
            outputNo.innerText = heToBin
        
        }else if(output == "Hexadecimal"){
            outputNo.innerText = hexa;
        }else if(output == "Octal"){
        const bin = hexToBin(hexa);
        const dec = binToDec(bin);
        const oct = decToOct(dec);

        outputNo.innerText = oct;
        }

    }else 
    
    if(input == "Octal"){
        var Octal = document.getElementById("dec").value;

        const number = checkNum(Octal);

        if(number == false){
            alert("Enter a Number");
            return
        }
        if(output == "Decimal"){
            const dec = octToDec(Octal);
 
            outputNo.innerText = dec;
        }else if(output == "Binary"){
            const dec = octToDec(Octal);
            const bin = decToBin(dec);
            outputNo.innerText = bin;

        }else if(output == "Hexadecimal"){
            const dec = octToDec(Octal);
            const hexa = decToHexa(dec);
            outputNo.innerText = hexa;

        }else if(output == "Octal"){
            outputNo.innerText = Octal;
        }
    }
    console.log(input)
    
}
