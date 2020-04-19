
var inputselect, outputdiv;

$(document).ready(function () {

    inputselect = $('#selectnumber');
    outputdiv = $('#output');
    // bind calculate and clear button

    $('#calc').click(calculate);
    $('#clear').click(clear);
});

function clear() {
    inputselect.val(2);
    outputdiv.html('Select number and click on calculate.');
}

function calculate() {
    var n = parseInt(inputselect.val());
    table = $('<table>');

    for (var k = 0; k <= n; k++) {
        var row = $('<tr>');
        table.append(row);

        var td = $('<td>').addClass('td-k');
        row.append(td);
        if (k == 0) {
            td.addClass('td-k-first').html('i  /  j');
        }
        else {
            td.html(k);
        }

        for (var r = 0; r <= n; r++) {
            var td = $('<td>');
            row.append(td);
            answer = 0;
            if (k === 0) {
                answer = r;
                td.addClass('td-r');
            }
            else {

                if (r === k) {
                    td.addClass('td-rk');
                }

                if (r >= k) {
                    // 2^r
                    answer = Math.pow(2, r);

                }
                else {
                    // 2^r(n*(2^(n-k) + 1 ))
                    answer = Math.pow(2, r) * (n * (Math.pow(2, n - k)) + 1);
                }
            }

            td.html(answer)
        }
    }

    outputdiv.html(table);
}




