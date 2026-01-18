import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'SJ',
      rating: 5,
      feedback:
        'WENEXA transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 250%. Professional, creative, and always on time!',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      avatar: 'MC',
      rating: 5,
      feedback:
        'Working with WENEXA on our AI project was exceptional. They understood our complex requirements and delivered a solution that exceeded expectations. Highly recommended!',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, HealthCare Plus',
      avatar: 'ER',
      rating: 5,
      feedback:
        'The mobile app WENEXA built for us is incredible. Our patients love the interface, and the backend is rock solid. They truly care about their clients success.',
    },
    {
      name: 'David Park',
      role: 'Director, FinTech Solutions',
      avatar: 'DP',
      rating: 5,
      feedback:
        'Security was our top priority, and WENEXA delivered. Their expertise in cybersecurity and cloud infrastructure gave us peace of mind. Outstanding work!',
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Head, EcomGrowth',
      avatar: 'LA',
      rating: 5,
      feedback:
        'From concept to launch, WENEXA was with us every step. The e-commerce platform they built is fast, beautiful, and drives sales. Best investment we made!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Desktop View - Show 3 Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${currentIndex}-${index}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass p-6 h-full hover:scale-105 transition-all flex flex-col">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-primary/20 border-2 border-primary">
                    <AvatarFallback className="text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Show 1 Card */}
        <div className="lg:hidden mb-8">
          <motion.div
            key={`mobile-${currentIndex}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass p-6">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonials[currentIndex].feedback}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12 bg-primary/20 border-2 border-primary">
                  <AvatarFallback className="text-primary font-semibold">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="glass border-primary/30 hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="glass border-primary/30 hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;