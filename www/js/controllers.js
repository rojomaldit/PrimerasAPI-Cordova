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
	var media;
	
	var exitoCarga = function(entries){
		//var str = JSON.stringify(entries, null, 4);
		$scope.files=entries;
		$scope.$apply();
	}

	var failCarga = function(){
		alert("Algo fallo papu...");
	}

	//var direccion = "file:///storage/emulated/0/Sounds/"; 			//Direccion de Agus
	var direccion = cordova.file.externalRootDirectory + "/Sounds/";	//De Max (tambien para muchos mas)

	window.resolveLocalFileSystemURL(direccion, function(DirEntry){
		var directoryReader = DirEntry.createReader();
		directoryReader.readEntries(exitoCarga,failCarga);
	});

	//////////////////////////////////////////////////////////////////////////////////////////
	
		
	$scope.playRecordedAudio = function(name){
		media = new Media(direccion+name);
		media.release();
		media.play();
	}

	$scope.stopRecordedAudio = function(){
		media.stop();
	}

	var exitoEliminacion = function(fileEntry){
			fileEntry.remove();
			alert("se ha eliminado el audio");
		}
	var falloEliminacion = function(){
		alert("Fallo la eliminacion");
	}
	
	var onDelete = function(buttonIndex, name){
		if(buttonIndex==1){
			window.resolveLocalFileSystemURL(direccion+name, exitoEliminacion, falloEliminacion);
		}
		else{
			//
		}
	}

	$scope.deleteRecordedAudio = function(name){

		navigator.notification.confirm(
			'¿Realmente desea eliminar?',
			function(buttonIndex){
				onDelete(buttonIndex, name);
			},
			'Eliminando audio',
			['Aceptar','Cancelar']
		);
		
	}

	

})