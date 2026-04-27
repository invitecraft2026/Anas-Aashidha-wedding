import { motion } from "framer-motion";

const SpecialNote = () => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="section-divider mb-8" />

        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-3 font-body">
          Special Note
        </p>

        <p className="elegant-text text-lg md:text-xl text-primary-foreground leading-relaxed mb-4">
          Blessed Nikah under the guidance of
        </p>

        <h3 className="display-text text-xl md:text-2xl text-primary mb-4">
          Grand Qazi Syed Muhammed Jamalullaili Thangal
        </h3>

        <p className="elegant-text text-muted-foreground italic text-base md:text-lg">
          In Sha Allah, a beautiful forever begins.
        </p>
      </motion.div>
    </section>
  );
};

export default SpecialNote;