const elName = document.querySelector('input[name=input_name]');
const elSurname = document.querySelector('input[name=input_surname]');
const elYear = document.querySelector('input[name=input_year]');
const elBtnOk = document.querySelector('button[name=btnOk]');
const elList = document.querySelector('.personlist');

const elName2 = document.querySelector('input[name=input_name2]');
const elSurname2 = document.querySelector('input[name=input_surname2]');
const elInputDate = document.querySelector('input[name=bth_date]');
const elBtnOk2 = document.querySelector('button[name=btnOk2]');
const elList2 = document.querySelector('.personlist2');

//let person = [{persname: '', surname: '', year: ''}];
let person = [];
let age;
let BthDate;
let person2 = [];

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

const renderPersonList = (arr, lnkList) => {
    const html = arr.map((item) => {
      const _html = `<div>${item.persname} ${item.surname} ${item.date}</div>`;
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
    date = age;
    if ((persname!='')&&(surname!='')&&(year>0)&&(age>0))
        {person.push({persname, surname, date});
        renderPersonList(person, elList);
        elName.value = '';
        elSurname.value = '';
        elYear.value = '';}
    else return;
});

elInputDate.addEventListener('change', (ev) => {
    BthDate = ev.target.value;
    //let year = Number(BthDate.substring(0,4)); 
    //let date = moment(BthDate).fromNow();
});

elBtnOk2.addEventListener('click', () => { 
    persname = upFirst(elName2.value);
    surname = upFirst(elSurname2.value);
    BthDate = `${BthDate.slice(8,10)}.${BthDate.slice(5,7)}.${BthDate.slice(0,4)}`;
    date = BthDate;
    if ((persname!='')&&(surname!=''))
        {person2.push({persname, surname, date});
        console.log(person2);
        renderPersonList(person2, elList2);
        elName2.value = '';
        elSurname2.value = '';
        }
    else return;
});







