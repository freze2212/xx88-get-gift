function Footer() {
  const navLinks = [
    'Giới thiệu về RR88',
    'Điều khoản & điều kiện',
    'Chơi có trách nhiệm',
    'Miễn trách nhiệm',
    'Quyền riêng tư',
    'Hướng dẫn nạp rút',
    'Câu hỏi thường gặp',
    'Liên hệ',
  ]

  const desktopIcons = Array.from({ length: 12 }, (_, idx) => `/icon-${idx + 1}.webp`)
  const mobileIcons = [
    '/icon-1.webp',
    '/icon-2.webp',
    '/icon-3.webp',
    '/icon-4.webp',
    '/icon-5.webp',
    '/icon-6.webp',
    '/icon-7.webp',
    '/icon-8.webp',
    '/icon-9.webp',
    '/icon-fb.png',
    '/icon-ytb.png',
    '/icon-tele.png',
  ]

  return (
    <footer className="w-full -mt-[230px] sm:-mt-[215px] md:mt-[-100px] relative z-20 bg-white text-gray-800">
      <div className="mx-auto flex w-full sm:w-11/12 md:w-9/12 flex-col gap-3 sm:gap-[9px] md:gap-2 py-4 sm:py-[18px] md:py-6 px-4 sm:px-5 md:px-6 text-[11px] sm:text-[11.5px] md:text-[13px]">
        {/* Top - Ẩn trên mobile */}
         <div className="hidden md:flex w-full flex-row items-center justify-between gap-[14px] sm:gap-[15px] md:gap-4">
          {/* Banner */}
           <div className="flex flex-col justify-start">
            <img
              src="/banner.webp"
              alt="Footer Banner"
              className="h-auto max-w-[210px] sm:max-w-[222px] md:max-w-[234px] object-contain"
            />
            <img
              src="/text-banner.webp"
              alt="Text Banner"
              className="h-auto max-w-[210px] sm:max-w-[222px] md:max-w-[234px] object-contain mt-0"
            />
          </div>
          {/* Slogan + Partner */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img
                src="/slogan.webp"
                alt="Footer Slogan"
                className="w-[240px] sm:w-[253px] md:w-[266px] h-auto object-contain pb-3 sm:pb-[14px] md:pb-4"
              />
            </div>
            <div className="mt-2 flex items-center gap-3 sm:gap-[14px] md:gap-4">
              {/* Text block */}
              <div className="flex flex-col items-start">
                <span 
                  className="text-gray-800 text-[19px] sm:text-[20px] md:text-[21.32px] leading-[100%]"
                  style={{
                    fontFamily: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Juventus FC & KJC
                </span>
                <span 
                  className="text-gray-800 text-[19px] sm:text-[20px] md:text-[21.32px] leading-[100%]"
                  style={{
                    fontFamily: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Đối tác chính thức Năm 2025-2026
                </span>
              </div>
              {/* Logo block */}
              <div className="flex items-center">
                <img
                  src="/juve-kjc.webp"
                  alt="Juventus & KJC"
                  className="h-[58px] sm:h-[61px] md:h-[64px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
          {/* Collab Info */}
           <div className="flex justify-end">
            <div
              className="border border-gray-200 rounded-xl px-3 sm:px-[14px] md:px-4 py-2.5 sm:py-[11px] md:py-3 flex items-stretch gap-3 sm:gap-[14px] md:gap-4 w-full sm:max-w-[650px] md:max-w-[732px] bg-gray-50"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span 
                    className="block font-extrabold text-[21px] sm:text-[22.5px] md:text-[23px] leading-[131%] mb-1" 
                    style={{ 
                      fontWeight: 900,
                      background: 'linear-gradient(180deg, rgba(1, 158, 251, 1) 0%, rgba(1, 118, 220, 1) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    KJC | JUVENTUS – ĐỐI TÁC ĐỘC QUYỀN KHU VỰC CHÂU Á
                  </span>
                  <span className="block text-gray-700 text-[13.5px] sm:text-[14px] md:text-[15px] leading-snug">
                    <span className="font-semibold">KJC</span> hợp tác độc quyền với{' '}
                    <span className="font-semibold">CLB Juventus</span> tại châu Á, đưa thương hiệu vươn tầm quốc tế. Juventus – biểu tượng bóng đá Ý với nhiều danh hiệu lẫy lừng – trở thành đại sứ độc quyền quyền, nâng uy tín...
                  </span>
                </div>
                <div className="mt-2">
                  <button className="text-gray-600 text-sm underline hover:opacity-80 transition">Ẩn bớt</button>
                </div>
              </div>
              <div className="flex-shrink-0 relative w-[220px] sm:w-[233px] md:w-[246px] h-auto mt-auto mb-auto rounded-[8px] overflow-hidden">
                <img
                  src="/collab.webp"
                  alt="Collab KJC-Juventus"
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="w-full">
          <div className="mb-4 md:mb-2 flex justify-center sm:hidden">
            <img
              src="/logo-ft.webp"
              alt="RR88 Footer Logo"
              className="h-[32px] w-auto object-contain"
            />
          </div>
          <nav className="flex flex-wrap md:flex-nowrap w-full items-center justify-center md:justify-between gap-x-2 gap-y-1 md:gap-0 text-[11px] sm:text-[12px] md:text-[17px] text-gray-600 leading-[131%] font-normal">
            {navLinks.map((label, index) => (
              <>
                <button
                  key={`nav-${index}`}
                  className="whitespace-nowrap text-[11px] sm:text-[12px] md:text-[17px] font-normal text-gray-600 hover:text-gray-800 transition"
                >
                  {label}
                </button>
                {index < navLinks.length - 1 && (
                  <span key={`sep-${index}`} className="text-[11px] sm:text-[12px] md:text-[17px] text-gray-400">
                    |
                  </span>
                )}
              </>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="w-full">
          {/* Mobile icon grid */}
          <div className="mt-2 grid grid-cols-6 gap-3 w-full items-center justify-center py-2 md:hidden">
            {mobileIcons.map((src, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center hover:opacity-80 transition"
              >
                <img
                  src={src}
                  alt={`Footer icon ${idx + 1}`}
                  className="w-[26px] sm:w-[32px] md:w-[38px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Desktop layout giữ nguyên */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap w-full items-center justify-center md:justify-between gap-2 md:gap-0 py-2">
            {desktopIcons.map((src, idx) => (
              <div
                key={`desktop-icon-${idx}`}
                className="flex items-center justify-center hover:opacity-80 transition"
              >
                <img
                  src={src}
                  alt={`Footer icon ${idx + 1}`}
                  className="w-[28px] sm:w-[32px] md:w-[44px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

