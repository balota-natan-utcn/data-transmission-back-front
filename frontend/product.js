// Extract product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

async function loadProduct() {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    const data = await res.json();
    console.log("Product data:", data); // Check the API response

    if (data.error) {
      console.error("Error loading product:", data.error);
      return;
    }

    // Set the attributes to HTML elements
    document.getElementById('productName').innerText = `Name: ${data.name}`;
    document.getElementById('productDescription').innerText = `Description: ${data.description}`;
    document.getElementById('productGrade').innerText = `Grade: ${data.grade}`;
  } catch (err) {
    console.error("Failed to load product:", err);
  }
}

// Call the function to load the product data
loadProduct();
