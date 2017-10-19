//克隆函数

// Array.prototype.clone=function () {
//                 var o=[];
//               this.forEach(function (value,index) {
//                     o[index]=value;
//               })
//     console.log(o);
// }
var Arr=[1,2,3,4,56,87];
//arr.clone();


Array.prototype.myClone=function (callback,thisArg) {
    if(typeof callback!=='function'){
        throw new TypeError(callback+'is not a function');
    }
    for(var i=0;i<this.length;i++){
        //判断值是否有效
        if(Object.prototype.hasOwnProperty.call(this,i)){
            callback(this[i],i,this)
        }

    }
}
Arr.myClone(function (value,index,arr) {
    var o=[];
    arr.forEach(function (value,index) {
        o[index]=value;
    })
    console.log(o)
})
;