import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function Contact({ sectionRef }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden"
    >
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes success-pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .section-header { animation: slide-in-left 0.6s ease; }
        .contact-card { animation: scale-up 0.4s ease forwards; opacity: 0; }
        .form-group { animation: float-in 0.4s ease forwards; opacity: 0; }
        .success-message { animation: success-pop 0.5s cubic-bezier(.36,.07,.19,.97) forwards; }
        .form-input {
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.1);
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-header text-4xl md:text-5xl font-black text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "pk320308@gmail.com",
                href: "mailto:pk320308@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+916205669598",
                href: "tel:+916205669598",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Jamshedpur , Jharkhand",
                href: "#",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-card flex items-start gap-4 p-6 bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 rounded-xl transition-all duration-300 group hover:bg-gray-800/80"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="form-group" style={{ animationDelay: "0.1s" }}>
              <label className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                placeholder="your name"
              />
            </div>

            <div className="form-group" style={{ animationDelay: "0.2s" }}>
              <label className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                placeholder="user@example.com"
              />
            </div>

            <div className="form-group" style={{ animationDelay: "0.3s" }}>
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none resize-none h-32"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="form-group" style={{ animationDelay: "0.4s" }}>
              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 active:scale-95"
                } disabled:opacity-75 disabled:cursor-not-allowed`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <span className="animate-spin">◌</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
