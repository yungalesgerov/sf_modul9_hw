let parser = new DOMParser(); 
let smt = `
 <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
let xmlDom = parser.parseFromString(smt, "text/xml");
let list = xmlDom.querySelector('list');
let students = list.querySelectorAll('student');

let obj = {
  list:[]
};

for(let i = 0; i < students.length; i++) {
   let name = students[i].querySelector('name');
    let age = students[i].querySelector('age');
   let prof = students[i].querySelector('prof');
   let langAttr = name.getAttribute('lang');
   let result = {
    list: [
        {
            name:name.textContent,
            age: age.textContent,
            prof: prof.textContent,
            lang: langAttr
        }
    ]
  };

  obj.list.push(result);
}

console.log(obj);