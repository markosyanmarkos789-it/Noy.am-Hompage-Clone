import { footerTopStyles } from "../../../db/styles"
import ContactsPart_footer from "./contacts"
import OurCompanyPart_footer from "./ourCompany"
import OurProductsPart_footer from "./ourProducs"

const FooterTop_section = () => {
  return (
    <>
      <div className={`${footerTopStyles.sectionParentDiv}`}>
        <div className={`flex flex-col lg:flex-row gap-[30px] justify-between w-full`}>
          <OurProductsPart_footer />
          <OurCompanyPart_footer />
          <ContactsPart_footer />
        </div>
      </div>
    </>
  )
}

export default FooterTop_section