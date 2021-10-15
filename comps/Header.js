import Link from 'next/link'

const Header = () => {
    return (  
        <header className="header">
            <a href="" className="logo">
                <div className="img">
                    <img width="100%" src="https://www.skysports.com/core/img/channels/Sky-Sports-Logo.png" alt="Sky Sports"/>
                </div>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" ><span className="navicon"></span></label>
            <ul className="menu">
            <li><Link href="/get-sky"><a>Get Sky Sports</a></Link></li>
            <li><a href="#about">Login</a></li>
            </ul>
      </header>
    );
}
 
export default Header;