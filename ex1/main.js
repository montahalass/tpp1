function chooseDifficulity(){
    let difficulty = prompt("Choisissez le niveau de difficulté souhaité(facile,intermédiaire,difficile)").toLowerCase();
    let maxTry, lastNumber;

    switch (difficulty) {
        case "facile":
            maxTry = 5;
            lastNumber = 10;
            break;
        case "intermédiaire":
            maxTry = 5;
            lastNumber = 50;
            break;
        case "difficile":
            maxTry = 5;
            lastNumber = 100;
            break;
        default:
            alert("Niveau non valide, démarrage avec le niveau facile");
            maxTry = 5;
            lastNumber = 10; 
    }

    const secretNum = Math.floor(Math.random() * lastNumber) + 1;

    let attempts = 0;
    let guess;

    while (attempts < maxTry) {
        guess = parseInt(prompt(`Trouvez le nombre (entre 1 et ${lastNumber}):`));
        attempts++;

        if (guess === secretNum) {
            alert('Félicitations! Vous avez trouvé le nombre.');
            break;
        } else if (guess < secretNum) {
            alert("Le nombre est trop petit. Essayez à nouveau.");
        } else {
            alert("Le nombre est trop grand. Essayez à nouveau.");
        }
    }

    if (attempts === maxTry) {
        alert("Désolé, vous avez utilisé toutes vos tentatives.");
    }

    const playAgain = confirm("Voulez-vous jouer de nouveau?");
    if (playAgain) {
        difficulty=chooseDifficulity();
        GuessNumber(difficulty.maxTry,difficulty.lastNumber);
    } else {
        alert("Merci d'avoir joué!");
    }
}
chooseDifficulity();
GuessNumber()