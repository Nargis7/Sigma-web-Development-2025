// create a business name generator by combining list of adjective and shop name and another word using only strings or function
// This is a comment describing what the code does.

const adjectives = ['Super', 'Amazing', 'Incredible', 'Fantastic'];
// Declares an array of adjectives to use in the business name.

const shopNames = ['Coffee', 'Book', 'Gadget', 'Clothing'];
// Declares an array of shop types or themes.

const anotherWords = ['Shop', 'Store', 'Place', 'Hub'];
// Declares an array of words to end the business name.

function generateBusinessName() {
// Defines a function to generate a random business name.
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    // Picks a random adjective from the adjectives array.

    const randomShopName = shopNames[Math.floor(Math.random() * shopNames.length)];
    // Picks a random shop name from the shopNames array.

    const randomAnotherWord = anotherWords[Math.floor(Math.random() * anotherWords.length)];
    // Picks a random word from the anotherWords array.

    return `${randomAdjective} ${randomShopName} ${randomAnotherWord}`;
    // Combines the three random words into a single string and returns it.
}

console.log(generateBusinessName());
// Calls the function and prints the generated