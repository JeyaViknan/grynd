import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full gym-button-primary">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-gym-primary mr-3" />
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">support@grynd.com</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-gym-primary mr-3" />
                  <h3 className="text-lg font-semibold">Phone</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-gym-primary mr-3" />
                  <h3 className="text-lg font-semibold">Location</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Fitness Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}