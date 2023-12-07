'use strict';

  // Supporting Class
  class Photo {
    constructor(photo) {
      this.name = photo.alt_description;
      this.url = photo.urls.raw;
    }
  }

  module.exports = Photo;