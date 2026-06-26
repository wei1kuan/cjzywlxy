import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { digitalHeritageCourses, majorNews } from "@/data/mockData";

type ViewMode = "card" | "list";

export default function DigitalHeritage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = majorNews["digital-heritage"];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="数字非遗设计与制作" subtitle="传承千年技艺，创新数字未来" />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40 h-64 md:h-80 flex items-center justify-center">
            <span className="text-6xl">🎨</span>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-6">专业简介</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-base">
              <div><p>数字非遗设计与制作专业是学院重点特色专业，致力于将传统非遗技艺与现代数字技术相融合。专业依托荆楚地区丰富的非遗资源，开设叶画、缠花、西兰卡普、雕花剪纸、汉绣、书法、漆扇、茶艺等特色课程。</p></div>
              <div><p>培养既懂传统工艺又掌握现代设计理念的复合型人才。学生将系统学习非遗传统技艺的核心技法与工艺流程，同时掌握数字化设计工具与制作技术。</p></div>
              <div><p>毕业生可从事非遗传承人、文创产品设计师、博物馆文化馆策展、文化旅游策划、非遗教育培训等方向工作，就业前景广阔。</p></div>
            </div>
          </div>

          <div className="mt-12">
            <SectionTitle title="特色课程" subtitle="八大门类，传承非遗精髓" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {digitalHeritageCourses.map((course) => (
                <motion.div key={course.id} whileHover={{ y: -4 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden transition-all">
                  <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                  <div className="p-5"><div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-display font-bold text-heritage-primary">{course.name}</h4><span className="text-2xl">{course.icon}</span></div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{course.description}</p>
                    <span className="text-xs text-heritage-gold bg-heritage-gold/10 px-3 py-1 rounded-full">{course.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 专业新闻 */}
          <div className="mt-12">
            <SectionTitle title="专业新闻" subtitle="最新动态" />

            <div className="flex items-center justify-end gap-1 mb-6">
              <span className="text-xs text-gray-400 mr-2">视图：</span>
              <button onClick={() => setViewMode("list")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "list" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary"}`}>
                <LayoutList className="w-3.5 h-3.5" />列表
              </button>
              <button onClick={() => setViewMode("card")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "card" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary"}`}>
                <LayoutGrid className="w-3.5 h-3.5" />卡片
              </button>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === "list" ? (
                <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="bg-white rounded-xl shadow-sm border border-heritage-gold/10 overflow-hidden">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-heritage-cream/30 transition-colors">
                        <span className="text-sm text-gray-700">● {item.title}</span>
                        <span className="text-xs text-gray-400 shrink-0 ml-4">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden group transition-all">
                        <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                        <div className="p-5">
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <span className="w-1 h-1 rounded-full bg-heritage-gold/60" />{item.date}
                          </div>
                          <h4 className="text-base font-display font-bold text-heritage-primary mb-2 line-clamp-2 group-hover:text-heritage-secondary transition-colors">{item.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{item.summary}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
