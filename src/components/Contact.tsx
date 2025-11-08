import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vinothkumars395@gmail.com",
      href: "mailto:vinothkumars395@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "872-330-2924",
      href: "tel:8723302924"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chicago, Illinois",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            GET IN TOUCH
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-3 p-8 sm:p-10 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Send a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 border-2 focus:border-primary bg-background/50 text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 border-2 focus:border-primary bg-background/50 text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={7}
                  className="border-2 focus:border-primary resize-none bg-background/50 text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{info.label}</p>
                        <p className="text-foreground font-bold text-base mt-1">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-2xl border-2 border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Let's Work Together</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
