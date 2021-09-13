var character=document.querySelector(".character");
var block=document.querySelector('.block');
function jump(){
    if (character.classList !="animate"){
        character.classList.add('animate');
    }
    
    setTimeout(function(){
        character.classList.remove('animate')
    },500);
}
    var end=setInterval(function(){
        var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue('top'));    
        var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if (blockLeft<19 && blockLeft>0 && characterTop>=130){
            block.style.animation="none";
            block.style.display="none";
            alert(`Game over  `);
        } 
},10);

function reset(){
    block.style.display='block';
    block.style.animation=block;
}
