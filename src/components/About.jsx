function About() {
  return (
    <section id="about">
      <div className="bg-gradient-to-br from-purple-200 to-blue-300 px-4 py-16 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full items-center">
          
          <div className="flex items-center justify-center relative z-10 pt-12 sm:pt-8 order-1 sm:order-2">
            <img
              // src="/src/assets/about.png"
              src="/src/assets/mypic.JPG"
              alt="Profile"
              className="w-48 h-48 sm:w-84 sm:h-84 object-cover rounded-2xl shadow-lg "
            />
          </div>

          <div className="flex flex-col gap-4 items-center sm:text-left sm:items-start order-2 sm:order-1">
            <span className="font-semibold text-black text-lg sm:text-2xl sm:pt-8 ">
              About Me
            </span>
            <p className="text-sm sm:text-base text-black text-left max-w-md">
              I am a recent Computer Science graduate with experience in
              gathering requirements and developing full-stack web applications.
              I have a strong passion for learning new technologies and applying
              them to solve real-world problems.
            </p>
            <div>
              <a
              
                href="https://drive.google.com/drive/folders/1VgCtCZ4PELqSe_ZC8BoEIAx6AwqPBAus?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5  px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
              >
                View My Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default About;