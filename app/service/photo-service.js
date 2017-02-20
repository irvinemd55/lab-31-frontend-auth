'use strict';

require('angular').module('registerApp')
.service('photoService', ['$log', 'authService', 'Upload', function($log, authService, Upload){
  let photoService = {};

  photoService.upload = (gallery, photo) => {
    return authService.fetchToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${gallery._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      return Upload.upload({
        url,
        headers,
        data: {
          name: photo.name,
          desc: photo.desc,
          file: photo.file,
        },
      });
    })
    .then(res => res.data);
  };
  return photoService;
}]);
