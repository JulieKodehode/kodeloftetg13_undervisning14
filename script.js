/* 
OPPGAVE 1:
  Lag en ny knapp i HTML og få knappen til å console.log en beskjed du selv velger

  Lag en steg for steg liste med kommentarer for hva du må gjøre for å få det til

  Julie's Guide To Button Events:
    1. Lag en knapp i HTML
    2. Gi den knappen et id-navn
    3. Lag en variabel i JS som henter elementet med det id-navnet.
      a. Bruk document.querySelector metoden for å hente elementet
    4. Bruk console.log til å sjekke at variablen henter riktig element
    5. Legg til en event listner på variablen
      a. Bruk addEventListner() som lytter etter et klikk og tar i mot en anonym funksjon
    6. I funksjons deklarasjonen logg en beskjed til console.
      a. Bruk console.log() metoden med en string
 */

const clickButton = document.querySelector("#clickButton");
console.log(clickButton);

clickButton.addEventListener("click", function () {
  console.log("Jeg er en klikket knapp!")
})


//FÅ TEKST UT PÅ SIDEN

/*
1. Hent inn div ved å bruke ID
2. Lage nytt element
3. Legge til tekst på elementet
4. Legge til det nye elementet i div
5. Legge det inn i en addEventListener, så det kun skjer når vi trykker på knappen
*/

//ENDRE STYLING I JS

/*
classList.add = legger til en class
classlist.remove = tar bort en class
classlist.toggle = skifter mellom å legge til og ta bort klassenavn
*/

/*
1. hente inn id til div
2. hent inn id til fargeknapp
3. lag en eventlistener til knappen
4. lagge til classList med ny bakgrunnsfarge i eventlistener
*/

/*
OPPGAVE 2:
1. Lag en ny div med en id
2. Legg til en knapp eller bruk en av knappene som er der allerede og hent inn id til JS
3. Lag en eventlistener til knappen
4. Legg til noe tekst til div
5. lag en class med style til knappen som du legger på med classList når du trykker på knappen

Bonus:
Lag en animasjon som blir aktivert når du trykker på knappen
*/
