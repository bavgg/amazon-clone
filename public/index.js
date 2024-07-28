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

function Card(header, footer, content = null, id = '') {
  return `
            <div class="card" id="${id}" >
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

function ContentTypeI(links, headers) {
  return `
  <div style="margin-bottom: 44px; flex-grow: 1;" >
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex; gap: 20px;">

      ${Item(links.image1, headers.header1)}
      ${Item(links.image2, headers.header2)}

    </div>
    <div style="height: 50%; margin-bottom: 8px; position: relative; display: flex; gap: 20px;">
      ${Item(links.image3, headers.header3)}
      ${Item(links.image4, headers.header4)}
    </div>
  </div>
  
  `
}

function ContentTypeII(image) {
  return `
      <a style="width: 100%; height: 100%; position: relative; overflow: hidden; margin-bottom: 44px; ">
        <img style="position: absolute; object-position: center; object-fit: cover; width: 100%; height: 100%;" src="${image}" >
      </a>
  `
}
function Body() {
  
  const DivContent1 = ContentTypeI(
    { 
      image1: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg',
      image2: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg',
      image3: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg',
      image4: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg'
    },
    {
      header1: 'Headsets',
      header2: 'Keyboards',
      header3: 'Computer mice',
      header4: 'Chairs'
    }
  );
  
  const DivContent2 = ContentTypeII('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_758x608_us-en._SY608_CB609924804_.jpg');

  const DivContent3 = ContentTypeI(
    { 
      image1: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg',
      image2: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg',
      image3: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg',
      image4: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg'
    },
    {
      header1: 'Jeans under $50',
      header2: 'Tops under $25',
      header3: 'Dress under $30',
      header4: 'Shoes under $50'
    }
  );
  const DivContent6 = ContentTypeI(
    { 
      image1: 'https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY320_.jpg',
      image2: 'https://m.media-amazon.com/images/I/316r7290SLL._SY150_.jpg',
      image3: 'https://m.media-amazon.com/images/I/31qcGgiIK7L._SY150_.jpg',
      image4: 'https://m.media-amazon.com/images/I/313zteqI9LL._SY150_.jpg'
    },
    {
      header1: 'Smartphones',
      header2: 'Tablets',
      header3: 'Laptops',
      header4: 'TVs'
    }
  );
  const DivContent8 = ContentTypeI(
    { 
      image1: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x2._SY232_CB595261253_.jpg',
      image2: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x2._SY232_CB595261253_.jpg',
      image3: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x2._SY232_CB595261253_.jpg',
      image4: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x2._SY232_CB595261253_.jpg'
    },
    {
      header1: 'Dresses',
      header2: 'Knits',
      header3: 'Jackets',
      header4: 'Jewelry'
    }
  );

  const DivContent10 = ContentTypeI(
    { 
      image1: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg',
      image2: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg',
      image3: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg',
      image4: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg'
    },
    {
      header1: 'Dining',
      header2: 'Home',
      header3: 'Kitchen',
      header4: 'Health and Beauty'
    }
  );


  


  const DivContent4 = ContentTypeII('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg');
  const DivContent7 = ContentTypeII('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg');
  const DivContent9 = ContentTypeII('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v5._SY608_CB573698005_.jpg');
  return `
        ${Navbar()}
        <main id="main-container" style="width: 100%;">

          ${Carousel()}
          <div id="cards-container" style="max-width: 1480px; min-width: 1000px; display: flex; flex-wrap: wrap; padding: 20px 0; margin: 0 auto;">
            ${Card('Gaming accessories', 'See more', DivContent1)}
            ${Card('FREE Shipping to Philippines', 'Learn more', DivContent2)}
            ${Card('Shop deals in Fashion', 'See all deals', DivContent3)}
            ${Card('Deals in PCs', 'Shop now', DivContent4)}

            ${Card('Amazon Gadget Store', 'See more from Amazon Gadgets', DivContent6)}
            ${Card('Toys under $25', 'Shop now', DivContent7)}
            ${Card('Fashion trends you like', 'Explore more', DivContent8)}
            ${Card('Beauty steals under $25', 'Shop now', DivContent9)}


            ${Card('Fashion trends you like', 'Explore more', DivContent10, 'odd')}


          </div>
          
        </main>
    `;
}

const body = document.querySelector("body");
body.innerHTML = Body();

