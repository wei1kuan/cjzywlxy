import { footerLinks, contactInfo } from "@/data/mockData";
import { KnotCorner } from "@/components/KnotPattern";
import { CloudThunderBand } from "@/components/ChuPattern";

/**
 * Footer — 页脚（漆器红底 + 四角如意纹 + 云雷顶边）
 */
export default function Footer() {
  return (
    <footer className="bg-heritage-primary text-white relative overflow-hidden">
      {/* 四角如意结纹 */}
      <KnotCorner className="absolute top-0 left-0" color="#E8C547" size={48} />
      <KnotCorner className="absolute top-0 right-0 scale-x-[-1]" color="#E8C547" size={48} />
      <KnotCorner className="absolute bottom-0 left-0 scale-y-[-1]" color="#E8C547" size={48} />
      <KnotCorner className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]" color="#E8C547" size={48} />

      {/* 云雷纹顶边装饰 */}
      <div className="relative z-10">
        <CloudThunderBand color="rgba(232,197,71,0.5)" count={100} className="w-full h-3 opacity-60" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-12 relative z-10">

        {/* 外部链接 — 横向分布 */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {footerLinks.map((link, i) => (
            <span key={link.id} className="flex items-center gap-2">
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-heritage-gold transition-colors duration-200 text-base"
              >
                {link.name}
              </a>
              {i < footerLinks.length - 1 && (
                <span className="text-white/20">|</span>
              )}
            </span>
          ))}
        </div>

        {/* 联系我们 — 横向分布 */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-10">
          {contactInfo.map((info, i) => (
            <span key={info.label} className="flex items-center gap-2 text-white/70 text-base">
              <span>{info.icon}</span>
              <span>{info.value}</span>
              {i < contactInfo.length - 1 && (
                <span className="text-white/15 ml-2">|</span>
              )}
            </span>
          ))}
        </div>

        {/* 版权 */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-base font-body">
            © 2026 文旅创意学院（荆楚非遗传承与创新实践中心） 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
