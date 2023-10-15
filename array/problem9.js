// Write a JavaScript program that accepts a string as input
// and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' 
//the output should be 'tHE qUICK bROWN fOX'.

//meaning capital letter should become small letter and small letter should become 
//capital letter.

function swapCaseOfCharacter(sentence) {
    let newSentence=''
    for(let i=0;i<sentence.length;i++){
        
        if(sentence[i]===sentence[i].toUpperCase()){
            newSentence+=sentence[i].toLowerCase();

        }else{
            newSentence+=sentence[i].toUpperCase();
        }
    }
    console.log(newSentence);
}
swapCaseOfCharacter('The Quick Brown Fox' );