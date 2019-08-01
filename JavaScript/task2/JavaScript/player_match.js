var myback_to_home = document.getElementById("back_to_home");     // 获取返回链接
           mysubmi = document.getElementById("submi");            // 提交按钮
    myback_to_home.onclick = function() {                             
        window.location.href = "../html/home.html";}               // 返回主页
           mysubmi.onclick = function() {                             
            window.location.href = "../html/licensing.html";}                            //发牌
var  myInputText = document.getElementById("input_text");       // 输入人数
    myInputRange = document.getElementById("input_range");      // 滑动条
           myadd = document.getElementById("add");              // 加
      myreducing = document.getElementById("reducing");         // 减
        mykiller = document.getElementById("killer");           // 杀手
     mycivilians = document.getElementById("civilians");        // 平民
window.onload = function() {
    myInputText.addEventListener("change",myfun1);    // 改变输入框内容  自动判断
    myInputText.addEventListener("change", mykillers);
   myInputRange.addEventListener("input",myfun2);     // 滑动条
   myInputRange.addEventListener("click", mykillers);
          myadd.addEventListener("click",myfun3);     // 加
          myadd.addEventListener("click",mykillers);
     myreducing.addEventListener("click",myfun4);     // 减
     myreducing.addEventListener("click",mykillers);
}
function myfun1() {
    if (isNaN(myInputText) && myInputText.value >=4 && myInputText.value <=18){
        myInputRange.value = myInputText.value;     // 点击判断
    } else {
        alert("请输入玩家人数");
    }
}
function myfun2() {
    myInputText.value = myInputRange.value;     // 同步滑动条和输入框
} 
function myfun3() {
    myInputRange.value++;
    if(myInputText.value >= 18 ){
        alert("请输入玩家人数");
    } else {
        myInputText.value = myInputRange.value;  // 同步滑动条和输入框
    };
}
function myfun4() {
    myInputRange.value--;
    if(myInputText.value <= 4 ){
        alert("请输入玩家人数");
    } else {
        myInputText.value = myInputRange.value;  // 同步滑动条和输入框
    }
}
//console.log(typeof myInputText.value)
function mykillers(){
    var killer = Math.round((myInputText.value)*23/100);   //获取杀手人数
        civilians = myInputText.value - (Math.round((myInputText.value)*23/100)); //获取平民人数
    mykiller.innerHTML = killer;       //
 mycivilians.innerHTML =  civilians;   //
    console.log(killer)  
//console.log(civilians)
    var  mynumber = [];    //人数排序
    for (var i = 0; i < myInputRange.value; i++){
        mynumber.push(0); //平民用数字“ 0 ” 代替
    };
//console.log(mynumber) 
    for (var a = 0; a < killer; a++) { //替换前“ N ”平民为杀手
        mynumber[a] = 1; //杀手用数字“ 1 ” 代替
    }
//console.log(mynumber)    
    var reordering = [];         //重新排序
for ( var b = 0; b < myInputText.value; b++ ) {
    var aaa = Math.floor(Math.random()*(mynumber.length - b));
    reordering.push(mynumber[aaa]);
    mynumber[aaa] = mynumber[mynumber.length - b - 1];
}

var sss = JSON.stringify(reordering);     //转换为字符串
    localStorage.setItem("myreordering",sss) //存入

console.log(reordering)
}

//console.log(typeof myInputText.value)

/*function mykillers() {
    if(myInputText.value >= 4 && myInputText.value <= 6){
        mykiller.innerHTML = "1";
        mycivilians.innerHTML = myInputText.value - 1;
    } else if(myInputText.value >= 7 && myInputText.value <= 10){
        mykiller.innerHTML = "2";
        mycivilians.innerHTML = myInputText.value - 2;
    } else if(myInputText.value >= 11 && myInputText.value <= 15){
        mykiller.innerHTML = "3";
        mycivilians.innerHTML = myInputText.value - 3;
    } else if(myInputText.value >= 16 && myInputText.value <= 18){
        mykiller.innerHTML = "4";
        mycivilians.innerHTML = myInputText.value - 4;
    }
}*/






