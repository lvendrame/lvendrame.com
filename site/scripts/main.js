(function(window){
    
    'use strict';

    window.lvendrame = {
    };

    window.document.addEventListener("DOMContentLoaded", function(event) {
        active();
    });

    function active(){
        setAge();
    }

    function setAge(){
        var el = document.getElementById('txt-age');
        if(!!el) el.innerText = getAge();
    }

    function getAge(){
        var ageDifMs = Date.now() - new Date(1983, 10, 5).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


}(window));
