import React, { useRef, useState } from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import { Button } from "./ui/button";
import { Mail } from "lucide-react";

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactMe() {
  const form = useRef<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    await emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY
      })
      .then(
        () => {
          toast.success('Email sent successfully')
          setLoading(false)
          form.current.reset()
        },
        (error: any) => {
          toast.error('Something went wrong, please try again')
          setLoading(false)
        }
      )
  };
  return (
    <div className="min-h-fit bg-zinc-800 text-neutral-200">
      <div className="flex flex-col animate">
        <h1 className="self-center text-4xl mt-20 font-bold uppercase">Contact Me</h1>
        <Separator className="w-[110px] mx-auto mt-4 bg-blue-500"/>
      </div>
      <div className="max-w-2xl mx-auto mt-10 animate">
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="ml-2">Your Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                type="text" 
                className="placeholder-gray-200" 
                name="user_name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="ml-2">Your Email</Label>
              <Input 
                id="email" 
                placeholder="johndoe@email.com" 
                type="email" 
                className="placeholder-gray-200" 
                name="user_email"
                required
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="subject" className="ml-2">Subject</Label>
            <Input 
              id="subject" 
              placeholder="Title of Message" 
              type="text" 
              className="placeholder-gray-200" 
              name="user_subject"
              required
            />
          </div>
          <div className="">
            <Label htmlFor="message" className="ml-2">Message</Label>
            <Textarea 
              id="message" 
              rows={6} 
              placeholder="Hello..." 
              className="placeholder-gray-200" 
              name="message"
              required
            />
          </div>
          <div className="mx-auto">
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 flex gap-2 mb-20"
            >
              <Mail size={16} />
              {loading ? (
                'Sending Message...'
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
