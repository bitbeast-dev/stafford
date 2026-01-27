"use client";
import { useState } from "react";
import { Menu, X, ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#32462f] via-[#2d3d2a] to-[#32462f] backdrop-blur-lg sticky top-0 z-50 shadow-2xl border-b-2 border-[#4f2d1d]/30">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4f2d1d] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img src="/logo.png" alt="Scafford Coffee" className="relative w-12 h-12 md:w-14 md:h-14 object-cover rounded-full ring-2 ring-[#e0dbd4] group-hover:scale-110 transition-transform"/>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg md:text-xl font-bold text-[#e0dbd4] group-hover:text-[#4f2d1d] transition-colors">Scafford</span>
              <span className="text-xs md:text-sm text-[#e0dbd4]/70 font-medium">Coffee Rwanda</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/story", label: "Our Story" },
              { href: "/review", label: "Reviews" },
              { href: "/about", label: "About" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-[#e0dbd4] hover:text-[#4f2d1d] px-4 py-2 text-sm font-semibold transition-all duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f2d1d] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/learn">
              <Button className="bg-gradient-to-r from-[#4f2d1d] to-[#6b3d2a] text-[#e0dbd4] font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#4f2d1d]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-[#e0dbd4]/20">
                <Coffee className="w-4 h-4" />
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e0dbd4] p-2 hover:bg-[#4f2d1d]/20 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#32462f] to-[#2d3d2a] border-t border-[#e0dbd4]/20 backdrop-blur-md">
            <div className="flex flex-col space-y-1 px-4 py-4">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Menu" },
                { href: "/internships", label: "Our Story" },
                { href: "/prepared", label: "Reviews" },
                { href: "/about", label: "About" }
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-[#e0dbd4] hover:text-[#4f2d1d] hover:bg-[#4f2d1d]/10 px-4 py-3 text-sm font-semibold rounded-lg transition-all">
                  {item.label}
                </Link>
              ))}
              <Link href="/learn" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#4f2d1d] to-[#6b3d2a] text-[#e0dbd4] font-bold py-3 rounded-full hover:shadow-lg mt-3 flex items-center justify-center gap-2">
                  <Coffee className="w-4 h-4" />
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundImage: 'url(/imigongo.jpg)', backgroundSize: 'auto 100%', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
      </nav>
    </>
  );
}
