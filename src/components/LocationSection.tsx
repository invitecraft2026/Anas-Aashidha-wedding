import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const venueLocation = "Ajwa+Convention+Centre,+Padapparamb";

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Find Us
        </p>

        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">
          Venue Location
        </h2>

        <div className="section-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card gold-border overflow-hidden">
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps?q=Ajwa+Convention+Centre,+Padapparamb&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
              className="absolute inset-0"
            />
          </div>

          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />

              <h3 className="display-text text-xl text-primary">
                Ajwa Convention Centre
              </h3>
            </div>

            <p className="text-muted-foreground text-sm font-body mb-4">
              Padapparamb
            </p>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${venueLocation}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider hover:opacity-90 transition-opacity"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;