import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useI18n } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ArrowRight, BookOpen, Users, BarChart3, Zap, Globe, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent hidden xs:inline">Dao-Yu-101</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <Button
              onClick={() => setLocation("/login")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-2.5 shadow-lg hover:shadow-xl transition-all"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fadeInUp">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold">
                <Zap className="w-4 h-4" />
                <span>Next Generation EdTech</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Learning Platform for the Future
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Dao-Yu-101 combines cutting-edge technology with engaging pedagogy to create an exceptional learning experience for students, teachers, and institutions worldwide.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setLocation("/archipelago")}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Explore Platform
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
              <Button
                onClick={() => setLocation("/login")}
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg"
              >
                Sign In
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 sm:pt-8">
              {[
                { value: "50K+", label: "Active Students" },
                { value: "1000+", label: "Courses" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: "📚", title: "Interactive Learning", desc: "Engage with dynamic content" },
                    { icon: "🎯", title: "Personalized Paths", desc: "Learn at your own pace" },
                    { icon: "🏆", title: "Achievement System", desc: "Earn badges and rewards" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to succeed in modern education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Comprehensive Curriculum",
              description: "Structured learning paths with 15+ lessons per course",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Multi-Role System",
              description: "Dedicated dashboards for students, teachers, and admins",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Advanced Analytics",
              description: "Real-time insights into student progress and performance",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Community",
              description: "Connect with learners and educators worldwide",
              color: "from-orange-500 to-red-500",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 lg:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Choose Dao-Yu-101?</h2>
              <ul className="space-y-4">
                {[
                  "Proven track record with 50,000+ active students",
                  "Industry-leading 98% student satisfaction rate",
                  "Continuous innovation and feature updates",
                  "Dedicated support for institutions",
                  "Flexible deployment options",
                  "Enterprise-grade security",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-lg font-semibold mb-6">Quick Stats</p>
                <div className="space-y-4">
                  {[
                    { label: "Countries", value: "120+" },
                    { label: "Institutions", value: "500+" },
                    { label: "Teachers", value: "10,000+" },
                    { label: "Courses", value: "1,000+" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0">
                      <span className="text-white/80">{stat.label}</span>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Learning?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of institutions using Dao-Yu-101 to deliver exceptional educational experiences.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={() => setLocation("/archipelago")}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
            <Button
              onClick={() => setLocation("/login")}
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-3 rounded-lg"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Resources", links: ["Documentation", "Support", "Community"] },
              { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
            ].map((col, idx) => (
              <div key={idx}>
                <p className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2026 Dao-Yu-101. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
