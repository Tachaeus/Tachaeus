//String manipulation

//toUpperCase
{
    var statement = "I want to eat your pancreas!";
    let altered = statement.toUpperCase();
    
    console.log(altered);
}

//Substring
{
    var statement = "I want to eat your pancreas!";
    let altered = statement.substring(0, 13);
    
    console.log(altered);
}

//indexOf
{
    var statement = "I want to eat your pancreas!";
    let altered = statement.indexOf("pancreas");
    
    console.log(altered);
}

//Trim
{
    var statement = "      I want to     eat your pancreas!     ";
    let altered = statement.trim();
    
    console.log(altered);
}

//Split
{
    var statement = "I want to eat your pancreas!";
    let altered = statement.split(" ");
    
    console.log(altered);
}

//Replace
{
    var statement = "I want to eat your pancreas!";
    let altered = statement.replace("pancreas", "pizza");
    
    console.log(altered);
}

//Combo Ⅰ
{
    var statement = "I want to eat your pancreas!";
    let area = statement.substring(19, 28);
    let altered = area.toUpperCase();
    let second = area.replace("!", " ANYONE!?!?");

    console.log(altered, second);
}
