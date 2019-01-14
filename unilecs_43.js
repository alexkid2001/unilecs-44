
let e = 's';
let arr = ['s', 's', 's', 's', 's', 'f', 'd'];
let e1 = '%';
let arr1 = ['%', '%', '%', '%', 'd', '%'];



function inclusionCheck(ch, arr) {
    let answer = false;
    let matchesCnt = 0;
    console.log('e = ' + ch);
    console.log('arr = ' + arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ch) {
           matchesCnt++;
           if(matchesCnt === 5) {
               answer = true;
               return(console.log('Answer = ' +  answer));
           } 
        }
        else {
            matchesCnt = 0;
        }
    }
    return(console.log('Answer = ' +  answer));
}


inclusionCheck(e, arr);
inclusionCheck(e1, arr1);