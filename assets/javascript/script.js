'use strict';

/**
 * @param {String} parameterName - Variable name
 * @returns {String} Value of variable
 * @description Searches for the value of the GET variable on the page.
 */
function findGetParameter(parameterName) {
  var result = null;
  var tmp = [];

  var items = window.location.search.substr(1).split('&');
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split('=');
    if (tmp[0] === parameterName) {
      result = decodeURIComponent(tmp[1]);
    }
  }

  return result;
}

/**
 * @param {String} artistTrack - Artist of the track
 * @param {String} titleTrack - Name of the track
 * @description Updates the data on the page. Displays a pop-up window if the
 * data has changed.
 */
function updateData(artistTrack, titleTrack) {
  /* Gets items on the page */
  var displayElement = document.getElementById('display');
  var artistElement = document.getElementById('artist');
  var titleElement = document.getElementById('title');

  if (artistElement.textContent !== artistTrack || titleElement.textContent !== titleTrack) {
    /* Updates text */
    document.title = artistTrack + ' - ' + titleTrack;
    artistElement.textContent = artistTrack;
    titleElement.textContent = titleTrack;

    /* Displays a pop-up window */
    displayElement.style['animation-name'] = 'fadeIn';

    setTimeout(function () {
      /* Removes a pop-up window */
      displayElement.style['animation-name'] = 'fadeOut';
    }, 10000);
  }
}

var client = new XMLHttpRequest();
var radio = findGetParameter('radio');
var url = '//somafm.com/songs/' + radio + '.xml';

/* Processes response */
client.onload = function () {
  if (client.readyState === client.DONE) {
    if (this.status === 200 && this.responseXML !== null) {
      /* Gets current track */
      var current = this.responseXML.getElementsByTagName('song')[0];
      var artist = current.getElementsByTagName('artist')[0].textContent;
      var title = current.getElementsByTagName('title')[0].textContent;

      /* Updates data */
      updateData(artist, title);
    }
  }
};

/* Update cycle */
setInterval(function () {
  client.open('GET', url);
  client.send();
}, 15000);
