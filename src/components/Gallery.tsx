import Image from 'next/image';

const galleryItems = [
  { src: '/gallery-before-after.png', alt: 'Garage cleanout before and after — cluttered two-car garage packed with boxes, clothes, and junk transformed to a clean empty space' },
  { src: '/gallery-3.png', alt: 'Garage cleanout before and after — older detached garage with rusty shelving, workbench clutter, and bags cleared to a swept empty space' },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6" aria-labelledby="gallery-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Before &amp; After
        </h2>

        <div className="space-y-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
