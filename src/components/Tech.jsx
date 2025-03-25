import React from 'react';

function Technologies() {
    return(
        <section id="tech" className="min-h-screen dark:bg-gray-900 px-4 py-16">
  <h2 className="text-5xl leading-[1.5] text-center font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Technologies and Tools</h2>
  {/* pt-xx เพื่อเว้นระยะจากขอบบน  ด้านบน → mt-10, ด้านซ้าย → ml-10, ขวา → mr-10 leading-[1.5] -->กำหนดความสูงข้อความ*/}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
    
    {/* การ์ด 1 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Python
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Build modern, responsive websites using React, Next.js, and Tailwind CSS.
      </p>
    </div>

    {/* การ์ด 2 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      HTML
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Design clean and user-friendly interfaces for web and mobile applications.
      </p>
    </div>

    {/* การ์ด 3 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      CSS
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
 
    </div>

    {/* การ์ด 4 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      JavaScript
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
 
    </div>

    {/* การ์ด 5 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Tailwindcss
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
   
    </div>

    {/* การ์ด 6 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Bootstrap
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
   
    </div>

{/* การ์ด 6 */}
<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Figma
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
   
    </div>

{/* การ์ด 6 */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Github
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Improve your website visibility with SEO best practices and performance tracking.
      </p>
   
    </div>

  </div>
</section>

    );
}

export default Technologies;