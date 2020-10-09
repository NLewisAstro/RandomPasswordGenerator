//define variables

var UpperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var LowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var SpecialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var NumericChar = [0,1,2,3,4,5,6,7,8,9];

var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");


//generating password
function generatePrompts() {
    //password length
    var length = parseInt(prompt("How many characters would you like your password to contain?"));

    if (length < 8) {
        alert('The password must be at least 8 characters long');
        return;
    }

    if (length > 128) {
        alert('The password must be less than 128 characters');
        return;
    }

    //prompting for special characters

    var includeSpecialChar = confirm ('Do you want to include special characters in your password?');

    //prompting for numeric characters

    var includeNumericChar = confirm ('Do you want to include numeric characters in your password?');

    //prompting for lowercase characters

    var includeLowercaseChar = confirm ('Do you want to include Lowercase characters in your password?');

    //prompting for uppercase characters
    
    var includeUppercaseChar = confirm ('Do you want to include Uppercase characters in your password?');

    if (!includeSpecialChar && !includeNumericChar && !includeLowercaseChar && !includeUppercaseChar) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return;
    }

    var PromptOptions = {
        length: length,
        numeric: includeNumericChar,
        lowerCase: includeLowercaseChar,
        upperCase: includeUppercaseChar,
        specialCharacters: includeSpecialChar
    }

    return PromptOptions;

}

    function generatePassword() {
        
        var prompts = generatePrompts();
        console.log(prompts)

        var passwordChoices = [];
        console.log(passwordChoices)

        if (prompts.specialCharacters) {
            for( i = 0; i < SpecialChar.length; ++i) {
                passwordChoices.push(SpecialChar[i]);
            }
        }
        if (prompts.numeric) {
            for( i = 0; i < NumericChar.length; ++i) {
                passwordChoices.push(NumericChar[i]);
            }
        }
        if (prompts.lowerCase) {
            for( i = 0; i < LowerCaseChar.length; ++i) {
                passwordChoices.push(LowerCaseChar[i]);
            }
        }
        if (prompts.upperCase) {
            for( i = 0; i < UpperCaseChar.length; ++i) {
                passwordChoices.push(UpperCaseChar[i]);
            }
        }
        
        var finishedPassword =[];

        for (let i = 0; i< prompts.length; ++i) {
            var randomPicker = Math.floor(Math.random() * Math.floor(passwordChoices.length));
         finishedPassword.push(passwordChoices[randomPicker])
        }

        console.log(finishedPassword)

        var superFinal = finishedPassword.join('');
        console.log(superFinal)
    
        document.getElementById("display").textContent = superFinal;
    }
    var password = "";

    function copytoClipboard() {

        document.getElementById("display").select();
    
        document.execCommand("Copy");
    
        alert("Your password has now been copied to the clipboard");
}
generatePasswordButton.addEventListener('click', generatePassword);
copyToClipBoardButton.addEventListener('click', copytoClipboard);