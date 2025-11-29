import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { testimonials, services } from '../data/mockData';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Move Smart. <br/>
                <span className="text-primary">Move Fast.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Experience the next generation of relocation. We combine expert movers with AI-driven logistics to ensure your move is on-time, on-budget, and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#/quote">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </a>
              </div>
              <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Insured
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Licensed
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> 24/7 Support
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/move/800/600" 
                  alt="Happy family moving" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Apex Moves?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just muscle. We're logistics experts dedicated to protecting your belongings.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {/* Dynamic icon rendering would happen here, simplified for this file */}
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 md:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Smooth Move?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Get an instant estimate powered by AI and book your move today.
          </p>
          <a href="#/quote">
            <Button size="lg" variant="secondary" className="font-bold">
              Start Your Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};