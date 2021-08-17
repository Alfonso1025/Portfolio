const button = document.getElementById('menu');
const sidebar= document.getElementById('sidebar');

button.addEventListener('click', function(){
    
    sidebar.classList.toggle('active');
});

window.addEventListener('mouseup',function(event){
    if(event.target!=='sidebar'){
        sidebar.classList.remove('active')
    }
})







