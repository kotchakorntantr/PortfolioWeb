import React from 'react';

function Contact() {
    return (
        <footer id="contact" className="bg-black text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kotchakorn</h3>
              <p className="text-gray-400">
                I’m a fourth-year Computer Science student at Chiang Mai University with a minor in Business Administration.
              </p>
            </div>
    
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: <a href="mailto:your.email@example.com" className="hover:text-white">kotchakorntantrakool@gmail.com</a></li>
                {/* <li>Email: <a href="mailto:your.email@example.com" className="hover:text-white">kotchakorntantrakool@gmail.com</a></li> */}
                <li>Phone: <span className="text-white">+66 990 049 499</span></li>
                <li>Location: <span className="text-white">Chiang Mai, Thailand</span></li>
              </ul>
            </div>
    
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href='https://github.com/kotchakorntantr' target="_blank" className="hover:text-pink-400 transition">GitHub</a>
                <a href="https://www.linkedin.com/in/kotchakorn-tantrakool-0b53392b1/" target="_blank" className="hover:text-pink-400 transition">LinkedIn</a>
              </div>
            </div>
          </div>
    
         
        </footer>
      );
    }
    

export default Contact;
