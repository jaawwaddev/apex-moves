import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Calculator, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { generateMovingEstimate } from '../services/estimationService';
import { EstimateResult, QuoteFormValues } from '../types';

export const Quote: React.FC = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [formData, setFormData] = useState<QuoteFormValues>({
    inventoryDescription: '',
    distance: 0,
    fromType: 'apartment',
    toType: 'house'
  });
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStep('loading');

    try {
      const result = await generateMovingEstimate(formData.inventoryDescription, formData.distance);
      setEstimate(result);
      setStep('result');
    } catch (err) {
      console.error(err);
      setError("We encountered an error generating your estimate. Please try again or call us directly.");
      setStep('form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'distance' ? Number(value) : value
    }));
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold mb-4">Instant Moving Estimator</h1>
          <p className="text-muted-foreground">
            Describe your move, and our smart calculator will analyze your inventory to provide an instant estimate.
          </p>
        </motion.div>

        <Card className="overflow-hidden border-2">
          <AnimatePresence mode="wait">
            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle>Move Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Moving From</label>
                        <select 
                          name="fromType"
                          value={formData.fromType}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="apartment">Apartment</option>
                          <option value="house">House</option>
                          <option value="storage">Storage Unit</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Moving To</label>
                        <select 
                          name="toType"
                          value={formData.toType}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="apartment">Apartment</option>
                          <option value="house">House</option>
                          <option value="storage">Storage Unit</option>
                        </select>
                      </div>
                    </div>

                    <Input 
                      type="number" 
                      label="Distance (miles)" 
                      name="distance" 
                      placeholder="e.g. 15"
                      min="1"
                      required
                      value={formData.distance || ''}
                      onChange={handleChange}
                    />

                    <Textarea 
                      label="Inventory Description" 
                      name="inventoryDescription"
                      placeholder="e.g. 2 bedroom apartment, 3rd floor. Includes: King bed, 2 dressers, sectional sofa, heavy oak dining table, 6 chairs, washer/dryer, and about 40 medium boxes. No elevator."
                      className="min-h-[150px]"
                      required
                      value={formData.inventoryDescription}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Tip: Be specific about large items and access conditions (stairs/elevators) for the best accuracy.
                    </p>

                    {error && (
                      <div className="flex items-center gap-2 p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-6">
                    <Button type="submit" className="w-full" size="lg">
                      <Wand2 className="mr-2 h-4 w-4" /> Generate Estimate
                    </Button>
                  </CardFooter>
                </form>
              </motion.div>
            )}

            {step === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <Calculator className="h-16 w-16 text-primary relative z-10 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analyzing Inventory...</h3>
                <p className="text-muted-foreground">Calculating volume and crew requirements.</p>
              </motion.div>
            )}

            {step === 'result' && estimate && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CardHeader className="bg-primary/5 border-b">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">Estimate Ready</span>
                  </div>
                  <CardTitle className="text-2xl">Estimated Cost: ${estimate.priceRange.min} - ${estimate.priceRange.max}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Volume</p>
                      <p className="text-2xl font-bold">{estimate.estimatedCubicFeet} <span className="text-sm font-normal">cu ft</span></p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Crew Size</p>
                      <p className="text-2xl font-bold">{estimate.recommendedMovers} <span className="text-sm font-normal">movers</span></p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Duration</p>
                      <p className="text-2xl font-bold">{estimate.estimatedHours} <span className="text-sm font-normal">hours</span></p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Analysis Summary</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {estimate.summary}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button onClick={() => window.alert('Booking feature coming soon!')} className="flex-1">
                      Book This Move
                    </Button>
                    <Button variant="outline" onClick={() => setStep('form')} className="flex-1">
                      Start Over
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </div>
  );
};