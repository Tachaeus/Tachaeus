//Formats
//Locale Info
const local = new Intl.Locale("En-UK");
const seclocal = new Intl.Locale("En-Scot-UK");

console.log(local.language, local.script, local.region);
console.log(seclocal.language, seclocal.script, seclocal.region);


//Date/Time-Format
const d = new Intl.DateTimeFormat("En-us-u-ca-hebrew");
const t = new Intl.DateTimeFormat("En-us", {calender: "hebrew"});
console.log(new Intl.DateTimeFormat());


//Used inorder to get a default calender => /* Coz number-formatting will only affect the value u serve */
const locale = new Intl.Locale("Es-EU");
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar);


{
    //This won't work here, try in browser...
/* const seclocale = new Intl.Locale("ar-EG");
   console.log(seclocale.getCalendars());      */
}


//Currency format
const price = Intl.NumberFormat("En-UK", {
    style: "currency",
    currency: "EUR",
}
);
let tax = 15.20;
console.log(price.formatToParts(49.99 - tax));

//Now we can close the javascript chapter, for now at least
console.log(close())