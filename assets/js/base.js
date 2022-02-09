

function toggleNAV(status) {
    console.log(status)
    if (status == 'open') {
        document.getElementById("openNav").style.display = "none";
        document.getElementById("closeNav").style.display = "block";
        document.getElementById("nav-links").style.display = "block";
        document.getElementById("nav-button").style.display = "block";
    }
    else if (status == 'close') {
        console.log('close')
        document.getElementById("openNav").style.display = "block";
        document.getElementById("closeNav").style.display = "none";
        document.getElementById("nav-links").style.display = "none";
        document.getElementById("nav-button").style.display = "none";
    }

    
}

