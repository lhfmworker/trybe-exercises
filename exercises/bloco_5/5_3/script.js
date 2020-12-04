function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  window.onload = createDezDays, holidays;
  function createDezDays (){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let days = document.querySelector('#days');
    for (let i = 0; i< dezDaysList.length; i += 1){
      let createdDays = document.createElement('li');
      createdDays.innerText = dezDaysList[i];
      createdDays.className = 'day';
      if (dezDaysList[i]==24 | dezDaysList[i]== 25 | dezDaysList[i]== 31){
        createdDays.classList.add('holiday');
      }
      if (dezDaysList[i]==4 | dezDaysList[i]== 11 | dezDaysList[i]== 18 | dezDaysList[i]== 25){
        createdDays.classList.add('friday');
      }
      days.appendChild(createdDays);
    }
  }
//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function holidays (Feriados){
  let button = document.createElement('button');
  let butContain = document.querySelector('.buttons-container');
  button.id = 'btn-holiday';
  button.name = 'Feriados';
  button.innerHTML = 'Feriados';
  butContain.appendChild(button);
}
holidays();
function btnClick (){
  let btn = document.querySelector('#btn-holiday');
  function colorChange ()
  {
    let holiDayz = document.querySelectorAll('.holiday');
    for (let i=0 ; i< holiDayz.length ; i += 1){
    holiDayz[i].style.backgroundColor = 'blue';
    }
  }
  function colorChangeB ()
  {
    let holiDayz = document.querySelectorAll('.holiday');
    for (let i=0 ; i< holiDayz.length ; i += 1){
    holiDayz[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
  btn.addEventListener('click', colorChange);
  btn.addEventListener('dblclick', colorChangeB);
}
btnClick ();
function sextou (){
  let btnCont = document.querySelector('.buttons-container');
  let btnSextou = document.createElement('button');
  btnSextou.id = 'btn-friday';
  btnSextou.name = 'sextou';
  btnSextou.innerHTML = 'Sextou!'
  btnCont.appendChild(btnSextou);
}
sextou ();
function btnClickFri (){
  let btn = document.querySelector('#btn-friday');
  function fridayChange ()
  {
    let friDayz = document.querySelectorAll('.friday');
    for (let i=0 ; i< friDayz.length ; i += 1){
      friDayz[i].innerText = 'S3XT0U!!!';
    }
  }
  btn.addEventListener('click', fridayChange);
}
btnClickFri();