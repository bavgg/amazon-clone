import Navbar from "./layout/Navbar.js";
import Transaction from "./ui/Transaction.js";

function Home() {
  return `
    <h3>Hello, Admin!</h3>

    <div>Stats:</div>

    <h4>Earnings</h4>
    <p>Overall Earnings: PHP 4000</p>

    <h4>Profits</h4>
    <p>Overall Profits: PHP 4000</p>
  `;
}

function Body() {
  return `
        ${Navbar()}
        <main id="main-container" style="width: 100%;">

        </main>
    `;
}

const body = document.querySelector("body");
body.innerHTML = Body();

