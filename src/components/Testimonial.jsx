"use client";
import * as React from "react";

function Testimonial() {
  return (
    <div className="flex overflow-hidden flex-col px-16 py-16 bg-[#013A83] max-md:px-5">
      <div className="self-center text-6xl font-medium text-center text-white max-md:text-4xl">
        Testimonials
      </div>
      <div className="flex flex-col items-center px-20 py-12 mt-16 w-full bg-white/20 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full border-2 border-white/30 ">
        <div className="text-5xl font-medium text-center text-white max-md:max-w-full max-md:text-4xl">
          Before & After Success Treatment
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="max-md:mr-2 max-md:max-w-full" space={33}>
              <div className="flex gap-5 max-md:flex-col max-md:">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8488648b2f889a2eb51d7afd0954a693e53d735?placeholderIfAbsent=true"
                      className="object-contain rounded-3xl aspect-[1.17] w-[211px]"
                    />
                    <div className="self-center mt-4">Before</div>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e812df6a19f2f305cdcd643df1a9aba6683c98f8?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.17] w-[211px]"
                    />
                    <div className="self-center mt-4">After</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-4 text-3xl font-medium text-center text-white">
              Intraocular Foreign body
            </div>
            <div className="self-center text-xl text-center text-white max-md:max-w-full">
              After Corneal tear repair and removal of nail .
            </div>
            <div
              className="mt-20 max-md:mt-10 max-md:mr-2 max-md:max-w-full"
              space={33}
            >
              <div className="flex gap-5 max-md:flex-col max-md:">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/393482de41d52a473b00cacc65de9a449306100b?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.18] w-[214px]"
                    />
                    <div className="self-center mt-4">Before</div>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd21511fadfa6690d59f1572e204b10553e0761?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.18] w-[213px]"
                    />
                    <div className="self-center mt-4">After</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-4 text-3xl font-medium text-center text-white">
              Double Pterygium
            </div>
            <div className="text-xl text-center text-white max-md:max-w-full">
              Double Pterygium excision with a split conjunctival <br />
              autograft on postoperative day 7
            </div>
          </div>
          <div className="shrink-0 self-stretch w-px border border-white/30 border-solid h-[879px]" />
          <div className="flex flex-col max-md:max-w-full">
            <div className="max-md:max-w-full" space={33}>
              <div className="flex gap-5 max-md:flex-col max-md:">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f17eadcac578d089b5c45d9c97eafe21b067e0?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.17] w-[212px]"
                    />
                    <div className="self-center mt-4">Before</div>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2318c0a7c4bee9cd7dcc636256bbf8c1bb96291?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.17] w-[212px]"
                    />
                    <div className="self-center mt-4">After</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-4 text-3xl font-medium text-center text-white">
              Pterygium excision
            </div>
            <div className="text-xl text-center text-white max-md:mr-1 max-md:max-w-full">
              Pterygium excision with conjunctival autografting <br />
              on post operative day 1
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full" space={33}>
              <div className="flex gap-5 max-md:flex-col max-md:">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5457a5e55a3f9a63b834683b75f9817469dd7843?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.18] w-[213px]"
                    />
                    <div className="self-center mt-4">Before</div>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-5 w-full text-xl text-center text-white whitespace-nowrap rounded-[16px] bg-white/5 max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/27547f03b08e8ae5e3cc48ca2cd31331e9a41f98?placeholderIfAbsent=true"
                      className="object-contain rounded-2xl aspect-[1.18] w-[213px]"
                    />
                    <div className="self-center mt-4">After</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-4 text-3xl font-medium text-center text-white">
              Refractory fungal
            </div>
            <div className="self-center text-xl text-center text-white max-md:max-w-full">
              Triple procedure-Cataract surgery with lens <br />
              implantation with a therapeutic corneal
              <br /> Transplantation on postoperative day 7
            </div>
          </div>
        </div>
        <div className="mt-8 text-xl italic text-white max-md:max-w-full">
          From pain to clarity. From infection to perfection. See the success in
          every eye.
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
