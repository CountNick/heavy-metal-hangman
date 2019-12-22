/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//array met te raden woorden
var woorden = ['bathory', 'venom', 'razor', 'immortal', 'grave', 'sodom', 'satyricon', 'graveland', 'suffocation', 'kreator', 'watain', 'xasthur', 'leviathan', 'samael', 'shining', 'ulver', 'gorgoroth', 'darkthrone', 'burzum', 'mayhem', 'emperor', 'enslaved', 'marduk', 'behemoth', 'graven', 'dissection', 'summoning', 'beherith', 'agalloch', 'taake', 'hellhammer', 'antestor', 'absurd', 'drudkh', 'death', 'batuschka', 'carcass', 'deicide', 'entombed', 'obituary', 'possessed', 'bloodbath', 'decapitated', 'immolation', 'meshuggah', 'autopsy', 'exciter', 'slayer', 'ghoul', 'motorhead', 'megadeth', 'anthrax', 'destruction', 'annihilator', 'voivod', 'havok', 'sabbat', 'inepsy', 'gehenna', 'horna', 'incantation', 'master', 'mgla', 'moonblood', 'morbid', 'obituary', 'necrophobic', 'nattefrost', 'nifelheim', 'oz', 'pest', 'pestilence', 'revenge', 'sarcofago', 'thorns', 'tsjuder', 'vomitor', 'deathhammer'];

//array waar de juiste pogingen in worden opgeslagen
var lijstMetGoedeLetters = [];

//genereert een random woord uit de array met woorden
//var randomWoord = woorden[Math.floor(Math.random() * woorden.length)];

//functie die een random woord uit de array berekent
function randomWoord(max) {

    var random = woorden[Math.floor(Math.random() * max)];

    return random;
}
// uitkomst van funtie randomWoord word opgeslagen in globaal variabele
var random = randomWoord(woorden.length);

console.log(random);

var levens = 9;



function initalisatie() {

    //variabele waar de legeplaatsen van de letters van het woord in gestopt worden
    var verborgenWoord = '';

    //met deze loop zorg ik ervoor dat elke letter vervangen word met een underscore
    for (var i = 0; i < random.length; i++) {

        var letter = random[i];

        //bron: https://stackoverflow.com/questions/6116474/how-to-find-if-an-array-contains-a-specific-string-in-javascript-jquery
        if (lijstMetGoedeLetters.indexOf(letter) > -1) {

            verborgenWoord += letter + ' ';

        } else {

            verborgenWoord += '_ ';
        }

    }

    var teRadenWoord = document.querySelectorAll("h1")[1];

    teRadenWoord.textContent = verborgenWoord;

    var laatLevensZien = document.querySelectorAll("h2")[0];

    // controleert of er nog underscores in verborgenwoord zitten
    if (verborgenWoord.indexOf('_ ') == -1) {

        //verandert aantal levens kopje in felicitatie
        laatLevensZien.textContent = 'All hail, the master of evil! Wil je het nog een keer proberen?';

        //bron: https://www.w3schools.com/Jsref/met_win_settimeout.asp, en hulp van m'n vader(programmeur) 
        setTimeout(function () {

                location.reload();
            
        }, 1000);

        //location.reload();
    } else {

        laatLevensZien.textContent = 'Je hebt nog: ' + levens + ' levens';

    }
}

//binnenhalen van opgegeven letter
function controleerLetter(event) {

    event.preventDefault();

    //binnenhalen letter invulveld
    var poging = document.querySelectorAll("input[type=text]")[0].value;

    //bron:https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
    //kijkt of de ingevulde letter in het woord zit
    if (random.includes(poging)) {

        if (lijstMetGoedeLetters.indexOf(poging) > -1) {
            
            var alIngevuld = document.querySelectorAll("h3")[0];
            
            alIngevuld.textContent = 'Deze letter heb je al ingevuld, probeer iets anders';

        }

        //bron: https://www.w3schools.com/jsref/jsref_push.asp
        //zorgt er voor dat een juiste poging in de lijst met goede letters word gestopt
        else {
            
            

            lijstMetGoedeLetters.push(poging);
            
            var titel = document.querySelectorAll("h3")[0];

            titel.textContent = 'Heavy Metal band guesser';
            
        }

        console.log(lijstMetGoedeLetters);

    } else {

        //console.log('helaas! probeer het nog een keer. ' + 'Je hebt nog ' + levens-- + ' levens');
        //console.log(levens--);
        levens--;

    }

    //controleren of er minder dan 1 leven is
    if (levens < 1) {

        console.log('game over');
        
        var gameOver = document.querySelectorAll("h3")[0];
        
        gameOver.textContent = 'game over';
        
        setTimeout(function () {        

        location.reload();
            
        }, 2000);
        
        
        

    }

    initalisatie();

}

initalisatie();

//oproepen van de functie controleer letter als er op submit geklikt word
document.querySelector("form").addEventListener("submit", controleerLetter, false);
