var arr = [];
function allowDrow(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("content", ev.target.textContent);
}
function drop(ev, block) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var content = ev.dataTransfer.getData("content");
    if(block.id == "div2"){
        if(arr.indexOf(content) == -1){
            arr.push(content);
        }
    }
    if(block.id == "div1"){
        if(arr.indexOf(content) != -1){
           arr.splice(arr.indexOf(content), 1);
        }
    }
    block.appendChild(document.getElementById(data));
    console.log(arr);
}




// var arr = [];
// for ( var i = 0; i < 100; i++ ) {
//     arr.push(Math.round( Math.random() * 100 ));
// }
// function sortBub( arr){
//   for(var s = arr.length-1;s>0; s--){
//     var counter = 0;
//     for(var t = 0;t<s; t++){
//       if(arr[t] >arr[t+1]){
//         var tmp = arr[t];
//         arr[t] = arr[t+1];
//         arr[t+1] = tmp;
//         counter ++;
//       }
//     }
//     if (counter==0){
//       break;
//     }

//   }
//   return console.log(arr);
// }

// sortBub(arr);


//----------------------------------------------------------------------------------------------------
// function plus () {
//     var num1, num2, result;
//     num1 = getElementById('n1').value;
//     num1 = parseInt(num1); 

//     num2 = getElementById('n2').value;
//     num2 = parseInt(num2);

//     result = num1 +num2;
//     document.getElementById('out').innerHTML = result;
// }
// function draw (){
//     var out = '';
//     // let m = 0;
//     for( let i = 0;i<chess.length;i++){
//         let arr = chess[i];
//         for( let k = 0; k < arr.length; k++){
//             
//             out += `<div class ='chess-block' style='background: ${alex}'></div>`;
            
//         }
        
//     }
//     document.querySelector('.setk').innerHTML = out;

// function randColor() {
//     var r = Math.floor(Math.random() * (256)),
//         g = Math.floor(Math.random() * (256)),
//         b = Math.floor(Math.random() * (256));
//     return '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     let alex = randColor();
// }


// const x = getR();
// const y = getR();
// const z = getR();
// function getR() {
//   return Math.round(Math.random() * 255);
// }