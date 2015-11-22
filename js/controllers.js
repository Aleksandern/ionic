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
    $scope.page = {};
    $scope.page.m3u8_address = 'http://kameravseti.ru:8080/u3143524645718/index.m3u8';
    //$scope.page.m3u8_address = 'poe_supply.mp4';
    $scope.fullsceen = 0;

    $scope.play = function() {
        var video = angular.element(document.getElementById('b-video'));
        video[0].play();
    }

    $scope.stop = function() {
        var video = angular.element(document.getElementById('b-video'));
        video[0].pause();
    }

    $scope.fullScreen = function() {
        var video = angular.element(document.getElementById('b-video'));
        video = video[0];

        if (!$scope.fullsceen) {
            $scope.fullsceen = 1;
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else {
                video.webkitEnterFullScreen();
            }
        } else {
            $scope.fullsceen = 0;

            if (video.exitFullScreen) video.exitFullScreen();
            else if (video.webkitExitFullScreen) {
                video.webkitExitFullScreen();
                //video.webkitCancelFullScreen();
            }
            else if (video.mozExitFullScreen) video.mozExitFullScreen();
            else if (video.oExitFullScreen) video.oExitFullScreen();
            else if (video.msExitFullScreen)video.msExitFullScreen();
            else { 
                video.exitFullScreen();
                //alert('err');
            }

        }
    }
})
    
