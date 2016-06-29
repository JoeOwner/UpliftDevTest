console.log('This would be the main JS file.');
 var JS = {
 	testFunc : function(){
 		var array = ["work", "track", "tree", "pizza", "running", "television", "tap"],
 			i;
		for(i=0; i < array.length; i++){
			console.log(array[i]);
		}
 	}
 }

 $('button').on('click', function(){
 	console.log('JQUERY HEREY');
 });