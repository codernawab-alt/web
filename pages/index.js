import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Daily Flow - Create AI Videos Free</title>
        <meta name="description" content="Create professional AI videos for free with Daily Flow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold">Daily Flow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition">Features</a>
              <a href="#pricing" className="hover:text-primary transition">Pricing</a>
              <a href="#about" className="hover:text-primary transition">About</a>
              <Link href="/login">
                <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg transition font-medium">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Create AI Videos in Minutes
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your ideas into stunning AI-generated videos. No experience needed. Completely free. Powered by advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 rounded-lg font-bold text-lg transition transform hover:scale-105">
                Get Started Free
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-primary hover:bg-primary/10 rounded-lg font-bold text-lg transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-slate-400">Your AI video preview will appear here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI Avatars',
                description: 'Choose from diverse AI avatars or create your own',
              },
              {
                icon: '🎙️',
                title: 'Voice Generation',
                description: 'Natural-sounding AI voices in 50+ languages',
              },
              {
                icon: '📝',
                title: 'Script Editor',
                description: 'Write, edit, and perfect your video scripts',
              },
              {
                icon: '🎨',
                title: 'Templates',
                description: 'Professional templates for every occasion',
              },
              {
                icon: '⚡',
                title: 'Fast Rendering',
                description: 'Generate videos in seconds, not hours',
              },
              {
                icon: '📤',
                title: 'Easy Export',
                description: 'Download in 4K quality or share directly',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '0', features: ['5 videos/month', '720p quality', 'Basic avatars', 'Standard voices'] },
              { name: 'Pro', price: '9.99', features: ['Unlimited videos', '4K quality', 'All avatars', 'Premium voices', 'Custom branding'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'API access', 'Priority support', 'White label'] },
            ].map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-lg border ${plan.popular ? 'border-primary bg-primary/10' : 'border-slate-700'}`}>
                {plan.popular && <div className="text-primary font-bold mb-4">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'border border-slate-700 hover:bg-slate-800'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-8">Get the latest features and tips delivered to your inbox</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-primary focus:outline-none"
              required
            />
            <button type="submit" className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-bold transition">
              Subscribe
            </button>
          </form>
          {subscribed && <p className="text-primary mt-4">✓ Thank you for subscribing!</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded"></div>
                <span className="font-bold">Daily Flow</span>
              </div>
              <p className="text-slate-400">Create AI videos for free</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Daily Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
