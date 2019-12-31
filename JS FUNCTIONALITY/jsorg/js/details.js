var Details = (function(){

//$(document).ready(function(){

	function loadPerson(ID){
		//var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");

		$.ajax("details/" + ID + ".html",{dataType: "text"})
		.then(function(contents){
			$content.html(contents);
		});
	}

	function selectPerson(evt){
		evt.preventDefault();
		var ID = $(evt.target).attr("data-person");
		EVT.emit("person-selected", ID);
	}	

	function init(){
		//$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");
		
		//$items.on("click","[rel*='js-item-']", loadPerson);
		$content.on("click","[rel=js-select-person]", loadPerson);
		EVT.on("person-selected", loadPerson);
	}

	var $content;

	EVT.on("init",init);

	return{
		init: init,
		loadPerson: loadPerson
	};

})();

//$(document).ready(Details.init);