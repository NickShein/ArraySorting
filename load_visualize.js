document.querySelector('.confirm-btn').addEventListener('click', () => {
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.visualization_sorts').innerHTML = '';
  let input_tarea = document.querySelector('.tarea-input');
  let data = input_tarea.value;
  let data_array = data.split(',').map(Number);
  let max_number = Math.max.apply(null, data_array);
  if (data_array.length>300){
    document.querySelector('.visualization_sorts').style.overflowX = 'scroll';
  }
  else{
    document.querySelector('.visualization_sorts').style.overflowX = 'visible';
  }
  for(let i = 0; i< data_array.length; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add('divs');
    newDiv.style.height = 100 / max_number * data_array[i] + '%';
    if (data_array.length > 300) {
      newDiv.style.padding = '10px';
    }
    else{
      newDiv.style.width = 100 / data_array.length  + '%';
    }
    document.querySelector('.visualization_sorts').appendChild(newDiv);
  }
});

document.querySelector('.subm-btn').addEventListener('click', () => {
  let input_tarea = document.querySelector('.tarea-input');
  let data = input_tarea.value;
  let data_array = data.split(',').map(Number);
  let len = data_array.length;
  let type_sort = document.querySelector('#vis-sorts').value;
  let dir_sort = document.querySelector('#dir-sorts').value;
  let blocks = document.querySelectorAll('.divs');
  if (type_sort = 'Сортування Бульбашкою'){
    if (dir_sort = 'Зростання'){
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (data_array[j] > data_array[j + 1]) {
            let tmp = data_array[j];
            let tmp_height = blocks[j].style.height;
            setTimeout(()=>{
              blocks[j].style.background = 'red';
              
            },10*j*2)
            blocks[j].style.height = blocks[j + 1].style.height;  
            data_array[j] = data_array[j + 1];
            setTimeout(()=>{
              blocks[j + 1].style.background = 'red';
              
            },11*j*2);
            blocks[j + 1].style.height = tmp;
            data_array[j + 1] = tmp;
            setTimeout(()=>{
              if(j>0){
                blocks[j - 1].style.background = 'rgb(255, 188, 188)';
                blocks[j].style.background = 'rgb(255, 188, 188)';
              }
            },30*j*2);
          }
        }
      }
    }
  }
});