import SectionTitle from "@/components/SectionTitle";

export default function StudentsClubs() {
  const clubs = [
    { name: "荆楚非遗社", members: "68人", desc: "致力于荆楚非遗技艺的学习与传播，定期组织叶画、缠花、剪纸等非遗体验活动。" },
    { name: "播音主持协会", members: "45人", desc: "为热爱播音主持的学生提供训练与展示平台，组织朗诵比赛和主持实践。" },
    { name: "表演艺术团", members: "52人", desc: "涵盖戏剧、舞蹈、声乐方向，定期举办校内演出，参与省市级文艺比赛。" },
    { name: "文创设计工作室", members: "38人", desc: "以产品设计和环境设计专业学生为主体，开展文创产品设计与创新创业实践。" },
    { name: "文旅研学社", members: "35人", desc: "组织旅游管理专业学生开展实地考察、研学课程设计和导游讲解实践。" },
    { name: "酒店管理协会", members: "30人", desc: "开展茶艺、咖啡、调酒等技能培训，组织酒店参访和行业交流活动。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="社团风采" subtitle="百花齐放，各展所长" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden transition-all group">
                <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-body font-bold text-heritage-primary">{club.name}</h4>
                    <span className="text-xs text-heritage-primary bg-heritage-primary/10 px-2 py-0.5 rounded-full">{club.members}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
