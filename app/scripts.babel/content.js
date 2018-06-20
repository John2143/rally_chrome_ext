console.log("Loaded on page");

// Polyfill Iterator for HTML Elements
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

function fixExpandable(){
    console.log("fixing..");
    let elems = document.getElementsByTagName("sdvi-metadata-details");
    for(let elem of elems){
        console.log(elem)
        elem.innerHTML = "b";
    }
}

setInterval(fixExpandable, 1000);
