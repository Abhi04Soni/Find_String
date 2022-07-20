let str = document.getElementById('String').innerHTML;
const reg = new RegExp(/\w+ing\b/g);
let mat = str.match(reg);

console.log(mat)
console.log(mat.length);