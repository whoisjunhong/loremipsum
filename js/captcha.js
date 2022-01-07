var clicks = 0


function click() {
    clicks += 1;
    var phrases = ["", "I am not a robot", "Yes I am", "True... how can I prove that I am not a robot?"]
    return(phrases[clicks])
}