import {useState, useEffect} from 'react'
import {HiArrowDown} from 'react-icons/hi'
import {FaCode, FaLaptopCode, FaReact} from 'react-icons/fa'
import photo from '../assets/photo.jpg'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentText, setCurrentText] = useState('')
    const fullText = 'Frontend Engineer'

    useEffect(() => {
        setIsVisible(true)
        let index = 0
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setCurrentText(fullText.slice(0, index + 1))
                index++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return() => clearInterval(typingInterval)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
                    style={
                        {animationDelay: '1s'}
                }></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
                    style={
                        {animationDelay: '2s'}
                }></div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left side - Text content */}
                <div className={
                    `text-center md:text-left ${
                        isVisible ? 'animate-slide-in-left' : 'opacity-0'
                    }`
                }>
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium animate-fade-in-up">
                            <FaCode className="text-primary-600"/>
                            <span>Welcome to my portfolio</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-fade-in-up"
                            style={
                                {animationDelay: '0.2s'}
                        }>
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                                Naoures Kraiem
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-600 mb-6 min-h-[3rem] animate-fade-in-up"
                            style={
                                {animationDelay: '0.4s'}
                        }>
                            {currentText}
                            <span className="animate-pulse">|</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up"
                            style={
                                {animationDelay: '0.6s'}
                        }>
                            Building scalable, high-performance web applications with modern technologies.
                                                                      Passionate about
                            <span className="font-semibold text-primary-600">
                                pixel-perfect UI/UX</span>
                            and{' '}
                            <span className="font-semibold text-primary-600">clean architecture</span>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 animate-fade-in-up"
                        style={
                            {animationDelay: '0.8s'}
                    }>
                        <a href="#contact" className="group px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                            Get In Touch
                            <HiArrowDown className="group-hover:translate-y-1 transition-transform"/>
                        </a>
                        <a href="#projects" className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            <FaLaptopCode/>
                            View My Work
                        </a>
                    </div>

                    {/* Tech stack icons */}
                    <div className="flex items-center gap-4 mt-8 justify-center md:justify-start animate-fade-in-up"
                        style={
                            {animationDelay: '1s'}
                    }>
                        <span className="text-sm text-gray-600 font-medium">Tech Stack:</span>
                        <div className="flex gap-3">
                            <FaReact className="text-2xl text-primary-600 animate-pulse-slow"/>
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                                TS
                            </div>
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                                JS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Photo */}
                <div className={
                    `flex justify-center md:justify-end ${
                        isVisible ? 'animate-slide-in-right' : 'opacity-0'
                    }`
                }>
                    <div className="relative">
                        {/* Decorative circles */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 animate-pulse-slow"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-30 animate-pulse-slow"
                            style={
                                {animationDelay: '1s'}
                        }></div>

                        {/* Photo container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 shadow-2xl animate-scale-in"
                            style={
                                {animationDelay: '0.5s'}
                        }>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20"></div>
                            <img src={photo}
                                alt="Naoures Kraiem"
                                className="w-full h-full object-cover"
                                onError={
                                    (e) => { // Fallback to a gradient placeholder if image doesn't exist
                                        e.target.style.display = 'none'
                                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary-400', 'to-primary-600')
                                        const initials = document.createElement('div')
                                        initials.className = 'w-full h-full flex items-center justify-center text-white text-6xl font-bold'
                                        initials.textContent = 'NK'
                                        e.target.parentElement.appendChild(initials)
                                    }
                                }/>
                        </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-primary-200 animate-float">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-gray-700">Available for work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="inline-block">
                <HiArrowDown className="text-primary-600 text-3xl"/>
            </a>
        </div>
    </section>
    )
}

export default Hero
