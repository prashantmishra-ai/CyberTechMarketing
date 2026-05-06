'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, Building2, X } from 'lucide-react';
import { validateContactForm } from '@/lib/validations/contact';
import type { ContactFormInput } from '@/lib/validations/contact';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: 'sales' | 'support' | 'partnerships';
}

const categoryConfig = {
  sales: {
    title: 'Contact Sales',
    subtitle: "Let's get you connected",
    color: 'from-red-700 to-red-500',
    fields: ['firstName', 'lastName', 'email', 'phone', 'company', 'jobTitle', 'country', 'companySize', 'message'],
    buttonText: 'Schedule Demo',
  },
  support: {
    title: 'Customer Support',
    subtitle: 'We are here to help',
    color: 'from-red-800 to-rose-600',
    fields: ['firstName', 'lastName', 'email', 'phone', 'message'],
    buttonText: 'Get Support',
  },
  partnerships: {
    title: 'Partnership Inquiry',
    subtitle: 'Let\'s explore opportunities',
    color: 'from-orange-600 to-red-600',
    fields: ['firstName', 'lastName', 'email', 'phone', 'company', 'message'],
    buttonText: 'Explore Partnership',
  },
};

export default function ContactFormModal({
  isOpen,
  onClose,
  category,
}: ContactFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const config = categoryConfig[category];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    companySize: '',
    message: '',
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, ...formData }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          country: '',
          companySize: '',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.error || 'We could not submit your request right now.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Something went wrong while submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Form Section */}
          <div className="flex-1 p-8 lg:p-10 bg-white overflow-y-auto max-h-[90vh] lg:max-h-[85vh]">
            {/* Header with Close Button */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-2">
                  {config.subtitle}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {config.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              {/* First Name & Last Name */}
              {config.fields.includes('firstName') && config.fields.includes('lastName') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g., John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g., Smith"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              {config.fields.includes('email') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., john@company.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              )}

              {/* Phone */}
              {config.fields.includes('phone') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +1 (555) 123-4567"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              )}

              {/* Company & Job Title */}
              {config.fields.includes('company') && config.fields.includes('jobTitle') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Acme Corp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g., Marketing Manager"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>
              )}

              {/* Company Only */}
              {config.fields.includes('company') && !config.fields.includes('jobTitle') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              )}

              {/* Job Title Only */}
              {config.fields.includes('jobTitle') && !config.fields.includes('company') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter your job title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              )}

              {/* Country & Company Size */}
              {config.fields.includes('country') && config.fields.includes('companySize') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Select country...</option>
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              {config.fields.includes('message') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, or inquiry..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
                  success
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${config.color} hover:shadow-lg hover:shadow-red-600/20`
                }`}
              >
                {loading ? 'Submitting...' : success ? '✓ Submitted Successfully' : config.buttonText}
              </button>

              {/* Privacy Text */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By clicking Submit, I agree to the use of my personal data in accordance with
                CyberTech Marketing&apos;s Privacy Notice.
              </p>
            </form>
          </div>

          {/* Right Section - CTA */}
          <div className={`hidden lg:flex flex-col justify-between bg-gradient-to-br ${config.color} p-8 text-white rounded-r-2xl min-w-[300px]`}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Get Expert Help</h3>
              <p className="text-lg opacity-95 leading-relaxed">
                Our team of experts is ready to help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Email Support</p>
                  <p className="text-xs opacity-80">Within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Phone Support</p>
                  <p className="text-xs opacity-80">+91 7428768779</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Building2 className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Office Hours</p>
                  <p className="text-xs opacity-80">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
