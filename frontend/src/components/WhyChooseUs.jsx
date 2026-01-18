import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Zap, Shield, DollarSign, Clock, Headphones } from 'lucide-react';
import { Card } from './ui/card';

export const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Zap,
      title: 'Modern Tech Stack',
      description: 'Latest frameworks and tools ensuring cutting-edge solutions',
      highlight: 'Future-proof technology',
    },
    {
      icon: Shield,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, handling increased demand effortlessly',
      highlight: 'Enterprise-grade solutions',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality',
      highlight: 'Best value for investment',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Strict adherence to deadlines with agile development practices',
      highlight: 'Reliable timelines',
    },
    {
      icon: Headphones,
      title: 'Post-Deployment Support',
      description: 'Ongoing maintenance, updates, and technical assistance',
      highlight: '24/7 availability',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code reviews ensure bug-free delivery',
      highlight: 'Zero compromise on quality',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Partner With Us</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with business understanding to deliver 
            solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass p-6 h-full hover:scale-105 hover:glow-border transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs text-primary font-medium">{reason.highlight}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="glass p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">2x</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Code Quality</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;