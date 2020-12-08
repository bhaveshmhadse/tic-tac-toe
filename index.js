let matrix = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];

let leftchild,
  rightchild,
  currentchild,
  upchild,
  downchild,
  leftupdiagonalchild,
  rightdowndiagonalchild,
  leftdowndiagonalchild,
  rightupdiagonalchild,
  vertical,
  horizontal,
  diagonaleft,
  diagonalright;

let currenttext = 'O';


async function refreshgame() {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      matrix[i][j] = 2;
    }
  }
  document.getElementById('button1').innerText = '';
  document.getElementById('button2').innerText = '';
  document.getElementById('button3').innerText = '';
  document.getElementById('button4').innerText = '';
  document.getElementById('button5').innerText = '';
  document.getElementById('button6').innerText = '';
  document.getElementById('button7').innerText = '';
  document.getElementById('button8').innerText = '';
  document.getElementById('button9').innerText = '';
}
async function displaymatrix() {
  for (let rows of matrix) {
    for (let columns of rows) {
      console.log(columns);
    }
    console.log('');
  }
}
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkwinner() {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      currentchild = matrix[i][j];
      if (j == 1) {
        leftchild = matrix[i][j - 1];
        rightchild = matrix[i][j + 1];
        if (currentchild == 1 && leftchild == 1 && rightchild == 1) {
          alert(document.getElementById('player1').value + ' WINS!!');
          await sleep(500);
          refreshgame();
          break;
        }
        if (currentchild == 0 && leftchild == 0 && rightchild == 0) {
          alert(document.getElementById('player2').value + '  WINS!! ');
          await sleep(500);
          refreshgame();
          break;
        }
      }
      if (i == 1) {
        upchild = matrix[i - 1][j];
        downchild = matrix[i + 1][j];
        if (currentchild == 1 && upchild == 1 && downchild == 1) {
          alert(document.getElementById('player1').value + ' WINS!!');
          await sleep(500);
          refreshgame();
          

          break;
        }
        if (currentchild == 0 && upchild == 0 && downchild == 0) {
          alert(document.getElementById('player2').value + '  WINS!! ');
          await sleep(500);
          refreshgame();
   
          break;
        }
      }
      if (i == 1 && j == 1) {
        leftupdiagonalchild = matrix[0][0];
        leftdowndiagonalchild = matrix[2][0];
        rightdowndiagonalchild = matrix[2][2];
        rightupdiagonalchild = matrix[0][2];
        if (
          leftupdiagonalchild == 1 &&
          rightdowndiagonalchild == 1 &&
          currentchild == 1
        ) {
          alert(document.getElementById('player1').value + ' WINS!!');
          await sleep(500);
          refreshgame();
          await sleep(500);
          refreshgame();

          break;
        }
        if (
          leftdowndiagonalchild == 1 &&
          rightupdiagonalchild == 1 &&
          currentchild == 1
        ) {
          alert(document.getElementById('player1').value + ' WINS!!');
          await sleep(500);
          refreshgame();
          
        

          break;
        }
        if (
          leftupdiagonalchild == 0 &&
          rightdowndiagonalchild == 0 &&
          currentchild == 0
        ) {
          alert(document.getElementById('player2').value + '  WINS!! ');
          await sleep(500);
          refreshgame();
          break;
        }
        if (
          leftdowndiagonalchild == 0 &&
          rightupdiagonalchild == 0 &&
          currentchild == 0
        ) {
          alert(document.getElementById('player2').value + '  WINS!! ');
          await sleep(500);
          refreshgame();
          break;
        }
      }
    }
  }
}

async function button1() {
  if (currenttext == 'O') {
    document.getElementById('button1').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[0][0] = 1;
  } else {
    document.getElementById('button1').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[0][0] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function newGame() {
  location.reload();
}
async function button2() {
  if (currenttext == 'O') {
    document.getElementById('button2').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[0][1] = 1;
  } else {
    document.getElementById('button2').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[0][1] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button3() {
  if (currenttext == 'O') {
    document.getElementById('button3').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[0][2] = 1;
  } else {
    document.getElementById('button3').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[0][2] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button4() {
  if (currenttext == 'O') {
    document.getElementById('button4').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[1][0] = 1;
  } else {
    document.getElementById('button4').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[1][0] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button5() {
  if (currenttext == 'O') {
    document.getElementById('button5').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[1][1] = 1;
  } else {
    document.getElementById('button5').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[1][1] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button6() {
  if (currenttext == 'O') {
    document.getElementById('button6').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[1][2] = 1;
  } else {
    document.getElementById('button6').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[1][2] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button7() {
  if (currenttext == 'O') {
    document.getElementById('button7').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[2][0] = 1;
  } else {
    document.getElementById('button7').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[2][0] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button8() {
  if (currenttext == 'O') {
    document.getElementById('button8').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[2][1] = 1;
  } else {
    document.getElementById('button8').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[2][1] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}
async function button9() {
  if (currenttext == 'O') {
    document.getElementById('button9').innerHTML =
      '<img src = "cancel.png" height = "120" width  ="120"/>';
    currenttext = 'X';
    matrix[2][2] = 1;
  } else {
    document.getElementById('button9').innerHTML =
      '<img src = "o.png" height = "120" width  ="120"/>';
    currenttext = 'O';
    matrix[2][2] = 0;
  }
  displaymatrix();
  await sleep(100);
  checkwinner();
}

// let button_1 = (document.getElementById('button1').onclick = button1);

// async function butt() {
//   document.getElementById('button1').innerText = 'Bhavesh';
// }
