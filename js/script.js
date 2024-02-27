let burguer = document.querySelector('.burguer')
let itemMenu = document.querySelector('.itens-menu')
let itemList = document.querySelectorAll('.item')

function clickMenu() {
    
        if (itemMenu.style.display == 'none') {
            itemMenu.style.display = "flex"
        } else{
            itemMenu.style.display = "none"
        }
}

if(burguer.style.display === 'flex'){
    for (let item of itemList) {
        item.addEventListener('click', clickMenu)
    
    }
}
