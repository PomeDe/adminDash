export default function Home() {
  const products = [
    { id: 1, name: "T-shirt", category: "Men's Clothes", price: "10$", stock: 67, status: "Active", image: "https://colorfulstandard.com/cdn/shop/files/CS2056_Male_OversizedOrganicT-Shirt-DeepBlack_2_2adc696d-0930-4a7f-86b1-61ad0c6dc3e9.jpg?v=1745834597&width=600" },
    { id: 2, name: "Leggings", category: "Women's Clothes", price: "12$", stock: 45, status: "Scheduled", image: "https://www.yogishop.com/cdn/shop/files/9128_yoga_leggings_high_waist_front_black_web2500.jpg?v=1715224540&width=900" },
    { id: 3, name: "Backpack", category: "Kid's Clothes", price: "10$", stock: 67, status: "Active", image: "https://m.media-amazon.com/images/I/91Sjo4oF85L._AC_SX569_.jpg" },
  ];

  const badge = {
    Active: "bg-[#E4F3EB] text-[#208B59] border border-[#CFE8DB]",
    Scheduled: "bg-[#FDEAEA] text-[#D9534F] border border-[#F2C1C0]",
    Draft: "bg-[#FFF6D9] text-[#8A6D3B] border border-[#FFE7A3]",
  };

  return (
    <div className="bg-[#E5E5E5] flex flex-row w-screen h-screen text-black">


      <div className="w-60 bg-white border-r p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Company</h1>
        <nav className="space-y-3 flex flex-col">
          <a href="#" className="text-gray-600 hover:text-black">Dashboard</a>
          <a href="/" className="text-black font-semibold">Products</a>
          <a href="#" className="text-gray-600 hover:text-black">Sales</a>
          <a href="#" className="text-gray-600 hover:text-black">Customers</a>
          <a href="/analytics" className="text-gray-600 hover:text-black">Analytics</a>
          <a href="#" className="text-gray-600 hover:text-black">Notifications</a>
          <a href="#" className="text-gray-600 hover:text-black">Settings</a>
        </nav>
      </div>


 <div className="flex-1 p-6 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">Products</h2>


        <div className="flex flex-col bg-white w-full h-11/12 rounded-3xl p-6 overflow-y-auto">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Products List</h3>
            <div className="flex flex-row justify-between items-center space-x-6 ml-auto">
              <button className="w-20 h-10 rounded-lg border">Filter</button>
              <button className="w-20 h-10 rounded-lg border">See All</button>
              <button className="w-20 h-10 rounded-lg bg-black text-white">+ Add</button>
            </div>

          </div>

          <div className="flex flex-row font-semibold border-b py-2 text-gray-600  justify-between">
            <span>Product Name</span>
            <span>Category</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {products.map(p => (
            <div key={p.id} className="inline-flex
   flex-row items-center py-3 border-b  justify-between">
              <div className="flex items-center gap-2">
                <img src={p.image} className="w-12 h-12" />
                <span>{p.name}</span>
              </div>
              <span>{p.category}</span>
              <span>{p.price}</span>
              <span>{p.stock}</span>
              <span className={`px-2 py-1 text-sm rounded ${badge[p.status]}`}>{p.status}</span>
              <button className="text-blue-600">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
