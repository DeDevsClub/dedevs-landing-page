const styles = {
  innerWidth: 'xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-16 py-10',

  topHeader: `
    border-t-2 border-primary border-opacity-30 rounded-t-2xl 
    bg-black bg-opacity-60 text-white p-1 font-nippo text-lg
  `,
  bottomHeader: `
    border-b-4 border-black border-opacity-30 rounded-b-2xl 
    bg-primary bg-opacity-100 text-black p-2 font-nippo text-3xl md:text-4xl
  `,

  section: `
            container py-6 sm:py-8
          `,

  // hover:bg-primary/80 hover:text-white hover:opacity-100 hover:border-secondary hover:m-0.5 
  heroLink: `w-5/6 md:w-full h-5/6 font-bespokeStencil text-2xl w-full 
              group/arrow bg-black/60 text-white rounded-b-[20px]
              border-b-4 border-t-0 border-black
            `,

  heroHeadText:
    `
      font-black text-flashWhite xl:text-[124px] xl:leading-[132px] lg:text-[80px] xs:text-[72px] text-[40px] lg:leading-[90px] mt-2
      xl:bg-transparent sm:bg-black bg-opacity-30 rounded-t-2xl p-2 sm:border-2 border-primary xl:border-0 text-center
    `,
  heroSubText:
    `
      font-nippo text-flashWhite font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] 
      bg-black bg-opacity-30 rounded-lg p-2 border-2 border-primary text-center lg:w-auto
    `,

  sectionHeadText:
    'text-primary font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-nippo bg-black bg-opacity-60',
  sectionSubText:
    'sm:text-[18px] text-[16px] text-flashWhite uppercase tracking-wider font-semibold font-nippo bg-primary',
};

export { styles };
