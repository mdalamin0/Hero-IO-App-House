import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logoImg from '../../assets/logo.png'
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="w-11/12 mx-auto  py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className='flex items-center gap-2'>
              <img src={logoImg} alt="logo" className='w-8' />
              <h2 className="text-2xl font-bold text-white">Hero Apps House</h2>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Discover, explore and install your favorite apps.
              Your trusted app store experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/apps" className="hover:text-white transition">Apps</Link></li>
              <li><Link to="/installations" className="hover:text-white transition">My Installation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>

            <div className="flex  gap-4 mb-4">
              <FaFacebook size={25} />
              <IoLogoGithub size={25} />
              <FaInstagram size={25} />
            </div>
            <a
              href="https://github.com/mdalamin0"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white px-4 py-2 rounded-md text-sm hover:scale-105 transition duration-300"
            >
              Contribute
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Hero Apps House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;