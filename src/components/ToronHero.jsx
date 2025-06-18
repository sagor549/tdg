// src/components/ToronHero.jsx
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ToronHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          smoothWheel: true,
          smoothTouch: true
        }}
      >
        <Hero />
        <SpiritsSection />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

const Hero = () => {
  const { scrollY } = useScroll();
  const [startAutoAnimation, setStartAutoAnimation] = useState(false);
  const lenis = useLenis();
  const isMobile = useIsMobile();
  const triggered = useRef(false);
  const scrolledToSpirits = useRef(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      // Trigger at 15px scroll
      if (y > 2 && y < 300 && !triggered.current) {
        setStartAutoAnimation(true);
        triggered.current = true;
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (startAutoAnimation && lenis && !scrolledToSpirits.current) {
      const offset = isMobile ? 200 : 280;
      lenis.scrollTo('#spirits', {
        duration: 2, // Slower animation (3 seconds)
        offset: -offset,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      scrolledToSpirits.current = true;
    }
  }, [startAutoAnimation, lenis, isMobile]);

  const headerOpacity = useTransform(
    scrollY, 
    [0, 300], 
    [1, 0]
  );

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
      id="page"
    >
      <motion.div 
        className="absolute top-[20vh] z-10 w-full text-center"
        style={{ opacity: headerOpacity }}
      >
        <AnimatePresence>
          <motion.h1 
            key="hero-heading"
            className="mx-auto max-w-4xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text px-4 text-4xl font-black uppercase tracking-tighter text-transparent md:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            style={{ fontFamily: "Inter" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Toronto Distillery Group
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      <CenterImage isMobile={isMobile} />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = ({ isMobile }) => {
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
        backgroundImage: isMobile 
          ? "url('/assets/mobile.png')" 
          : "url('/assets/intro.png')",
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
        key="img1"
        src="/assets/don.png"
        alt="Don Julio spirit"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        key="img2"
        src="/assets/bk.jpg"
        alt="Brass Knuckles whiskey"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        key="img3"
        src="/assets/media4.png"
        alt="Distillery media"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        key="img4"
        src="/assets/intro.png"
        alt="Distillery intro"
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
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/assets/bgg.jpg"
          alt="Toronto skyline"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-16 md:py-32 text-center">
        <motion.h1
          key="spirits-heading"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-8 px-4 text-4xl font-black uppercase tracking-wide text-white md:text-7xl"
        >
          Distilled in Toronto.<br />Poured Worldwide.
        </motion.h1>
        
        <motion.div
          key="spirits-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl px-4"
        >
          <img 
            src="/assets/hero.png"
            alt="Toronto Distillery Group Spirits"
            className="mx-auto rounded-xl shadow-2xl w-full"
          />
        </motion.div>
        
        <motion.p
          key="spirits-description"
          initial={{ y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
          className="mx-auto mb-16 max-w-2xl px-4 text-lg font-medium text-zinc-200 md:text-2xl"
        >
          Brass Knuckles Canadian Whiskey. GOAT Vodka. Born Naked Raw Gin. Ladrillo Tequila.
          <br />
          Four world-class spirits. Zero compromises. One standard: perfection.
        </motion.p>
        
        <motion.div 
          key="spirits-ctas"
          className="flex flex-col items-center justify-center gap-4"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <a href="#product-section" className="group flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-black md:text-xl">
            Explore Our Spirits
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton to="/alcohol-brand-creation">Alcohol Brand Creation</CTAButton>
            <CTAButton to="/co-packing-services">Co-Packing Services</CTAButton>
          </div>
        </motion.div>
        
        <motion.div
          key="spirits-scroll-cue"
          className="mt-16 md:mt-24 flex items-center justify-center gap-2 text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
        >
          <span className="block h-8 w-px bg-white animate-bounce"></span>
          <span className="text-sm font-medium tracking-wide">
            Discover Toronto Distillery Group
          </span>
        </motion.div>
      </div>
    </section>
  );
};

const CTAButton = ({ children, variant = "primary", to }) => {
  return (
    <Link to={to} className="group">
      <motion.div
        className={`flex items-center gap-2 rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-xl font-bold uppercase tracking-wide transition-all duration-300 ${
          variant === "primary"
            ? "bg-transparent border border-white text-white hover:bg-black"
            : "border-2 border-white text-white hover:bg-white/10"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {variant === "primary" && (
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        )}
      </motion.div>
    </Link>
  );
};