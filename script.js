// Будь ласка, не змінюй код нижче. Він необхідний для правильного налаштування позиціонування елементів :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, який потрібно виправити
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names =['Тарілка', 'Кружка', 'Ракета', 'Марсохід']
for (let i = 0; i < item_names.length; i += 1) {
    item_name_objects[i].innerHTML = item_names[i]
}



let item_descriptions =['Тарілка з принтом Марса. Доступна в червоному та білому кольорах', 'Кружка з принтом Марса. Доступна в червоному та білому кольорах', 'Масштабна модель однієї з ракет Galaxy', 'Масштабна модель марсохода (ми купуємо їх у NASA)']
let item_prices= [1000, 1000, 2500, 5000]
let item_description_objects= document.querySelectorAll('.merch-item-descr')
let item_price_objects= document.querySelectorAll('.merch-item-price')
for (let i = 0; i < item_description_objects.length; i += 1) {
item_description_objects[i].innerHTML = item_descriptions[i]
item_price_objects[i].innerHTML=item_prices[i]
}

let cart_items_count = document.querySelector('.cart-amount')
let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn')
for (let i = 0; i < add_to_cart_buttons.length; i += 1){
    add_to_cart_buttons[i].addEventListener('click',function(){
    cart_items_count.innerHTML = +cart_items_count.innerHTML + 1
    })
}
