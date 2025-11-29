import React from 'react';
import { Home, Map, Building2, PackageOpen, Truck, ShieldCheck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { services } from '../data/mockData';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  'Home': <Home className="h-8 w-8" />,
  'Map': <Map className="h-8 w-8" />,
  'Building2': <Building2 className="h-8 w-8" />,
  'PackageOpen': <PackageOpen className="h-8 w-8" />,
};

export const Services: React.FC = () => {
  return (
    <div className="py-12 md:py-20 container mx-auto px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive moving solutions tailored to your unique needs. 
          From studio apartments to corporate headquarters, we handle it all.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:w-2/5 bg-muted flex items-center justify-center p-8">
                <div className="text-primary">
                  {iconMap[service.iconName] || <Truck className="h-8 w-8" />}
                </div>
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-center">
                <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50/50 dark:bg-blue-950/30 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-blue-900">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">The Apex Standard</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Fully Insured</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Comprehensive coverage for all your items during transit.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Punctual Service</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">We value your time. Guaranteed arrival windows.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Modern Fleet</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Clean, reliable trucks equipped with GPS tracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};