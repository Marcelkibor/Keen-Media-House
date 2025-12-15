import React, { useState } from 'react';
import { Camera, Video, Users, Award, MapPin, Calendar, Image, Edit3, Smartphone, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Camera,
      title: "Event Photography & Videography",
      items: [
        "Weddings",
        "Traditional ceremonies (Koito, Ruracio, Itara, Dowry)",
        "Corporate events & conferences",
        "Birthday parties, anniversaries & celebrations"
      ]
    },
    {
      icon: Users,
      title: "Studio & Portrait Services",
      items: [
        "Individual portraits",
        "Family photoshoots",
        "Maternity & newborn sessions",
        "Graduation shoots",
        "Professional headshots"
      ]
    },
    {
      icon: Briefcase,
      title: "Commercial & Creative Services",
      items: [
        "Product photography",
        "Fashion & model shoots",
        "Real estate photography",
        "Corporate branding shoots",
        "Social media content creation"
      ]
    },
    {
      icon: Video,
      title: "Full Production Services",
      items: [
        "Professional video production",
        "Drone coverage",
        "Documentary-style shoots",
        "Event highlight reels & storytelling edits",
        "Cinematic wedding films"
      ]
    },
    {
      icon: Edit3,
      title: "Editing & Post-Production",
      items: [
        "Professional photo retouching",
        "Video editing & color grading",
        "Album design",
        "Digital delivery & archiving"
      ]
    }
  ];

  const stats = [
    { icon: Calendar, number: "2020", label: "Established" },
    { icon: Users, number: "8", label: "Skilled Professionals" },
    { icon: Award, number: "500+", label: "Events Covered" },
    { icon: MapPin, number: "Kenya", label: "Nationwide Service" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Keen Media House</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A trusted creative powerhouse established in 2020 in Eldoret, Kenya
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-orange-500/50 transition-all duration-300">
                <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Image Placeholder */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 h-96 flex items-center justify-center overflow-hidden">
              <Camera className="w-32 h-32 text-slate-600" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Capturing Life, Culture & Emotion</p>
                <p className="text-slate-300 text-sm">Since 2020 • Eldoret, Kenya</p>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Where Every Moment Becomes a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Masterpiece</span>
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              With <strong className="text-white">8 skilled professionals</strong> and over <strong className="text-white">500 successfully covered events</strong> — including Koitos, Ruraccios, and Weddings — we have earned a reputation for <strong className="text-white">excellence, reliability, and world-class storytelling</strong>.
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              At Keen Media House, we don't just take pictures; we capture life, culture, and emotion with unmatched artistry and precision. Our diverse services ensure that every client, every event, and every brand receives the attention and quality it deserves.
            </p>

            <div className="pt-4">
              <p className="text-orange-400 font-semibold text-lg mb-4">
                Proudly serving clients across Kenya
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  View Portfolio
                </button>
                <button className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Photography & Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Services</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-orange-500 shadow-xl shadow-orange-500/20 -translate-y-2' 
                      : 'border-slate-700 hover:border-orange-500/50 hover:-translate-y-1'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Capture Your Story
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              At Keen Media House, every project is handled with passion, creativity, and a commitment to excellence. Whether you're celebrating a milestone or elevating your brand, we ensure your story is captured beautifully and delivered flawlessly.
            </p>
            <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Partner With Us Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
