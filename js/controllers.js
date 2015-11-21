angular.module('app.controllers', [])
  
.controller('rTSPCtrl', function($scope) {
    $scope.page = {};
    $scope.page.rtsp_address = 'rtsp://ewns-hls-b-stream.hexaglobe.net/rtpeuronewslive/en_vidan750_rtp.sdp';

    $scope.playPlugin = function() {
        //alert($scope.page.rtsp_address);
        window.plugins.streamingMedia.playVideo($scope.page.rtsp_address);
    }

    $scope.playNative = function() {
        window.open($scope.page.rtsp_address, '_system');
    }
})
   
.controller('m3u8Ctrl', function($scope) {

    $scope.hz = function() {
       alert($scope.rtsp_address);
    }
})
    
