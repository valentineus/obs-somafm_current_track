'use strict';

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

  if (artistElement.innerHTML !== artistTrack || titleElement.innerHTML !== titleTrack) {
    /* Updates text */
    artistElement.innerHTML = artistTrack;
    titleElement.innerHTML = titleTrack;

    /* Displays a pop-up window */
    displayElement.style['animation-name'] = 'fadeIn';

    setTimeout(function () {
      /* Removes a pop-up window */
      displayElement.style['animation-name'] = 'fadeOut';
    }, 3000);
  }
}

var client = new XMLHttpRequest();
var url = 'https://somafm.com/songs/defcon.xml';

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
}, 5000);
