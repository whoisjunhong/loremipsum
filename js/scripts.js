$(document).ready(function() {
    $('#generate').click(function() {
        var values = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }

        var shuffledVals = shuffle(values);
        
        var select = $('<select>').prop('id', 'name')
                        .prop('name', 'name');

        $(shuffledVals).each(function() {
            select.append($("<option>")
            .prop('shuffledVals', this)
            .text(this.charAt(0).toUpperCase() + this.slice(1)));
        });
    
        $('#container').append(select);
    })

    $('#startDay').click(function() {
        var curr = Math.floor(Math.random() * (32 - 1) + 1)
        $('#birthDay').attr('value', curr )
    })

    $('#startMonth').click(function() {
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var curr = months[Math.floor(Math.random()*months.length)] 
        $('#birthMonth').attr('value', curr);
    })

    $('#startYear').click(function() {
        var curr = Math.floor(Math.random() * (2022 - 1942) + 1942)
        $('#birthYear').attr('value', curr )
    })

    $('#convert').click(function() {
        let toConvert = String.fromCharCode(document.getElementById("asciiEmail").value)
        // alert(toConvert)
        $('#emailResult').append(toConvert)
    })

    $('#playGame').click(function() {
        var popup = window.open("./js/javascript-tetris/index.html","mypopup","width=1000,height=1080");
        popup.focus();
        // popup.document.getElementById("player").someFunction();
    })
});
