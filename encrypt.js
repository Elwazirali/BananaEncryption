function myFunction(){
    console.log("meesage");

	var input,output,key, outkey;
	output = "";
	input = document.getElementById("textstyle1").value;	
	for(var i=0; i<input.length; i++)
	{
        outkey = 0;
        key = Math.floor((Math.random()*10));
		switch(input[i])
		{
			default:
			end = " ";
			output += end;
            outkey = "space";
			break;
			
			case "a":
			outkey = 26*key+1;
			break;
			
			case "b":
			outkey = 26*key+2;

			break;
			
			case "c":
			outkey = 26*key+3;
			break;
			
			case "d":
			outkey = 26*key+4;
			break;
			
			case "e":
			outkey = 26*key+5;
			break;
			
			case "f":
			outkey = 26*key+6;
			break;
			
			case "g":
			outkey = 26*key+7;
			break;
			
			case "h":
			outkey = 26*key+8;
			break;
			
			case "i":
			outkey = 26*key+9;
			break;
			
			case "j":
			outkey = 26*key+10;
			break;
			
			case "k":
			outkey = 26*key+11;
			break;
			
			case "l":
			outkey = 26*key+12;
			break;
			
			case "m":
			outkey = 26*key+13;
			break;
			
			case "n":
			outkey = 26*key+14;
			break;
			
			case "o":
			outkey = 26*key+15;
			break;
			
			case "p":
			outkey = 26*key+16;
			break;
			
			case "q":
			outkey = 26*key+17;
			break;
			
			case "r":
			outkey = 26*key+18;
			break;
			
			case "s":
			outkey = 26*key+19;
			break;
			
			case "t":
			outkey = 26*key+20;
			break;
			
			case "u":
			outkey = 26*key+21;
			break;
			
			case "v":
			outkey = 26*key+22;
			break;
			
			case "w":
			outkey = 26*key+23;
			break;
			
			case "x":
			outkey = 26*key+24;
			break;
			
			case "y":
			outkey = 26*key+25;
			break;
			
			case "z":
			outkey = 26*key+26;
			break;
		}
        var letter, firstletter, remainder;     //the variable letter is used in order to add the correct first letter, firstletter is the integer used to determine the letter,
        //remainder is a variable user to determine the number that remains and output is what i want to output, maybe can change output to output...
        firstletter = Math.floor(outkey/10);
        remainder = outkey - firstletter*10;
        switch(firstletter)
        {
            case "space":
            break;
            case 0:
            output += remainder;
            break;
            case 1:
            letter = "a";
            output += letter + remainder;
            break;
            case 2:
            letter = "b";
            output += letter + remainder;
            break;
            case 3:
            letter = "c";
            output += letter + remainder;
            break;
            case 4:
            letter = "d";
            output += letter + remainder;
            break;
            case 5:
            letter = "e";
            output += letter + remainder;
            break;
            case 6:
            letter = "f";
            output += letter + remainder;
            break;
            case 7:
            letter = "g";
            output += letter + remainder;
            break;
            case 8:
            letter = "h";
            output += letter + remainder;
            break;
            case 9:
            letter = "i";
            output += letter + remainder;
            break;
            case 10:
            letter = "j";
            output += letter + remainder;
            break;
            case 11:
            letter = "k";
            output += letter + remainder;
            break;
            case 12:
            letter = "l";
            output += letter + remainder;
            break;
            case 13:
            letter = "m";
            output += letter + remainder;
            break;
            case 14:
            letter = "n";
            output += letter + remainder;
            break;
            case 15:
            letter = "o";
            output += letter + remainder;
            break;
            case 16:
            letter = "p";
            output += letter + remainder;
            break;
            case 17:
            letter = "q";
            output += letter + remainder;
            break;
            case 18:
            letter = "r";
            output += letter + remainder;
            break;
            case 19:
            letter = "s";
            output += letter + remainder;
            break;
            case 20:
            letter = "t";
            output += letter + remainder;
            break;
            case 21:
            letter = "u";
            output += letter + remainder;
            break;
            case 22:
            letter = "v";
            output += letter + remainder;
            break;
            case 23:
            letter = "w";
            output += letter + remainder;
            break;
            case 24:
            letter = "x";
            output += letter + remainder;
            break;
            case 25:
            letter = "y";
            output += letter + remainder;
            break;
            case 26:
            letter = "z";
            output += letter + remainder;
            break;
        }
        
    }
    document.getElementById("textstyle2").value = output;
}
function deCrypt(){

var input, output, numbervalue;
input = document.getElementById("textstyle1").value;
for(var i =0; i< input.length; i++)
    {
        if (input[i] == " ")
        {
            output += " ";
        }
        else if(input[i] >= '0' && input [i] <=9)
        {
            numbervalue += parseInt(input[i]);
            numbervalue % 26;
        }
        else
        {
            switch(input[i])
            {
			case "a":
			numbervalue = 10;
			break;
			
			case "b":
			numbervalue = 20;

			break;
			
			case "c":
			numbervalue = 30;
			break;
			
			case "d":
			numbervalue = 40;
			break;
			
			case "e":
			numbervalue = 50;
			break;
			
			case "f":
			numbervalue = 60;
			break;
			
			case "g":
			numbervalue = 70;
			break;
			
			case "h":
			numbervalue = 80;
			break;
			
			case "i":
			numbervalue = 90;
			break;
			
			case "j":
			numbervalue = 100;
			break;
			
			case "k":
			numbervalue = 110;
			break;
			
			case "l":
			numbervalue = 120;
			break;
			
			case "m":
			numbervalue = 130;
			break;
			
			case "n":
			numbervalue = 140;
			break;
			
			case "o":
			numbervalue = 150;
			break;
			
			case "p":
			numbervalue = 160;
			break;
			
			case "q":
			numbervalue = 170;
			break;
			
			case "r":
			numbervalue = 180;
			break;
			
			case "s":
			numbervalue = 190;
			break;
			
			case "t":
			numbervalue = 200;
			break;
			
			case "u":
			numbervalue = 210;
			break;
			
			case "v":
			numbervalue = 220;
			break;
			
			case "w":
			numbervalue = 230;
			break;
			
			case "x":
			numbervalue = 240;
			break;
			
			case "y":
			numbervalue = 250;
			break;
			
			case "z":
			numbervalue = 260;
			break;
                
            }
        }
    }
}
