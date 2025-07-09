import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface ProgressIndicatorProps {
  isVisible: boolean;
}

export function ProgressIndicator({ isVisible }: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: 'Text Processing', progress: 20 },
    { name: 'Semantic Analysis', progress: 45 },
    { name: 'Web Search Verification', progress: 70 },
    { name: 'AI Detection', progress: 90 },
    { name: 'Generating Report', progress: 100 }
  ];

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      setCurrentStep(0);
      return;
    }

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex);
        setProgress(steps[stepIndex].progress);
        stepIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Analyzing Content
        </h3>
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-sm text-slate-500 dark:text-slate-400">Processing...</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: index <= currentStep ? 1 : 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-sm">
              <span className={`${index <= currentStep ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                {step.name}
              </span>
              <span className="text-blue-600 font-semibold">
                {index <= currentStep ? `${step.progress}%` : '--'}
              </span>
            </div>
            <Progress
              value={index <= currentStep ? step.progress : 0}
              className="h-2"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
