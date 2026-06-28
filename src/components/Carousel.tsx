import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';

interface CarouselSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  { id: 1, imageUrl: banner2, title: '荆楚非遗传承与创新实践中心', subtitle: '' },
  { id: 2, imageUrl: banner1, title: '非遗叶画工坊', subtitle: '' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[380px] md:h-[580px] overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover sm:object-cover"
            style={{ transform: 'scale(1.1)' }}
          />
          {/* Slide 0：荆楚非遗传承与创新实践中心 — 左侧竖排居中 */}
          {currentIndex === 0 && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-[42px] sm:pl-[54px] md:pl-[70px]">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ writingMode: 'vertical-rl' }}
              >
                <h2
                  className="text-lg sm:text-xl md:text-3xl font-chinese font-bold text-white tracking-[0.15em] sm:tracking-[0.2em]"
                  style={{ textShadow: '0 0 24px rgba(80,80,80,1), 0 0 12px rgba(80,80,80,0.9), 3px 5px 10px rgba(80,80,80,0.8), 5px 8px 16px rgba(80,80,80,0.5)' }}
                >
                  {slides[currentIndex].title}
                </h2>
              </motion.div>
            </div>
          )}

          {/* Slide 1：非遗叶画工坊 */}
          {currentIndex === 1 && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-[72px] sm:pl-[84px] md:pl-[100px]">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ writingMode: 'vertical-rl' }}
              >
                <h2
                  className="text-xl sm:text-2xl md:text-4xl font-chinese font-bold text-white tracking-[0.25em] sm:tracking-[0.3em]"
                  style={{ textShadow: '0 0 30px rgba(80,80,80,1), 0 0 16px rgba(80,80,80,1), 4px 6px 12px rgba(80,80,80,0.9), 8px 12px 20px rgba(80,80,80,0.6), 0 0 8px rgba(255,255,255,0.3)' }}
                >
                  {slides[currentIndex].title}
                </h2>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 左右切换 — 金色半透明 */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/30 hover:bg-orange-500/50 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="上一张"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/30 hover:bg-orange-500/50 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="下一张"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 底部金色圆点指示器 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? 'bg-orange-500/60 w-14 h-2.5 rounded-full'
                : 'bg-white hover:bg-white w-2.5 h-2.5 rounded-full'
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
