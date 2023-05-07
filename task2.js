let smt = `
 {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
let obj ={
  list:[]
};
let data = JSON.parse(smt);
let list = data.list;
// console.log(list);
for(let i = 0; i < list.length; i++) {
  let result = {
    
      name: list[i].name,
      age: list[i].age,
      prof: list[i].prof
   
   };
  obj.list.push(result);
}
console.log(obj);