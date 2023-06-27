"use strict";

const item = document.querySelectorAll('.item');
Array.prototype.forEach.call(item, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.dir(`Категорія: ${title} / Кількість елементів: ${itemsLength}`);
});
