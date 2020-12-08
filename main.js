const listOneItems = document.querySelectorAll('ol li')

const listTwoItems = document.querySelectorAll('ul li')

const rowOfDinos = document.querySelectorAll('#row img')


const lineThrough = (event) => {
    list1 = event.target
    list1.style.textDecoration = 'line-through'
}

for ( const numbered of listOneItems) {
    numbered.addEventListener('click', lineThrough)
}


const fadeAway = (event) => {
    list2 = event.target
    list2.style.opacity = '0%'
}

for ( const bullets of listTwoItems) {
    bullets.addEventListener('click', fadeAway)
}


const disappear = (event) => {
    pics = event.target
    pics.style.width = '0px'
}

for ( const pics of rowOfDinos) {
    pics.addEventListener('click', disappear)
}


const meteorMe = document.querySelector('button#destroy-all')

const massExtinction = () => {
    for  ( const numbered of listOneItems) {
        numbered.style.textDecoration = 'line-through'
    } 
    
    for ( const bullets of listTwoItems) {
        bullets.style.opacity = '0%'
    }
    
    for ( const pics of rowOfDinos) {
        pics.style.width = '0px'
    } 

}

meteorMe.addEventListener('click', massExtinction)

