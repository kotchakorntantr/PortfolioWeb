import React from "react";
import DarkVeil from "./DarkVeil";

function About() {
  return (
    <section id="about">
      <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background เต็มจอ */}
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1}
            scanlineFrequency={5}
            warpAmount={0.5}
            resolutionScale={1}
          />
        </div>

        {/* Content z-10 ให้เนื้อหาอยู่หน้าพื้นหลัง */}
        <div className="relative z-10 text-center">
          <h2 className="text-6xl flex flex-col items-center">
            <span className="font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse leading-[1.5] text-2xl sm:text-5xl">
              Kotchakorn Tantrakool
            </span>

            <p className="text-xl sm:text-2xl mt-4 text-white">
              A fourth-year undergraduate student majoring in Computer Science
              <br />
              Faculty of Science Chiang Mai University.
            </p>

            <div>
              <a
                href="https://drive.google.com/drive/folders/1VgCtCZ4PELqSe_ZC8BoEIAx6AwqPBAus?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 mt-6 px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-purple-900"
              >
                View My Resume
              </a>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default About;
