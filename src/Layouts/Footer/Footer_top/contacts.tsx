import { Link } from "react-router-dom"
import { footerTopStyles } from "../../../db/styles"

const ContactsPart_footer = () => {
  return (
    <div className={`${footerTopStyles.parentDivForAllParts}`}>
      <div className={`${footerTopStyles.title}`}>CONTACTS</div>
      <div className={`${footerTopStyles.itemsParentDiv}`}>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"}></Link>Contact Us</div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"} className={`${footerTopStyles.linkStyle}`}><img src="https://www.noy.am/images/Vector.svg" alt="" /> (012) 808888</Link></div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"} className={`${footerTopStyles.linkStyle}`}><img src="https://www.noy.am/images/map-pin.svg" alt="" /> 5; Shovroyan str , Yerevan, Armenia</Link></div>
      </div>
    </div>
  )
}

export default ContactsPart_footer