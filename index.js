
let howMuchOldResults = 0;

function replaceOldResults(){
    let oldResult = document.createElement('p');
    oldResult.innerHTML = document.getElementById('newResult').innerHTML;

    if (howMuchOldResults < 2){
        oldResult.id = 'oldResult' + howMuchOldResults;
        howMuchOldResults += 1;
    }
    else{
        document.getElementById('previousResults').removeChild(document.getElementById('oldResult0'));
        document.getElementById('oldResult1').id = 'oldResult0';
        oldResult.id = 'oldResult1';
    }
    document.getElementById('previousResults').appendChild(oldResult);
}

function count(){
    let op1 = Number(document.getElementById('operand_first').value);
    let op2 = Number(document.getElementById('operand_second').value);
    let operator = document.getElementById('operator').value;
    let res = 0;
    switch(operator){
        case '+':
            res = op1 + op2;
            break;
        case '-':
            res = op1 - op2;
            break;
        case '*':
            res = op1 * op2;
            break;
        case '/':
            if (op2 == 0)
                res = 'Ошибка: Делить на ноль нельзя!';
            else
                res = op1 / op2;
            break;
                
    }
    replaceOldResults();

    document.getElementById('newResult').innerHTML = `\t\t${op1} ${operator} ${op2} = ${res}`;
}
