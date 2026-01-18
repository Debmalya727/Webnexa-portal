import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Zap, 
  Cloud, 
  Shield, 
  Palette, 
  Settings 
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge frameworks like React, Next.js, and Vue',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      benefits: 'Fast, SEO-optimized, scalable web applications',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      benefits: 'User-friendly apps with seamless performance',
    },
    {
      icon: Brain,
      title: 'AI / ML Solutions',
      description: 'Intelligent systems powered by machine learning and artificial intelligence',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
      benefits: 'Automated processes and data-driven insights',
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Custom automation solutions to streamline your business operations',
      technologies: ['Python', 'Selenium', 'Zapier', 'N8N'],
      benefits: 'Increased efficiency and reduced manual work',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, deployment, and continuous integration',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      benefits: 'Scalable, secure, and reliable infrastructure',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      technologies: ['Penetration Testing', 'Security Audits', 'Encryption'],
      benefits: 'Enhanced security and compliance',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      benefits: 'Higher engagement and user satisfaction',
    },
    {
      icon: Settings,
      title: 'Custom Software',
      description: 'Tailored software solutions designed for your specific business needs',
      technologies: ['Full Stack', 'API Development', 'Database Design'],
      benefits: 'Perfect fit for unique business requirements',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2h8ZW58MHx8fHwxNzY4NzE4MjM5fDA&ixlib=rb-4.1.0&q=85"
          alt="Abstract Tech"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="gradient-text">We Offer</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
            we handle every aspect of your digital transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass p-6 h-full hover:scale-105 transition-all group flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-primary/80 font-medium">{service.benefits}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-border"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;