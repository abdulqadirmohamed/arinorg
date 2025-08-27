import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Arin-logo.jpg"
              alt="ARIN Logo"
              width={100}
              height={30}
              className="h-15 w-auto rounded-full"
            />
            <h1 className="text-2xl font-bold text-white">ARIN ORG</h1>
          </Link>
            <p className="text-background/80 mb-4 max-w-md">
              Agency for Resilience Initiative Network - Building resilient communities across Somalia through
              education, health, and humanitarian programs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Info@arinorg.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254731618366 / +252906956075</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Somalia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-background/80 hover:text-background transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Education</li>
              <li className="text-background/80">WASH</li>
              <li className="text-background/80">Health & Nutrition</li>
              <li className="text-background/80">Food Security</li>
              <li className="text-background/80">Human Rights</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} ARIN - Agency for Resilience Initiative Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
