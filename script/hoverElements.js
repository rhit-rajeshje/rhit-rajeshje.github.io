/*
https://www.w3schools.com/js/js_htmldom_events.asp

https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp
*/

const workCardNodeList = document.getElementsByClassName("workCard");

const greenWhiteArray = [ "#f2f5f1","#5e7456"];

// function mouseOver(obj){
//     obj.style.color="red";
//     console.log("hover");
// }

// function mouseOut(obj){
//     obj.style.color="green";
//     console.log("no hover");
// }

for(let i=0;i<workCardNodeList.length;i++){
    // workCardNodeList.onmouseover = workCardNodeList[i].addEventListener("mouseover", mouseOver(workCardNodeList[i]));
    // workCardNodeList.onmouseout = workCardNodeList[i].addEventListener("mouseout", mouseOut(workCardNodeList[i]));

    workCardNodeList[i].onmouseover = function(){
        changeColor(workCardNodeList[i], greenWhiteArray.reverse());
    }
    workCardNodeList[i].onmouseout = function(){
        changeColor(workCardNodeList[i], greenWhiteArray.reverse());
    }
}

function changeColor(obj, colorArray){
    obj.style.backgroundColor = colorArray[1];
    obj.style.color = colorArray[0];
    // obj.h3.style.color = colorArray[0];
    // obj.h3.style.background = colorArray[1];
    console.log("change");
}
// document.getElementsByClassName("workCard").addEventListener("mouseover", mouseOver())


