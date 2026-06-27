import SectionTitle from "@/components/SectionTitle";

export default function IndustryInnovation() {
  const items = [
    { title: "'荆楚文脉'系列文创产品开发", award: "省级大学生创新创业大赛金奖", desc: "以荆楚非遗元素为创意来源，开发叶画、缠花、雕花剪纸等系列文创产品。" },
    { title: "非遗数字化保护与传播平台", award: "全国'挑战杯'特等奖", desc: "运用VR/AR技术构建非遗沉浸式展示平台，实现文化遗产的数字化保护与传播。" },
    { title: "文旅研学课程创新设计", award: "中国国际大学生创新大赛金奖", desc: "开发面向青少年的文旅研学实践课程，融合非遗体验与旅游教育。" },
    { title: "'智慧酒店'服务管理系统", award: "省级创新创业立项", desc: "研发酒店智能化管理系统，优化前台接待、客房服务、餐饮管理全流程。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="创新创业" subtitle="敢为人先，创赢未来" />
          <div className="mt-8 space-y-4">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 bg-heritage-cream rounded-full flex items-center justify-center text-xl font-bold text-heritage-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-body font-bold text-heritage-primary mb-1">{item.title}</h4>
                    <span className="text-xs text-heritage-gold bg-heritage-gold/10 px-2 py-0.5 rounded-full">{item.award}</span>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
