// Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

import JSONFormatter from "json-formatter-js"

console.log("Loaded on page");

// Polyfill Iterator for HTML Elements
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

const GET = url => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xttp.responseText);
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
};

let debugdone = false
async function fixExpandable(){
    console.log("fixing..");
    let elems = document.getElementsByTagName("sdvi-metadata-details");
    for(let elem of elems){

        let parentElem = elem
        while(parentElem.tagName !== "LI") parentElem = parentElem.parentElement;
        const movieID = parentElem.id;
        let req = `${window.location.origin}/api/v2/movies/${movieID}/metadata`;
        console.log(req);
        console.log(await GET(req));

        //let json = elemToJSON(elem.firstChild)
        //let formatter = new JSONFormatter(json, 0);
        elem.outerHTML = "cats";

        //elem.appendChild(formatter.render())
    }
}

setInterval(fixExpandable, 1000);
