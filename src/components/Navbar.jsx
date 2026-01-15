import {useState, useEffect} from 'react'
import {HiMenu, HiX} from 'react-icons/hi'

const Navbar = ({activeSection}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return() => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        {
            id: 'home',
            label: 'Home'
        },
        {
            id: 'about',
            label: 'About'
        },
        {
            id: 'skills',
            label: 'Skills'
        },
        {
            id: 'experience',
            label: 'Experience'
        }, {
            id: 'projects',
            label: 'Projects'
        }, {
            id: 'contact',
            label: 'Contact'
        },
    ]

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
            setIsOpen(false)
        }
    }

    return (
        <nav className={
            `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`
        }>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <button onClick={
                                () => scrollToSection('home')
                            }
                            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                            NK
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {
                        navItems.map((item) => (
                            <button key={
                                    item.id
                                }
                                onClick={
                                    () => scrollToSection(item.id)
                                }
                                className={
                                    `px-3 py-2 text-sm font-medium transition-colors ${
                                        activeSection === item.id ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'
                                    }`
                            }>
                                {
                                item.label
                            } </button>
                        ))
                    } </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={
                                () => setIsOpen(!isOpen)
                            }
                            className="text-gray-700 hover:text-primary-600 focus:outline-none">
                            {
                            isOpen ? <HiX size={24}/> : <HiMenu size={24}/>
                        } </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {
            isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {
                        navItems.map((item) => (
                            <button key={
                                    item.id
                                }
                                onClick={
                                    () => scrollToSection(item.id)
                                }
                                className={
                                    `block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                                        activeSection === item.id ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                    }`
                            }>
                                {
                                item.label
                            } </button>
                        ))
                    } </div>
                </div>
            )
        } </nav>
    )
}

export default Navbar
