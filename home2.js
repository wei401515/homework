Array.prototype.mySort=function (callback,thisArg) {
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
var Arr=[123,34,12,6,89,45,43];
Arr.mySort(function (value,index,arr) {
    for (var i=0;i<arr.length-1-i;i++) {
        for (var j=0;j<arr.length-i-1;j++) {
            if(arr[j]<arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }

    }console.log(arr);

})
    
