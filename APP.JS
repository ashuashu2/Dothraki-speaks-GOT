var btntranslate = document.querySelector("#button-translate");
var txtarea = document.querySelector("#txt-area");
var outputdiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text)  {
    return serverURL + "?" + "text=" + text
}


function clickEventHandler() {
    var inputText = txtarea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => { 
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText
    })
    

};


btntranslate.addEventListener("click", clickEventHandler)