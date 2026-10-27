import Footer_layouts from "../Layouts/Footer/Footer"
import Header_layouts from "../Layouts/Header/Header"
import OriginOfNoy from "../Layouts/OriginOfNoy/OriginSectin"
import ProductShowCaseBjni_section from "../Layouts/ProductShowCase/BjniSection/ProductSection"
import ProductShowCaseNoy_section from "../Layouts/ProductShowCase/NoySection/ProductSection"
import HeroSlider from "../Layouts/Sliders/HeroSlider/HeroSlider"
import SocialSection from "../Layouts/Social/section"

const HomePage_Component = () => {
  return (
    <>
      {/*  */}
      <Header_layouts />
      {/*  */}
      <HeroSlider />
      {/*  */}
      <OriginOfNoy />
      {/*  */}
      <ProductShowCaseNoy_section />
      {/*  */}
      <ProductShowCaseBjni_section />
      {/*  */}
      <SocialSection />
      {/*  */}
      <Footer_layouts />
      {/*  */}
    </>

  )
}

export default HomePage_Component