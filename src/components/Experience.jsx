import softylinesLogo from '../assets/softylines_logo.jpeg'
import softyskillsLogo from '../assets/softyskills.png'
import takiacademyLogo from '../assets/takiacademy.jpg'

const Experience = () => {
    const experiences = [
        {
            company: 'Softylines',
            position: 'Frontend Engineer & Technical Supervisor',
            period: '2022 -- Present',
            location: 'Tunisia',
            logo: softylinesLogo,
            description: ['Building scalable and optimized user interfaces for SaaS and enterprise applications.', 'Collaborating with designers and backend engineers to deliver high-quality UI features.', 'Supervising PFE students: providing technical guidance, reviewing progress, and validating project deliverables.',]
        }, {
            company: 'Softyskills',
            position: 'Web Instructor',
            period: '2023 -- 2025',
            location: 'Remote',
            logo: softyskillsLogo,
            description: ['Delivered practical training in React.js, JavaScript/TypeScript, and modern frontend development.', 'Supported students through mentorship, code reviews, and best-practice guidance.',]
        }, {
            company: 'TakiAcademy',
            position: 'Frontend Developer',
            period: '2021 -- 2022',
            location: 'Tunisia',
            logo: takiacademyLogo,
            description: ['Building scalable and optimized user interfaces for SaaS and enterprise applications.', 'Contributed to an e-learning platform serving over 400,000 users.',]
        },
    ]

    return (<section id="experience" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Work Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
                    style={
                        {animationDelay: '0.2s'}
                }>
                    My professional journey and career milestones
                </p>
            </div>

            <div className="space-y-8">
                {
                experiences.map((exp, index) => (<div key={index}
                    className="relative pl-8 border-l-4 border-primary-600 pb-8 last:pb-0 animate-slide-up"
                    style={
                        {
                                animationDelay: `${
                                index * 0.2
                            }
                            s`
            s`
                    }}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"> </div> <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border border-primary-100"> <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4"> <div className="flex items-start gap-4 flex-1"> {/* Company Logo */} <div className="flex-shrink-0"> <div className="w-16 h-16 rounded-lg bg-white p-2 shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden"> <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} /> </div> </div> <div className="flex-1"> <h3 className="text-xl font-bold text-gray-900 mb-1"> {exp.company}
                    </h3> <p className="text-primary-600 font-semibold mb-2"> {exp.position}
                    </p> <p className="text-sm text-gray-600"> {exp.period}
                    •
                    {exp.location}
                    </p> </div> </div> </div> <ul className="space-y-2"> {exp.description.map((desc, descIndex) => (
                                                            <li key={descIndex} className="text-gray-700 text-sm flex items-start">
                                                                <span className="text-primary-600 mr-2 mt-1">•</span>
                                                                <span>{desc}</span>
                                                            </li>
                                                        ))}
                    </ul> </div> </div> )
            }> </div>
        </div>
    </section>
    
    )
}

export default Experience
