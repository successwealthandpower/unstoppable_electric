import React from 'react';
import { X } from 'lucide-react';

interface AgentPopupProps {
  onClose: () => void;
}

const AgentPopup = ({ onClose }: AgentPopupProps) => {
  return (
    <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-fade-in z-50">
      <button 
        onClick={onClose}
        className="absolute -top-2 -right-2 bg-blue-900 text-white rounded-full p-1 hover:bg-blue-800 transition-colors"
      >
        <X size={16} />
      </button>
      <div className="text-blue-900 font-semibold mb-2">
        Need assistance?
      </div>
      <p className="text-gray-600 text-sm">
        Schedule an electrician or ask any other question
      </p>
      <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
    </div>
  );
};

export default AgentPopup;