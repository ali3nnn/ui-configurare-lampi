const save_btn = document.querySelector(".save");
const container = document.querySelector(".container");

save_btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e)
    let time = document.querySelector('input#time').value;
    let sens = document.querySelector('input#sensibility').value;
    console.log(time,sens)
    httpGet('/saveConfig?value={"timer":'+time+',"step":'+sens+'}')
    // alert("Save")
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
