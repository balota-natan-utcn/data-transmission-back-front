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