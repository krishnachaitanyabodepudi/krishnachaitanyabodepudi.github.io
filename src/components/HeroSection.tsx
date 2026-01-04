import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import untitledVideo from "@/assets/untitled-video.mp4";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/krishnachaitanyabodepudi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-chaitanya-bodepudi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kcbodepudi@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          objectPosition: 'center 30%',
          transform: 'scale(1.2)',
          minWidth: '100%',
          minHeight: '100%'
        }}
      >
        <source src={untitledVideo} type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      <div className="text-center z-10 max-w-4xl mx-auto relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-foreground mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
          I'm Krishna Chaitanya<br />Bodepudi.
        </h1>

        <p className="font-sans text-sm md:text-base uppercase tracking-wider mb-12 fade-in-up font-bold text-foreground" style={{ animationDelay: "0.4s", textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
          Applied AI / ML Engineer · GenAI / LLM Engineer · Backend Engineer (ML-adjacent)
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-muted-foreground/50 text-foreground font-sans text-sm uppercase tracking-wider font-bold hover:border-primary hover:text-primary transition-all"
          >
            More About Me
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="/krishna-chaitanya-bodepudi.pdf"
            download="krishna-chaitanya-bodepudi.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 border border-muted-foreground/50 text-foreground font-sans text-sm uppercase tracking-wider font-bold hover:border-primary hover:text-primary transition-all"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
