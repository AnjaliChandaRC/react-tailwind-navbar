import { useEffect, useState } from 'react'

const Header = () => {

  const HEADER_LIST = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Roadmap",
      link: "#roadmap",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ]
  const [nav, setNav] = useState()

  useEffect(() => {
    const handlerClick = () => {
      if (nav && window.innerWidth < 768) {
        document.body.classList.add("overflow-hidden")
      }
      else {
        document.body.classList.remove("overflow-hidden")
      }
    }
    handlerClick()
  }, [])

  return (
    <>
      <div className='flex justify-between items-center p-5 md:p-10 bg-pink-300'>
        <div>
          <a href="#" className='text-3xl font-bold'>Logo</a>
        </div>
        <div className={`${nav ? "translate-x-0" : "max-[767.98px]:translate-x-full"} max-[767.98px]:flex gap-5 justify-center items-center flex-col fixed md:relative z-[15] max-[767.98px]:w-full h-full top-0 left-0 bg-black md:bg-transparent transition-all ease-in-out duration-500`}>
          <div className='grid md:flex text-center gap-5'>
            {HEADER_LIST.map((obj, index) => (
              <a onClick={() => setNav(!nav)} key={index} href={obj.link} className='mx-4 text-xl font-bold text-white hover:text-green-500 md:hover:text-black transition-all duration-500 ease-in-out'>{obj.title}</a>
            ))}
          </div>
          <div className='md:hidden'>
            <button onClick={() => setNav(!nav)} className='text-xl font-bold text-white bg-green-800 border-[3px] border-black rounded px-3 py-2 hover:bg-white hover:text-green-800 hover:border-green-600 transition-all duration-500 ease-in-out'>Learn More</button>
          </div>
        </div>
        <div className='hidden md:block'>
          <button className='text-xl font-bold text-white bg-green-800 border-[3px] border-black rounded px-3 py-2 hover:bg-white hover:text-green-800 hover:border-green-600 transition-all duration-500 ease-in-out'>Learn More</button>
        </div>
        <div className='relative z-[15] md:hidden' onClick={() => setNav(!nav)}>
          <p className='text-white'>{nav ? "cross" : "toggle"}</p>
        </div>
      </div>
    </>
  )
}

export default Header