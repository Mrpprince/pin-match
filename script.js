function generate()
{
    let randomPin = Math.floor(1000 + Math.random()*9000);

    document.getElementById("screen-one").value = randomPin;


}