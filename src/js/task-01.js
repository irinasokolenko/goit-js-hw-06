"use strict";

const item = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категорія: ${title} / Кількість елементів: ${itemsLength}`);
});
