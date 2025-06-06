import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Globe, Phone, Mail } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, phone, email) for account creation",
        "Location data to find nearby stations and optimize routes",
        "Vehicle information for battery compatibility matching",
        "Usage patterns to improve service quality",
        "Payment information processed through secure gateways"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "How We Use Your Information",
      content: [
        "Provide personalized battery exchange services",
        "Send notifications about station availability and updates",
        "Improve our AI assistant and recommendation algorithms",
        "Ensure platform security and prevent fraud",
        "Comply with government regulations and reporting requirements"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Information Sharing",
      content: [
        "We do not sell personal information to third parties",
        "Share aggregated data with government agencies for policy making",
        "Partner with verified stations for service delivery",
        "Collaborate with payment processors for secure transactions",
        "Provide data to emergency services when legally required"
      ]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Security",
      content: [
        "End-to-end encryption for all sensitive data transmission",
        "Multi-factor authentication for account protection",
        "Regular security audits and vulnerability assessments",
        "Compliance with Indian IT Act 2000 and DPDP Act 2023",
        "Secure cloud infrastructure with 99.9% uptime guarantee"
      ]
    }
  ];

  const rights = [
    {
      title: "Right to Access",
      description: "Request copies of your personal data we hold"
    },
    {
      title: "Right to Rectification",
      description: "Correct inaccurate or incomplete information"
    },
    {
      title: "Right to Erasure",
      description: "Request deletion of your personal data"
    },
    {
      title: "Right to Portability",
      description: "Transfer your data to another service provider"
    },
    {
      title: "Right to Object",
      description: "Object to processing of your personal data"
    },
    {
      title: "Right to Restrict",
      description: "Limit how we use your personal data"
    }
  ];

  const governmentCompliance = [
    {
      title: "Digital Personal Data Protection Act 2023",
      description: "Full compliance with India's comprehensive data protection framework"
    },
    {
      title: "Information Technology Act 2000",
      description: "Adherence to cybersecurity and electronic governance standards"
    },
    {
      title: "Motor Vehicle Act 2019",
      description: "Compliance with EV regulations and safety standards"
    },
    {
      title: "Central Motor Vehicle Rules",
      description: "Following battery safety and exchange protocols"
    },
    {
      title: "State EV Policies",
      description: "Alignment with individual state electric vehicle policies"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-dark-900"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-400 to-electric-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-12 w-12 text-dark-900" />
              <h1 className="text-4xl md:text-5xl font-bold text-dark-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-dark-800 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your data 
              in compliance with Indian regulations.
            </p>
            <div className="mt-6 text-dark-800">
              <p className="font-semibold">Last Updated: December 2024</p>
              <p>Effective Date: January 1, 2025</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                BharatCharge ("we", "our", or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our electric vehicle battery 
                exchange platform.
              </p>
              <p>
                We operate in full compliance with Indian data protection laws, including the Digital 
                Personal Data Protection Act 2023, Information Technology Act 2000, and other applicable 
                regulations. By using our services, you consent to the practices described in this policy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Main Sections */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-electric-400">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start space-x-2">
                      <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Data Rights
            </h2>
            <p className="text-xl text-gray-300">
              Under Indian data protection laws, you have the following rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 hover:border-electric-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                <p className="text-gray-300 leading-relaxed">{right.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-electric-400/10 border border-electric-400/20 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                To exercise any of these rights, please contact our Data Protection Officer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:privacy@bharatcharge.in"
                  className="flex items-center space-x-2 text-electric-400 hover:text-electric-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>privacy@bharatcharge.in</span>
                </a>
                <a 
                  href="tel:+911800CHARGE"
                  className="flex items-center space-x-2 text-electric-400 hover:text-electric-300 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 1800-CHARGE</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Government Compliance */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Government Compliance
            </h2>
            <p className="text-xl text-gray-300">
              We comply with all applicable Indian laws and regulations
            </p>
          </div>

          <div className="space-y-6">
            {governmentCompliance.map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-electric-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 text-dark-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{compliance.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{compliance.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cookies and Tracking */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Essential Cookies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Authentication and session management</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Basic platform functionality</li>
                  <li>• User preferences storage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Analytics Cookies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Usage analytics and improvements</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking and debugging</li>
                  <li>• Feature usage statistics</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-electric-400/10 border border-electric-400/20 rounded-lg">
              <p className="text-gray-300">
                <strong className="text-electric-400">Note:</strong> You can control cookie settings 
                through your browser preferences. However, disabling essential cookies may affect 
                platform functionality.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Data Retention */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6">Data Retention Policy</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-400 mb-2">Account Data</div>
                  <p className="text-gray-300">Retained while account is active + 3 years after deletion</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-400 mb-2">Transaction Data</div>
                  <p className="text-gray-300">Retained for 7 years as per Indian financial regulations</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-400 mb-2">Usage Analytics</div>
                  <p className="text-gray-300">Anonymized data retained for service improvement</p>
                </div>
              </div>
              <div className="border-t border-dark-700 pt-6">
                <p className="text-gray-300 leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes outlined 
                  in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                  Data is securely deleted or anonymized when no longer required.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-electric-400/10 to-electric-600/10 border border-electric-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Data Protection Officer</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-electric-400" />
                    <span className="text-gray-300">privacy@bharatcharge.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-electric-400" />
                    <span className="text-gray-300">+91 1800-CHARGE (1800-242-743)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Registered Office</h3>
                <div className="text-gray-300 leading-relaxed">
                  BharatCharge Technologies Pvt. Ltd.<br />
                  Block A, Connaught Place<br />
                  New Delhi - 110001<br />
                  India
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-electric-400/20 text-center">
              <p className="text-gray-300">
                For any privacy-related questions or concerns, please don't hesitate to reach out. 
                We're committed to addressing your queries within 72 hours.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Privacy;