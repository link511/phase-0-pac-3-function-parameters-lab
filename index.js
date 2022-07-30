function introduction(name)
{
   return (`Hi, my name is ${name}.`);
}

console.log(introduction('Alessandra'));


function introductionWithLanguage(name, language)

{
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


//                                               Default Value  
function introductionWithLanguageOptional(name, language="JavaScript")

{
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);

}




console.log(introductionWithLanguage('Peter', 'CSS'));
console.log(introductionWithLanguageOptional('Lee', 'Html'));
console.log(introductionWithLanguageOptional('Lee'));

