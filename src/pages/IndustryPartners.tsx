import SectionTitle from "@/components/SectionTitle";

export default function IndustryPartners() {
  const partners = [
    { name: "武汉东湖风景区", type: "AAAAA级景区", desc: "共建旅游管理专业实训基地，开展导游实训、景区管理实践教学。" },
    { name: "北京环球影城", type: "国际文旅项目", desc: "酒店管理与数字化运营专业实习基地，提供国际化岗位实训。" },
    { name: "荆州非遗传承基地", type: "非遗保护机构", desc: "数字非遗专业校外实践基地，开展传统工艺调研与数字化保护项目。" },
    { name: "武汉万达瑞华酒店", type: "高端酒店", desc: "酒店管理专业顶岗实习基地，提供前厅、客房、餐饮全流程实训。" },
    { name: "湖北日报新媒体中心", type: "传媒机构", desc: "播音与主持专业实训基地，开展新媒体内容创作与运营实践。" },
    { name: "武汉文创产业园", type: "创意产业园区", desc: "产品设计专业校企合作基地，开展文创产品设计与孵化项目。" },
  ];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="合作企业" subtitle="校企协同，合作共赢" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-primary/10 overflow-hidden transition-all group">
                <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                <div className="p-5">
                  <h4 className="text-lg font-body font-bold text-heritage-primary mb-1">{p.name}</h4>
                  <span className="text-xs text-heritage-primary bg-heritage-primary/10 px-2 py-0.5 rounded-full">{p.type}</span>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
