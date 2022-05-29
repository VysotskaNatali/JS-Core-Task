"use strict";
function keyBoard() {
    const firstRow = document.querySelectorAll('.keyboard_row:nth-child(1) .keyboard_row_buttons');
    const secondRow = document.querySelectorAll('.keyboard_row:nth-child(2) .keyboard_row_buttons');
    const thirdRow = document.querySelectorAll('.keyboard_row:nth-child(3) .keyboard_row_buttons');
    const fourthRow = document.querySelectorAll('.keyboard_row:nth-child(4) .keyboard_row_buttons');
    const space = document.querySelector('.keyboard_row_space');
    const display = document.querySelector('.Display p');
	let colorBg = ['rgb(99, 97, 97)','rgb(248, 241, 241)']
    const displayString = [];
    let currentDisplay;
    function refresh(data) {
        if (data === 'Backspace') {
            displayString.splice(displayString.length - 1, 1);
        }
        else if (data === 'Tab') {
            displayString.push('&nbsp&nbsp&nbsp')
        }
        else {
            displayString.push(data);
        };
        
        display.innerHTML = displayString.join('');
    };
    window.addEventListener('keydown', function (event) {
        console.log(display.innerHTML);

        for (let i = 0; i < firstRow.length; i++) {
            if (event.keyCode === i + 49) {
                firstRow[i + 1].style.backgroundColor = colorBg[0];//numbers
                refresh(i + 1);
            }
        };
        if (event.keyCode === 48) {
            firstRow[10].style.backgroundColor = colorBg[0];// null 0
            refresh(0)
        } else if (event.keyCode === 192) {
            firstRow[0].style.backgroundColor = colorBg[0];//'~'
            refresh(event.key)
        } else if (event.keyCode === 8) {
            firstRow[13].style.backgroundColor = colorBg[0];// delete
            refresh(event.key)
        } else if (event.keyCode === 189) {
            firstRow[11].style.backgroundColor = colorBg[0];//'-'
            refresh(event.key)
        } else if (event.keyCode === 187) {
            firstRow[12].style.backgroundColor = colorBg[0];// '='
            refresh(event.key)
        };
        if (event.keyCode === 9) {
            secondRow[0].style.backgroundColor = colorBg[0];//tab
            event.returnValue = false;
            refresh(event.key);
        } else if (event.keyCode === 81) {
            secondRow[1].style.backgroundColor = colorBg[0];//Q
            refresh(event.key);
        } else if (event.keyCode === 87) {
            secondRow[2].style.backgroundColor = colorBg[0];//W
            refresh(event.key);
        } else if (event.keyCode === 69) {
            secondRow[3].style.backgroundColor = colorBg[0];//E
            refresh(event.key);
        } else if (event.keyCode === 82) {
            secondRow[4].style.backgroundColor = colorBg[0];//R
            refresh(event.key);
        } else if (event.keyCode === 84) {
            secondRow[5].style.backgroundColor = colorBg[0];//T
            refresh(event.key);
        } else if (event.keyCode === 89) {
            secondRow[6].style.backgroundColor = colorBg[0];//Y
            refresh(event.key);
        } else if (event.keyCode === 85) {
            secondRow[7].style.backgroundColor = colorBg[0];//U
            refresh(event.key);
        } else if (event.keyCode === 73) {
            secondRow[8].style.backgroundColor = colorBg[0];//I
            refresh(event.key);
        } else if (event.keyCode === 79) {
            secondRow[9].style.backgroundColor = colorBg[0];//O
            refresh(event.key);
        } else if (event.keyCode === 80) {
            secondRow[10].style.backgroundColor = colorBg[0];//P
            refresh(event.key);
        } else if (event.keyCode === 219) {
            secondRow[11].style.backgroundColor = colorBg[0];// '['
            refresh(event.key);
        } else if (event.keyCode === 221) {
            secondRow[12].style.backgroundColor = colorBg[0];// ']'
            refresh(event.key);
        } else if (event.keyCode === 220) {
            secondRow[13].style.backgroundColor = colorBg[0];// '\'
            refresh(event.key);
        };
        if (event.keyCode === 20) {
            if (thirdRow[0].style.backgroundColor === colorBg[1]) {
                thirdRow[0].style.backgroundColor = colorBg[0];//CapsLock
            } else {
                thirdRow[0].style.backgroundColor = colorBg[1];
            };
        } else if (event.keyCode === 65) {
            thirdRow[1].style.backgroundColor = colorBg[0];//A
            refresh(event.key);
        } else if (event.keyCode === 83) {
            thirdRow[2].style.backgroundColor = colorBg[0];//S
            refresh(event.key);
        } else if (event.keyCode === 68) {
            thirdRow[3].style.backgroundColor = colorBg[0];//D
            refresh(event.key);
        } else if (event.keyCode === 70) {
            thirdRow[4].style.backgroundColor = colorBg[0];//F
            refresh(event.key);
        } else if (event.keyCode === 71) {
            thirdRow[5].style.backgroundColor = colorBg[0];//G
            refresh(event.key);
        } else if (event.keyCode === 72) {
            thirdRow[6].style.backgroundColor = colorBg[0];//H
            refresh(event.key);
        } else if (event.keyCode === 74) {
            thirdRow[7].style.backgroundColor = colorBg[0];//J
            refresh(event.key);
        } else if (event.keyCode === 75) {
            thirdRow[8].style.backgroundColor = colorBg[0];//K
            refresh(event.key);
        } else if (event.keyCode === 76) {
            thirdRow[9].style.backgroundColor = colorBg[0];//L
            refresh(event.key);
        } else if (event.keyCode === 186) {
            thirdRow[10].style.backgroundColor = colorBg[0];// ':'
            refresh(event.key);
        } else if (event.keyCode === 222) {
            thirdRow[11].style.backgroundColor = colorBg[0];// '""'
            refresh(event.key);
        } else if (event.keyCode === 13) {
            thirdRow[12].style.backgroundColor = colorBg[0];//Enter
            refresh('<br>');
        };
        if (event.code === 'ShiftLeft') {
            fourthRow[0].style.backgroundColor = colorBg[0];//16
        } else if (event.keyCode === 90) {
            fourthRow[1].style.backgroundColor = colorBg[0];//Z
            refresh(event.key);
        } else if (event.keyCode === 88) {
            fourthRow[2].style.backgroundColor = colorBg[0];//X
            refresh(event.key);
        } else if (event.keyCode === 67) {
            fourthRow[3].style.backgroundColor = colorBg[0];//C
            refresh(event.key);
        } else if (event.keyCode === 86) {
            fourthRow[4].style.backgroundColor = colorBg[0];//V
            refresh(event.key);
        } else if (event.keyCode === 66) {
            fourthRow[5].style.backgroundColor = colorBg[0];//B
            refresh(event.key);
        } else if (event.keyCode === 78) {
            fourthRow[6].style.backgroundColor = colorBg[0];//N
            refresh(event.key);
        } else if (event.keyCode === 77) {
            fourthRow[7].style.backgroundColor = colorBg[0];//M
            refresh(event.key);
        } else if (event.keyCode === 188) {
            fourthRow[8].style.backgroundColor = colorBg[0];// ','
            refresh(event.key);
        } else if (event.keyCode === 190) {
            fourthRow[9].style.backgroundColor = colorBg[0];// '.'
            refresh(event.key);
        } else if (event.keyCode === 191) {
            fourthRow[10].style.backgroundColor = colorBg[0];// '?'
            refresh(event.key);
        } else if (event.code === 'ShiftRight') {
            fourthRow[11].style.backgroundColor = colorBg[0];// 16
        };
        if (event.keyCode === 32) {
            space.style.backgroundColor = colorBg[0];//space
            refresh('&nbsp');
        };
    });
    window.addEventListener('keyup', function () {
        for (let i = 0; i < firstRow.length; i++) {
            if (event.keyCode === i + 49) {
                firstRow[i + 1].style.backgroundColor = colorBg[1];//numbers
            } else if (event.keyCode === 48) {
                firstRow[10].style.backgroundColor = colorBg[1];//null '0'
            } else if (event.keyCode === 192) {
                firstRow[0].style.backgroundColor = colorBg[1];//~
            } else if (event.keyCode === 8) {
                firstRow[13].style.backgroundColor = colorBg[1];//delete
            } else if (event.keyCode === 189) {
                firstRow[11].style.backgroundColor = colorBg[1];//'-'
            } else if (event.keyCode === 187) {
                firstRow[12].style.backgroundColor = colorBg[1];// '='
            };
        };
        if (event.keyCode === 9) {
            secondRow[0].style.backgroundColor = colorBg[1];//tab
        } else if (event.keyCode === 81) {
            secondRow[1].style.backgroundColor = colorBg[1];//Q
        } else if (event.keyCode === 87) {
            secondRow[2].style.backgroundColor = colorBg[1];//W
        } else if (event.keyCode === 69) {
            secondRow[3].style.backgroundColor = colorBg[1];//E
        } else if (event.keyCode === 82) {
            secondRow[4].style.backgroundColor = colorBg[1];//R
        } else if (event.keyCode === 84) {
            secondRow[5].style.backgroundColor = colorBg[1];//T
        } else if (event.keyCode === 89) {
            secondRow[6].style.backgroundColor = colorBg[1];//Y
        } else if (event.keyCode === 85) {
            secondRow[7].style.backgroundColor = colorBg[1];//U
        } else if (event.keyCode === 73) {
            secondRow[8].style.backgroundColor = colorBg[1];//I
        } else if (event.keyCode === 79) {
            secondRow[9].style.backgroundColor = colorBg[1];//O
        } else if (event.keyCode === 80) {
            secondRow[10].style.backgroundColor = colorBg[1];//P
        } else if (event.keyCode === 219) {
            secondRow[11].style.backgroundColor = colorBg[1];// '['
        } else if (event.keyCode === 221) {
            secondRow[12].style.backgroundColor = colorBg[1];// ']'
        } else if (event.keyCode === 220) {
            secondRow[13].style.backgroundColor = colorBg[1];// '/'
        };
        if (event.keyCode === 65) {
            thirdRow[1].style.backgroundColor = colorBg[1];//A
        } else if (event.keyCode === 83) {
            thirdRow[2].style.backgroundColor = colorBg[1];//S
        } else if (event.keyCode === 68) {
            thirdRow[3].style.backgroundColor = colorBg[1];//D
        } else if (event.keyCode === 70) {
            thirdRow[4].style.backgroundColor = colorBg[1];//F
        } else if (event.keyCode === 71) {
            thirdRow[5].style.backgroundColor = colorBg[1];//G
        } else if (event.keyCode === 72) {
            thirdRow[6].style.backgroundColor = colorBg[1];//H
        } else if (event.keyCode === 74) {
            thirdRow[7].style.backgroundColor = colorBg[1];//J
        } else if (event.keyCode === 75) {
            thirdRow[8].style.backgroundColor = colorBg[1];//K
        } else if (event.keyCode === 76) {
            thirdRow[9].style.backgroundColor = colorBg[1];//L
        } else if (event.keyCode === 186) {
            thirdRow[10].style.backgroundColor = colorBg[1];// ';'
        } else if (event.keyCode === 222) {
            thirdRow[11].style.backgroundColor = colorBg[1];// '""'
        } else if (event.keyCode === 13) {
            thirdRow[12].style.backgroundColor = colorBg[1];// '|'
        };
        if (event.code === 'ShiftLeft') {
            fourthRow[0].style.backgroundColor = colorBg[1];//16
        } else if (event.keyCode === 90) {
            fourthRow[1].style.backgroundColor = colorBg[1];//Z
        } else if (event.keyCode === 88) {
            fourthRow[2].style.backgroundColor = colorBg[1];//X
        } else if (event.keyCode === 67) {
            fourthRow[3].style.backgroundColor = colorBg[1];//C
        } else if (event.keyCode === 86) {
            fourthRow[4].style.backgroundColor = colorBg[1];//V
        } else if (event.keyCode === 66) {
            fourthRow[5].style.backgroundColor = colorBg[1];//B
        } else if (event.keyCode === 78) {
            fourthRow[6].style.backgroundColor = colorBg[1];//N
        } else if (event.keyCode === 77) {
            fourthRow[7].style.backgroundColor = colorBg[1];//M
        } else if (event.keyCode === 188) {
            fourthRow[8].style.backgroundColor = colorBg[1];// ','
        } else if (event.keyCode === 190) {
            fourthRow[9].style.backgroundColor = colorBg[1];// '.'
        } else if (event.keyCode === 191) {
            fourthRow[10].style.backgroundColor = colorBg[1];// '/'
        } else if (event.code === 'ShiftRight') {
            fourthRow[11].style.backgroundColor = colorBg[1];//16
        };
        if (event.keyCode === 32) {
            space.style.backgroundColor = colorBg[1];//space
        };
    });
};
keyBoard();
window.addEventListener('keydown',function(){
console.log(event.keyCode);
})