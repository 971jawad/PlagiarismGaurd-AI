import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Basic',
    price: 9,
    period: 'month',
    description: 'Perfect for students and individual users',
    features: [
      'Up to 10 documents per month',
      'Basic plagiarism detection',
      'PDF reports',
      'Email support',
      'Web-based interface'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const,
    popular: false
  },
  {
    name: 'Professional',
    price: 29,
    period: 'month',
    description: 'Ideal for professionals and small teams',
    features: [
      'Unlimited documents',
      'Advanced AI detection',
      'Real-time web search',
      'AI paraphrasing suggestions',
      'Priority support',
      'API access',
      'Custom integrations'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'default' as const,
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations and institutions',
    features: [
      'Volume pricing',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated support',
      'SLA guarantee',
      'On-premise deployment',
      'Custom training'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline' as const,
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Flexible pricing for individuals, teams, and enterprises
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={plan.popular ? 'scale-105' : ''}
            >
              <Card className={`h-full ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl' : 'bg-white dark:bg-slate-800'}`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <Badge className="bg-white/20 text-white hover:bg-white/30 mb-3 w-fit mx-auto">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className={`text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    {plan.period && (
                      <span className={`text-lg font-normal ${plan.popular ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center ${plan.popular ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                        <Check className={`h-5 w-5 mr-3 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Need a custom solution? <a href="/contact" className="text-blue-600 hover:text-blue-700">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
