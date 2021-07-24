const form = document.getElementById('form')

form.addEventListener ('submit',(e)=> {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let adress = document.getElementById('adress').value;
    let product = document.getElementById('product').value;
    let product = document.getElementById('qty').value;

    console.log(name,email,adress,product);

    let data={
        name,
        email,
        adress,
        product
    }
    console.log(data);
    let convertData = JSON.stringify(data);
    console.log(convertData);
    
    localStorage.setItem('lead',convertData);

})
