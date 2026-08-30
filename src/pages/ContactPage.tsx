import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactPage: React.FC = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="py-[120px] bg-bg" id="contact-page">
          <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="reveal">
              <span className="eyebrow-pill mb-6"><span className="dot"></span> Contact</span>
              <h1 className="font-display text-[clamp(40px,5vw,54px)] font-normal tracking-[-0.03em] leading-[1.1] m-0 mb-5">Let's start a project together</h1>
              <p className="text-[17px] text-ink-soft leading-[1.6] mb-10 max-w-[500px]">I'm currently available for freelance work. Feel free to reach out with project inquiries, freelance opportunities, or just to say hi.</p>
              
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[14px] text-ink-soft mb-1">Email</p>
                  <a href="mailto:ratheesh31706@gmail.com" className="text-[18px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">ratheesh31706@gmail.com</a>
                </div>
                <div>
                  <p className="text-[14px] text-ink-soft mb-1">Phone</p>
                  <p className="text-[18px] font-medium m-0">+91 8056214847</p>
                </div>
                <div>
                  <p className="text-[14px] text-ink-soft mb-1">Location</p>
                  <p className="text-[18px] font-medium m-0">Chennai, Tamil Nadu</p>
                </div>
                <div>
                  <p className="text-[14px] text-ink-soft mb-1">Socials</p>
                  <div className="flex gap-5">
                    <a href="https://linkedin.com/in/ratheesh31" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">LinkedIn</a>
                    <a href="https://github.com/RatheeshS316" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card p-8 lg:p-10 rounded-[20px] shadow-sm reveal">
              <form className="flex flex-col gap-6" action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a demo form."); }}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-medium">Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your Name" required className="w-full bg-[#f7f7f5] border border-line rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-ink transition-colors placeholder:text-ink-faint" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[14px] font-medium">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your Email" required className="w-full bg-[#f7f7f5] border border-line rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-ink transition-colors placeholder:text-ink-faint" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[14px] font-medium">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required className="w-full bg-[#f7f7f5] border border-line rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-ink transition-colors placeholder:text-ink-faint" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[14px] font-medium">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required className="w-full bg-[#f7f7f5] border border-line rounded-md px-4 py-3.5 text-[15px] outline-none focus:border-ink transition-colors resize-y placeholder:text-ink-faint"></textarea>
                </div>
                <button type="submit" className="w-full bg-ink text-white font-medium text-[16px] py-4 rounded-md mt-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                  Send Message 
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
