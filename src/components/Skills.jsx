const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['JavaScript', 'TypeScript']
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                'React',
                'Next.js',
                'Vite',

                'Redux',
                'React Query'
            ]
        },
        {
            title: 'Architecture & Patterns',
            skills: ['Clean Code', 'Component-Based Architecture', 'State Management', 'Server-Side Rendering (SSR)']
        },
        {
            title: 'Databases & Backend',
            skills: ['SQL', 'MongoDB', 'Supabase']
        }, {
            title: 'Tools & Collaboration',
            skills: ['Git', 'Visual Studio Code', 'Agile Methodologies', 'Full Feature Ownership']
        },
    ]

    return (<section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Technical Skills
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
                    style={
                        {animationDelay: '0.2s'}
                }>
                    Technologies and tools I work with
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                skillCategories.map((category, index) => (
                    <div key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}>
                        <h3 className="text-xl font-semibold text-primary-600 mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-100 hover:border-primary-300 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
    )
}

export default Skills
