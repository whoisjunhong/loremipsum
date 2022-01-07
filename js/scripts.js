$(document).ready(function() {
    $('#generate').click(function() {
        var values = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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

    $('#randBirthdate').click(function() {
        const start = 0
        const end = Date.now()
        var randDate = Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        
        $('birthdayDate').val(randDate)
    })
});
