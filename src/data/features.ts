import { Brain, Bot, Phone, Workflow } from 'lucide-react';

export const features = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Seamlessly integrate cutting-edge AI solutions into your existing business processes for enhanced efficiency.'
  },
  {
    icon: Bot,
    title: 'Chatbot Development',
    description: 'Create intelligent conversational interfaces that provide 24/7 customer support and engagement.'
  },
  {
    icon: Phone,
    title: 'AI Phone Call Agents',
    description: 'Deploy intelligent virtual agents that handle customer calls with natural conversation and efficient problem-solving.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations and reduce manual tasks with intelligent workflow automation.'
  }
] as const;