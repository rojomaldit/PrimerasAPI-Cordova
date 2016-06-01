angular.module('app.controllers', [])

.controller('reproducirCtrl', function($scope) {
	
})
   
.controller('grabarAudioCtrl', function($scope) {
	var file;
	var path;
	var media;
	
	function falloGrabacion(){
		alert("fallo grabación");
	}

	function exitoGrabacion(media){
		media.release();
	}

	function capturarExito(mediaFiles){
		var i, len;
	    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
	        path = mediaFiles[i].fullPath;
	        // do something interesting with the file
	        file = mediaFiles[0].localURL;
	    } 
	    media = new Media(file, exitoGrabacion, falloGrabacion);
	}

	function captureError(){
		alert("La grabacion a fallado");
	}

	$scope.capturarAudio = function (mediaFiles){
		navigator.device.capture.captureAudio(capturarExito, captureError); 
	}

	$scope.reproducirAudioGrabado = function(){
		//var media = new Media(file, exitoGrabacion, falloGrabacion);

		if (typeof file === "undefined") {
	    	navigator.notification.alert("Primero debe grabar un Audio.", null, "Mensaje en Reproducir", "Aceptar");
			return; 
	    }
	    media.play();
		}

		$scope.pausarAudio = function(){
			media.pause();
		}

		$scope.pararAudio = function(){
			media.stop();
		}
	})
   
.controller('grabacionesCtrl', function($scope) {

   
})
       