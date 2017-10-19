//克隆函数

Array.prototype.clone=function () {
                var o=[];
              this.forEach(function (value,index) {
                    o[index]=value;
              })
               console.log(o);
}
var arr=[1,2,3,4,56,87];
arr.clone();