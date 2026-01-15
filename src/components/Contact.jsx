import {HiMail, HiPhone, HiLocationMarker} from 'react-icons/hi'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-white to-primary-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
                        style={
                            {animationDelay: '0.2s'}
                    }>
                        Let's connect and discuss opportunities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="animate-slide-in-left">
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about frontend development. 
                                          Feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                    <HiMail className="text-primary-600"
                                        size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:naoures.kraiem@esen.tn" className="text-primary-600 hover:text-primary-700 transition-colors">
                                        naoures.kraiem@esen.tn
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                    <HiPhone className="text-primary-600"
                                        size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                    <a href="tel:+21695480407" className="text-primary-600 hover:text-primary-700 transition-colors">
                                        +216 95480407
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                    <HiLocationMarker className="text-primary-600"
                                        size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-600">Monastir, Tunisia</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-900 mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/naoures-kraiem-/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg" aria-label="LinkedIn">
                                    <FaLinkedin size={24}/>
                                </a>
                                {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg" aria-label="GitHub">
                                    <FaGithub size={24}/>
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all" placeholder="Your name"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all" placeholder="your.email@example.com"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
