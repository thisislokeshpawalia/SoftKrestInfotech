"use client";

export default function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <form
      className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className={`flex-1 px-5 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
          variant === "dark"
            ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-accent"
            : "bg-bg-light border border-border text-text-primary placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
        }`}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
