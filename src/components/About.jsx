import {HiLocationMarker, HiTranslate, HiLightBulb} from 'react-icons/hi'
import photo from '../assets/photo.jpg'

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
                        style={
                            {animationDelay: '0.2s'}
                    }>
                        Get to know more about my background, experience, and interests
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left side - Photo and info cards */}
                    <div className="space-y-6">
                        {/* Photo */}
                        <div className="flex justify-center md:justify-start animate-scale-in">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>
                                <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-primary-200 shadow-xl">
                                    <img src={photo}
                                        alt="Naoures Kraiem"
                                        className="w-full h-full object-cover"
                                        onError={
                                            (e) => {
                                                e.target.style.display = 'none'
                                                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary-400', 'to-primary-600')
                                                const initials = document.createElement('div')
                                                initials.className = 'w-full h-full flex items-center justify-center text-white text-5xl font-bold'
                                                initials.textContent = 'NK'
                                                e.target.parentElement.appendChild(initials)
                                            }
                                        }/>
                                </div>
                        </div>
                    </div>

                    {/* Info cards */}
                    <div className="space-y-4 animate-slide-up"
                        style={
                            {animationDelay: '0.3s'}
                    }>
                        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 border-l-4 border-primary-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <HiLocationMarker className="text-primary-600 text-xl"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                            </div>
                            <p className="text-gray-600 ml-0">Monastir, Tunisia</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 border-l-4 border-primary-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <HiTranslate className="text-primary-600 text-xl"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600 ml-0">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                                    Arabic:
                                    <span className="font-semibold text-primary-600">Native</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                                    French:
                                    <span className="font-semibold text-primary-600">Conversational</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                                    English:
                                    <span className="font-semibold text-primary-600">Conversational</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 border-l-4 border-primary-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                    <HiLightBulb className="text-primary-600 text-xl"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Interests</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 ml-0">
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-default">
                                    UI/UX Design
                                </span>
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-default">
                                    Mentorship
                                </span>
                                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-default">
                                    Learning Content Creation
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Description */}
                <div className="animate-slide-up"
                    style={
                        {animationDelay: '0.2s'}
                }>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg border border-primary-100">
                        <div className="space-y-6">
                            <div>
                                <div className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">
                                    5 Years Experience
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Frontend Engineer with
                                    <span className="font-bold text-primary-600">5 years of experience</span>
                                    building scalable, 
                                                                                            high-performance web applications using modern technologies.
                                </p>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Expert in
                                <span className="font-semibold text-primary-600">
                                    React.js, Next.js, TypeScript,React Query and Redux</span>, with a strong focus 
                                                                                          on clean architecture and maintainable code.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Delivered production-ready solutions across edtech, medical, beauty, and a large-scale football social media platform. 
                                                                                  Contributed to an e-learning platform serving over
                                <span className="font-bold text-primary-600">400,000 users</span>, 
                                                                                          developing features from scratch to scale.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Passionate about
                                <span className="font-semibold">
                                    pixel-perfect UI/UX</span>, real-time features, performance optimization, and agile collaboration.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-primary-200">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-1">400K+</div>
                                    <div className="text-sm text-gray-600">Users Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
