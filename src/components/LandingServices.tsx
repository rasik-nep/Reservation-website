import React from 'react'

const LandingServices = () => {
  return (
    <div className='full-container bg-pink-200 py-10 px-3'>
      <div className='flex flex-col md:flex-row md:flexCenter gap-4 items-center'>
        <ImageText image={'./lady-photo.jpeg'} title={"Waxing Services"} text={"From $17"} />
        <ImageText image={'./lady-photo.jpeg'} title={"Waxing Services"} text={"From $17"} />
        <ImageText image={'./lady-photo.jpeg'} title={"Waxing Services"} text={"From $17"} />
     </div>
    </div>
  )
}

type ImageTextProps = {
  image: string,
  title: string,
  text: string

}
function ImageText({ image, title, text }: ImageTextProps) {
  return (<>
    <div className='flex flex-col items-center justify-center text-black-90'>
      <img src={image} alt={title} className='w-[25rem] h-[25rem]'/>
      <h2 className="text-5xl text-black-90 font-cursive text-bold text-center">{title}</h2>
      <p className="text-xl mt-3 text-center">{text}</p>
    </div>
  </>)
}

export default LandingServices