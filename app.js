// function User (name, age, phone){
//     this.name =name
//     this.age =age
//     this.phone =phone
// }
// let bek = new User('bek', 65, '+545424')
// console.log(bek);

// let user  = {
//     name: 'bek',
//     age: 2454,
//     adres:{
//         ctiy: 'Tashkent'
//     }
// }
// console.log(user.adres ?.ctiy); 

//////////////////////////////////////////////
// vazifa masalalari

// 1. **Masala**: Berilgan massivning har bir elementini uzunligiga qarab, teskari tartibda chiqaruvchi funksiya yozing.

// const arr = ['jeep', 'it', 'matiz', 'malibu', true, false, 42, 7];
// const func = function(arg){  // express
//     if(arg == []){
//         return []
//     }
//     let newArr = arg.map(element => element.toString());
//     return newArr.sort((a,b) => b.length - a.length);
// }
// console.log(func(arr));

// const func1 = (arg) => { // arrow
//     if(arg == []){
//         return []
//     }
//     let newArr = arg.map(element => element.toString());
//     return newArr.sort((a,b) => b.length - a.length);
// } 
// console.log(func1(arr));

// function func2 (arg){ // regular
//     if(arg == []){
//         return []
//     }
//     let newArr = arg.map(element => element.toString());
//     return newArr.sort((a,b) => b.length - a.length);
// }
// console.log(func2(arr));






// 2. **Masala**: Massiv ichidagi barcha string elementlarning birinchi harfini katta harfga o'zgartiruvchi funksiya yozing.

// const text = `Massiv ichidagi barcha string elementlarning birinchi harfini katta harfga o'zgartiruvchi funksiya yozing`;
// const func = (arg) => { // arrow
//     if(arg == ''){
//         return undefined
//     }
//     const arrStr = arg.split(' ');
//     let res = arrStr.map(element =>{
//         return element[0].toUpperCase() + element.slice(1)
//     });
//     return res;
// }
// console.log(func(text));

// const func = function(arg) { // express
//     if(arg == ''){
//         return undefined
//     }
//     const arrStr = arg.split(' ');
//     let res = arrStr.map(element =>{
//         return element[0].toUpperCase() + element.slice(1)
//     });
//     return res;
// }
// console.log(func(text));

// function func (arg) { // regular
//     if(arg == ''){
//         return undefined
//     }
//     const arrStr = arg.split(' ');
//     let res = arrStr.map(element =>{
//         return element[0].toUpperCase() + element.slice(1)
//     });
//     return res;
// }
// console.log(func(text));




// 3. **Masala**: Berilgan stringdagi barcha raqamlarni olib tashlab, qolgan qismini qaytaruvchi funksiya yozing.

// const text = `B3er1ilg5an S9tr5i3ng5d5a2gi`;
// const func = (arg) => { // arrow
//     if(arg == ''){
//         return undefined
//     }
//     const str = arg.split('')
//     let newText = '';
//     str.forEach((element) => {
//         if(isNaN(element)){
//             newText += element
//         }
//     });
//     return newText;
// }
// console.log(func(text));


// const func1 = function (arg) {  // express
//     if(arg == ''){
//         return undefined
//     }
//     const str = arg.split('')
//     let newText = '';
//     str.forEach((element) => {
//         if(isNaN(element)){
//             newText += element
//         }
//     });
//     return newText;
// }
// console.log(func1(text));


// function func2  (arg) {  // regular
//     if(arg == ''){
//         return undefined
//     }
//     const str = arg.split('')
//     let newText = '';
//     str.forEach((element) => {
//         if(isNaN(element)){
//             newText += element
//         }
//     });
//     return newText;
// }
// console.log(func2(text));




// 4. **Masala**: Massiv ichida faqat string turlarini saqlab, boshqa turlarni olib tashlaydigan funksiya yozing.

// const arr = ['Massiv',undefined, 'ichida',false, 'faqat',45.6, 'string',true, 'turlarini',56, 'saqlab', null, 'qoling'];
// const func = (arg) => { // arrow
//     if(arg == []){
//         return []
//     }
//     let res = arg.filter((element) =>{ 
//         return typeof element === "string";
//     });
//     return res;
// };
// console.log(func(arr));


// const func = function(arg)  { // express
//     if(arg == []){
//         return []
//     }
//     let res = arg.filter((element) =>{ 
//         return typeof element === "string";
//     });
//     return res;
// };
// console.log(func(arr));


// function func(arg) {  // regular
//     if(arg == []){
//         return []
//     }
//     let res = arg.filter((element) =>{ 
//         return typeof element === "string";
//     });
//     return res;
// };
// console.log(func(arr));



// 5. **Masala**: Berilgan matindagi so'zlarning sonini aniqlovchi funksiya yozing.

// let text = `Berilgan matindagi so'zlarning sonini aniqlovchi funksiya yozing`
// const func = function (arg ){ // express
//     if(arg == ''){
//         return undefined
//     }
//     let arrStr = arg.split(' ');
//     return arrStr.length
// } 
// console.log(func(text));

// const func = (arg ) => { // arrow
//     if(arg == ''){
//         return undefined
//     }
//     let arrStr = arg.split(' ');
//     return arrStr.length
// } 
// console.log(func(text));

// function func (arg ){  // regular
//     if(arg == ''){
//         return undefined
//     }
//     let arrStr = arg.split(' ');
//     return arrStr.length
// } 
// console.log(func(text));





// 6. **Masala**: Berilgan massivdagi har bir string elementni uzunligiga qarab saralash funksiyasini yozing.

// const arr = ['Berilgan', 'massivdagi', 'har', 'bir', 'string', 'elementni', 'uzunligiga', 'qarab', 'saralash', 'funksiyasini', 'yozing'];
// const func = function(arg){  // express
//     if(arg == []){
//         return 'null[]'
//     }
//     return arg.sort((a,b) => a.length - b.length);
// }
// console.log(func(arr));

// const func1 = (arg) => { // arrow
//     if(arg == []){
//         return 'null[]'
//     }
//     return arg.sort((a,b) => a.length - b.length);
// } 
// console.log(func1(arr));

// function func2 (arg){ // regular
//     if(arg == []){
//         return 'null[]'
//     }
//     return arg.sort((a,b) => a.length - b.length);
// }
// console.log(func2(arr));



// 7. **Masala**: Stringdagi barcha unli harflarni olib tashlaydigan funksiya yozing.
// let text = `Stringdagi barcha unli harflarni olib tashlaydigan funksiya yozing`;
// const func = (arg) => {
//     if(arg == ''){
//         return undefined
//     }
//     const vowels = 'aeiouAEIOU';
//     return arg.split('').filter(element => !vowels.includes(element)).join('');
// }
// console.log(func(text));

// const func1 = function(arg){
//     if(arg == ''){
//         return undefined
//     }
//     const vowels = `aiuoeAIEOU`
//     return arg.split('').filter(element => !vowels.includes(element)).join('')
// }
// console.log(func1(text));

// function func2 (arg){
//     if(arg == ''){
//         return undefined
//     }
//     const  vowels = `auieoAOIEU`;
//     return arg.split('').filter(element => !vowels.includes(element)).join('')
// }
// console.log(func(text));




// 8. **Masala**: Berilgan massivdagi eng uzun stringni qaytaruvchi funksiya yozing.

// let arr = ['Berilgan', 'massivdagi', 'eng', 'uzun', 'stringni', 'qaytaruvchi', 'funksiya', 'yozing'];
// const func = function(arg){  // express
//     if(arg == []){
//         return []
//     }
//     let res = arg.sort((a, b) => b.length - a.length);
//     return res[0]
// }
// console.log(func(arr));

// const func1 = (arg) => {  // arrow
//     if(arg == []){
//         return []
//     }
//     let res = arg.sort((a, b) => b.length - a.length);
//     return res[0]
// }
// console.log(func1(arr));

// function func2(arg){  // regular
//     if(arg == []){
//         return []
//     }
//     let res = arg.sort((a, b) => b.length - a.length);
//     return res[0]
// }
// console.log(func2(arr));




// 9. **Masala**: Berilgan stringdagi barcha so'zlarni teskari tartibda chiqaruvchi funksiya yozing.

// const text = `Berilgan stringdagi barcha so'zlarni teskari tartibda chiqaruvchi funksiya yozing`;
// const func = (arg) => {  // arrow
//     let arr = arg.split(' ');
//     let newArr = []; 
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''));
//     }
//     return newArr.join(' ');
// }
// console.log(func(text));

// const func = function (arg) {  // express
//     let arr = arg.split(' ');
//     let newArr = []; 
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''));
//     }
//     return newArr.join(' ');
// }
// console.log(func(text));

// function func(arg) {  //regular
//     let arr = arg.split(' ');
//     let newArr = []; 
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''));
//     }
//     return newArr.join(' ');
// }
// console.log(func(text));

// 10. **Masala**: Massiv ichida berilgan string qanchalik ko'p borligini aniqlovchi funksiya yozing.

// ozi bolmadi buni ishlashni ustoz  eng kop takrorlangan elementni topish deb tushundim ustoz shartni 

// function func(arg) {
//     let arr  = arg[0]
//     let count = 0;
//     for(let i = 0 ; i < arg.length ; i++ ){
//         let countStr = 0
//         for(let j = 0 ; j < arg.length ; j++){
//             if(arg[i] === arg[j] ){
//                 countStr++
//             }
//         }
//         if(countStr > count){
//             count = countStr
//             arr = arg[i];
//         }
//     }
//     return arr;
// }
// const cars = [
//     'Toyota', 'Honda', 'Ford', 'Toyota', 
//     'BMW', 'Honda', 'Toyota', 'Chevrolet', 
//     'Ford', 'Toyota', 'Honda', 'Toyota'
// ];
// console.log(func(cars));


// ustos torisi qaysibiri shartga tushadi bilmadim shunga 2 ta tushunganim boyicha yozdim 
// const func = function(arg, str) {
//     let count = 0;  
//     arg.forEach(element => {
//         if (element === str) {
//             count++;
//         }
//     });
//     return count;
// }
// const cars = [
//         'Toyota', 'Honda', 'Ford', 'Toyota', 
//         'BMW', 'Honda', 'Toyota', 'Chevrolet', 
//         'Ford', 'Toyota', 'Honda', 'Toyota'
//     ];
// const words = 'Honda';
// console.log(func(cars, words)); 


