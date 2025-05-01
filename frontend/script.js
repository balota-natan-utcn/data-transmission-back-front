async function fetchMessage()
{
    const res = await fetch('http://localhost:3000/api/message');
    const data = await res.json();
    document.getElementById('message').innerText = data.message;
}

async function getProductAttribute(id, attribute)
{
    const res = await fetch(`http://localhost:3000/api/products/${id}/${attribute}`);
    const data = await res.json();
    console.log(data[attribute]);
}

async function loadProductGrid()
{
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();
    
    const grid = document.getElementById('productGrid');
    products.forEach(p => 
    {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.textContent = `Product ${p.id}`;
        div.onclick = () => 
        {
            window.location.href = `product.html?id=${p.id}`;
        };
        grid.appendChild(div);
    });
}
