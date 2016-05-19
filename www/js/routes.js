angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {


.state('tabsController.reproducir', {
url: '/prueba',
views: {
  templateUrl: 'templates/playlist.html',
  controller: 'verNotificacionCtrl'
}
})

}
});