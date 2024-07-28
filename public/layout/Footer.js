function TableCell(links, header) {
    const Links = links.map(link => {
      return `
                    <li class="ul li">
                      <a>${link}</a>
                    </li>
      `
    }).join('');
    return `
    
                <div style="display: table-cell; padding: 0 10px;"">
                  <div style="font-weight: 700; font-size: 16px; color: white; margin: 6px 0 14px 0;">${header}</div>
                  <ul>
                    ${Links}
                  </ul>
                </div>
    `
  }

export default function Footer() {
    return `
          <footer style="background-color: #232F3E; position: relative; min-width: 1000px;">
            <a>
              <div style="margin-bottom: 40px; background-color: #37475A; padding: 15px 0; display: flex; justify-content: center;">
                <span style="font-size: 13px; white-space: nowrap; text-align: center; color: white;">Back to top</span>
              </div>
            </a>
            <div style="display: table; margin: 0 auto; max-width: 1000px;">
              <div style="display: table-row; ">
                ${TableCell(['Careers', 'Blog', 'About Amazon', 'Investor Relations', 'Amazon Devices', 'Amazon Science'], 'Get to Know Us')}
                <div style="display: table-cell; width: 10%; padding: 0 10px;"></div>
                ${TableCell(['Sell products on Amazon', 'Sell on Amazon Business', 'Sell apps on Amazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Host an Amazon Hub', 'See More Make Money with Us'], 'Make Money with Us')}
                <div style="display: table-cell; width: 10%; padding: 0 10px;"></div>
                ${TableCell(['Amazon Business Card', 'Shop with Points', 'Reload Your Balance', 'Amazon Currency Converter'], 'Amazon Payment Products')}    
                <div style="display: table-cell; width: 10%; padding: 0 10px;"></div>
                ${TableCell(['Amazon and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Manage Your Content and Devices', 'Help'], 'Let Us Help You')}              
                
                
              </div>
            </div>
            <div style="margin-top: 40px; border: 1px solid #3a4553;"></div>
            <div style="max-width: 1000px; padding: 10px 0; margin: 0 auto; display: flex; justify-content: center; align-items: center; ">
              <span style="display: inline-block; margin-top: 20px;">
                <a style="">
                  <div style="background-image: url(https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB587940754_.png); background-position: -10px -90px; width: 76px; height: 23px;"></div>
                </a>
              </span>
  
              <span style="display: inline-block; margin-left: 70px; margin-top: 18px; padding: 0 0.6em;">
                <a style="display: inline-block; border: 1px solid #848688; border-radius: 3px; padding: 6px 18px 6px 8px;">
                  <div style="background: url(https://m.media-amazon.com/images/S/sash/Z8YwjOjqIHxqujG.png); background-position: -77px -24px; width: 15px; height: 15px; display: inline-block;"></div>
                  <span style="font-size: 13px; padding: 0 0.6em; color: #CCC;">English</span>
                  <span style="display: inline-block; background: url(https://m.media-amazon.com/images/S/sash/Z8YwjOjqIHxqujG.png); background-position: -77px -80px; width: 12px; height: 12px;"></span>
                </a>
                <a style="display: inline-block; border: 1px solid #848688; border-radius: 3px; padding: 6px 18px 6px 8px;">
                  <span style="color: white;">$</span>
                  <span style="font-size: 13px; padding: 0 0.6em; color: #CCC;">USD - U.S. Dollar</span>
                </a>
                <a style="display: inline-block; border: 1px solid #848688; border-radius: 3px; padding: 6px 18px 6px 8px;">
                  <span style="display: inline-block; background-image: url(https://m.media-amazon.com/images/S/sash/Z8YwjOjqIHxqujG.png); background-position: -54px -108px; width: 18px; height: 12px;"></span>
                  <span style="font-size: 13px; padding: 0 0.6em; color: #CCC;">United States</span>
                </a>
              </span>
            </div>
          </footer>
    `
  }