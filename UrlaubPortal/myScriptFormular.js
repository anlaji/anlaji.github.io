/**
 * Created by Angela on 17/05/14.
 */
var bundeslaender = new Array();
bundeslaender[0] = 'Burgenland';
bundeslaender[1] = 'Niederösterreich';
bundeslaender[2] = 'Oberösterreich';
bundeslaender[3] = 'Osttirol';
bundeslaender[4] = 'Salzburg';
bundeslaender[5] = 'Steiermark';
bundeslaender[6] = 'Tirol';
bundeslaender[7] = 'Vorarlberg';
bundeslaender[8] = 'Wien';
var typs = new Array();
typs[0] = 'Apartment';
typs[1] = 'Bauernhof';
typs[2] = 'Campingplatz';
typs[3] = 'Gasthof';
typs[4] = 'Hotel';
typs[5] = 'Pension';
var nameLeer = '';
var su = true;
var strFilterName =
  /^[A-Za-z -.ƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèé êëìíîïðñòóôõöøùúûüýþÿ]*$/;
var strFilter = /^[A-Za-z_.-@]*$/;
var strFilterPLZ = /^[0-9]{0,6}$/;
var strFilterAdresse =
  /^[A-Za-z .-ƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèé êëìíîïðñòóôõöøùúûüýþÿ]+.[0-9]+$/;
var strFilterTelefon = /^[0-9() \+]*$/;
var strFilterEmail = /^([\da-z_\.-]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/;
var strFilterURL =
  /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/;
var strFilterBild = /([^\s]+(?=\.(jpg|gif|png|bmp))\.\2)/;
function chkBundesland(bula) {
  for (var i = 0; i < bundeslaender.length; i++) {
    if (bula == bundeslaender[i]) {
      document.getElementById('bula').style.color = 'black';
      document.getElementById('bula').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
      return 1;
    } else {
      document.getElementById('bula').style.color = 'red';
      document.getElementById('bula').style.fontWeight = 'bold';
      document.getElementById('bula').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte Bundesland auswählen';
    }
  }
}
function chkName(namen) {
  if (namen.length == 0) {
    document.getElementById('na').style.color = 'black';
    document.getElementById('na').innerHTML = '*';
  } else {
    document.getElementById('na').style.color = 'red';
    document.getElementById('na').style.fontWeight = 'bold';
    document.getElementById('na').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Name eingeben';

    if (strFilterName.test(namen)) {
      document.getElementById('na').style.color = 'black';
      document.getElementById('na').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
    }
  }
}
function chkTyp(typ) {
  for (var i = 0; i < typs.length; i++) {
    if (typ == typs[i]) {
      document.getElementById('ty').style.color = 'black';
      document.getElementById('ty').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
      return 1;
    } else {
      document.getElementById('ty').style.color = 'red';
      document.getElementById('ty').style.fontWeight = 'bold';
      document.getElementById('ty').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte Typ auswählen';
    }
  }
}
function chkAdresse(adresse) {
  if (adresse.length == 0) {
    document.getElementById('st').style.color = 'black';
    document.getElementById('st').innerHTML = '*';
  } else {
    document.getElementById('st').style.color = 'red';
    document.getElementById('st').style.fontWeight = 'bold';
    document.getElementById('st').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Straße und Hausnummer angeben';

    if (strFilterAdresse.test(adresse)) {
      document.getElementById('st').style.color = 'black';
      document.getElementById('st').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
    }
  }
}
function chkPLZ(number) {
  if (!strFilterPLZ.test(number)) {
    document.getElementById('plz').style.color = 'red';
    document.getElementById('plz').style.fontWeight = 'bold';
    document.getElementById('plz').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültige PLZ eingeben';
  } else if (number.length < 4 && strFilterPLZ.test(number)) {
    document.getElementById('plz').style.color = 'black';
    document.getElementById('plz').innerHTML = '*';
  } else {
    document.getElementById('plz').style.color = 'black';
    document.getElementById('plz').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  }
}
function chkOrt(ort) {
  if (ort.length == 0) {
    document.getElementById('or').style.color = 'black';
    document.getElementById('or').innerHTML = '*';
  } else {
    document.getElementById('or').style.color = 'red';
    document.getElementById('or').style.fontWeight = 'bold';
    document.getElementById('or').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Ort eingeben';

    if (strFilterName.test(ort)) {
      document.getElementById('or').style.color = 'black';
      document.getElementById('or').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
    }
  }
}
function chkTelefon(tfon) {
  if (!strFilterTelefon.test(tfon)) {
    document.getElementById('te').style.color = 'red';
    document.getElementById('te').style.fontWeight = 'bold';
    document.getElementById('te').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Telefon eingeben';
  } else if (tfon.length < 9 && strFilterTelefon.test(tfon)) {
    document.getElementById('te').style.color = 'black';
    document.getElementById('te').innerHTML = '*';
  } else {
    document.getElementById('te').style.color = 'black';
    document.getElementById('te').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  }
}
function chkEmail(email) {
  if (email.length == 0) {
    document.getElementById('em').style.color = 'black';
    document.getElementById('em').innerHTML = '*';
  } else {
    if (strFilter.test(email)) {
      document.getElementById('em').style.color = 'black';
      document.getElementById('em').innerHTML = '*';
    } else {
      document.getElementById('em').style.color = 'red';
      document.getElementById('em').style.fontWeight = 'bold';
      document.getElementById('em').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte Email eingeben';
    }
  }
}
function chkEmail2(email) {
  if (strFilterEmail.test(email)) {
    document.getElementById('em').style.color = 'black';
    document.getElementById('em').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else if (email.length == 0 && su == true) {
    document.getElementById('em').style.color = 'black';
    document.getElementById('em').innerHTML = '*';
  } else {
    document.getElementById('em').style.color = 'red';
    document.getElementById('em').style.fontWeight = 'bold';
    document.getElementById('em').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültige Email-Adresse auswählen';
  }
}

function chkUrl(adresseurl) {
  if (adresseurl.length == 0) {
    document.getElementById('url').style.color = 'black';
    document.getElementById('url').innerHTML = '*';
  } else {
    if (strFilter.test(adresseurl)) {
      document.getElementById('url').style.color = 'black';
      document.getElementById('url').innerHTML = '*';
    } else {
      document.getElementById('url').style.color = 'red';
      document.getElementById('url').style.fontWeight = 'bold';
      document.getElementById('url').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte gültige URL auswählen';
    }
  }
}
function chkUrl2(adresseurl) {
  var wo = false;
  if (strFilterURL.test(adresseurl)) {
    document.getElementById('url').style.color = 'black';
    document.getElementById('url').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else if (adresseurl.length == 0 && su == true) {
    document.getElementById('url').style.color = 'black';
    document.getElementById('url').innerHTML = '*';
  } else {
    document.getElementById('url').style.color = 'red';
    document.getElementById('url').style.fontWeight = 'bold';
    document.getElementById('url').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültige URL auswählen';
  }
}
function chkBild(bilds) {
  if (strFilterBild.test(bilds)) {
    document.getElementById('fo').style.color = 'black';
    document.getElementById('fo').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('fo').style.color = 'red';
    document.getElementById('fo').style.fontWeight = 'bold';
    document.getElementById('fo').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültiges Bildformat eingeben';
    if (bilds.length == 0) {
      document.getElementById('fo').style.color = 'black';
      document.getElementById('fo').innerHTML = '*';
    }
  }
}
function chkFormular() {
  su = true;
  var bu = false;
  /*Bundesland*/
  for (var i = 0; i < bundeslaender.length; i++) {
    if (document.Formular.bundesland.value == bundeslaender[i]) {
      document.getElementById('bula').style.color = 'black';
      document.getElementById('bula').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
      bu = true;
      break;
    } else {
      document.getElementById('bula').style.color = 'red';
      document.getElementById('bula').style.fontWeight = 'bold';
      document.getElementById('bula').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte Bundesland auswählen';
    }
  }
  if (bu == false) {
    su = false;
  }
  /*Name*/
  if (
    strFilterName.test(document.Formular.username.value) &&
    document.Formular.username.value.length > 0
  ) {
    document.getElementById('na').style.color = 'black';
    document.getElementById('na').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('na').style.color = 'red';
    document.getElementById('na').style.fontWeight = 'bold';
    document.getElementById('na').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Name eingeben';
    su = false;
  }
  /*Typ*/
  bu = false;
  for (var i = 0; i < typs.length; i++) {
    if (document.Formular.typ.value == typs[i]) {
      document.getElementById('ty').style.color = 'black';
      document.getElementById('ty').innerHTML =
        "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
        '*';
      bu = true;
      break;
    } else {
      document.getElementById('ty').style.color = 'red';
      document.getElementById('ty').style.fontWeight = 'bold';
      document.getElementById('ty').innerHTML =
        "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
        'Bitte Typ auswählen';
    }
  }
  if (bu == false) {
    su = false;
  }
  /*Adresse*/
  if (strFilterAdresse.test(document.Formular.strasse.value)) {
    document.getElementById('st').style.color = 'black';
    document.getElementById('st').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('st').style.color = 'red';
    document.getElementById('st').style.fontWeight = 'bold';
    document.getElementById('st').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Adresse eingeben';
    su = false;
  }
  /*PLZ*/
  if (
    strFilterPLZ.test(document.Formular.PLZ.value) &&
    document.Formular.PLZ.value.length > 3
  ) {
    document.getElementById('plz').style.color = 'black';
    document.getElementById('plz').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('plz').style.color = 'red';
    document.getElementById('plz').style.fontWeight = 'bold';
    document.getElementById('plz').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte PLZ eingeben';
    su = false;
  }
  /*Ort*/
  if (
    strFilterName.test(document.Formular.ort.value) &&
    document.Formular.ort.value.length > 0
  ) {
    document.getElementById('or').style.color = 'black';
    document.getElementById('or').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('or').style.color = 'red';
    document.getElementById('or').style.fontWeight = 'bold';
    document.getElementById('or').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Ort eingeben';
    su = false;
  }
  /*Telefon*/
  if (document.Formular.telefon.value.length < 9) {
    document.getElementById('te').style.color = 'red';
    document.getElementById('te').style.fontWeight = 'bold';
    document.getElementById('te').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Telefon eingeben';
    su = false;
  } else if (
    strFilterTelefon.test(document.Formular.telefon.value) &&
    document.Formular.telefon.value.length >= 9
  ) {
    document.getElementById('te').style.color = 'black';
    document.getElementById('te').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('te').style.color = 'red';
    document.getElementById('te').style.fontWeight = 'bold';
    document.getElementById('te').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte Telefon eingeben';
    su = false;
  }
  /*Email*/
  if (strFilterEmail.test(document.Formular.usermail.value)) {
    document.getElementById('em').style.color = 'black';
    document.getElementById('em').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('em').style.color = 'red';
    document.getElementById('em').style.fontWeight = 'bold';
    document.getElementById('em').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültige Email-Adresse auswählen';
    su = false;
  }
  if (strFilterURL.test(document.Formular.url.value)) {
    document.getElementById('url').style.color = 'black';
    document.getElementById('url').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('url').style.color = 'red';
    document.getElementById('url').style.fontWeight = 'bold';
    document.getElementById('url').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültige URL auswählen';
    su = false;
  }
  if (strFilterBild.test(document.Formular.bild.value)) {
    document.getElementById('fo').style.color = 'black';
    document.getElementById('fo').innerHTML =
      "<a href='#'><img width='20px' src='icons/Trophy.ico' border=0/></a>" +
      '*';
  } else {
    document.getElementById('fo').style.color = 'red';
    document.getElementById('fo').style.fontWeight = 'bold';
    document.getElementById('fo').innerHTML =
      "<a href='#'><img width='17px' src='icons/Icon4.ico' border=0/></a>" +
      'Bitte gültiges Bildformat auswählen';
    su = false;
  }
  return su;
}
function resetValues() {
  document.getElementById('bula').style.color = 'black';
  document.getElementById('bula').innerHTML = '*';
  document.getElementById('na').style.color = 'black';
  document.getElementById('na').innerHTML = '*';
  document.getElementById('ty').style.color = 'black';
  document.getElementById('ty').innerHTML = '*';
  document.getElementById('or').style.color = 'black';
  document.getElementById('or').innerHTML = '*';
  document.getElementById('st').style.color = 'black';
  document.getElementById('st').innerHTML = '*';
  document.getElementById('te').style.color = 'black';
  document.getElementById('te').innerHTML = '*';
  document.getElementById('plz').style.color = 'black';
  document.getElementById('plz').innerHTML = '*';
  document.getElementById('em').style.color = 'black';
  document.getElementById('em').innerHTML = '*';
  document.getElementById('url').style.color = 'black';
  document.getElementById('url').innerHTML = '*';
  document.getElementById('fo').style.color = 'black';
  document.getElementById('fo').innerHTML = '*';
}
