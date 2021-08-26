const button = document.getElementById('menu');
const sidebar= document.getElementById('sidebar');


button.addEventListener('click', function(){
    console.log('hi')
    sidebar.classList.toggle('active');
    button.classList.add("menu-position")
    
    
    
   
    
});

window.addEventListener('mouseup',function(event){
    if(event.target!==sidebar){
        console.log('hey')
        sidebar.classList.remove('active');
        button.classList.remove("menu-position")

    }
})













