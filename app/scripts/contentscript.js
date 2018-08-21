// Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

import JSONFormatter from "json-formatter-js"

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

let cache = [];
const GET = url => {
    if(cache[url]) return cache[url];
    console.log("req");
    return cache[url] = new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.responseText);
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
};

let formatted = []
function fixExpandable(){
    let elems = document.getElementsByTagName("sdvi-metadata-details");
    for(let elem of elems){

        let parentElem = elem
        while(parentElem.tagName !== "LI") parentElem = parentElem.parentElement;
        const movieID = parentElem.id;

        if(formatted.includes(movieID)) continue;
        formatted.push(movieID);

        let req = `${window.location.origin}/api/v2/movies/${movieID}/metadata`;

        let par = elem.parentElement
        elem.innerHTML = "Loading";

        GET(req).then(res => {
            let betterNames = {
                Workflow: "WORKFLOW_METADATA",
                Metadata: "METADATA",
                AnalyzeInfo: "ANALYZE_INFO",
            }
            let json = JSON.parse(res);
            let json2 = {}
            json = json.data
                .forEach(x => json2[betterNames[x.id]] = x.attributes.metadata)
            let formatter = new JSONFormatter(json2, 2, {
                hoverPreviewEnabled: true,
                hoverPreviewArrayCount: 10,
                hoverPreviewFieldCount: 5,
                theme: '',
                animateOpen: false,
                animateClose: false,
                useToJSON: true
            });

            elem.innerHTML = ""
            elem.appendChild(formatter.render())
            par.style = "font-size: 100%; white-space: nowrap;"
        });
    }
}

setInterval(fixExpandable, 1000);
setInterval(addColor, 1000);
