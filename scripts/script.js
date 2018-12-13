var chess;

window.addEventListener('DOMContentLoaded', function () {
    chess = document.getElementById('chessBoxes');
    var html = "<table border='1' width='400' height='400'>";
    for (var i = 1; i <= 8; i++) {
        html += "<tr>";
        for (var j = 1; j <= 8; j++) {
            if ((i + j) % 2 != 0) {
                html += "<td class='white'></td>";
            }
            else {
                html += "<td class='black'></td>";
            }
        }
        html += "</tr>";
    }
    html += "</table>";
    chess.innerHTML = html;
}, false);

function changeBlack(value) {
    var value = value.toLowerCase();
    createChessBoard('black', value);
}

function changeWhite(value) {
    var value = value.toLowerCase();
    createChessBoard('white', value);
}

function createChessBoard(color, value) {
    chess = document.getElementById('chessBoxes');
    if (chess.childElementCount == 1) {
        var white = document.getElementsByClassName('white');
        var black = document.getElementsByClassName('black');
        if (color == 'white') {
            for (let i = 0; i <= white.length; i++) {
                var colorsClasses = white[i].classList || [];
                if (colorsClasses.length > 1) {
                    // for(let j=1; j <= colorsClasses.length; j++){
                    //     if(colorsClasses[j] !== 'white'){
                    //         white[i].classList.remove(colorsClasses[j]);
                    //         white[i].classList.add(value);
                    //     }
                    // }
                    if (colorsClasses[1] !== 'white') {
                        white[i].classList.remove(colorsClasses[1]);
                        white[i].classList.add(value);
                    }
                } else {
                    white[i].classList.add(value);
                }
            }
        } else {
            for (let j = 0; j <= black.length; j++) {
                var colorsClasses = black[j].classList || [];
                if (colorsClasses.length > 1) {
                    // for(let k=1; k <= colorsClasses.length; k++){
                    //     if(colorsClasses[k] !== 'black'){
                    //         black[j].classList.remove(colorsClasses[k]);
                    //         black[j].classList.add(value);
                    //     }
                    // }
                    if (colorsClasses[1] !== 'black') {
                        black[j].classList.remove(colorsClasses[1]);
                        black[j].classList.add(value);
                    }
                } else {
                    black[j].classList.add(value);
                }
            }
        }
    }
}