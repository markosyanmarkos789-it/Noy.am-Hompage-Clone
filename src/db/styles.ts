export const container = "max-w-[1260px] mx-auto px-[10px] max-[600px]:px-[25px] max-[1260px]:px-[50px]"
export const navItemsStyle = "text-white tracking-[1px] hover:text-[#a6a6a6] "
export const paddingItems = `pt-[24px] px-[20px] 3xl:px-[200px] xl:px-[100px] lg:px-[60px] md:px-[40px]`

export const heroSliderStyles = {
  noy: {
    noyBottleImage: `bg-cover bg-no-repeat bg-[center_100%] bg-[url(https://www.noy.am/images/first-slider-image1-sm.png)] min-[470px]:bg-[url(https://www.noy.am/images/first-slider-image1-md.png)] lg:bg-[url(https://www.noy.am/images/first-slider-image1-xl.png)] xl:bg-[url(https://www.noy.am/images/first-slider-image1-Txl.png)] 3xl:bg-[url(https://www.noy.am/images/first-slider-image1.png)] `,
    noyText: `flex font-bold text-white text-[40px] items-end leading-[120%] w-[450px] h-[420px] md:h-[450px] md:text-[60px] lg:w-[500px] lg:h-auto xl:text-[70px] xl:w-[760px] xl:h-[400px] 3xl:text-[100px] 3xl:h-[450px] `
  },
  bjni: {
    bjniBottleImage: `bg-cover bg-no-repeat bg-[center_100%] bg-[url(https://www.noy.am/images/first-slider-image2-sm.png)] min-[470px]:bg-[url(https://www.noy.am/images/first-slider-image2-md.png)] lg:bg-[url(https://www.noy.am/images/first-slider-image2-xl.png)] xl:bg-[url(https://www.noy.am/images/first-slider-image2-Txl.png)] xl:bg-[url(https://www.noy.am/images/first-slider-image2-Txl.png)]3xl:bg-[url(https://www.noy.am/images/first-slider-image2.png)] `,
    bjniTextPositionControl: `flex items-end  w-[330px] h-[430px] md:h-[530px] md:text-[60px] lg:w-[500px]  lg:h-[260px]  xl:text-[70px]  xl:w-[760px]  xl:h-[370px]  3xl:text-[100px]  3xl:h-[480px] `,
    bjniText: `font-bold leading-[120%] text-[40px] md:text-[60px] lg:w-[400px] xl:text-[70px] xl:w-[700px] 3xl:text-[100px]`
  }
}


export const originOfNoy = {
  parentDivStyles: `flex flex-col items-center p-[64px_16%_64px_16%] gap-[15px] md:gap-[30px] md:p-[80px_16%_80px_16%]`,
  titleStyles: `text-[22px] text-[#2D2D2D] text-center font-[sans-serif] md:text-[26px] lg:text-[32px] 3xl:text-[40px]`,
  bodyStyles: `text-[14px] text-[#2D2D2D] font-[arial] text-center leading-[140%] lg:text-[16px] 3xl:text-[20px]`
}

export const productShowCaseStyles = {
  gifDivStyles: `w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] 3xl:h-[440px] 3xl:w-[440px] 2xl:w-[360px] 2xl:h-[360px] rounded-[50%]`,
  productDescriptionParentDivStyles: `flex flex-col px-[40px] gap-[20px] text-white text-center md:gap-[32px] xl:w-[600px] 2xl:text-start 2xl:justify-center 3xl:gap-[40px] `,
  descriptionTitle: `text-[22px] min-[470px]:text-[26px] 3xl:text-[40px] 2xl:text-[32px] `,
  noy: {
    productParentDivStyles: `flex flex-col gap-[70px] h-auto py-[80px] justify-between bg-[linear-gradient(189.78deg,#a0cdea_7.35%,#3a84b4_92.65%)] items-center sm:gap-[100px]  2xl:flex-row 2xl:h-[100vh] 2xl:gap-[0px] py-[80px] xl:p-[80px_120px] 3xl:p-[180px_200px]`,
    gif: `https://www.noy.am/_nuxt/water-43.62d72b4b.gif`,
    bottleImg: `absolute w-full h-[340px] sm:h-[430px] 
    bg-[url(https://www.noy.am/_nuxt/Noy-white-bottle.9bbfef5d.png)] bg-no-repeat  bg-[length:100%_100%] 3xl:h-[592px] 2xl:h-[484px] top-[-15%]`,
  },
  bjni: {
    productParentDivStyles: `flex flex-col-reverse gap-[70px] h-auto py-[80px] justify-between h-[100vh] bg-[linear-gradient(189.78deg,_#99d9a6_7.35%,_#4eb11f_92.65%)] items-center sm:gap-[100px]  2xl:flex-row 2xl:h-[100vh] py-[80px] xl:p-[80px_120px] 3xl:p-[180px_200px]`,
    gif: `https://www.noy.am/_nuxt/video.f9ac9001.mp4`,
    bottleImg: `absolute w-full h-[340px]  bg-[url(https://www.noy.am/_nuxt/bjni-green-bottle.796d6076.png)] bg-no-repeat  bg-[length:100%_100%] top-[-15%] sm:h-[430px] 2xl:h-[484px] 3xl:h-[592px]`,
  }
}

export const socialSectionStyles = {
  sectionParentDiv: `2xl:h-[100vh] bg-lightBlue py-[80px] flex justify-center items-center bg-[#3983B3]`,
  sectionChildDiv: `flex flex-col 2xl:flex-row justify-center w-[80%] 2xl:h-[480px] 3xl:h-[440px]`,
  description: {
    parent: `flex flex-col justify-center items-center bg-white px-[31px] py-[40px] gap-[24px] md:gap-[32px] lg:px-[80px] lg:py-[64px] 2xl:py-[147px] 2xl:pr-[80px] 3xl:pl-[120px] 3xl:gap-[40px]`,
    title: `text-[#111D47] text-[22px] font-mon md:text-[26px] xl:text-[32px] xl:w-[300px] 3xl:w-[360px] 3xl:text-[40px]`,
    body: `text-[#2D2D2D] text-[14px] text-center w-[200px] lg:text-[16px] lg:w-[300px] 2xl:text-left 3xl:text-[20px] 3xl:w-[370px]`
  }
}

const images = [`bg-[url(https://www.noy.am/social-images/img1.png)]`, `bg-[url(https://www.noy.am/social-images/img2.png)]`, `bg-[url(https://www.noy.am/social-images/img3.png)]`, `bg-[url(https://www.noy.am/social-images/img4.png)]`]

export const imageClasses = images.map((el) => {
  return `w-[50%] h-[148px] ${el} bg-no-repeat bg-cover bg-[center_center] md:h-[242px] lg:h-[240px] 3xl:h-[220px]`
})

export const  footerTopStyles = {
  sectionParentDiv:` px-[40px] py-[60px] md:py-[60px] md:px-[80px] sm:py-[80px]  xl:px-[150px] 2xl:px-[200px] 3xl:px-[444px] 3xl:py-[120px] bg-[#111D47]`,
  parentDivForAllParts:`flex flex-col text-white gap-[20px]`,
  title:`md:text-[18px] font-bold`,
  itemsParentDiv:`flex flex-col gap-[16px] text-[16px]`,
  itemsDiv:`text-[12px] lg:text-[16px] hover:text-[#cdcdcd] cursor-pointer`,
  linkStyle:`flex gap-[20px]`
}