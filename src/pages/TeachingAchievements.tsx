import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function TeachingAchievements() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = [
    { title: "学院获评省级高水平专业群建设单位", date: "2025-12-01", summary: "数字非遗专业群获批省级高水平专业群，获得专项建设经费支持。" },
    { title: "教师获国家社科基金艺术学项目立项", date: "2025-09-15", summary: "实现学院国家级科研项目新突破，资助经费30万元。" },
    { title: "数字非遗课程获评省级精品在线开放课程", date: "2025-10-15", summary: "课程累计选课人数突破万人，被评为省级精品在线开放课程。" },
    { title: "教师团队获全国职业院校教学能力大赛一等奖", date: "2025-08-20", summary: "教师团队以非遗数字化教学设计获评委高度认可，摘得国赛一等奖。" },
    { title: "教师在核心期刊发表论文15篇", date: "2025-05-10", summary: "其中CSSCI来源期刊5篇，北大核心期刊10篇，科研成果丰硕。" },
    { title: "学院新增2门省级一流核心课程", date: "2025-06-10", summary: "《产品设计方法》《文旅融合概论》两门课程获批省级一流核心课程。" },
    { title: "教学成果获省级教学成果奖二等奖", date: "2024-12-20", summary: "'非遗传承+数字赋能'教学模式改革成果获省级教学成果奖。" },
    { title: "获授权发明专利3项、实用新型专利8项", date: "2024-12-01", summary: "涉及非遗数字化保护、文创产品设计、酒店智能管理等领域。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="教科研成果" subtitle="深耕教研，硕果累累" />
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
