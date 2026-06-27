import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function AdmissionEmployment() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = [
    { title: "2025届毕业生就业质量报告发布", date: "2025-12-30", summary: "2025届毕业生就业率达96.8%，其中文旅相关行业就业占比超过65%。" },
    { title: "学院举办秋季文旅专场招聘会", date: "2025-11-15", summary: "邀请50余家文旅企业参会，提供岗位300余个，现场签约率达40%。" },
    { title: "多名毕业生通过技能大赛免试升入本科", date: "2025-09-01", summary: "2025年共有12名学生通过技能大赛获奖免试升入本科院校继续深造。" },
    { title: "学院与10家文旅龙头企业签订人才输送协议", date: "2025-06-20", summary: "包括景区、酒店、设计公司、传媒机构等，建立长期人才输送合作机制。" },
    { title: "2024届毕业生平均月薪同比增长8%", date: "2025-03-15", summary: "毕业生首年月薪中位数达5800元，高于省内同类院校平均水平。" },
    { title: "优秀校友风采：非遗传承路上的文旅学子", date: "2025-01-10", summary: "多名毕业生在非遗保护、文创设计、文旅运营等领域取得突出成绩。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="就业信息" subtitle="职通未来，梦想启航" />
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
