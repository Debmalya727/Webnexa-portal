import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', description: 'UI Library' },
        { name: 'Next.js', icon: '▲', description: 'React Framework' },
        { name: 'Vue.js', icon: '🖖', description: 'Progressive Framework' },
        { name: 'TypeScript', icon: 'TS', description: 'Type Safety' },
        { name: 'Tailwind CSS', icon: '🎨', description: 'CSS Framework' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', description: 'Runtime Environment' },
        { name: 'Python', icon: '🐍', description: 'Programming Language' },
        { name: 'Express', icon: 'E', description: 'Web Framework' },
        { name: 'FastAPI', icon: '⚡', description: 'Python Framework' },
        { name: 'GraphQL', icon: 'GQL', description: 'Query Language' },
      ],
    },
    {
      category: 'AI & ML',
      technologies: [
        { name: 'TensorFlow', icon: '🧠', description: 'ML Framework' },
        { name: 'PyTorch', icon: '🔥', description: 'Deep Learning' },
        { name: 'OpenAI', icon: '🤖', description: 'AI Platform' },
        { name: 'Scikit-learn', icon: '📊', description: 'ML Library' },
        { name: 'Hugging Face', icon: '🤗', description: 'NLP Models' },
      ],
    },
    {
      category: 'DevOps & Cloud',
      technologies: [
        { name: 'AWS', icon: '☁️', description: 'Cloud Platform' },
        { name: 'Docker', icon: '🐳', description: 'Containerization' },
        { name: 'Kubernetes', icon: 'K8s', description: 'Orchestration' },
        { name: 'GitHub Actions', icon: '🔧', description: 'CI/CD' },
        { name: 'Linux', icon: '🐧', description: 'Operating System' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage the latest and most powerful technologies to build robust, 
            scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                <span className="text-primary">//</span> {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + techIndex * 0.1 }}
                    className="glass p-6 rounded-2xl text-center hover:scale-105 hover:glow-border transition-all group cursor-pointer"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold mb-1 text-sm">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground">
              <span className="text-primary font-mono">const expertise = </span>
              <span className="text-foreground font-semibold">"Continuous Learning"</span>
              <span className="text-primary font-mono">;</span>
              <br />
              <span className="text-sm mt-2 block">
                We stay ahead of the curve by constantly exploring and mastering emerging technologies.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;