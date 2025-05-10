"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_cntaej9", "template_i6s9t3c", formRef.current, {
        publicKey: "6yhktwDP1s-EXlqLD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Oops! Something went wrong.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6 md:p-8">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-300">
              <Send className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
            <p className="text-center text-zinc-400">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button
              variant="outline"
              className="mt-2 border-zinc-800 text-white hover:bg-zinc-800"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="user_name">Name</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="bg-zinc-800 border-zinc-700 focus-visible:ring-rose-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_email">Email</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="bg-zinc-800 border-zinc-700 focus-visible:ring-rose-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Subject"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-rose-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message"
                className="min-h-[120px] bg-zinc-800 border-zinc-700 focus-visible:ring-rose-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-rose-400 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
