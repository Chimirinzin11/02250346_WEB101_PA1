// Footer — bottom section with links, address, and copyright
export default function Footer() {
  const aboutLinks = ["About Us", "Careers", "Press", "Flipkart Stories"];
  const helpLinks = ["Payments", "Shipping", "Returns", "FAQ"];
  const policyLinks = ["Privacy", "Terms of Use", "Security", "Sitemap"];
  const socialLinks = ["Facebook", "Twitter", "YouTube", "Instagram"];

  return (
    <footer className="bg-[#172337] mt-6">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">About</h3>
          {aboutLinks.map((l) => (
            <a key={l} href="#" className="block text-gray-400 text-xs mb-2 hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Help</h3>
          {helpLinks.map((l) => (
            <a key={l} href="#" className="block text-gray-400 text-xs mb-2 hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Policy</h3>
          {policyLinks.map((l) => (
            <a key={l} href="#" className="block text-gray-400 text-xs mb-2 hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Social</h3>
          {socialLinks.map((l) => (
            <a key={l} href="#" className="block text-gray-400 text-xs mb-2 hover:text-white transition-colors">{l}</a>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-500 text-xs">© 2024 Flipkart Clone — WEB101 PA1</p>
        <p className="text-gray-500 text-xs">Built with Next.js + Tailwind CSS</p>
      </div>

    </footer>
  );
}