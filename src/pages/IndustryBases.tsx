import SectionTitle from "@/components/SectionTitle";

export default function IndustryBases() {
  const bases = [
    { name: "荆楚非遗传承与创新实践中心", type: "校内基地", desc: "集非遗展示、技艺传承、数字化创新于一体的综合性校内实训平台。" },
    { name: "非遗工坊实训室", type: "校内基地", desc: "叶画、缠花、雕花剪纸、汉绣等传统工艺实操训练场所。" },
    { name: "演播剧场", type: "校内基地", desc: "配备专业灯光音响设备，用于播音主持、表演艺术专业实训与演出。" },
    { name: "智慧酒店模拟实训室", type: "校内基地", desc: "模拟酒店前台、客房、餐厅全流程，配套PMS数字化管理系统。" },
    { name: "武汉东湖风景区实训基地", type: "校外基地", desc: "AAAAA级景区实地教学基地，开展导游、景区管理岗位实训。" },
    { name: "北京环球影城实习基地", type: "校外基地", desc: "酒店管理与数字化运营专业顶岗实习基地，提供国际化实践平台。" },
    { name: "茶艺与咖啡实操室", type: "校内基地", desc: "配备专业茶艺、咖啡设备，用于酒店管理专业餐饮服务技能训练。" },
    { name: "新媒体直播实训室", type: "校内基地", desc: "配备直播设备与绿幕演播区，用于播音主持与新媒体运营实训。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="实习基地" subtitle="实境育人，真岗实训" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {bases.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden transition-all group">
                <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                <div className="p-5 flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-heritage-cream rounded-lg flex items-center justify-center text-2xl">
                    {b.type === '校内基地' ? '🏫' : '🏢'}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-body font-bold text-heritage-primary mb-1">{b.name}</h4>
                    <span className="text-xs text-heritage-primary bg-heritage-primary/10 px-2 py-0.5 rounded-full">{b.type}</span>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{b.desc}</p>
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
