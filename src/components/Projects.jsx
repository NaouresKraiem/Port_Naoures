import {HiExternalLink} from 'react-icons/hi'

const Projects = () => {
    const projects = [
        {
            title: 'LinkeFoot | Football Social Media Platform',
            role: 'Frontend Engineer',
            period: '2022 -- Present',
            location: 'Tunisia',
            description: 'A comprehensive football social media platform with user profiles, real-time interactions, recruitment tools, tournaments, and in-app game organization.',
            techStack: [
                'React', 'TypeScript', 'React Query', 'Next.js'
            ],
            links: [
                {
                    label: 'Landing Page',
                    url: 'https://www.linkefoot.fr/'
                }, {
                    label: 'Admin Dashboard',
                    url: 'https://devlinkfoot.softylines.com/'
                }, {
                    label: 'Social Platform',
                    url: 'https://devlinkfootweb.softylines.com/profile'
                },
            ],
            highlights: ['Developed the main landing page using React (TypeScript) and React Query', 'Built a React (TypeScript) admin panel to manage users, posts, tournaments, and platform content', 'Created the core social platform with pixel-perfect UI/UX, animations, and performance optimization',]
        },
        {
            title: 'RankTip | SEO Analytics Platform',
            role: 'SCRUM Master & Frontend Contributor',
            period: '2024',
            description: 'An SEO analytics platform providing ranking analysis, performance optimization, and competitive insights.',
            techStack: [
                'React', 'TypeScript', 'Agile', 'SCRUM'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://ranktip.com/'
                }
            ],
            highlights: ['Led Agile ceremonies, managed sprints, and coordinated team deliverables', 'Developed SEO tools for ranking analysis and performance optimization',]
        },
        {
            title: 'Tresovista | Financial Management App',
            role: 'Web Application',
            period: '2023',
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
        }, {
            title: 'RentCar | Car Rental Platform',
            role: 'Landing Page & Web Platform',
            period: '2022',
            description: 'Designed and developed the RentCar agency\'s web platform from scratch, including responsive pages for browsing, booking, and managing car rentals.',
            techStack: [
                'React', 'TypeScript'
            ],
            links: [
                {
                    label: 'Website',
                    url: 'https://app.rentalsaga.com/'
                }
            ]
        }, {
            title: 'LeaveMetry | Leave Management System',
            role: 'Web Application',
            period: '2021',
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                projects.map((project, index) => (
                    <div key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col group animate-fade-in-up"
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}>
                        <div className="mb-4">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-sm text-primary-600 font-medium mb-1">
                                {project.role}
                            </p>
                            <p className="text-xs text-gray-500 mb-3">
                                {project.period} {project.location && `• ${project.location}`}
                            </p>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                            {project.description}
                        </p>
                        
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack?.map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {project.highlights && (
                            <ul className="mb-4 space-y-1">
                                {project.highlights.map((highlight, highlightIndex) => (
                                    <li key={highlightIndex} className="text-xs text-gray-600 flex items-start">
                                        <span className="text-primary-600 mr-2">•</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        {project.links && project.links.length > 0 && (
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <div className="flex flex-wrap gap-2">
                                    {project.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors"
                                        >
                                            {link.label}
                                            <HiExternalLink className="w-3 h-3" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))
                }
            </div>
        </div>
    </section>
    )
}

export default Projects
