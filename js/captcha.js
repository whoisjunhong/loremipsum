var clicks = 0


function click() {
    clicks += 1;
    var phrases = ["", "I am not a robot", "Yes I am", "True... how can I prove that I am not a robot?", "...", "Can we get this over and done with already?", "", "", "", "", "", "", "", "", "", "", "", ""]
    console.log(clicks)
    if(clicks === 6){
        return(null)
    }
    return(phrases[clicks])
}