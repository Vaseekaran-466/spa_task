

const Contact = () => {
  return (
    <>
    <div>
       <div id="contact" className="min-h-screen bg-gray-100 pt-24 flex justify-center items-center">

  <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-10">

    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
      <p className="text-gray-600 mt-2">
        We’d love to hear from you. Please fill out the form below.
      </p>
    </div>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Office Address</h2>
          <p className="text-gray-600 mt-1">
            No.45, Main Road,<br />
            Coimbatore, Tamil Nadu
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">Phone</h2>
          <p className="text-gray-600 mt-1">+91 98765 43210</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">Email</h2>
          <p className="text-gray-600 mt-1">info@promoter.com</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800">Working Hours</h2>
          <p className="text-gray-600 mt-1">
            Mon – Sat : 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 text-black font-bold py-3 rounded-lg hover:bg-amber-500 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  </div>
</div>

    </div>
    
    </>
  )
}

export default Contact