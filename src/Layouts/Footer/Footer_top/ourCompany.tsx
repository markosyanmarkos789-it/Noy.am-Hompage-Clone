import { Link } from "react-router-dom"
import { footerTopStyles } from "../../../db/styles"



const OurCompanyPart_footer = () => {
  return (
    <div className={`${footerTopStyles.parentDivForAllParts}`}>
      <div className={`${footerTopStyles.title}`}>OUR COMPANY</div>
      <div className={`${footerTopStyles.itemsParentDiv}`}>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"}>About Us</Link></div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"} className={`${footerTopStyles.linkStyle}`}><img src="https://www.noy.am/icons/facebook-white.svg" alt="" /> NOY</Link></div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"} className={`${footerTopStyles.linkStyle}`}><img src="https://www.noy.am/icons/instagram-white.svg" alt="" /> noy_armenia</Link></div>
      </div>
    </div>
  )
}

export default OurCompanyPart_footer