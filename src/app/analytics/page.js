export default function Analytics() {
  return (
    <div className="flex h-screen bg-[#E5E5E5] text-black">

      <div className="w-60 bg-white border-r p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Company</h1>
        <nav className="space-y-3 flex flex-col">
          <a href="#" className="text-gray-600 hover:text-black">Dashboard</a>
          <a href="/" className="text-gray-600 hover:text-black">Products</a>
          <a href="#" className="text-gray-600 hover:text-black">Sales</a>
          <a href="#" className="text-gray-600 hover:text-black">Customers</a>
          <a href="#" className="text-black font-semibold">Analytics</a>
          <a href="#" className="text-gray-600 hover:text-black">Notifications</a>
          <a href="#" className="text-gray-600 hover:text-black">Settings</a>
        </nav>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Analytics</h2>


        <div className="grid grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Sales</p>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#208B59]">67343</h3>
            <p className="text-sm text-[#208B59]">+5.674% <span className="text-gray-600">since last month</span></p>
          </div>


          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Purchases</p>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#208B59]">2343</h3>
            <p className="text-sm text-[#D9534F]">-5.64% <span className="text-gray-600">since last month</span></p>
          </div>


          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Orders</p>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#208B59]">35343</h3>
            <p className="text-sm text-[#208B59]">+5.674% <span className="text-gray-600">since last month</span></p>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-4">
          

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">Overview</h3>
              <div className="flex justify-between py-1 hover:bg-[#208B59] hover:text-white">
                <div >
                  <p>Member Profit</p>
                  <p className=" text-gray-500 text-sm">Last Month</p>
                </div>
                <span >+2343</span>
              </div>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-between py-1 hover:bg-[#208B59] hover:text-white">
                <div>
                  <p>Member Profit</p>
                  <p className="text-gray-500 text-sm">Last Month</p>
                </div>
                <span>+2343</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-3">Total Sale</h3>
            <div className="relative w-32 h-32">

              <div className="absolute inset-0 rounded-full border-[12px] border-gray-300"></div>

              <div className="absolute inset-0 rounded-full border-[12px] border-[#208B59]" 
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 100% 70%)" }}>
              </div>

              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#208B59]">
                70%
              </div>
            </div>
          </div>

          <div className="bg-white rounded shadow"></div>

        </div>
      </div>

    </div>
  );
}