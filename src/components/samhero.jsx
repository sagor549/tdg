import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

export const ToronHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <SpiritsSection />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(
    scrollY, 
    [0, 300], 
    [1, 0]
  );

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      {/* Header text */}
      <motion.div 
        className="absolute top-[20vh] z-10 w-full text-center"
        style={{ opacity: headerOpacity }}
      >
        <AnimatePresence>
          <motion.h1 
            className="mx-auto max-w-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent md:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            style={{ fontFamily: "Inter" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Toronto Distillery Group
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(/assets/intro.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/assets/don.png"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/assets/bk.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/assets/media4.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/assets/intro.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const SpiritsSection = () => {
  return (
    <section
      id="spirits"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-900 to-black"
    >
      {/* Toronto Skyline Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/assets/bgg.jpg" // Using image from public folder
          alt="Toronto skyline"
          className="h-full w-full object-cover"
        />
      </div>
      
     
      
      
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-32 text-center">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-8 text-5xl font-black uppercase tracking-wide text-gold-500 md:text-7xl"
        >
          Distilled in Toronto.<br />Poured Worldwide.
        </motion.h1>
        
        {/* Brand image from public folder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <img 
            src="/assets/hero.png" // Using image from public folder
            alt="Toronto Distillery Group Spirits"
            className="mx-auto rounded-xl shadow-2xl md:w-6xl"
          />
        </motion.div>
        
        <motion.p
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl text-xl font-medium text-zinc-200 md:text-2xl"
        >
          Brass Knuckles Canadian Whiskey. GOAT Vodka. Born Naked Raw Gin. Ladrillo Tequila.
          <br />
          Four world-class spirits. Zero compromises. One standard: perfection.
        </motion.p>
        
        {/* CTAs in specified order */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <CTAButton variant="outline">Explore Our Spirits</CTAButton>
          <CTAButton variant="outline">Alcohol Brand Creation Studio</CTAButton>
          <CTAButton variant="outline">Co-Packing Services</CTAButton>
        </motion.div>
        
        {/* Scroll Cue */}
        <motion.div
          className="mt-24 flex items-center justify-center gap-2 text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
        >
          <span className="block h-8 w-px bg-gold-500 animate-bounce"></span>
          <span className="text-sm font-medium tracking-wide">
            Discover Toronto Distillery Group
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const CTAButton = ({ children, variant = "primary" }) => {
  return (
    <motion.button
      className={`flex items-center gap-2 rounded-full px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 ${
        variant === "primary"
          ? "bg-gold-500 text-black hover:bg-gold-400"
          : "border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {variant === "primary" && (
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      )}
    </motion.button>
  );
};