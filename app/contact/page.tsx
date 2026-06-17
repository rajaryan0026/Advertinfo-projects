"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { toast } from 'sonner';

const ContactMap = dynamic(() => import('../components/ContactMap'), { ssr: false });

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  service: z.string(),
  message: z.string().min(20, "Please describe your requirements in detail"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Outdoor Advertising" }
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 920));
    toast.success("Message received", { description: "Our team will respond within 4 hours." });
    reset();
  };

  return (
    <div>
      <div className="section pt-16 pb-10">
        <div className="container-lux max-w-4xl">
          <div className="text-[#FF6A00] tracking-[4px] text-sm">LET’S TALK</div>
          <h1 className="tracking-[-2.5px] mt-2">Contact.</h1>
        </div>
      </div>

      <div className="container-lux pb-20">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input {...register("name")} placeholder="Name" className="input-premium" />
                  {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register("email")} type="email" placeholder="Email" className="input-premium" />
                  {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input {...register("phone")} placeholder="Phone" className="input-premium" />
                  {errors.phone && <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>}
                </div>
                <div>
                  <input {...register("company")} placeholder="Company" className="input-premium" />
                </div>
              </div>

              <select {...register("service")} className="input-premium">
                <option>Outdoor Advertising</option>
                <option>ATL Advertising</option>
                <option>BTL Activations</option>
                <option>Digital Marketing</option>
                <option>Influencer Marketing</option>
                <option>Event Management</option>
                <option>Political Campaign Management</option>
                <option>Full 360° Campaign</option>
              </select>

              <textarea {...register("message")} rows={7} placeholder="Tell us about your campaign requirements..." className="input-premium" />
              {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}

              <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-4 mt-2 text-base disabled:opacity-75">
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
              <div className="text-center text-xs text-[#A1A1AA]">We respond within 4 business hours.</div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 pt-2">
            <div className="text-xl leading-tight tracking-tight mb-12">
              LF/37, Sri Krishna Puri<br />
              Patna, Bihar 800001
            </div>

            <div className="space-y-8 text-[17px]">
              <div>
                <div className="text-[#FF6A00] text-sm tracking-[2.5px] mb-2">PHONE</div>
                <a href="tel:8507070009" className="block hover:text-[#FF6A00] text-2xl font-medium tracking-tighter">8507070009</a>
              </div>
              <div>
                <div className="text-[#FF6A00] text-sm tracking-[2.5px] mb-2">EMAIL</div>
                <a href="mailto:contact@advertinfo.in" className="block hover:text-[#FF6A00] text-2xl font-medium tracking-tighter">contact@advertinfo.in</a>
              </div>
            </div>

            <div className="mt-14 text-xs tracking-widest text-[#A1A1AA]">
              MON–SAT • 9:30AM – 6:30PM IST
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="container-lux pb-24">
        <div className="text-sm text-[#FF6A00] tracking-[2.5px] mb-4">HEADQUARTERS</div>
        <div className="map-container h-[460px] w-full relative">
          <ContactMap />
        </div>
        <div className="text-xs mt-3 text-[#A1A1AA]">Patna, Bihar • India</div>
      </div>
    </div>
  );
}
