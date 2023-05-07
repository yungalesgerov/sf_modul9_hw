let btn = document.querySelector('.btn');
let input = document.querySelector('.form-input');
let div = document.querySelector('.result');


let useRequest = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
  
};

let displayResult = (apiData) => {
  let cards = "";
  apiData.forEach(item=>{
  let cardBlock = `
      <div class='card'>
      <img src="${item.download_url}" class="card-image" style='width:100px; height:150px; margin-left:30px; margin-top: 30px'>
      <p>${item.author}</p>
      </div>
    `;
    cards += cardBlock; 
  });
  div.innerHTML = cards;
};

 btn.addEventListener('click', () =>{
  if(input.value >= 1 && input.value <= 10) {
    let link = 'https://picsum.photos/v2/list?limit=5';
    let res = link.slice(0,-1).split('=').join("="+input.value);
   useRequest(res,displayResult);
    console.log("Происходит загрузка фото");
   input.value = '';
  } else {
     console.log("число вне диапазона от 1 до 10");
    }
 });