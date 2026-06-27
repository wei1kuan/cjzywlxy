import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type ViewMode = "card" | "list";

export default function StudentsAwards() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const awards = [
    { title: "全国'挑战杯'大学生课外学术科技作品竞赛特等奖", level: "国家级", year: "2025", summary: "以非遗数字化保护项目在全国决赛中脱颖而出，荣获最高奖项。" },
    { title: "世界职业院校技能大赛银奖4项、铜奖3项", level: "国际级", year: "2024-2025", summary: "在多个赛项中与全球选手同台竞技，展现中国职教学子风采。" },
    { title: "中华人民共和国职业技能大赛铜牌2项", level: "国家级", year: "2024", summary: "在商品展示技术、酒店接待赛项中获得铜牌。" },
    { title: "全国职业院校红色故事大赛一等奖", level: "国家级", year: "2025", summary: "以荆楚红色文化为主题创作故事作品，荣获大赛最高奖。" },
    { title: "中国国际大学生创新大赛省级金奖", level: "省级", year: "2025", summary: "非遗文创产品创新设计项目获评委一致好评，摘得省级金奖。" },
    { title: "湖北省职业院校技能大赛一等奖", level: "省级", year: "2024", summary: "在导游服务、产品设计、播音主持等多个赛项中荣获一等奖。" },
    { title: "全国大学生广告艺术大赛二等奖", level: "国家级", year: "2025", summary: "以荆楚文化为创意主题的广告设计作品获全国二等奖。" },
    { title: "湖北省大学生艺术节表演类一等奖", level: "省级", year: "2024", summary: "表演艺术专业学生以原创舞台剧作品荣获省级一等奖。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="获奖荣誉" subtitle="赛教并举，硕果累累" />
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
                  {awards.map((award, i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-heritage-cream/30 transition-colors">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <span className="text-lg shrink-0">{i < 3 ? '🏆' : '🥇'}</span>
                        <span className="text-gray-700 truncate">{award.title}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${award.level === '国家级' || award.level === '国际级' ? 'bg-heritage-primary/10 text-heritage-primary' : 'bg-heritage-gold/10 text-heritage-gold'}`}>{award.level}</span>
                        <span className="text-sm text-gray-400">{award.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {awards.map((award, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden group transition-all">
                      <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{i < 3 ? '🏆' : '🥇'}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${award.level === '国家级' || award.level === '国际级' ? 'bg-heritage-primary/10 text-heritage-primary' : 'bg-heritage-gold/10 text-heritage-gold'}`}>{award.level}</span>
                        </div>
                        <h4 className="text-base font-body font-bold text-heritage-primary mb-2 line-clamp-2">{award.title}</h4>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500 line-clamp-1">{award.summary}</p>
                          <span className="text-xs text-gray-400 shrink-0 ml-2">{award.year}</span>
                        </div>
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
