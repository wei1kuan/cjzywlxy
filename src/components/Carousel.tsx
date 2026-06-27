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
  { id: 1, imageUrl: banner2, title: '非遗文化展示馆', subtitle: '传承荆楚文脉　弘扬非遗技艺' },
  { id: 2, imageUrl: banner1, title: '叶画特色展厅', subtitle: '匠心独具　一叶一世界' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[440px] md:h-[580px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
            style={currentIndex === 0 ? { transform: 'scale(1.1)' } : undefined}
          />
          {/* Slide 0：非遗文化展示馆 — 左侧竖排 */}
          {currentIndex === 0 && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 md:pl-12">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center gap-4"
                style={{ writingMode: 'vertical-rl' }}
              >
                <h2
                  className="text-3xl md:text-5xl font-chinese font-bold text-white tracking-[0.3em]"
                  style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 2px 4px 6px rgba(0,0,0,0.8), 4px 8px 12px rgba(0,0,0,0.5)' }}
                >
                  {slides[currentIndex].title}
                </h2>
                <p
                  className="text-sm md:text-lg text-heritage-gold font-chinese tracking-[0.2em]"
                  style={{ textShadow: '0 0 12px rgba(0,0,0,0.8), 1px 2px 3px rgba(0,0,0,0.7), 2px 4px 6px rgba(0,0,0,0.4)' }}
                >
                  {slides[currentIndex].subtitle}
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 1：叶画特色展厅 — 左上横排 */}
          {currentIndex === 1 && (
            <div className="absolute top-0 left-0 pt-8 md:pt-12 pl-6 md:pl-12">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-3xl md:text-5xl font-chinese font-bold text-white tracking-[0.15em]"
                  style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 2px 4px 6px rgba(0,0,0,0.8), 4px 8px 12px rgba(0,0,0,0.5)' }}
                >
                  {slides[currentIndex].title}
                </h2>
                <p
                  className="mt-2 text-sm md:text-lg text-heritage-gold font-chinese tracking-[0.15em]"
                  style={{ textShadow: '0 0 12px rgba(0,0,0,0.8), 1px 2px 3px rgba(0,0,0,0.7), 2px 4px 6px rgba(0,0,0,0.4)' }}
                >
                  {slides[currentIndex].subtitle}
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 左右切换 — 金色半透明 */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="上一张"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="下一张"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 底部金色圆点指示器 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? 'bg-white w-6 h-2.5'
                : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
