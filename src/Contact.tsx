import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openChatAssistant = () => {
    // @ts-ignore - Voiceflow types not available
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with Southwest Wisconsin's most trusted electrical contractor</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">(608) 927-6947</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">unstoppableelectric2025@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Service Area</h3>
                  <p className="text-gray-600">We service all of Sauk, Iowa, Richland, Columbia, and Dane County</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Assistant Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <MessageSquare className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Real-Time Support</h2>
              <p className="text-gray-600 mb-6">
                Get immediate assistance through our chat assistant! Available 24/7 to:
              </p>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Request real-time estimates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Schedule service appointments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Ask questions about our services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Get emergency support
                </li>
              </ul>
              <button
                onClick={openChatAssistant}
                className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors w-full"
              >
                Start Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;