angular.module('everything.controllers', [])

  .controller('everythingCtrl', function($scope) {
    $scope.tasks = [
      { Acc: 'Accelerometer' },
      { Aud: 'capturarAudio' },
      { Not: 'verNotificacion' },
      { Viv: 'Vibrar' }
    ];

    function alertDismissed() {
    // hacer algo
    }
    $scope.verNotificacion = function()
    {
      navigator.notification.alert('Seguimos Avanzando!',alertDismissed,'Soy una Notificación','Aceptar');
    }
    
  });
