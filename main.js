const click = document.getElementById('click').addEventListener('click', function(){
    const name = document.getElementById('get').value;
    if (name.length==0) {
        alert('Please Enter Your Name')
    }
    else{
    document.getElementById('carde').style.display = 'none';
    document.getElementById('texte').style.display = 'block';
    const show = document.getElementById('value').innerHTML = name;
}
})
