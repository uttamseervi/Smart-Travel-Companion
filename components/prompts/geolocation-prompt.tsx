"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, X } from 'lucide-react';

export function GeolocationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  
  useEffect(() => {
    // Show the prompt after a short delay
    const timer = setTimeout(() => {
      // Check if user has previously dismissed the prompt
      const hasDismissed = localStorage.getItem('locationPromptDismissed');
      if (!hasDismissed) {
        setShowPrompt(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAccept = () => {
    // Here we would handle requesting location permission
    // For demo purposes, we'll just close the prompt
    setShowPrompt(false);
    localStorage.setItem('locationPromptAccepted', 'true');
  };
  
  const handleDismiss = () => {
    setDismissed(true);
    setTimeout(() => {
      setShowPrompt(false);
      localStorage.setItem('locationPromptDismissed', 'true');
    }, 300);
  };
  
  if (!showPrompt) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={dismissed ? 'opacity-0' : ''}
          >
            <Card className="max-w-sm shadow-lg border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Enable Location Services
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-7 w-7">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>
                  Get personalized recommendations based on your current location
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 text-sm">
                <p>Allow TravelBuddy to access your location to discover nearby experiences, cuisine, and hidden gems!</p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleDismiss}>
                  Not Now
                </Button>
                <Button onClick={handleAccept}>
                  Enable
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}