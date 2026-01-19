import React from 'react';

function Contact() {
    return (
        <footer id="contact" className="bg-black text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kotchakorn</h3>
              <p className="text-gray-400">
                Frontend Developer passionate about building beautiful and functional web experiences.
              </p>
            </div>
    
            {/* Column 2: Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: <a href="mailto:your.email@example.com" className="hover:text-white">asfghjk@gmail.com</a></li>
                {/* <li>Email: <a href="mailto:your.email@example.com" className="hover:text-white">kotchakorntantrakool@gmail.com</a></li> */}
                <li>Phone: <span className="text-white">+66 123 456 789</span></li>
                <li>Location: <span className="text-white">Chiang Mai, Thailand</span></li>
              </ul>
            </div>
    
            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <div target="_blank" className="hover:text-pink-400 transition">GitHub</div>
                <div target="_blank" className="hover:text-pink-400 transition">LinkedIn</div>
                {/* <a href="https://www.linkedin.com/in/kotchakorn-tantrakool-0b53392b1/" target="_blank" className="hover:text-pink-400 transition">LinkedIn</a> */}
                <div target="_blank" className="hover:text-pink-400 transition">Instagram</div>
              </div>
            </div>
          </div>
    
          {/* Bottom Line */}
          {/* <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-4 text-sm">
            © 2025 Kotchakorn Tantrakool. All rights reserved.
          </div> */}
        </footer>
      );
    }
    

export default Contact;
