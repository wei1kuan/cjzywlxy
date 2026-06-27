import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function AdmissionNews() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = [
    { title: "2026年单独招生简章正式发布", date: "2026-01-15", summary: "七个专业全面招生，计划招收600人，网上报名通道已开启。" },
    { title: "学院2026年招生计划公布，七个专业全面招生", date: "2025-12-20", summary: "各专业招生计划同步发布，招生咨询热线和线上咨询全面启动。" },
    { title: "2025级新生报到率达98.5%，创历史新高", date: "2025-09-05", summary: "来自全国各地的学子齐聚文旅创意学院，开启大学生活新篇章。" },
    { title: "学院举办校园开放日暨招生咨询会", date: "2025-06-18", summary: "数百名考生及家长到校参观，体验非遗工坊、实训室等教学设施。" },
    { title: "数字非遗专业成为热门报考方向", date: "2025-05-10", summary: "随着非遗保护意识的提升，数字非遗专业报考人数同比增长40%。" },
    { title: "学院新增省级特色专业1个", date: "2025-03-25", summary: "表演艺术专业获批省级特色专业，专业建设再上新台阶。" },
    { title: "招生宣传片'传承·创新'正式上线", date: "2025-02-15", summary: "以学生视角展现学院专业特色与校园文化，全网播放量突破50万。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="招生动态" subtitle="汇聚英才，共创未来" />
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
