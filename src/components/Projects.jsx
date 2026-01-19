import { HiExternalLink } from 'react-icons/hi'

// Import project images
import linkefootLandingImage from '../assets/projects/linkefoot landing.png'
import linkefootAdminImage from '../assets/projects/linkefoot admin.png'
import linkefootSocialImage from '../assets/projects/linkefoot social.png'
import ranktipImage from '../assets/projects/ranktip.png'
import tresovistaImage from '../assets/projects/tresovistas.png'
import leavemetryImage from '../assets/projects/leavereq.png'
import takiacademyImage from '../assets/projects/takiacademy.png'
import rentcarImage from '../assets/projects/rent.jpeg'


const Projects = () => {
    const projects = [
        {
            title: 'LinkeFoot | Landing Page',
            role: 'Frontend Engineer',
            period: '2022 -- Present',
            location: 'Tunisia',
            image: linkefootLandingImage,
            description: 'Developed the main landing page for LinkeFoot, a comprehensive football social media platform. Built with React (TypeScript) and React Query, featuring modern UI/UX and optimized performance.',
            techStack: [
                'TypeScript', 'React Query', 'Next.js'
            ],
            links: [
                {
                    label: 'Visit Landing Page',
                    url: 'https://www.linkefoot.fr/'
                }
            ],
            highlights: ['Developed the main landing page using React (TypeScript) and React Query', 'Implemented pixel-perfect UI/UX with smooth animations', 'Optimized for performance and SEO']
        },
        {
            title: 'LinkeFoot | Admin Dashboard',
            role: 'Frontend Engineer',
            period: '2022 -- Present',
            location: 'Tunisia',
            image: linkefootAdminImage,
            description: 'An admin panel using React (TypeScript) for the LinkeFoot platform, enabling super admin management of users, posts and more.',
            techStack: [
                'React', 'TypeScript', 'Redux', 'Minimal UI', 'Material-UI'
            ],
            links: [
                {
                    label: 'View Admin Dashboard',
                    url: 'https://devlinkfoot.softylines.com/'
                }
            ],
            highlights: ['Built a React (TypeScript) admin panel using Minimal UI and Material-UI', 'Implemented role-based access control', 'Created intuitive management interfaces with modern UI components']
        },
        {
            title: 'LinkeFoot | Social Platform',
            role: 'Frontend Engineer',
            period: '2022 -- Present',
            location: 'Tunisia',
            image: linkefootSocialImage,
            description: 'Created the core social platform for LinkeFoot with user profiles, real-time interactions, recruitment tools, tournaments, and in-app game organization. Focus on pixel-perfect UI/UX and performance optimization.',
            techStack: [
                'React', 'TypeScript', 'React Query', 'Next.js','Socket.io','Virtuoso'
            ],
            links: [
                {
                    label: 'Explore Social Platform',
                    url: 'https://devlinkfootweb.softylines.com/profile'
                }
            ],
            highlights: ['Created the core social platform with pixel-perfect UI/UX, animations, and performance optimization', 'Implemented real-time features and user interactions', 'Built recruitment tools and tournament management']
        },
        {
            title: 'RankTip | SEO Analytics Platform',
            role: 'SCRUM Master & Frontend Contributor',
            period: '2024',
            image: ranktipImage,
            description: 'Fully responsive comprehensive SEO platform providing 8 essential tools in one solution, reducing SEO workflow time by 75%. Implemented advanced caching strategies improving data retrieval speed by 60%. Built site audit system identifying 500+ technical issues, keyword research tool with 10M+ keyword database, and position tracking across multiple search engines. Features performance analysis, link audit capabilities, ads management, and content optimization tools optimized for desktop and mobile use. Deployed with Docker achieving 99.9% uptime and implemented Jest testing reducing production bugs by 65%.',
            techStack: [
                'React', 'TypeScript', 'Docker', 'Jest', 'Agile', 'SCRUM'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://ranktip.com/'
                }
            ],
            highlights: ['Reduced SEO workflow time by 75% with 8 essential tools in one solution', 'Improved data retrieval speed by 60% with advanced caching strategies', 'Built site audit system identifying 500+ technical issues', 'Keyword research tool with 10M+ keyword database', 'Achieved 99.9% uptime with Docker deployment', 'Reduced production bugs by 65% with Jest testing']
        },
        {
            title: 'RentCar | Car Rental Platform',
            role: 'Frontend Engineer',
            period: '2022',
            image: rentcarImage, // Add image path here, e.g., import rentcarImage from '../assets/projects/rentcar.jpg'
            description: 'Fully responsive enterprise SaaS solution for vehicle rental agencies managing complete fleet operations. Optimized webpack configuration reducing bundle size by 45% and improving load times by 60%. Built comprehensive dashboard with advanced calendar integration, dynamic permission system, multi-agency management, billing, invoice management, and contract handling - eliminating need for 5+ separate tools and reducing operational costs by 40%.',
            techStack: [
                'React', 'TypeScript', 'Webpack'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://app.rentalsaga.com/'
                }
            ],
            highlights: ['Optimized webpack configuration reducing bundle size by 45% and improving load times by 60%', 'Built comprehensive dashboard handling vehicles, categories, pricing groups, and reservations', 'Implemented dynamic permission system and multi-agency management with coin-based access control', 'Reduced operational costs by 40% by eliminating need for 5+ separate tools']
        },
        {
            title: 'Tresovista | Financial Management App',
            role: 'Web Application',
            period: '2023',
            image: tresovistaImage,
            description: 'A financial management application enabling users to create and track financial plans for associations and companies.',
            techStack: [
                'React', 'TypeScript'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://monappli.tresovista.com/login'
                }
            ]
        },
        {
            title: 'TakiAcademy | Landing Page',
            role: 'Landing Page',
            period: '2023',
            image: takiacademyImage, // Add image path here, e.g., import takiacademyImage from '../assets/projects/takiacademy.jpg'
            description: 'Developed the main landing page to showcase courses and attract students for the e-learning platform.',
            techStack: [
                'React', 'Next.js', 'TypeScript'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://www.takiacademy.com/'
                }
            ]
        },
          
        {
            title: 'LeaveMetry | Leave Management System',
            role: 'Web Application',
            period: '2021',
            image: leavemetryImage,
            description: 'Built a complete leave request and approval system with role-based access and real-time tracking.',
            techStack: [
                'React', 'TypeScript'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://leave-request.com'
                }
            ]
        },
    ]

    return (<section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
                    style={
                        {animationDelay: '0.2s'}
                }>
                    A selection of projects I've worked on
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                projects.map((project, index) => (
                    <div key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50 flex flex-col group animate-fade-in-up backdrop-blur-sm"
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}>
                        {/* Project Image */}
                        {project.image ? (
                            <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                                {project.links && project.links.length > 0 ? (
                                    <a 
                                        href={project.links[0].url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block w-full h-full relative"
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                                                <HiExternalLink className="w-4 h-4 text-primary-600" />
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                            </div>
                        ) : (
                            // Placeholder when no image is provided
                            <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-primary-50 via-gray-50 to-primary-100 flex items-center justify-center">
                                <div className="text-center text-gray-400">
                                    <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium text-gray-500">Add project image</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="p-6 flex flex-col flex-1">
                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 flex-1 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200">
                                        {project.role}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 font-medium">
                                    {project.period} {project.location && `• ${project.location}`}
                                </p>
                            </div>
                        
                            {/* Description */}
                            <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
                                {project.description}
                            </p>
                            
                            {/* Tech Stack */}
                            {project.techStack && project.techStack.length > 0 && (
                                <div className="mb-5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 text-xs font-medium rounded-lg border border-primary-200/50 shadow-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Highlights */}
                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="mb-5 space-y-2">
                                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                                        <li key={highlightIndex} className="text-xs text-gray-600 flex items-start leading-relaxed">
                                            <span className="text-primary-500 mr-2 mt-1.5 flex-shrink-0">▸</span>
                                            <span className="flex-1">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            
                            {/* Links */}
                            {project.links && project.links.length > 0 && (
                                <div className="mt-auto pt-5 border-t border-gray-200">
                                    <div className="flex flex-wrap gap-3">
                                        {project.links.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                                            >
                                                <span>{link.label}</span>
                                                <HiExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
    )
}

export default Projects
