import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowRight, AlertCircle, Eye, EyeOff, BookOpen } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { authService, DEMO_ACCOUNTS } from "@/lib/auth-service";
import { useI18n } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const response = await authService.login(email, password);
    if (response.success) {
      setLocation("/dashboard");
    } else {
      setError(response.error || "Login failed");
      setLoading(false);
    }
  };

  const quickLogin = async (role: string) => {
    const account = DEMO_ACCOUNTS[role];
    setLoading(true);
    setError("");

    const response = await authService.login(account.email, account.password);
    if (response.success) {
      setLocation("/dashboard");
    } else {
      setError(response.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 animate-fadeInUp">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl mb-4 shadow-lg hover:shadow-xl transition-shadow mx-auto"
          >
            <BookOpen className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Dao-Yu-101</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t("login.welcomeBack")}</p>
        </div>

        {/* Language Switcher */}
        <div className="flex justify-end mb-6 md:mb-8">
          <LanguageSwitcher />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 md:mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3 animate-scaleIn">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-6 md:mb-8 animate-slideInRight shadow-lg">
          <div className="space-y-5 md:space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">{t("login.email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10 font-medium text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">{t("login.password")}</label>
              <div className="relative">
                <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 sm:pl-12 pr-12 sm:pr-14 py-2.5 sm:py-3 text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10 font-medium text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{t("login.rememberMe")}</span>
              </label>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors">
                {t("login.forgotPassword")}
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="hidden xs:inline">{t("login.signingIn")}</span>
                </>
              ) : (
                <>
                  {t("login.signIn")}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Demo Accounts */}
        <div className="mb-6 md:mb-8">
          <div className="relative mb-6 md:mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 font-medium">{t("login.demoAccounts")}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {Object.entries(DEMO_ACCOUNTS).map(([role, account]) => (
              <button
                key={role}
                onClick={() => quickLogin(role)}
                disabled={loading}
                className="p-3 md:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:shadow-md"
              >
                <div className="capitalize font-bold">{role}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 break-all">{account.email}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {t("login.noAccount")}{" "}
            <button
              onClick={() => setLocation("/register")}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors"
            >
              {t("login.signUp")}
            </button>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
