import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#32462f] via-[#2d3d2a] to-[#32462f] text-[#e0dbd4] py-12 md:py-16 border-t-2 border-[#4f2d1d]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Scafford Coffee</h3>
            <p className="text-[#e0dbd4]/70 text-sm">Rwanda's finest coffee experience, crafted with passion and tradition.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors">Home</Link></li>
              <li><Link href="/courses" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors">Menu</Link></li>
              <li><Link href="/internships" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@staffordcoffee.com" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors">info@staffordcoffee.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[#e0dbd4]/70">Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com/Stafford_Coffee" target="_blank" rel="noopener noreferrer" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors font-semibold">
                X
              </a>
              <a href="https://instagram.com/staffordru" target="_blank" rel="noopener noreferrer" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors font-semibold">
                Instagram
              </a>
              <a href="https://www.staffordcoffee.com" target="_blank" rel="noopener noreferrer" className="text-[#e0dbd4]/70 hover:text-[#4f2d1d] transition-colors font-semibold">
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#4f2d1d]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#e0dbd4]/60">
            <p>&copy; 2024 Scafford Coffee Rwanda. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#4f2d1d] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#4f2d1d] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
