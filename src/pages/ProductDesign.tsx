import SectionTitle from "@/components/SectionTitle";

export default function ProductDesign() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="产品艺术设计" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>550104</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">产品艺术设计专业立足湖北区域文化资源与制造业优势，确立"AIGC赋能·匠艺融合·三链贯通"的创新人才培养模式。构建"文化传承、智能制造、商业创新"三维能力体系，通过产业链与课程链对接、项目链推动人才链，实现产教深度融合。专业以服务国家文化数字化战略和新质生产力发展需求为导向，以"前端文化研究—中端设计表现—后端品牌推广"工作组教学模式为路径，依托专兼结合的双师型教师队伍，紧跟行业数字化、智能化发展趋势，培养具备坚定文化自信与优秀综合素养，能够运用地域文化资源进行创新设计的高技能人才。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">本专业培养能够践行社会主义核心价值观，具备良好人文素养、科学素养、数字素养及职业道德，拥有创新意识、敬业精神与工匠精神的高技能人才。学生将掌握产品设计程序与方法、人机工程及材料工艺等知识，具备设计调研、创意手绘、产品造型、方案展示、模型制作及AI辅助设计等能力。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要包括：产品项目设计、智能产品设计、产品设计程序与方法、产品形态设计、产品结构与应用、三维建模与渲染、计算机辅助设计、交互体验设计、手绘表现技法、产品品牌设计等。以真实企业需求、真实案例驱动、真实问题解决为路径，实现从作品到商品的转化，通过产教深度融合，学生作品质量稳步提升。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">深化校企协同育人，与武汉酷酷球设计有限公司共建"至升班"订单班，引入企业设计师授课与真实项目实训。校内建有多间专业实训室，校外依托D+M工业设计小镇、酷酷球、北简匠意等单位搭建实训基地，实践教学条件完善。</p>
                <p className="indent-8 mt-3">坚持以赛促学，学生在省级工业设计、职业技能竞赛中屡获佳绩，并有学生入选世界技能大赛工业设计技术集训梯队；创新创业项目斩获多项省级奖项，4项入围国赛，优秀毕业生在德国红点奖、iF设计奖等国际设计大奖中屡获殊荣。同步开展职业技能等级证书考核，提升学生持证就业能力。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">就业面向产品设计师（智能硬件、文创方向）、AI辅助设计专员、三维建模渲染师、CMF设计师、设计项目协调员等岗位。</p>
                <p className="indent-8 mt-3">学生可通过统招专升本升入本科院校深造，艺术设计类升学优势明显，既可报考产品设计对口专业，也可跨考视觉传达、数字媒体艺术等设计类专业，升学选择丰富，历年升学率在艺术设计类专科专业中位居前列。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '产品-1.png', caption: '产品设计实训室' },
              { img: '产品-2.png', caption: '设计沙龙活动' },
              { img: '产品-3.png', caption: '优秀学生作品' },
            ].map((item, i) => (
              <div key={i}>
                <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" style={{ aspectRatio: '1134/788' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}${item.img}`}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-[20px] font-bold text-heritage-primary/70 font-body">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
