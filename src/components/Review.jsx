const Review = () => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 font-sans">
        <h3 className="text-2xl font-bold text-blue-800 mb-5 pb-3 border-b-2 border-blue-100">
          📚 Course Review Form
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Course Name:</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter course name"
           
        
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Institution:</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="e.g., MKU University"
          
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Instructor:</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Instructor name"
            
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Rating:</label>
          <div className="flex gap-1 text-yellow-400 text-2xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-gray-300">☆</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">4 out of 5 stars</p>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Your Review:</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition min-h-32"
            placeholder="Share your learning experience..."
            defaultValue="This course provided excellent foundational knowledge. The instructor was knowledgeable and the materials were well-organized."
            
          />
        </div>

        <div className="mb-5 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 text-center text-blue-700 cursor-pointer hover:bg-blue-100 transition">
          <div className="text-lg font-medium">📎 Upload Supporting Files</div>
          <div className="text-sm text-gray-600 mt-1">
            Certificates, assignments, or notes (optional)
          </div>
        </div>

        <button className="w-full bg-gradient from-blue-700 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-800 hover:to-blue-700 transition shadow-md hover:shadow-lg">
          Submit Review
        </button>

        <div className="mt-4 text-center text-gray-500 text-sm">
          This is a demo - No data will be submitted
        </div>
      </div>
    </div>
  );
};

export default Review;