let searchForm=document.querySelector('.searchform');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
}


function hideshow(id) {
    var div = document.getElementById(id);
    div.style.display = (div.style.display === 'none') ? 'block' : 'none';
}