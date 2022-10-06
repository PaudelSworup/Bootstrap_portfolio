const scrollDown = () =>{
    window.scrollBy(0,600);
    // console.log(window.innerHeight)    
}

let nav_lists = document.querySelectorAll(".nav-link")
nav_lists.forEach(a=>{
    a.addEventListener('click',function(){
        nav_lists.forEach(a=>a.classList.remove('active'))
        this.classList.add('active')
    })
})


let port = document.querySelectorAll(".porth5")
port.forEach(h5=>{
    h5.addEventListener('click',function(){
        port.forEach(h5=>h5.classList.remove('hActive'))
        this.classList.add('hActive')
    })
})

const showApp = () =>{
    let firstContainer = document.getElementById('All');
    let secondContainer = document.getElementById('App');
    let thirdContainer = document.getElementById('Card');
    let fourthContainer = document.getElementById('Web');

    if((firstContainer.style.display = 'block') || (thirdContainer.style.display = 'block') || (fourthContainer.style.display = 'block') ){
        firstContainer.style.display = 'none'
        thirdContainer.style.display = 'none'
        fourthContainer.style.display = 'none'
        secondContainer.style.display = 'block';
    }else firstContainer.style.display = 'block'
}

const showAll = () =>{
    let firstContainer = document.getElementById('All');
    let secondContainer = document.getElementById('App');
    let thirdContainer = document.getElementById('Card');
    let fourthContainer = document.getElementById('Web');
    

    if(firstContainer.style.display = 'none'){
        firstContainer.style.display = 'block'
        secondContainer.style.display = 'none';
        thirdContainer.style.display = 'none';
        fourthContainer.style.display = 'none';
    }
}

const showCard  = () =>{
    let firstContainer = document.getElementById('All');
    let secondContainer = document.getElementById('App');
    let thirdContainer = document.getElementById('Card');
    let fourthContainer = document.getElementById('Web');

    if((firstContainer.style.display = 'block') || (secondContainer.style.display = 'block') || (fourthContainer.style.display = 'block') ){
        firstContainer.style.display = 'none'
        thirdContainer.style.display = 'block'
        fourthContainer.style.display = 'none'
        secondContainer.style.display = 'none';
    }else thirdContainer.style.display = 'block'
}

const showWeb = () =>{
    let firstContainer = document.getElementById('All');
    let secondContainer = document.getElementById('App');
    let thirdContainer = document.getElementById('Card');
    let fourthContainer = document.getElementById('Web');

    if((firstContainer.style.display = 'block') || (secondContainer.style.display = 'block') || (third.style.display = 'block') ){
        firstContainer.style.display = 'none'
        thirdContainer.style.display = 'none'
        fourthContainer.style.display = 'block'
        secondContainer.style.display = 'none';
    }else fourthContainer.style.display = 'block'
}


const myData = [
    {
        id:1,
        name:'Andriod',
    },

    {
        id:2,
        name:'Mysql',
    }
]


let andriod = document.getElementById('Android')
let mysql = document.getElementById('mysql')

function setData(){
    mysql.getElementsByClassName('sql')[0].innerHTML = myData[1].name
    andriod.getElementsByClassName('and')[0].innerHTML = myData[0].name;
}










