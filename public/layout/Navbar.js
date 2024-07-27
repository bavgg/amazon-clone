function Searchbar() {
  return `
                <div style="display: flex; width: 100%; min-width: 428px;">
                    <div style="font-size: 13px; display: flex; justify-content: center; align-items: center; position: relative; border-top-left-radius: var(--bd-radius); border-bottom-left-radius: var(--bd-radius); width: 55px; height: 38px; margin-top: 1px; background: var(--bg1); background-image: url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png'); background-repeat: repeat-x; background-position: 0 1000px;">
                        <span style="color: var(--text1); margin-right: 10px;">All</span>
                    </div>
                    <div style="width: 100%;">
                        <input placeholder="Search Amazon" style="font-size: 14px; cursor: text; border-left: unset; border-right: unset; border-radius: unset; width: 100%; background: white; height: 40px;">
                        <div id="match-list"></div>
                    </div>
                    <div style="cursor: pointer; border-top-right-radius: var(--bd-radius); border-bottom-right-radius: var(--bd-radius); width: 45px; height: 38px; margin-top: 1px; background: var(--accent); background-image: url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png'); background-repeat: repeat-x; background-position: 2px -280px; background-size: 350px;">
                    
                    </div>
                </div>
    `;
}
function AmazonLogo() {
  return `
            <a style="margin-top: 12px; height: 30px; width: auto; display: inline-block;">
                <span style="display: inline-block; height: 30px; width: 97px; background-image: url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png'); background-size: 350px; background-position: -10px -51px;"></span>
            </a>
    `;
}
function Cart() {
  return `
            <a style="position: relative; margin-top: 12px; height: 30px; width: auto; display: inline-block;">
                <span style="font-size: 16px; font-weight: 700; position: absolute; left: 16px; top: -9px; display: inline-block; height: 26px; width: 38px; color: #f08804;">0</span>
                <div style="display: flex;">
                    <span style="display: inline-block; height: 26px; width: 38px; background-image: url('https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB587940754_.png'); background-size: 350px; background-position: -10px -340px;"></span>
                    <span style="align-self: flex-end; color: white; font-weight: 700; font-size: 14px;">Cart</span>
                </div>
            </a>
    `;
}
export default function Navbar() {
  return `
        

        <nav style="height: 62px; display: flex; gap: 30px; background: #0f1111; align-items: center; padding: 10px;">

            ${AmazonLogo()}

            ${Searchbar()}
            <a>
                <span style="color: white; font-weight: 400; font-size: 12px; white-space: nowrap;">Hello, Jonas</span>
                <span style="color: white; font-weight: 700; font-size: 14px; white-space: nowrap;">Sign In</span>
            </a>
            <a>
                <span style="color: white; font-weight: 400; font-size: 12px;">Returns</span>
                <span style="color: white; font-weight: 700; font-size: 14px; white-space: nowrap;">&amp; Orders</span>
            </a>

            ${Cart()}

            
        </nav>
    `;
}
