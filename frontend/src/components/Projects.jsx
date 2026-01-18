import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'AI Chatbot Assistant',
      category: 'AI',
      description: 'Intelligent conversational AI powered by GPT-4, capable of understanding context and providing helpful responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Automation Suite',
      category: 'Automation',
      description: 'Custom automation tools for business workflows, data processing, and report generation.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      technologies: ['Python', 'Selenium', 'Pandas', 'Docker'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Healthcare Management App',
      category: 'Web',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      technologies: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Real-time Analytics Dashboard',
      category: 'Web',
      description: 'Interactive dashboard with real-time data visualization, custom reports, and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      technologies: ['React', 'D3.js', 'WebSocket', 'Redis'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Image Recognition System',
      category: 'AI',
      description: 'Computer vision solution for object detection, classification, and facial recognition.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
      technologies: ['TensorFlow', 'Python', 'OpenCV', 'Flask'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const filters = ['All', 'Web', 'AI', 'Automation'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-primary self-center" />
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant="outline"
              className={`${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'glass border-primary/30 hover:bg-primary/10'
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              layout
            >
              <Card className="glass overflow-hidden h-full hover:scale-105 transition-all group flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass border-primary/30"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;