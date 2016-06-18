function dataChange(data) {
  data = 'changed!';
}
var data = 'original';
dataChange(data);
console.log(data);
