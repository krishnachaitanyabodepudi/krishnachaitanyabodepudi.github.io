import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      value: "kcbodepudi@gmail.com",
      href: "mailto:kcbodepudi@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+(646)-821-1711",
      href: "tel:+16468211711",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "krishna-chaitanya-bodepudi",
      href: "https://www.linkedin.com/in/krishna-chaitanya-bodepudi",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "krishnachaitanyabodepudi",
      href: "https://github.com/krishnachaitanyabodepudi",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-8" style={{ color: 'hsl(220 15% 20%)' }}>
          Let's Connect
        </h2>
        <p className="mb-12 max-w-2xl mx-auto" style={{ color: 'hsl(220 10% 45%)' }}>
          I'm currently looking for opportunities to work on applied AI, GenAI, or ML-adjacent backend systems in production environments.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 px-6 py-4 rounded-lg transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: 'hsl(220 10% 96%)',
                color: 'hsl(220 15% 20%)'
              }}
            >
              <link.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider" style={{ color: 'hsl(220 10% 55%)' }}>{link.title}</p>
                <p className="font-medium">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;