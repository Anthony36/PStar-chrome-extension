// Initialize button with user's preferred color
let removeBold = document.getElementById("removeBold");
let addBold = document.getElementById("addBold");
console.log("Start");

/*
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
*/

//change all bold to not bold:
/*
let boldItems = document.getElementsByTagName("b");
for(i=0;i<boldItems.length;i++) {
    elem[i].style.fontWeight = 200;
    console.log(elem[i].innerText)
}
*/


// When the button is clicked, inject click event into current page
removeBold.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setRemoveBold,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setRemoveBold() {
    let boldItems = document.getElementsByTagName("b");
    for(i=0;i<boldItems.length;i++) {
        boldItems[i].style.fontWeight = 200;
        console.log(boldItems[i].innerText)
    }
}

    // When the button is clicked, inject click event into current page
addBold.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setAddBold,
    });
});
    
// The body of this function will be executed as a content script inside the
// current page
function setAddBold() {
    let boldItems = document.getElementsByTagName("b");
    for(i=0;i<boldItems.length;i++) {
        boldItems[i].style.fontWeight = 800;
        console.log(boldItems[i].innerText)
    }
}

