/// <reference types="vite/client" />

interface Window {
  voiceflow?: {
    chat?: {
      open?: () => void;
      load?: (config: any) => void;
    };
  };
}