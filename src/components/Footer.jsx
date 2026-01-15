import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            © {currentYear}
                             Naoures Kraiem. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/naoures-kraiem-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                            <FaLinkedin size={24}/>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
                            <FaGithub size={24}/>
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                    <p>Built with React, TailwindCSS, and ❤️</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
