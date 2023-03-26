console.log('This is jigsaw game code');
const bbox = document.getElementById('bigbox');
const box1 = document.querySelector('.smallbox1'); 
const box2 = document.querySelector('.smallbox2');
const box3 = document.querySelector('.smallbox3');
const box4 = document.querySelector('.smallbox4');

const img1 = document.querySelector('piece1');
const img2 = document.querySelector('piece2');
const img3 = document.querySelector('piece3');
const img4 = document.querySelector('piece4');

//? eventlistner for draggable element img1
img1.addEventListener('dragstart',()=>{
    //? when drag starts
    console.log('Dragstart has been triggered');
})
img1.addEventListener('dragend',()=>{
    //? when drag ends
    console.log('Dragend had been trigerred ');
})

box1.addEventListener('dragover',()=>{


})
box1.addEventListener('dragenter',()=>{


})
box1.addEventListener('dragleave',()=>{


})
box1.addEventListener('dragenter',()=>{


})



