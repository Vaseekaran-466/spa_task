


const Navbar = () => {

const scrollview =(id)=>{
      
    document.getElementById(id).scrollIntoView({
        behavior:"smooth",
        block:"start"
    })

}

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg   ">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-extrabold tracking-wide ">
          PROMOTER
        </div>

        {/* Links */}
        <div className="flex gap-8 text-lg font-medium">
          <button onClick={()=>scrollview('home')}
            className="hover:text-amber-400 transition duration-300"
          >
            Home
          </button>

          <button onClick={()=>scrollview("about")}
            className="hover:text-amber-400 transition duration-300"
          >
            Demo
          </button>

          <button onClick={()=>scrollview("contact")}
            className="hover:text-amber-400 transition duration-300"
          >
            Contact
          </button>
        </div>

      </nav>
      </div>
    </>
  )
}

export default Navbar
