import SectionTitle from "@/components/SectionTitle";

export default function AboutLeadership() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="学院领导" subtitle="凝心聚力，引领发展" />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <div className="space-y-6">
              {[
                { name: "汪帆", role: "学院院长", duty: "主持学院行政全面工作，负责学院发展规划、专业建设、师资队伍建设及对外合作交流。" },
                { name: "滕亚东", role: "党总支书记", duty: "主持学院党务全面工作，负责党建思政、意识形态、统战工作及安全稳定。" },
                { name: "石焰", role: "总支副书记", duty: "分管学院党务工作、学生管理、招生就业、宣传工作，协助书记处理日常党务。" },
                { name: "欧阳琼", role: "教学副院长", duty: "分管学院内涵建设、教学管理工作，负责课程建设、教学改革、实训基地及科研项目。" },
              ].map((leader, i) => (
                <div key={i} className="flex items-start gap-5 pb-6 border-b border-heritage-primary/10 last:border-b-0 last:pb-0">
                  <div className="shrink-0 mt-1 w-3 h-3 border-2 border-heritage-primary rotate-45" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h4 className="text-xl font-body font-bold text-heritage-primary">{leader.name}</h4>
                      <span className="text-sm text-heritage-primary bg-heritage-primary/10 px-3 py-0.5 rounded-full font-medium">{leader.role}</span>
                    </div>
                    <p className="mt-2 text-gray-600 leading-relaxed">{leader.duty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
