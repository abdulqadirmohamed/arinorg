export function TrustSection() {
  const partners = [
    { name: "UNICEF", logo: "/unicef-logo.png" },
    { name: "FAO", logo: "/fao-logo.png" },
    { name: "PUNSAA", logo: "/punsaa-logo.png" },
    { name: "SADO", logo: "/sado-logo.png" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trusted Partners</h2>
          <p className="text-muted-foreground">Working alongside leading organizations to maximize our impact</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
