import SectionTitle from "@/components/SectionTitle";

export default function TourismManagement() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="旅游管理" subtitle={<span className="font-bold">专业代码：<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>540101</span></span>} />
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-primary/10 p-8 md:p-10">
            <h3 className="text-xl font-body font-bold text-heritage-primary mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-heritage-primary rounded-full" />专业简介
            </h3>
            <div className="space-y-6 text-gray-700 leading-loose text-base">
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />一、专业定位
                </h4>
                <p className="indent-8">本专业为校级重点建设专业，顺应文旅产业升级与全域旅游发展时代趋势，对接区域文旅重点产业链布局。对标行业岗位需求，全面推行岗课赛证综合育人模式。拥有标准化校内实训基地与稳定的校外合作企业，办学积淀深厚，行业认可度高。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />二、培养目标
                </h4>
                <p className="indent-8">坚持立德树人根本任务，培养践行社会主义核心价值观，德智体美劳全面发展，具备良好的职业素养、精益求精的工匠精神与数字素养，系统掌握旅游基础知识、智慧景区管理、文旅策划、新媒体运营等必备理论知识与实操技能，厚植家国情怀与中华优秀传统文化素养，能够从事研学旅行指导、景区运营管理、文旅活动策划、旅行社经营管理、文旅接待服务等工作的高技能人才。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />三、核心课程
                </h4>
                <p className="indent-8">开设专业基础课与技能方向课程，主要课程：智慧旅游技术概论、旅行社经营管理、旅游新媒体营销与运营、旅游人工智能、茶文化与茶艺、导游资格证书配套课程。教学以项目任务驱动为主，强化理实一体化教学。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />四、专业特色
                </h4>
                <p className="indent-8">校企协同，双师共育。专兼结合的双师型教学团队均具行业从业经验或职业资格证书，特聘文旅行业专家、全国特级导游驻校指导。开设"学知研学"现代学徒制班、"黄鹤英才"订单班，联合知名文旅企业定制化培养，校企共建课程与实训项目，实现学习与岗位无缝衔接。</p>
                <p className="indent-8 mt-3">设施完善，赛证融通。校内建有智慧旅游综合实训室、茶艺实训室等，配备数字化实训设备与虚拟仿真平台；校外联动AAAAA级景区、文旅集团、品牌主题乐园、研学基地等优质资源，保障沉浸式岗位实践。对接职业技能大赛，以赛促教、以赛促学；学生可考取导游资格证、旅游咨询师等职业资格证书，实现"毕业即持证、持证即上岗"。</p>
              </div>
              <div>
                <h4 className="text-base font-body font-bold text-heritage-primary mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-heritage-primary rounded-full" />五、就业与升学方向
                </h4>
                <p className="indent-8">毕业生可从事智慧景区运营管理、文旅活动策划、旅行社计调、文旅新媒体运营、研学导师等岗位，就业范围覆盖省内及北京、上海等重点城市，合作优质企业资源丰富，就业渠道稳定，职业发展空间良好，薪资与晋升体系成熟完善。</p>
                <p className="indent-8 mt-3">升学路径多元，学生可通过统招专升本、专本贯通升入本科院校，优秀学子可凭借技能竞赛成绩免试升学，历年专升本录取率稳定在80%以上，为有志升学的学生提供坚实保障。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-[6px]">
            {[
              { img: '旅游-1.png', caption: '旅游管理专业实训室' },
              { img: '旅游-2.png', caption: '旅游专业学生景点实训' },
              { img: '旅游-3.png', caption: '省技能大赛一等奖获奖证书' },
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
