import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function StudentsActivities() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = [
    { title: "学院举办'非遗文化节'系列活动", date: "2025-12-15", summary: "涵盖非遗技艺体验、非遗文创市集、传统文化讲座等十余项子活动，参与学生达800余人次。" },
    { title: "学生志愿者赴社区开展非遗公益课堂", date: "2025-11-20", summary: "组织50余名学生志愿者走进社区，传播荆楚非遗文化，服务社区居民。" },
    { title: "校园文化艺术节——文旅创意专场", date: "2025-10-08", summary: "展示学生非遗作品、设计成果和表演艺术节目，展现专业学习成果。" },
    { title: "学院举办'诵读中国'经典朗诵大赛", date: "2025-09-12", summary: "播音与主持专业学生为主体，全校范围开展经典诵读比赛。" },
    { title: "春季运动会文旅学院方阵展演", date: "2025-05-10", summary: "以荆楚文化为主题编排方阵表演，融合舞蹈、服饰与音乐。" },
    { title: "'数字非遗'创意设计作品展", date: "2025-03-20", summary: "展出学生数字非遗设计作品100余件，吸引校内外观众参观。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="学生活动" subtitle="活力校园，青春绽放" />
          <div className="flex items-center justify-end gap-1 mb-6">
            <span className="text-xs text-gray-400 mr-2">视图：</span>
            <button onClick={() => setViewMode("list")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "list" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream"}`}>
              <LayoutList className="w-3.5 h-3.5" />列表
            </button>
            <button onClick={() => setViewMode("card")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "card" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream"}`}>
              <LayoutGrid className="w-3.5 h-3.5" />卡片
            </button>
          </div>
          <AnimatePresence mode="wait">
            {viewMode === "list" ? (
              <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <div className="bg-white rounded-xl shadow-sm border border-heritage-primary/10 overflow-hidden">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-heritage-cream/30 transition-colors">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <span className="w-2 h-2 rounded-full bg-heritage-primary/60 shrink-0" />
                        <span className="text-gray-700 truncate">{item.title}</span>
                      </div>
                      <span className="text-sm text-gray-400 shrink-0 ml-4">{item.date}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden group transition-all">
                      <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2"><span className="w-1 h-1 rounded-full bg-heritage-primary/60" />{item.date}</div>
                        <h4 className="text-base font-body font-bold text-heritage-primary mb-2 line-clamp-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{item.summary}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
