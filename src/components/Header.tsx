import { useState } from 'react';
import { Search } from 'lucide-react';

/**
 * Header — Logo 区域 + 搜索栏
 * 参考 shae.cjxy.edu.cn 的 .header 区域设计
 * 左侧：学校 Logo + 分隔线 + 学院 Logo 占位符
 * 右侧：搜索输入框
 */
export default function Header() {
  const [searchKeyword, setSearchKeyword] = useState('');

  /** 提交搜索 — 使用百度站内搜索（暂为展示用途，正式上线可接入真实搜索接口） */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) return;
    // 百度站内搜索：限定在当前域名下搜索
    const searchUrl = `https://www.baidu.com/s?wd=site:shae.cjxy.edu.cn ${encodeURIComponent(searchKeyword)}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 flex items-center justify-between py-3 sm:py-5 gap-2 sm:gap-4">
        {/* 左侧：学校 Logo + 分隔 + 学院 Logo 占位符 */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
          {/* 长江职业学院 Logo */}
          <a
            href="http://www.cjxy.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}cjxy-logo.png`}
              alt="长江职业学院"
              className="h-10 sm:h-14 md:h-[66px] w-auto object-contain"
            />
          </a>

          {/* 分隔竖线 */}
          <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-300 shrink-0" />

          {/* 文旅创意学院 Logo 占位符 */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[78px] md:h-[78px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 shrink-0">
              <span className="text-gray-400 text-[10px] sm:text-xs text-center leading-tight">
                文旅学院<br />Logo
              </span>
            </div>
            <div className="hidden lg:block" style={{ width: '220px' }}>
              <h2 className="text-3xl font-bold text-heritage-primary" style={{ fontFamily: '"STXingkai", "华文行楷", "KaiTi", "楷体", serif', lineHeight: 1.1, marginLeft: '2px' }}>
                文旅创意学院
              </h2>
              <p className="text-heritage-secondary/70 mt-0 text-justify" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '10.4px', letterSpacing: '0.6px', fontWeight: 700, lineHeight: 1.1, marginTop: '-3px', marginLeft: '5px' }}>
                WEN LV CHUANG YI XUE YUAN
              </p>
            </div>
          </div>
        </div>

        {/* 右侧：搜索栏 */}
        <form
          onSubmit={handleSearch}
          className="flex items-center shrink rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          style={{
            width: '100%',
            maxWidth: '300px',
            minWidth: '80px',
            border: '1.5px solid rgba(174,45,45,0.25)',
            background: 'rgba(245,240,235,0.6)',
          }}
        >
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="搜索..."
            className="flex-1 min-w-0 px-2 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm outline-none bg-transparent text-gray-500 placeholder-gray-400"
          />
          <div className="w-px h-4 sm:h-5 bg-heritage-gold/30 shrink-0" />
          <button
            type="submit"
            className="px-2 sm:px-4 py-2 sm:py-2.5 text-heritage-gold hover:text-heritage-primary hover:bg-heritage-gold/5 transition-colors shrink-0"
            aria-label="搜索"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
