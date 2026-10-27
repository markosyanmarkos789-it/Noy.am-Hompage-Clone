
import { socialSectionStyles } from "../../db/styles"
import SocialSection_description from "./description"
import SocialSection_images from "./images"

const SocialSection = () => {
  return (
    <div className={`${socialSectionStyles.sectionParentDiv}`}>
      <div className={`${socialSectionStyles.sectionChildDiv}`}>
        <SocialSection_description />
        <SocialSection_images />
      </div>
    </div>
  )
}

export default SocialSection