import React from "react";

function Technologies() {
  return (
    <section
      id="tech"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 px-4 py-16"
    >
      <h2 className="text-3xl sm:text-5xl leading-[1.5] text-center font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Technologies and Tools
      </h2>
      {/* pt-xx เพื่อเว้นระยะจากขอบบน  ด้านบน → mt-10, ด้านซ้าย → ml-10, ขวา → mr-10 leading-[1.5] -->กำหนดความสูงข้อความ*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        {/* การ์ด 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-900 flex flex-col w-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
            Programming Languages
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            Python, Go, JavaScript, TypeScript, HTML, CSS
          </p>
        </div>

        {/* การ์ด 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm  hover:border-purple-900 flex flex-col w-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Framework and Libraries
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            React, Vue.js, Bootstrap, Tailwind CSS.
          </p>
        </div>

        {/* การ์ด 3 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-purple-900 flex flex-col w-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Tools and Database
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            Visual Studio Code, GitHub, Gitlab, Figma, PostgreSQL
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
