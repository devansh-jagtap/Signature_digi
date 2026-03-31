"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FileSignature,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Lock,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Features", "How It Works", "Pricing", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <FileSignature size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Signature<span className="text-violet-400">Digi</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={{ y: -1 }}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all duration-200"
          >
            Get Started Free
          </motion.button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 px-6 pb-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-white border-b border-white/5 last:border-0 transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 w-full bg-gradient-to-r from-violet-600 to-indigo-600 py-3 rounded-xl font-semibold"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8"
        >
          <Zap size={14} className="text-violet-400" />
          Legally binding · Enterprise grade · Free to start
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          Sign Documents
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Digitally &amp; Securely
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SignatureDigi makes it effortless to create, send, and manage legally
          binding digital signatures — all in one secure platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-violet-500/30 transition-all duration-200"
          >
            Start Signing Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-violet-500 to-indigo-500"
                  style={{ opacity: 1 - i * 0.1 }}
                />
              ))}
            </div>
            <span>10,000+ users trust us</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-1">4.9 / 5 rating</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={14} className="text-green-400" />
            <span>SOC 2 certified</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  {
    icon: FileSignature,
    title: "One-Click Signing",
    description:
      "Upload any document and apply your legally binding signature in seconds — no printing, no scanning.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Every signature is encrypted with AES-256 and backed by a full audit trail to ensure integrity.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Send documents for signature and collect them in minutes, not days. Real-time status updates keep you in the loop.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Sign from any device, any browser, anywhere in the world. No installs, no plugins.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description:
      "Compliant with eIDAS, UETA, and ESIGN Act. Trusted in 50+ countries for legally valid signatures.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members, set signing order, and manage all documents from a unified dashboard.",
    color: "from-orange-500 to-amber-600",
  },
];

function Features() {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              go paperless
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A powerful yet simple platform that replaces wet ink signatures with
            secure, instant digital ones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div
                className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-b-2xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Upload Your Document",
    desc: "Drag and drop any PDF, Word, or image file. We'll prepare it instantly for signing.",
    icon: FileSignature,
  },
  {
    num: "02",
    title: "Add Signers & Fields",
    desc: "Specify who needs to sign, place signature fields anywhere on the document, and set the signing order.",
    icon: Users,
  },
  {
    num: "03",
    title: "Send & Track",
    desc: "Send it off with one click. Track real-time status — see when it's opened, signed, or awaiting action.",
    icon: Clock,
  },
  {
    num: "04",
    title: "Download & Store",
    desc: "Once signed, download the certified PDF with a full audit trail automatically attached.",
    icon: CheckCircle,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Sign in four{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              simple steps
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Getting started takes less than a minute. No training required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="relative inline-flex">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 mx-auto group-hover:border-indigo-400/50 transition-colors duration-300">
                  <step.icon size={26} className="text-indigo-400" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full w-6 h-6 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals getting started",
    features: ["3 documents/month", "1 signer per document", "Basic audit trail", "Email support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For professionals and growing teams",
    features: [
      "Unlimited documents",
      "Up to 10 signers",
      "Advanced audit trail",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Start for free, upgrade when you need more. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/20 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20 scale-105"
                  : "bg-white/[0.03] border border-white/[0.07] hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-violet-500/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/30"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contact" className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="relative p-12 md:p-20 rounded-3xl bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-purple-600/20 border border-violet-500/20 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/5 to-transparent" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-violet-500/30"
            >
              <FileSignature size={28} className="text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Ready to go{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                paperless?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Join thousands of professionals who sign smarter every day. Start for free — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-violet-500/30 transition-all duration-200"
              >
                Get Started Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                Talk to Sales
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  };

  return (
    <footer className="border-t border-white/[0.07] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <FileSignature size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold">
                Signature<span className="text-violet-400">Digi</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Making digital signatures simple, secure, and universally trusted.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-500">All systems operational</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SignatureDigi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs flex items-center gap-1">
              <Shield size={12} className="text-green-500" />
              SOC 2 Type II
            </span>
            <span className="text-gray-600 text-xs flex items-center gap-1">
              <Lock size={12} className="text-blue-500" />
              256-bit Encryption
            </span>
            <span className="text-gray-600 text-xs flex items-center gap-1">
              <Globe size={12} className="text-violet-500" />
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
