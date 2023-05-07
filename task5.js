let btn = document.querySelector('.btn');
let input = document.querySelector('.form-input');
let div = document.querySelector('.result');
let input2 = document.querySelector('.form-input2');

 btn.addEventListener('click', () => {
  if(input.value >= 1 && input.value <= 10 && input2.value >= 1&& input2.value<=10) {
    let link = 'https://picsum.photos/v2/list?page=1&limit=10';
    let newL = link.slice(0,36).split('1').join(input.value +"&limit="+input2.value);
      
//     console.log(newL)
    fetch(newL)
    .then(response => response.json())
    .then(item => {loadPhoto(item);
                  saveData()})
    
    
    
    // .then(result => loadPhoto(result))
    .catch(error => console.log("error",error))
    
    console.log("Происходит загрузка фото");
  
   input.value = '';
    input2.value = '';
  } else {
     console.log("одно из чисел вне диапазона от 1 до 10");
    }
 });

function loadPhoto(data) {
  let cards = String();
    data.forEach(a => {
      const cardBlock =   `<div>
                                <img
                                  src="${a.download_url}"
                                  style="width: 150px; margin-right: 30px; margin-top:20px"
                                />
                              </div>`;

   cards += cardBlock;
    });
  div.innerHTML = cards;
    
}
function saveData() {
  localStorage.setItem('photos',div.innerHTML);
};
let getData = () => {
 div.innerHTML =  localStorage.getItem('photos');
};