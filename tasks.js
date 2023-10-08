/* 
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі, то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі, 
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) 
*/

{
  let hamburger = 25;
  let fries = 12;

  if (hamburger >= 3 && fries) {
    console.log("Ми поїли");
  } else {
    console.log("ми йдемо в інше кафе");
  };

};


/* 
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

{

  let price = 1901;
  let min = 1000;
  let max = 1900;
  if(price >= min && price <= max) {
      console.log(`${price} is between ${min} and ${max}`);
  } else {
      console.log(`${price} is NOT between ${min} and ${max}` )
  };

};


/*  
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/


{
    let price = 999;
    let min = 1000;
    let max = 1900;

    // Оператор НЕ

    if (!(price >= min && price <= max)) {
        console.log(`${price} is not between ${min} and ${max}`);
    } else {
        console.log(`${price} is between ${min} and ${max}`);
    };


    // Інший оператор

    if(min > price || max < price) {
        console.log(`${price} is not between ${min} and ${max}`)
    } else {
        console.log(`${price} is between ${min} and ${max}`)
    }

};


 /* 
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
    */

{
    let season = 1;

    if (season == 1) {
        console.log('Winter')
    } else if (season == 2) {
        console.log('Spring')
    } else if (season == 3) {
        console.log('Summer')
    } else if (season == 4) {
        console.log('Autumn')
    } else {
        console.log('No season found')
    };
};

/*  
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
    
*/

{
    let a = 10;
    let b = 1000;
    let c = 248;

    if ( a > b && a < c || a > c && a < b) {
        console.log(`${a} is between ${c} and ${b}`)
    } else if ( b > a && b < c || b > c && b < a) {
        console.log(`${b} is between ${a} and ${c}`)
    } else {
        console.log(`${c} is between ${a} and ${b}`)
    }

};


/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

{
    let day = 4;

    switch(day) {
        case 1:
            console.log ('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
    }
}


/*
 
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

{

    let a = 1500;
    let b = 55;
    let c = '*';

    switch(c) {
        case '+':
            c = a + b;
            console.log(`${c}`);
            break;
            
        case '-': 
            c = a - b;
            console.log(`${c}`);
            break;

        case '/':
            c = a / b
            console.log(`${c}`);
            break;

        case '*':
            c = a * b;
            console.log(`${c}`);
            break;

        }

}

/*
8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

*/

{
    let myArray = new Array;

    for (let i = 1; i <= 5; i++) {
        myArray.push(i);
    
    };

    console.log(myArray);

}

    /*

9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for. (массів + метод?)

    */

    {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let myArray = [];

    for (i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            myArray.push(arr[i]);
        }
    }

    console.log(myArray);

    }



    {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let myArray = [];
    
        for (i = 0; i < arr.length; i++) {
            if(arr[i] % 2 !== 0) {
                myArray.push(arr[i]);
            }
        }
    
        console.log(myArray);
    
        }



/*

10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6];
   
*/


{

    let total = 0;
    const myArr = [2, 3, 4, 5, 6];

    for(let i = 0; i < myArr.length; i++ ){
        total += myArr[i];
        console.log(total);

    };

}



    /*

  11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6

    */


    {

       const arr = [ [1, 2], [3, 4], [5, 6] ];

       for(let i = 0; i < arr.length; i++)
       for(let k = 0; k < arr[i].length; k++)
       console.log(arr[i][k]);
        
      
    }




    /*

     12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

    const arr = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    // тут має бути ваше рішення

    console.log(product);

    */

    {

        const arr = [[1, 2], [3, 4], [5, 6, 7]];
        let product = 1;

        for(let i = 0; i < arr.length; i++) {
            for(k = 0; k < arr[i].length; k++)
            product *= arr[i][k];        
            }
        console.log(product);

    }

    /*

    13. Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

    */


    {

        let word = "properties";
        let noVowels = word.replace(/[aeiou]/gi, '');
        console.log(noVowels);

    }


    /*

  14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

{

    {

        let m = 8000;
        let km = m/1000;
        let LastDigit = km % 10;
     
        if ( LastDigit < 1 ) {
            console.log (`${m} метрів це ${km} кілометра`);
        } else if (LastDigit >= 2 && LastDigit <=4) {
            console.log(`${m} метрів це ${km} кілометри`);
        } else if (LastDigit > 5 || (km = 11)) {
            console.log(`${m} метрів це ${km} кілометрів`);
        } else
            console.log(`${m} метрів це ${km} кілометр `)


    }


}














    






    






   
        
        







    












