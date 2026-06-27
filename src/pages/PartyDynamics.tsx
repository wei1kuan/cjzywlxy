import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function PartyDynamics() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = [
    { title: "学院党总支召开党纪学习教育专题组织生活会", date: "2025-12-20", summary: "深入学习党纪法规，开展批评与自我批评，强化党员纪律意识。" },
    { title: "深入学习贯彻党的二十届三中全会精神", date: "2025-11-15", summary: "组织全体师生党员集中学习，结合学院发展实际开展专题研讨。" },
    { title: "学院各党支部开展主题教育实践活动", date: "2025-10-28", summary: "各支部赴红色教育基地开展主题党日活动，传承红色基因。" },
    { title: "党总支举行新发展党员入党宣誓仪式", date: "2025-09-10", summary: "庄严宣誓加入中国共产党，为党组织注入新鲜血液。" },
    { title: "学院开展党风廉政教育主题宣讲", date: "2025-07-05", summary: "邀请专家作专题报告，筑牢党员干部廉洁自律思想防线。" },
    { title: "党建+非遗：学院党员赴荆州开展文化调研", date: "2025-06-18", summary: "以党建引领专业发展，探索非遗保护与党建融合新路径。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="党建动态" subtitle="不忘初心，砥砺前行" />

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
                        <h4 className="text-base font-body font-bold text-heritage-primary mb-2 line-clamp-2 group-hover:text-heritage-secondary transition-colors">{item.title}</h4>
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
