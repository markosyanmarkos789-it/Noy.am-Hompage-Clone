import { Link } from "react-router-dom"
import { footerTopStyles } from "../../../db/styles"

const OurProductsPart_footer = () => {
  return (
    <div className={`${footerTopStyles.parentDivForAllParts}`}>
      <div className={`${footerTopStyles.title}`}>OUR PRODUCTS</div>
      <div className={`${footerTopStyles.itemsParentDiv}`}>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"}>Products</Link></div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"}>Natural spring water</Link></div>
        <div className={`${footerTopStyles.itemsDiv}`}><Link to={"/"}>Sparlling Water</Link></div>
      </div>
    </div>
  )
}

export default OurProductsPart_footer