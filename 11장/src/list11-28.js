function dataChange(obj) {
  obj.data = 'changed!';
}
var obj = {data: 'original'};
dataChange(obj);
console.log(obj);
