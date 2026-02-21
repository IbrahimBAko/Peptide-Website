'use client'

import { Menu, X, ShoppingCart, Search, Mail, Send, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

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
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              Contact
            </button>
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

        {/* Contact Information Modal */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-xl shadow-xl max-w-md w-full">
              <div className="flex justify-between items-center p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:Infopeterpeptides@gmail.com"
                      className="text-primary hover:underline"
                    >
                      Infopeterpeptides@gmail.com
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex gap-4 items-start">
                  <Send className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telegram</h3>
                    <a 
                      href="https://t.me/+19143251656"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +19143251656
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Website</h3>
                    <a 
                      href="https://www.ruo.bio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.ruo.bio
                    </a>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Usually responds within 24 hours</p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Payment Methods Accepted:</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Cash App</p>
                    <p>• Zelle</p>
                    <p>• PayPal</p>
                    <p>• Venmo</p>
                    <p>• Apple Pay</p>
                    <p>• Chime</p>
                    <p>• Gift Cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
