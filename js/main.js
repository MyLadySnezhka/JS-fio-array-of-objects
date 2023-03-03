const elName = document.querySelector('input[name=input_name]');
const elSurname = document.querySelector('input[name=input_surname]');
const elYear = document.querySelector('input[name=input_year]');
const elBtnOk = document.querySelector('button[name=btnOk]');
const elList = document.querySelector('.personlist');

//let person = [{persname: '', surname: '', year: ''}];
let person = [];

const time = Number(moment().format('YYYY')); 

//функції для обробки тексту з інпуту

//заборонити вводити щось, крім літер
const LetterOnly = (InputText) => {
    InputText.addEventListener('keyup', () => {
        InputText.value = InputText.value.replace(/[^a-zA-Zа-яА-ЯёЁ ]/g, '');
})};

//зробити першу літеру заглавною

// const upFirst = (str) => {
//     str = str.toLowerCase();  //зробити всі літери маленькими
//     str = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
//     return str;   
// };

const upFirst = (str) =>  
    str = `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`;

// тільки цифри

const NumberOnly = (InputYear) => {
    InputYear.addEventListener('keyup', (ev) => {
        ev.target.value = ev.target.value.replace(/[^0-9.]/g, '');
})};

const renderPersonList = (lnkList) => {
    const html = person.map((item) => {
      const _html = `<div>${item.persname} ${item.surname} ${item.age}</div>`;
      return _html;
    }).join('');
    lnkList.innerHTML = html;
  };

LetterOnly(elName);
LetterOnly(elSurname);
NumberOnly(elYear);

elBtnOk.addEventListener('click', () => { 
    persname = upFirst(elName.value);
    surname = upFirst(elSurname.value);
    year = Number(elYear.value);
    age = Number(time - year);
    //age = time - Number(elYear.value);
    if ((persname!='')&&(surname!='')&&(year>0)&&(age>0))
        {person.push({persname, surname, age});
        renderPersonList(elList);
        elName.value = '';
        elSurname.value = '';
        elYear.value = '';}
    else return;
});







