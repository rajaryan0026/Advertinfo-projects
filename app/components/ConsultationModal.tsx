"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  company: z.string().optional(),
  budget: z.string(),
  message: z.string().min(15, "Please provide a brief description of your campaign"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: Props) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      budget: "₹25L - ₹50L",
    }
  });

  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    // Premium simulation: real agency would post to CRM or email service
    await new Promise(r => setTimeout(r, 850));
    
    toast.success("Consultation request received.", {
      description: "Our team will contact you within 4 business hours.",
      duration: 6000,
    });
    
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div 
        className="bg-[#0A0A0A] border border-white/10 w-full max-w-[620px] rounded-3xl p-10 md:p-12 relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-7 right-7 text-white/60 hover:text-white">
          <X size={22} />
        </button>

        <div className="font-display text-4xl font-semibold tracking-[-1.6px] mb-2">Book Free Consultation</div>
        <p className="text-[#A1A1AA] mb-9 text-lg">Let&apos;s discuss how Advertinfo can elevate your brand visibility at national scale.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input {...register("name")} placeholder="Full Name" className="input-premium" />
              {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name.message}</p>}
            </div>
            <div>
              <input {...register("email")} type="email" placeholder="Work Email" className="input-premium" />
              {errors.email && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input {...register("phone")} placeholder="Phone Number" className="input-premium" />
              {errors.phone && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone.message}</p>}
            </div>
            <div>
              <input {...register("company")} placeholder="Company / Brand" className="input-premium" />
            </div>
          </div>

          <div>
            <select {...register("budget")} className="input-premium">
              <option value="₹10L - ₹25L">₹10L - ₹25L</option>
              <option value="₹25L - ₹50L">₹25L - ₹50L</option>
              <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
              <option value="₹1Cr+">₹1Cr+</option>
            </select>
          </div>

          <div>
            <textarea 
              {...register("message")} 
              rows={5} 
              placeholder="Tell us about your campaign goals, target regions, and timeline..." 
              className="input-premium resize-y min-h-[118px]"
            />
            {errors.message && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary w-full justify-center mt-3 py-4 text-base disabled:opacity-70"
          >
            {isSubmitting ? "SUBMITTING REQUEST..." : "REQUEST CONSULTATION"}
          </button>
          
          <p className="text-center text-[11px] text-[#A1A1AA] tracking-wide">We respond within 4 hours during business days.</p>
        </form>
      </div>
    </div>
  );
}
