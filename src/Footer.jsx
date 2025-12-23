

const Footer = () => {
  return (
   <>
   <div>
    <div className="flex justify-center items-center p-2 m-2 ">
    <button onClick={()=>window.scrollTo({top:0,behavior:"smooth", block:"start"})} 
     className="text-slate-50 bg-black w-40 ">move to top</button>
    </div>
    <footer className="bg-slate-900 text-gray-300">
  <div className="max-w-6xl mx-auto px-6 py-10">

    {/* Top */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Brand */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-white">PROMOTER</h2>
        <p className="text-sm mt-2 text-gray-400">
          Trusted land & property developers
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        <a href="/" className="hover:text-amber-400 transition">Home</a>
        <a href="/about" className="hover:text-amber-400 transition">About</a>
        <a href="/contact" className="hover:text-amber-400 transition">Contact</a>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-6"></div>

    {/* Bottom */}
    <div className="text-center text-sm text-gray-400">
      © 2025 PROMOTER. All rights reserved.
    </div>

  </div>
</footer>

   </div>
   </>
  )
}

export default Footer