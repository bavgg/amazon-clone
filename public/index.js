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
function Carousel() {
  return `
          <div style="max-height: 230px; max-width: 1500px; margin: 0 auto; position: relative; ">
            <ol style="display: flex;">
              <li></li>
              <li></li>

              <li style="height: 600px; position: relative; width: 100%;">

                  <a>
                    <div style="
                      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,213,128,0.7) 60%, rgba(227, 230, 230) 100%), url('https://m.media-amazon.com/images/I/61EmOCMKRxL._SX3000_.jpg');
                      background-size: cover;
                      background-position: center;
                      height: 600px;
                      margin-left: auto;
                      margin-right: auto;
                      max-width: 1500px;
                      width: 100%;
                      position: absolute;
                      "
                    >
                    </div>
                  </a>

              </li>

              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
  `
}

function Card(header, footer, content = null) {
  return `
            <div style=" position: relative; background-color: white; z-index: 1; padding: 20px; margin: 0 10px; max-width: 400px;  min-width: 290px; height: 420px; flex: 1 0 290px; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
              <div style="margin-bottom: 10px;">
                <h2 style="font-size: 21px;">${header}</h2>
              </div>

              ${content}


              <a style="position: absolute; bottom: 18px;">
                <span style="font-size: 13px; color: #007185" >${footer}</span>
              </a>
            </div>
  `
}
function Item(url, item_name) {
  return `
      <a style="position: relative; width: 50%;">
        <img 
            style="padding-bottom: 36px; 
                  object-fit: cover; 
                  width: 100%; 
                  height: auto; 
                  position: absolute; 
                  z-index: 1; 
                  object-position: center;" 
            src="${url}" 
            alt="Fuji Quad Headset"
        >
        <span style="position: absolute; font-size: 12px; bottom: 20px; left: 0;">${item_name}</span>
      </a>
  `
}
function Body() {
  const DivContent1 = `
  <div style="margin-bottom: 44px; flex-grow: 1;" >
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex;">

      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg', 'Headsets')}
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg', 'Keyboards')}

    </div>
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex;">
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg', 'Computer mice')}
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg', 'Chairs')}

    </div>
  </div>
  `
  const DivContent2 = `
    <a style="width: 100%; height: 100%; position: relative; overflow: hidden; margin-bottom: 44px; ">
      <img style="position: absolute; object-position: center; object-fit: cover; width: 100%; height: 100%;" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_758x608_us-en._SY608_CB609924804_.jpg" >
    </a>
  `

  const DivContent3 = `
  <div style="margin-bottom: 44px; flex-grow: 1;" >
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex; gap: 20px;">

      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg', 'Jeans under $50')}
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg', 'Tops under $25')}

    </div>
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex; gap: 20px;">
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg', 'Dress under $30')}
      ${Item('https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg', 'Shoes under $50')}

    </div>
  </div>
  `

  const DivContent4 = `
    <a style="width: 100%; height: 100%; position: relative; overflow: hidden; margin-bottom: 44px; ">
      <img style="position: absolute; object-position: center; object-fit: cover; width: 100%; height: 100%;" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg" >
    </a>
  `
  return `
        ${Navbar()}
        <main id="main-container" style="width: 100%;">

          ${Carousel()}
          <div style="max-width: 1480px; display: flex; flex-wrap: wrap; padding: 20px 0; margin: 0 auto;">
            ${Card('Gaming accessories', 'See more', DivContent1)}
            ${Card('FREE Shipping to Philippines', 'Learn more', DivContent2)}
            ${Card('Shop deals in Fashion', 'See all deals', DivContent3)}
            ${Card('Deals in PCs', 'Shop now', DivContent4)}

          </div>
          
        </main>
    `;
}

const body = document.querySelector("body");
body.innerHTML = Body();

