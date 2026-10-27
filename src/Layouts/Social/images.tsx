import { imageClasses } from "../../db/styles"

const SocialSection_images = () => {
  return (
    <div className={`w-[100%]`}>
      <div className="flex flex-wrap">
        {imageClasses.map((el,id) => (
          <div key={id} className={el}></div>
        ))}
      </div>
    </div>
  )
}

export default SocialSection_images