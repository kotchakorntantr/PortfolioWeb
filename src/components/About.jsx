import React from "react";

// function About() {
//   return (
//     <section id="about">
//       <div className="bg-gradient-to-br from-purple-200 to-blue-300 px-4 py-16 flex items-center justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full items-center">

//           <div className="flex flex-col items-start gap-4 text-center sm:text-left items-center sm:items-start">
//             <h2 className="text-6xl flex flex-col items-center">
//               <span className="font-semibold text-black text-lg sm:text-2xl pt-4">
//                 Kotchakorn Tantrakool
//             </span>

//             <p className="text-base sm:text-xl mt-4 text-black">
//               A recent Computer Science graduate with experience in gathering
//               requirements and developing full-stack web applications <br />
//             </p>
//             {/* Faculty of Science Chiang Mai University. */}
//             <div className="flex flex-row sm:flex-row gap-4">
//               <a
//                 href="#aboutme"
//                 className="py-2.5 mt-6 px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
//               >
//                 About Me
//               </a>
//               <a
//                 href="https://drive.google.com/drive/folders/1VgCtCZ4PELqSe_ZC8BoEIAx6AwqPBAus?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="py-2.5 mt-6 px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
//               >
//                 View My Resume
//               </a>
//             </div>
//           </h2>
//         </div>
//         <div className="flex items-center justify-center p-12 relative z-10">
//           {/* <div className="w-64 h-80 rounded-2xl bg-white/30 border border-white/60 flex items-center justify-center text-black/40 text-sm tracking-widest"> */}
//           <img
//             src="/src/assets/about.png"
//             alt="Profile"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           {/* </div> */}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }

function About() {
  return (
    <section id="about">
      <div className="bg-gradient-to-br from-purple-200 to-blue-300 px-4 py-16 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full items-center">
          <div className="flex flex-col items-start gap-4 text-center sm:text-left items-center sm:items-start">
            <h2 className="text-6xl flex flex-col items-center">
              <span className="font-semibold text-black text-lg sm:text-2xl pt-4">
                About Me
              </span>
            </h2>
            <p className="text-sm sm:text-base mt-4 text-black">
              I am a recent Computer Science graduate with experience in
              gathering requirements and developing full-stack web applications.
              I have a strong passion for learning new technologies and applying
              them to solve real-world problems.
            </p>
            <div className="pb-4  ">
              <a
                href="https://drive.google.com/drive/folders/1VgCtCZ4PELqSe_ZC8BoEIAx6AwqPBAus?usp=sharing"
                 target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 mt-6 px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
             >
               View My Resume
               </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-12 relative z-10">
            <img
              src="/src/assets/about.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
