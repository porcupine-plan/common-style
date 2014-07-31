'use strict';

angular.module('styleGuideApp.controllers')
  .controller('ReadeMeCtrl', ['$scope',
    function($scope) {

    }
  ])
  .controller('CommonHeaderCtrl', ['$scope',
    function($scope) {
      $scope.authStatus = 1;
      $scope.isAdmin = true;
      // Company
      $scope.companyLoaded = true;
      $scope.selectedCompanyName = 'Rise Vision';
      $scope.subCompanySelected = true;
      // User
      $scope.userProfileName = 'Alfredo Sanchez';
      $scope.userProfileEmail = 'alfredo.sanchez90@example.com';
      $scope.userProfilePicture = 'http://api.randomuser.me/portraits/med/men/33.jpg';
      // Messages
      $scope.messages = ['<li class="system-message">Lorem ipsum dolor sit amet</li>', '<li class="system-message">Consectetur adipiscing elit</li>', '<li class="system-message">Suspendisse convallis leo sed</li>'];
      // Navigation choices
      $scope.navOptions = [{
        title: 'Home',
        link: '#/'
      }, {
        title: 'Store',
        link: ''
      }, {
        title: 'Account',
        link: ''
      }, {
        title: 'Sellers',
        link: ''
      }, {
        title: 'Platform',
        link: 'http://rva.risevision.com/',
        target: '_blank'
      }];
    }
  ])
  .controller('ComponentsCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {

      $scope.activeComponent = $routeParams.id ? $routeParams.id : 0;

      $scope.uiComponents = [{
        title: 'Action-bar',
        template: 'components/bootstrap-based/action-bar.html'
      }, {
        title: 'Financial Selector',
        template: 'components/financial-selector.html'
      }];

      $scope.instruments = [
        "AA.N",
        "AXP.N",
        "BA.N",
        "BAC.N",
        "CAT.N",
        "CSCO.O",
        "CVX.N",
        "MMM.N",
        "MRK.N",
        "MSFT.O",
        "PFE.N",
        "PG.N",
        "T.N",
        "TRV.N",
        "UTX.N",
        "VZ.N",
        "WMT.N",
        "XOM.N"
      ];
    }
  ]);