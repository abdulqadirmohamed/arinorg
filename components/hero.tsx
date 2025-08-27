import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Building Resilient
            <span className="text-primary block">Communities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ARIN works across Somalia to strengthen communities through education, health, water & sanitation, and food
            security programs that create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/programs">Our Programs</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img
          src="/humanitarian-workers-helping-community-in-somalia.png"
          alt="ARIN humanitarian work in Somalia"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
