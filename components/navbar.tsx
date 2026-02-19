'use client'

import { Menu, X, ShoppingCart, Search, Mail, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">RUO.BIO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Shop
            </Link>
            <a href="mailto:Infopeterpeptides@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Contact Icons */}
            <a
              href="mailto:Infopeterpeptides@gmail.com"
              title="Email us"
              className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://t.me/+19143251656"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on Telegram"
              className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block"
            >
              <Send className="h-5 w-5 text-foreground" />
            </a>
            
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <Link href="/shop" className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3 pb-4">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Shop
            </Link>
            <a
              href="mailto:Infopeterpeptides@gmail.com"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="https://t.me/+19143251656"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
