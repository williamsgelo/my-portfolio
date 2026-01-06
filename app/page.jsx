import Image from "next/image";

import Link from "next/link";
import { ArrowRight, Code, Github, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";

import ecommerce from "@/assets/e-commerce.png";
import vict from "@/assets/villas-web.png";
import vealuxe from "@/assets/Vealuxe.png";
import summarise from "@/assets/Summarise.png";
import youtube from "@/assets/Youtube.png";
import fabric from "@/assets/FF.png";
import Bank from "@/assets/Bank.png";
import goatswindow from "@/assets/goats-window.png";
import wom from "@/assets/wom.png";
import axara from "@/assets/axara.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white home-page">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#projects"
              className="transition-colors hover:text-rose-400"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-rose-400"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-rose-400"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-rose-400"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/williamsgelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:angelowilliams1015@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-full bg-gradient-to-r from-red-500 to-rose-300 p-px">
              <div className="rounded-full bg-black p-1.5">
                <User className="h-6 w-6 text-rose-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Creative Developer &
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
                Innovator
              </span>
            </h1>
            <p className="max-w-[42rem] text-zinc-400 md:text-xl">
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-red-500 to-rose-400 text-white"
              >
                <Link href="mailto:angelowilliams1015@gmail.com">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-800 text-white hover:bg-zinc-800"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-full bg-gradient-to-r from-red-500 to-rose-300 p-px">
              <div className="rounded-full bg-black p-1.5">
                <Code className="h-6 w-6 text-rose-300" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
                Featured
              </span>{" "}
              Projects
            </h2>
            <p className="max-w-[42rem] text-zinc-400 md:text-xl">
              A selection of my recent work and personal projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Axara Technologies Website"
              description="A responsive website for a technology solutions company"
              tags={["Vue", "Tailwind", "Directus CMS"]}
              image={axara}
              link="https://axaratechnologies.com"
            />
            <ProjectCard
              title="Word of Mouth Website"
              description="A responsive website for property referral services"
              tags={["Vue", "Tailwind", "Directus CMS"]}
              image={wom}
              link="https://wordofmouth.co.za"
            />
            <ProjectCard
              title="Villas in Cape Town Website"
              description="A responsive website for a luxury villa rental service in Cape Town."
              tags={["Vue", "SCSS", "Directus CMS"]}
              image={vict}
              link="https://villasincapetown.com"
            />
            <ProjectCard
              title="Goats Window"
              description="Luxury safari and travel website showcasing unique experiences."
              tags={["WordPress", "PHP"]}
              image={goatswindow}
              link="https://goatswindow.com"
            />
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with payment processing and inventory management."
              tags={["Next.js", "TypeScript", "Stripe"]}
              image={ecommerce}
              link="https://ecommerce-app-six-navy.vercel.app/"
            />

            <ProjectCard
              title="Mordern Apparrel Manuafactoring Website"
              description="A modern website for a clothing manufacturing company."
              tags={["Vue", "Nuxt3", "SCSS"]}
              image={fabric}
              link="https://fabricfusionco.com/"
            />

            <ProjectCard
              title="Luxury Travel Website"
              description="Vealuxe is a web application for Elite Travel, Unmatched Luxury"
              tags={["WordPress", "PHP"]}
              image={vealuxe}
              link="https://vealuxe.com/"
            />

            <ProjectCard
              title="Youtube Clone"
              description="A clone of YouTube with video and streaming features."
              tags={["React", "Material UI", "Firebase"]}
              image={youtube}
              link="https://guileless-pavlova-b2f8bc.netlify.app/"
            />

            <ProjectCard
              title="Article Summarizer web application"
              description="An article summarizer web application that uses OpenAI API to summarize articles."
              tags={["React", "Redux", "OPENAI API"]}
              image={summarise}
              link="https://visionary-starlight-74de31.netlify.app/"
            />

            <ProjectCard
              title="Mordern UI/UX business Landing Page"
              description="A mordern UI/UX business landing page built with React and Tailwind CSS."
              tags={["React", "Tailwind CSS"]}
              image={Bank}
              link="https://mordern-bank-ten.vercel.app/"
            />
          </div>
          {/* <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-zinc-800 text-white hover:bg-zinc-800"
            >
              View All Projects
            </Button>
          </div> */}
        </section>

        {/* About Section */}
        <section id="about" className="bg-zinc-900/50 py-12 md:py-24">
          <div className="container space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
                  About
                </span>{" "}
                Me
              </h2>
              <p className="max-w-[42rem] text-zinc-400 md:text-xl">
                I'm a passionate developer with a background in design and a
                focus on creating beautiful, functional digital experiences.
              </p>
            </div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      My Journey
                    </h3>
                    <p className="text-zinc-400">
                      With over 3+ years of experience in web development, I've
                      worked with startups and established companies to build
                      products that users love. My approach combines technical
                      expertise with an eye for design.
                    </p>
                    <p className="text-zinc-400">
                      I'm passionate about creating accessible, performant
                      websites and applications that provide exceptional user
                      experiences across all devices.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Education & Experience
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Front end Developer</span>
                        <span className="text-zinc-500">2023 - Present</span>
                      </div>
                      <p className="text-zinc-400">Menzies Media</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          Full Stack Developer Developer
                        </span>
                        <span className="text-zinc-500">July - Sept 2023 </span>
                      </div>
                      <p className="text-zinc-400">Entrebyte Technologies</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          Information Technology, HCert
                        </span>
                        <span className="text-zinc-500">2024</span>
                      </div>
                      <p className="text-zinc-400">Richfield</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-12 md:py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
                Skills
              </span>{" "}
              & Technologies
            </h2>
            <p className="max-w-[42rem] text-zinc-400 md:text-xl">
              The tools and technologies I use to bring products to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="JavaScript" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="Reactjs" />
            <SkillBadge name="React Native" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="Vue" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Express.js" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="HTML5/CSS3" />
            <SkillBadge name="WordPress" />
            <SkillBadge name="Bootstrap" />
            <SkillBadge name="MYsql/PostgreSQL" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="Git" />
            <SkillBadge name="Docker" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-zinc-900/50 py-12 md:py-24">
          <div className="container space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-transparent">
                  Get in
                </span>{" "}
                Touch
              </h2>
              <p className="max-w-[42rem] text-zinc-400 md:text-xl">
                Interested in working together? Feel free to reach out!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-rose-400" />
                      <a
                        href="mailto:angelowilliams1015@gmail.com"
                        className="text-zinc-400 hover:text-rose-400"
                      >
                        angelowilliams1015@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-rose-400" />
                      <a
                        href="https://github.com/williamsgelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-rose-400"
                      >
                        github.com/williamsgelo
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-zinc-500 hover:text-rose-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-500 hover:text-rose-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
