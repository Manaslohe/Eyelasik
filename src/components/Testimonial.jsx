"use client";
import * as React from "react";
import "@fontsource/montserrat-alternates";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/500.css";
import "@fontsource/montserrat-alternates/700.css";

function Testimonial() {
  const testimonialCard = ({ beforeImage, afterImage, title, description, className = "", customWidth = true, isLast = false }) => (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        {/* Before/After Cards Container - Changed flex-col to maintain flex row */}
        <div className="flex justify-center w-full">
          <div className="flex gap-8 justify-center w-full max-md:gap-4">
            {/* Before Card - Adjusted width for mobile */}
            <div className="flex justify-center w-[240px] max-md:w-1/2">
              <div className="flex flex-col items-center w-full px-4 py-5 text-xl text-center text-white rounded-[16px] bg-white/15 max-md:px-2 max-md:py-3">
                <div className="w-[211px] h-[180px] max-md:w-full max-md:h-[120px] flex items-center justify-center">
                  <img
                    src={beforeImage}
                    className="w-full h-full object-cover rounded-3xl"
                    alt="Before"
                  />
                </div>
                <div className="mt-4 max-md:mt-2 max-md:text-base">Before</div>
              </div>
            </div>
            {/* After Card - Adjusted width for mobile */}
            <div className="flex justify-center w-[240px] max-md:w-1/2">
              <div className="flex flex-col items-center w-full px-4 py-5 text-xl text-center text-white rounded-[16px] bg-white/15 max-md:px-2 max-md:py-3">
                <div className="w-[211px] h-[180px] max-md:w-full max-md:h-[120px] flex items-center justify-center">
                  <img
                    src={afterImage}
                    className="w-full h-full object-cover rounded-3xl"
                    alt="After"
                  />
                </div>
                <div className="mt-4 max-md:mt-2 max-md:text-base">After</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-3xl max-md:text-2xl font-medium text-center text-white max-md:mt-4">
          {title}
        </div>
        <div className={`mt-3 text-xl max-md:text-base text-center text-white ${customWidth ? 'max-w-[520px]' : 'max-w-[480px]'} max-md:px-4`} 
          dangerouslySetInnerHTML={{ __html: description }} 
        />
      </div>
      {/* Add divider line in mobile */}
      {!isLast && (
        <div className="hidden max-md:block w-full border-t border-white/60 my-4" />
      )}
    </>
  );

  const testimonialData = [
    {
      beforeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8488648b2f889a2eb51d7afd0954a693e53d735",
      afterImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e812df6a19f2f305cdcd643df1a9aba6683c98f8",
      title: "Intraocular Foreign body",
      description: "After Corneal tear repair and removal of nail."
    },
    {
      beforeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/393482de41d52a473b00cacc65de9a449306100b",
      afterImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd21511fadfa6690d59f1572e204b10553e0761",
      title: "Double Pterygium",
      description: "Double Pterygium excision with a split conjunctival autograft on postoperative day 7"
    },
    {
      beforeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f17eadcac578d089b5c45d9c97eafe21b067e0",
      afterImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2318c0a7c4bee9cd7dcc636256bbf8c1bb96291",
      title: "Pterygium excision",
      description: "Pterygium excision with conjunctival autografting on post operative day 1"
    },
    {
      beforeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/5457a5e55a3f9a63b834683b75f9817469dd7843",
      afterImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/27547f03b08e8ae5e3cc48ca2cd31331e9a41f98",
      title: "Refractory fungal",
      description: "Triple procedure-Cataract surgery with lens implantation with a therapeutic corneal  Transplantation on postoperative day 7",
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col px-16 py-16 bg-[#013A83] max-md:px-4 max-md:py-8 font-['Montserrat_Alternates']">
      <div className="self-center text-6xl max-md:text-4xl font-medium text-center text-white">
        Testimonials
      </div>
      <div className="flex flex-col items-center px-20 py-12 mt-16 w-full bg-white/20 rounded-[40px] max-md:px-4 max-md:py-8 max-md:mt-8 max-md:rounded-[20px] border-2 border-white/30">
        <div className="text-5xl max-md:text-3xl font-medium text-center text-white max-md:max-w-full">
          Before & After Success Treatment
        </div>
        <div className="flex gap-16 justify-center items-start self-stretch mt-12 max-md:mt-8 max-md:gap-8 max-md:flex-col">
          <div className="flex flex-col items-center justify-start gap-24 max-md:gap-0 max-md:w-full">
            {testimonialCard({ ...testimonialData[0] })}
            {testimonialCard({ ...testimonialData[1], isLast: true })}
          </div>
          <div className="shrink-0 self-stretch w-px border border-white/60 border-solid h-[840px] max-md:hidden" />
          {/* Add mobile divider after 4th card */}
          <div className="hidden max-md:block w-full border-t border-white/60 my-4" />
          <div className="flex flex-col items-center justify-start gap-16 max-md:gap-0 max-md:w-full">
            {testimonialCard({ ...testimonialData[2] })}
            {testimonialCard({ ...testimonialData[3], customWidth: false, isLast: true })}
          </div>
        </div>
        <div className="mt-8 text-xl max-md:text-base italic text-white max-md:max-w-full max-md:px-4">
          From pain to clarity. From infection to perfection. See the success in every eye.
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

