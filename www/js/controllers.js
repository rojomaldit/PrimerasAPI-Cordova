angular.module('everything.controllers', [])

  .controller('everythingCtrl', function($scope) {
    $scope.tasks = [
      { Acc: 'Accelerometer' },
      { Aud: 'alertGrabar' },
      { Not: 'verNotificacion' },
      { Viv: 'Vibrar' }
    ];


///////////////////////////////////////////////////////////////////////////////////////////////
    function alertDismissed()
    {
    // hacer algo
    }
    $scope.verNotificacion = function()
    {
      navigator.notification.alert('Seguimos Avanzando!',alertDismissed,'Soy una Notificación','Aceptar');
    }
///////////////////////////////////////////////////////////////////////////////////////////////
    var file;
    var path;
    function capturarAudio(mediaFiles){
      var i, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
        file = mediaFiles[0].localURL;
      } 
    }
    function captureError(){
    alert("Cancelo la grabación");
    }

    $scope.alertGrabar = function(){
    navigator.device.capture.captureAudio(capturarAudio, captureError); 
    }
  });
///////////////////////////////////////////////////////////////////////////////////////////////


