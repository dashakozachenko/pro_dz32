'use strict';

(function () {
    const itemLi = document.querySelectorAll('li');
    console.log(itemLi);

    const ul = document.body.firstElementChild;

    const ulAttributes = ul.attributes;
    console.log(ulAttributes);

    const ulObj = {
        attributesItem : [],
        attributesValue : [],
        getUl (attributes) {
            for (let attr of attributes ) {
                this.attributesItem.push(attr);
                this.attributesValue.push(attr.textContent);
            }
            console.log(this.attributesItem);
            console.log(this.attributesValue);
        }
    };

    ulObj.getUl(ulAttributes);


    const newName = 'Jon';

    function enterLastLi (item , name) {
        item.lastElementChild.innerHTML = `My name is ${name}`;
        console.log(item.lastElementChild.textContent);
    }

    enterLastLi(ul , newName);

    function getAttr (list ,attrName, attrValue){
        list.setAttribute(attrName, attrValue);
        console.log(list);
        console.log(list.getAttribute('data-my-name'));
    }

    getAttr(ul, 'data-my-name', newName);

    function deleteAttr (list , attrName){
        list.removeAttribute(attrName);
        console.log(list);
        console.log(list.getAttribute('date-dog-tail'));
    }

    deleteAttr(ul, 'data-dog-tail');

})();
