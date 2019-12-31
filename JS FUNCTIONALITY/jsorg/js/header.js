// put event handlers for header links here
var Header = (function(){


//$(document).ready(function(){

    function headerLinkClicks(evt){
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();
    
            var url = $(evt.target).attr("href");
    
            $.ajax(url,{dataType: "text"})
            .then(function(contents){
                $modal.html(contents).show();
            });
    }

    function init(){
        $modal = $("[rel='js-modal']");
        $("[rel='js-controls']").on("click","[rel*='js-']",headerLinkClicks);
    }

    EVT.on("init",init);

    var $modal;
    return {
        init: init
    };
    

//});

})();

//$(document).ready(function(){
//});

//$(document).ready(Header.init);