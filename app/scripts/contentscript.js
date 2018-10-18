// Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

console.log("Loaded on page");

const regexEnv = /:\/\/([\w-]+)\.sdvi/g
const whereami = regexEnv.exec(window.location.origin)[1];

function addColor(){
    const bannerColorMap = {
        "discovery": "#801717",
        "discovery-uat": "rgb(114, 247, 31)",
        "discovery-dev": "rgb(62, 111, 146)",
    };
    let toolbars = document.getElementsByClassName("v-toolbar__content");
    for(let i = 0; i < toolbars.length; i++){
        let bar = toolbars.item(i);
        bar.style.backgroundColor = bannerColorMap[whereami];
    }
}

// Polyfill Iterator for HTML Elements
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

//I can't find a reliable trigger for this: Run it every 1 second until we find
//the ui loaded.
setInterval(addColor, 1000);
