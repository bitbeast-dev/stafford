"use client";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  internshipTitle: string;
}

const InternshipModal: React.FC<InternshipModalProps> = ({ isOpen, onClose, internshipTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-yellow-400/30 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-yellow-400/30">
          <h2 className="text-xl font-bold text-white">Apply for {internshipTitle}</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex-1 p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeUC_vFN7EzzrXj2aiLc150KC41_OgsNiy-404OZyo-7CG0Fg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default InternshipModal;