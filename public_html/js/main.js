'use strict';

const app={
    init(){
        let button=document.querySelector(".ripple");
        button.addEventListener("click", event=>{
            event.preventDefault();
        });
    }
};

window.addEventListener("load", ()=>{
    app.init();
});
