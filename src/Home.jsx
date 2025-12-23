const Home = () => {
  return (
    <>
      <div id="home" className="h-screen bg-gray-300 from-blue-50 to-purple-50 flex items-center justify-center px-4 bg-[url('./background.webp')] bg-cover bg-center relative pt-20">
        <div className="absolute max-w-4xl mx-auto text-center">
          <div className=" bg-gray-50 p-4 rounded-2xl h-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Make your ads effective!
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              PROMOTER- better way to make ads bring revenue!
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <li className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-gray-800 font-medium">10B push-notification ads monthly</span>
              </li>
              <li className="flex items-start space-x-3 bg-purple-50 p-4 rounded-xl">
                <span className="text-purple-600 font-bold text-lg">•</span>
                <span className="text-gray-800 font-medium">Global reach — inventory in 250 GEOs</span>
              </li>
              <li className="flex items-start space-x-3 bg-green-50 p-4 rounded-xl">
                <span className="text-green-600 font-bold text-lg">•</span>
                <span className="text-gray-800 font-medium">Trusted by advertisers — more than 10k daily active campaigns</span>
              </li>
              <li className="flex items-start space-x-3 bg-yellow-50 p-4 rounded-xl">
                <span className="text-yellow-600 font-bold text-lg">•</span>
                <span className="text-gray-800 font-medium">Trusted by publishers — more than 60M active subscribers</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-10">
            <button className="bg-fuchsia-500  text-white font-bold py-4 px-10 rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Become an adviser
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home