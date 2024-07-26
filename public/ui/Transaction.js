function handleAddBtn() {
  const ProductForm = document.getElementById("product-form");
  ProductForm.reportValidity();

  if (ProductForm.checkValidity()) {

    const product_name = document.getElementById("product_name");
    const quantity = document.getElementById("quantity");
    const price = document.getElementById("price");

    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const product = {
      product_name: product_name.value,
      quantity: quantity.value,
      price: price.value,
    };
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    if(products.length === 1) {
        const PrintFormContainer = document.getElementById('print-form-container');
        PrintFormContainer.innerHTML = PrintForm();
    }

    const TBodyContainer = document.getElementById("tbody-container");
    TBodyContainer.innerHTML = TableRows();

    product_name.value = "";
    quantity.value = "";
    price.value = "";
  }
}

function handleLocalStorage() {
  localStorage.setItem();
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    event.preventDefault();

    const clickedElement = event.target;

    if (clickedElement.classList.contains("add-btn")) {
      handleAddBtn();
    }
  });
});

function ProductForm() {
  return `
                <form id="product-form" style="width: 100%;">
                    <label>Product Name:</label>
                    <input id="product_name" type="text" required>
                
                    <label>Quantity:</label>
                    <input id="quantity" type="number" required>
                
                    <label>Price:</label>
                    <input id="price" type="number" required>
                
                    <button class="add-btn" style="width: fit-content;">add</button>
                </form>
    `;
}
function PrintForm() {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  return products.length > 0
    ? `
                    <form style="display: flex; flex-direction: column;">
                        <label>Promo Code:</label>
                        <input>
                    
                        <label>Customer ID:</label>
                        <select>
                            <option>0</option>
                        </select>
                    
                        <div style="display: flex; gap: 10px;">
                            <button style="background-color: white; color: black;">Cancel</button>
                            <button class="">Pay & Print</button>
                        </div>
                    </form>
    `
    : "";
}

function TableRow(datum) {
  return `
        <tr>
            <td>${datum.product_name}</td><td>${datum.quantity}</td><td>${datum.price}</td>
            <td>
                <button class="delete">Delete</button>
            </td>
        </tr>
    `;
}
function TableRows() {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  return products
    .map((product) => {
      return TableRow(product);
    })
    .join("");
}
function Grid() {
  return `
    
        <div style="display: grid; grid-template-columns: 400px 400px; gap: 20px;width: fit-content;margin-left: auto;margin-right: auto;">
            <div>
                ${ProductForm()}
            </div>

            <div>
                <table>
                    <thead>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Options</th>
                    </thead>

                    <tbody id="tbody-container">
                        ${TableRows()}
                    </tbody>
                </table>

                <div id="print-form-container">
                    ${PrintForm()}
                </div>


            </div>
        
        </div>
    
    `;
}

export default function Transaction() {
  return `
          <h3>Transaction</h3>
          ${Grid()}
      `;
}
