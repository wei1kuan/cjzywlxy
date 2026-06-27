import SectionTitle from "@/components/SectionTitle";

export default function AboutFaculty() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="师资团队" subtitle="双师协同，匠心育人" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "教师-1", title: "非遗研究专家", desc: "国家级非遗代表性传承人，从事荆楚传统工艺研究30余年，主持国家级课题多项。" },
              { name: "教师-2", title: "环境设计学科带头人", desc: "湖北省设计学重点学科带头人，主持多项省级教学改革项目，出版专著3部。" },
              { name: "教师-3", title: "产品设计教研室主任", desc: "工业设计专业博士，获德国红点设计奖，指导学生获国家级竞赛奖项20余项。" },
              { name: "教师-4", title: "数字媒体艺术导师", desc: "北京大学访问学者，专注非遗数字化保护与VR/AR技术应用研究。" },
              { name: "教师-5", title: "旅游管理专业骨干", desc: "武汉大学旅游管理博士，主持省级文旅融合课题，发表核心期刊论文15篇。" },
              { name: "教师-6", title: "酒店管理专业负责人", desc: "曾任国际品牌酒店高管，双师型教师，专注酒店数字化运营研究。" },
              { name: "教师-7", title: "播音主持教研室主任", desc: "省级普通话测试员，原省级广播电视台主持人，具有丰富媒体实践经验。" },
              { name: "教师-8", title: "表演艺术学科带头人", desc: "国家一级演员，中国戏剧家协会会员，从事舞台表演教学20余年。" },
            ].map((teacher, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden transition-all group">
                <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                <div className="p-5">
                  <h4 className="text-lg font-body font-bold text-heritage-primary mb-1">{teacher.name}</h4>
                  <span className="text-xs text-heritage-primary bg-heritage-primary/10 px-2 py-0.5 rounded-full">{teacher.title}</span>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{teacher.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
