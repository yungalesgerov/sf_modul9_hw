let btn = document.querySelector('.btn');
let input = document.querySelector('.form-input');
let div = document.querySelector('.result');
let input2 = document.querySelector('.form-input2');

btn.addEventListener('click', () => {
  if(input.value >= 100 && input.value <= 300 && input2.value >= 100&& input2.value<=300) {
    let link = 'https://picsum.photos/200/300';
    let newLink = link.slice(0,-6).split('2').join(input.value+"/"+input2.value);
    // console.log(newLink);
    fetch(newLink)
    .then(response => response.url)
    .then(result => loadPhoto(result))
    
    
    console.log("Происходит загрузка фото");
  
   input.value = '';
    input2.value = '';
  } else {
     console.log("одно из чисел вне диапазона от 100 до 300");
    }
});

function loadPhoto(photoUrl) {
    const cardBlock =   `<img
                          src="${photoUrl}"
                          style="margin-right: 30px"
                        />`;

   div.innerHTML = cardBlock;
}