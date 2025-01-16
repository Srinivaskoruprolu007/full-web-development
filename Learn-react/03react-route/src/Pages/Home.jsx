const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-blue-700 ">
        Click me
      </button>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mt-8">
        <p>This is a card component styled with Tailwindcss</p>
      </div>
    </div>
  );
};
export default Home;
