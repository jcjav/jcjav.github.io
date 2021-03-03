var app = document.getElementById('container');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('CREATIVE. ')
    .start()
    .typeString('DESIGNER. ')
    .typeString('DEVELOPER. ')
    .pauseFor(1500)
    .typeString('<a href="https://joannejavier.myportfolio.com/work" id="menu" class="bg">/ work / </a>')
    .typeString('<a href="#" id="menu" class="bg">about / </a>')
    .typeString('<a href="https://www.linkedin.com/in/joannejavier/" id="menu" class="bg">linkedin / </a>')
    .typeString('<a href="#" id="menu" class="bg">codepen / </a>')
    .typeString('<a href="mailto: joannecjavier@gmail.com" id="menu" class="bg">email /</a>')
    .pauseFor(2500);



(function() {
    const button = document.querySelector('#bg')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
    
        body.style.backgroundColor = hex
    }
} )()
