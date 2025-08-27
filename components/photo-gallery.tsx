"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/arin-team-distributing-aid-in-somalia.png",
    alt: "ARIN team distributing aid",
    caption: "Emergency aid distribution in Beletweyne",
  },
  {
    src: "/community-meeting-with-arin-staff-somalia.png",
    alt: "Community meeting",
    caption: "Community governance training session",
  },
  {
    src: "/children-in-school-somalia-arin.png",
    alt: "Children in school",
    caption: "Education program beneficiaries",
  },
  {
    src: "/water-well-construction-somalia.png",
    alt: "Water well construction",
    caption: "Borehole rehabilitation project",
  },
  {
    src: "/women-empowerment-program-somalia.png",
    alt: "Women empowerment",
    caption: "Women's empowerment workshop",
  },
  {
    src: "/healthcare-clinic-somalia-arin.png",
    alt: "Healthcare services",
    caption: "Mobile health clinic services",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Work in Action</h2>
          <p className="text-lg text-muted-foreground">A glimpse into our programs and the communities we serve</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group py-0"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={480}
                  height={480}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={1200}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="outline"
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-medium">{galleryImages[selectedImage].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
