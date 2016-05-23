angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {


.state('tabsController.reproducir', {
url: '/CapturarAudio',
views: {
  templateUrl: 'templates/audio.html',
  controller: 'alertGrabar'
}
})

}
});