import SectionTitle from "@/components/SectionTitle";

export default function PartyGeneral() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="总支概况" subtitle="党建引领，铸魂育人" />

          {/* 概况摘要 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "党支部", value: "XX个", icon: "🏛️" },
              { label: "党员总数", value: "XX人", icon: "👥" },
              { label: "教师党员 / 学生党员", value: "XX人 / XX人", icon: "📋" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-6 text-center">
                <span className="text-3xl">{stat.icon}</span>
                <p className="mt-2 text-2xl font-bold text-heritage-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* 详细内容 */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* 组织建设 */}
              <div>
                <h4 className="text-lg font-body font-bold text-heritage-primary mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-heritage-primary rounded-full" />
                  组织建设
                </h4>
                <p className="text-gray-700 leading-loose text-base indent-8">
                  文旅创意学院党总支下设党支部，现有党员若干人。党总支坚持以习近平新时代中国特色社会主义思想为指导，全面贯彻党的教育方针，落实立德树人根本任务，持续完善党总支—党支部—党员三级联动工作机制。
                </p>
              </div>

              {/* 组织架构图占位 */}
              <div>
                <h4 className="text-lg font-body font-bold text-heritage-primary mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-heritage-primary rounded-full" />
                  组织架构
                </h4>
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-heritage-primary/5 via-heritage-gold/5 to-heritage-primary/5 border-2 border-dashed border-heritage-primary/20 flex items-center justify-center" style={{ minHeight: '240px' }}>
                  <div className="text-center">
                    <span className="text-heritage-primary/30 text-5xl">🏛️</span>
                    <p className="mt-2 text-heritage-primary/40 text-sm">党总支组织架构图</p>
                    <p className="text-heritage-primary/20 text-xs mt-1">待更新</p>
                  </div>
                </div>
              </div>

              {/* 党风廉政建设 */}
              <div>
                <h4 className="text-lg font-body font-bold text-heritage-primary mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-heritage-primary rounded-full" />
                  党风廉政建设
                </h4>
                <p className="text-gray-700 leading-loose text-base indent-8">
                  严格落实党风廉政建设责任制，常态化开展廉政教育、警示教育和师德师风建设活动。定期组织全体党员赴红色教育基地参观学习，强化党员理想信念教育和党性修养，营造风清气正的育人环境。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
