import React, { useState } from 'react';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaLeaf, FaHandHoldingHeart, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FaCheckCircle className="text-green-500 dark:text-green-400" />,
      content: `By accessing and using the Social Development platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all visitors, users, volunteers, and others who access or use our platform for social development initiatives.`
    },
    {
      id: 'services',
      title: 'Our Services and Programs',
      icon: <FaLeaf className="text-green-500 dark:text-green-400" />,
      content: `Our platform facilitates various social development programs including Tree Plantation Programs, Environmental Protection initiatives, Community Service programs, and Health Awareness campaigns. We reserve the right to modify, suspend, or discontinue any service or program at any time without prior notice. Participation in our programs is voluntary and subject to availability and eligibility criteria.`
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <FaUsers className="text-green-500 dark:text-green-400" />,
      content: `Users are expected to: (1) Provide accurate and truthful information during registration and event participation; (2) Respect all participants, organizers, and community members; (3) Follow safety guidelines during events and activities; (4) Not engage in any harmful, illegal, or unethical behavior; (5) Respect the environment and communities we serve; (6) Not misuse or exploit our platform for personal gain or malicious purposes.`
    },
    {
      id: 'events-participation',
      title: 'Event Participation and Registration',
      icon: <FaHandHoldingHeart className="text-green-500 dark:text-green-400" />,
      content: `Event registration is subject to availability and approval by organizers. Participants must be at least 16 years old or accompanied by a parent/guardian. We reserve the right to refuse or cancel registrations. Participants are responsible for their own safety and must follow all instructions provided by event organizers. By participating, you grant us permission to use photographs and videos taken during events for promotional purposes.`
    },
    {
      id: 'privacy',
      title: 'Privacy and Data Protection',
      icon: <FaShieldAlt className="text-green-500 dark:text-green-400" />,
      content: `We are committed to protecting your privacy and personal information. We collect and process personal data in accordance with applicable data protection laws. Your information will be used solely for platform operations, event coordination, and communication purposes. We will never sell or share your personal information with third parties without your explicit consent, except as required by law. You have the right to access, modify, or delete your personal data at any time.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: <FaCheckCircle className="text-green-500 dark:text-green-400" />,
      content: `All content on this platform, including text, graphics, logos, images, and software, is the property of Social Development or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written permission. User-generated content submitted to our platform grants us a non-exclusive license to use, display, and distribute such content.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <FaShieldAlt className="text-green-500 dark:text-green-400" />,
      content: `Social Development and its organizers, volunteers, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the platform or participation in events. We do not guarantee the accuracy, completeness, or reliability of any content or information provided. Participation in physical events is at your own risk, and we recommend appropriate insurance coverage.`
    },
    {
      id: 'code-of-conduct',
      title: 'Community Code of Conduct',
      icon: <FaUsers className="text-green-500 dark:text-green-400" />,
      content: `We maintain a safe and inclusive environment for all participants. Discrimination, harassment, hate speech, or violent behavior will not be tolerated. Participants must respect cultural, religious, and personal differences. Violations may result in immediate removal from events and permanent ban from the platform. We encourage reporting any concerns to our team immediately.`
    },
    {
      id: 'donations',
      title: 'Donations and Contributions',
      icon: <FaHandHoldingHeart className="text-green-500 dark:text-green-400" />,
      content: `All monetary donations and contributions are voluntary and non-refundable unless otherwise specified. We commit to using donations transparently and efficiently for our stated social development purposes. Donation receipts will be provided for tax purposes where applicable. We reserve the right to reallocate donations to similar programs if specific initiatives are fully funded or discontinued.`
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: <FaCheckCircle className="text-green-500 dark:text-green-400" />,
      content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the platform. Continued use of our services after modifications constitutes acceptance of the updated terms. We encourage users to review these terms periodically. Significant changes will be communicated via email or platform notifications.`
    },
    {
      id: 'contact',
      title: 'Contact Information and Dispute Resolution',
      icon: <FaShieldAlt className="text-green-500 dark:text-green-400" />,
      content: `For questions, concerns, or disputes regarding these terms, please contact us through our platform or official communication channels. We are committed to resolving issues amicably through good-faith dialogue. Any disputes that cannot be resolved through negotiation shall be subject to the jurisdiction of the courts in the location of our registered office.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-6xl text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our social development platform and participating in our programs.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last Updated: January 4, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Welcome to Social Development</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Social Development is dedicated to creating positive change through environmental protection, 
            community service, and health awareness programs. By using our platform and participating in our 
            initiatives, you become part of a global community committed to building a better tomorrow. 
            These terms ensure a safe, respectful, and productive environment for all participants.
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{section.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {index + 1}. {section.title}
                    </h3>
                  </div>
                </div>
                <div className="text-gray-400 dark:text-gray-500">
                  {expandedSection === section.id ? (
                    <FaChevronUp className="text-xl" />
                  ) : (
                    <FaChevronDown className="text-xl" />
                  )}
                </div>
              </button>
              
              {expandedSection === section.id && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-lg shadow-xl p-8 text-white">
          <div className="flex items-start space-x-4">
            <FaCheckCircle className="text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Agreement Acknowledgment</h3>
              <p className="text-green-50 dark:text-green-100 leading-relaxed mb-4">
                By creating an account, registering for events, or using any services on the Social 
                Development platform, you explicitly acknowledge that you have read, understood, and 
                agree to abide by all terms and conditions outlined above.
              </p>
              <p className="text-green-50 dark:text-green-100 leading-relaxed">
                Your continued use of our platform constitutes ongoing acceptance of these terms, 
                including any future modifications. Together, we can create lasting positive impact 
                in our communities and environment.
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default TermsAndConditions;