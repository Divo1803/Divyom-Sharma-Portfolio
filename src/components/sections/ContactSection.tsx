
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="section-title neon-text">Contact Me</h2>
        
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 glass-effect rounded-xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Let's connect! Whether you have a project in mind, a question, or just want to say hello, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Email</h4>
                  <a href="mailto:divyomsharma180307@gmail.com" className="text-neon-purple hover:underline">
                    divyomsharma180307@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple/20 hover:text-neon-purple transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/divyomsharma" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple/20 hover:text-neon-purple transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple/20 hover:text-neon-purple transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 glass-effect rounded-xl p-8 border border-white/5">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border-white/10 focus:border-neon-purple text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    required
                    className="w-full bg-white/5 border-white/10 focus:border-neon-purple text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className="w-full bg-white/5 border-white/10 focus:border-neon-purple text-white placeholder:text-gray-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-medium py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
