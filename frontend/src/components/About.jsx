import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card } from './ui/card';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Delivering consistent quality and dependable results on every project',
    },
    {
      icon: Users,
      title: 'Scalability',
      description: 'Building solutions that grow with your business needs',
    },
    {
      icon: Eye,
      title: 'Security',
      description: 'Implementing robust security measures to protect your digital assets',
    },
  ];

  const timeline = [
    { year: '2020', event: 'WENEXA Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2021', event: 'First Major Client', description: 'Delivered enterprise-level solutions' },
    { year: '2022', event: 'Expanded Services', description: 'Added AI/ML and Cloud solutions to portfolio' },
    { year: '2023', event: '100+ Projects', description: 'Reached milestone of 100 successful projects' },
    { year: '2024', event: 'Innovation Hub', description: 'Established R&D division for emerging technologies' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            WENEXA is a forward-thinking tech startup dedicated to building innovative digital solutions 
            that empower businesses to thrive in the digital age. We combine creativity, technical excellence, 
            and strategic thinking to deliver exceptional results.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-8 h-full hover:glow-border transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and 
                competitive advantage. We strive to be the trusted technology partner that transforms visions 
                into successful digital realities.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="glass p-8 h-full hover:glow-border transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a global leader in digital innovation, recognized for delivering cutting-edge solutions 
                that shape the future of technology. We envision a world where businesses of all sizes can 
                leverage advanced technology to achieve their full potential.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass p-6 h-full hover:scale-105 transition-all group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative pl-0 sm:pl-20 mb-8 last:mb-0"
                >
                  {/* Year Badge */}
                  <div className="absolute left-0 sm:left-4 w-16 h-16 glass rounded-full flex items-center justify-center border-2 border-primary">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <Card className="glass p-6 ml-20 sm:ml-0">
                    <h4 className="text-xl font-semibold mb-2">{item.event}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;