
function calc(o,n){
    return (n-o)/o*100
}

function generate() {
    var text = document.getElementById("text")
    var o = document.getElementById("1").value
    var n = document.getElementById("2").value
    


    if (o.length === 0 ||n.length === 0) {

    } else {
        while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
     
        var t = document.createElement("p")
        var value = calc(o, n)
        if(value > 0)
            t.innerHTML = "increased by " + value.toFixed(4) + "%"
        else
            t.innerHTML = "decreased by " + value.toFixed(4) + "%"
        
        document.getElementById("text").appendChild(t)
    }
}


