

const About = () => {

  return (
    <>
    {/* <!-- LAND PROMOTION SECTION --> */}
<div id="about" className="pt-20">

  {/* <!-- HERO SECTION --> */}
  <section
    className="h-screen bg-cover bg-center flex items-center bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')]"

  >
    <div className="bg-black/60 w-full h-full flex items-center">
      <div className="max-w-4xl px-10 text-white">
        <h1 className="text-5xl font-extrabold leading-tight">
          Premium Plots for Your
          <span className="text-amber-400">Dream Future</span>
        </h1>

        <p className="mt-6 text-xl text-gray-200">
          DTCP Approved • Clear Documents • Prime Location • Best Investment
        </p>

        <div className="mt-8 flex gap-6">
          <button
            className="bg-amber-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-amber-500 transition"
          >
            Book Site Visit
          </button>

          <button
            className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
          >
            View Layout
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- FEATURES --> */}
  <section className="bg-gray-100 py-16">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose <span className="text-amber-500">PROMOTER</span>?
    </h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-4xl mb-4">🏡</div>
        <h3 className="text-xl font-bold">DTCP Approved</h3>
        <p className="text-gray-600 mt-2">
          100% legally verified plots
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-4xl mb-4">🛣️</div>
        <h3 className="text-xl font-bold">Blacktop Roads</h3>
        <p className="text-gray-600 mt-2">
          Wide & well-laid roads
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-4xl mb-4">💧</div>
        <h3 className="text-xl font-bold">Water Facility</h3>
        <p className="text-gray-600 mt-2">
          Borewell & water connection
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-bold">24x7 Security</h3>
        <p className="text-gray-600 mt-2">
          Gated community safety
        </p>
      </div>

    </div>
  </section>

  {/* <!-- CALL TO ACTION --> */}
  <section className="bg-slate-900 text-white py-14 text-center">
    <h2 className="text-4xl font-bold">
      Invest Today. Secure Tomorrow.
    </h2>

    <p className="text-gray-300 mt-4 text-lg">
      Limited plots available at pre-launch price
    </p>

    <button
      className="mt-6 bg-amber-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-amber-500 transition"
    >
      Call Now : +91 98765 43210
    </button>
  </section>

</div>

    </>
  )
};

export default About