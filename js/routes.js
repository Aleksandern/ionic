angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.rTSP', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/rTSP.html',
          controller: 'rTSPCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.m3u8', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/m3u8.html',
          controller: 'm3u8Ctrl'
        }
      }
    })

        
    .state('tabsController.mp4', {
      url: '/page4',
      views: {
        'tab4': {
          templateUrl: 'templates/mp4.html',
          controller: 'mp4Ctrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});
