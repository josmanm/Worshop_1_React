
import { Link } from 'react-router-dom'
import loop from "../../assets/images/Logo.svg"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import "../../sass/footer/footer.scss"
const Footer = () => {
  const items = [
    'About',
    'Carrers',
    'Events',
    'Products',
    'Support'
  ]
  return (
    <footer className="footer">
      <div className="footer__logos">
        <img src= {loop} alt="logo-del-footer"/>
        <div className="footer__logos__redes-sociales">
          <img src={facebook} alt="logo-facebook" />
          <img src={instagram} alt="logo-instagram " />
          <img src={pinterest} alt="logo-pinterest" />
          <img src={twitter} alt="logo-twitter" />
        </div>
      </div>
      <div className="footer__texto">
            <nav>
                <ul className='footer__texto__navegacion'>
                {items.map((item,index)=>{
                          return <li key={index} className='navDestock__navegacion--link'><Link to={item}>{item}</Link></li>
                      })
                  } 
                </ul>
            </nav>
            
              <div className="footer__texto__redes-sociales">
                <img src={facebook} alt="logo-facebook" />
                <img src={instagram} alt="logo-instagram " />
                <img src={pinterest} alt="logo-pinterest" />
                <img src={twitter} alt="logo-twitter" />
              </div>
            
            <p className="footer__texto--parrafo">2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
    
  )
}
export default Footer