import { CALENDLY_URL } from '../utils/constants';

export const subscriptionPlans = [
  {
    title: 'Basic',
    titleHighlight: 'ic',
    description: 'For businesses looking to start with AI and automations.',
    features: [
      '1 Developer',
      'Basic chatbots & Model',
      '3 Monthly Check Ups',
      'Cancel & pause anytime'
    ],
    ctaText: 'Book Your Call',
    ctaUrl: CALENDLY_URL
  },
  {
    title: 'Professional',
    titleHighlight: 'ional',
    description: 'For businesses looking to outperform their competition with AI and automations.',
    features: [
      '2 developers',
      'Custom chatbots & Models',
      '10 Monthly Check Ups',
      'Cancel & pause anytime'
    ],
    ctaText: 'Book Your Call',
    ctaUrl: CALENDLY_URL,
    featured: true
  },
  {
    title: 'Enterprise',
    titleHighlight: 'prise',
    description: 'For businesses looking to fully leverage AI and automations to become an industry leader.',
    features: [
      '3 developers',
      'Premium Custom chatbots & Models',
      'Unlimited Check Ups',
      'Cancel & pause anytime'
    ],
    ctaText: 'Book Your Call',
    ctaUrl: CALENDLY_URL
  }
] as const;