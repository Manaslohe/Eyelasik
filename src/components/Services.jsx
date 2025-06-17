import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fontsource/montserrat-alternates";
import "@fontsource/montserrat-alternates/400.css";
import "@fontsource/montserrat-alternates/500.css";
import "@fontsource/montserrat-alternates/700.css";
import Testimonial from "./Testimonial";
import BackButton from "./BackButton";

function ServiceCard({
  backgroundImage,
  icon,
  title,
  description,
  bottomImage,
  hasIconBackground = false,
  className = "",
  linkTo = null,
}) {
  const CardContent = () => (
    <>
      <img
        src={backgroundImage}
        className="object-cover absolute inset-0 size-full rounded-lg"
        alt=""
      />

      {/* Icon section */}
      <div className="relative h-[40px] md:h-[90px] flex items-center justify-center mt-4">
        <div className="flex relative flex-col justify-center items-center self-center bg-sky-500 border border-white border-solid h-[40px] w-[40px] md:h-[86px] md:w-[86px] rounded-full">
          <img
            src={icon}
            className="object-contain w-[20px] md:w-full aspect-square"
            alt=""
          />
        </div>
      </div>

      {/* Title section */}
      <div className="relative flex items-center justify-center min-h-[45px] md:min-h-[80px] mt-4 md:mt-6">
        <div
          className="relative self-center text-lg md:text-2xl font-semibold text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Description section */}
      <div className="relative flex-grow flex items-start justify-center mb-4 md:mb-4">
        <div className="relative text-sm md:text-lg text-center px-1 md:px-4">
          {description}
        </div>
      </div>

      {/* Bottom image section */}
      {bottomImage && (
        <div className="relative mb-4 md:mb-4 w-[80%] md:w-full mx-auto">
          <img
            src={bottomImage}
            className="object-contain w-full rounded-lg aspect-[1.47]"
            alt=""
          />
        </div>
      )}
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block w-full">
        <div
          className={`flex relative flex-col text-center text-white w-full min-h-[350px] md:min-h-[450px] md:aspect-[0.571] px-4 py-6 md:px-4 md:py-6 font-['Montserrat_Alternates'] ${className} cursor-pointer hover:transform hover:scale-105 transition-transform duration-300`}
        >
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`flex relative flex-col text-center text-white w-full min-h-[350px] md:min-h-[450px] md:aspect-[0.571] px-4 py-6 md:px-4 md:py-6 font-['Montserrat_Alternates'] ${className}`}
    >
      <CardContent />
    </div>
  );
}

// New Mobile Card Component
function MobileServiceCard({
  backgroundImage,
  icon,
  title,
  description,
  bottomImage,
  hasIconBackground = false,
  className = "",
  linkTo = null,
}) {
  const CardContent = () => (
    <>
      {/* Icon section */}
      <div className="relative h-[60px] flex items-center justify-center">
        <div className="flex relative justify-center items-center bg-white/20 backdrop-blur-sm h-[60px] w-[60px] rounded-full border-2 border-white">
          <img
            src={icon}
            className="object-contain w-[30px] aspect-square"
            alt=""
          />
        </div>
      </div>

      {/* Title section */}
      <div className="relative mt-6">
        <div
          className="text-xl font-semibold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Description section */}
      <div className="flex-grow mt-4">
        <div className="text-sm leading-relaxed opacity-90">{description}</div>
      </div>

      {/* Bottom image section */}
      {bottomImage && (
        <div className="mt-6 w-full">
          <img
            src={bottomImage}
            className="object-contain w-full rounded-lg max-h-[120px]"
            alt=""
          />
        </div>
      )}
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block w-full">
        <div
          className={`flex relative flex-col text-center text-white w-full min-h-[400px] bg-white/5 border-2 border-white/60 rounded-4xl px-6 py-8 font-['Montserrat_Alternates'] ${className} cursor-pointer hover:transform hover:scale-105 transition-transform duration-300`}
        >
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`flex relative flex-col text-center text-white w-full min-h-[400px] bg-white/5 border-2 border-white/60 rounded-4xl px-6 py-8 font-['Montserrat_Alternates'] ${className}`}
    >
      <CardContent />
    </div>
  );
}

function Services() {
  const [isMobile, setIsMobile] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Add ref for testimonial section
  const testimonialRef = React.useRef(null);

  // Scroll handler function
  const scrollToSection = (section) => {
    if (section === "testimonials" && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "services") {
      navigate('/services/lasik-refractive-surgery');
    }
  };

  const servicesData = [
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1919aefd02d9ba95d6721401a73ff29cbb21c36c",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdb3cbf12d37cd3404f97e1faf2ca7f880821783",
      title: "Cataract surgery",
      description:
        "Cataract is a common condition where the eye's lens becomes cloudy, causing blurred vision. It usually develops with age and affects daily activities. Cataract surgery safely restores clear vision by replacing the cloudy lens with an artificial one.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b3c838e6f10f3bdd092a0a715b0ba79c940ee1d",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1ec3a3cddd1f29226dccd0a546d4ab4d720db90",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de829228c0e72bd6c6f3e4c9f468d6a06a380dcd",
      title: "LASIK & Refractive <br />Surgery",
      description:
        "LASIK & Refractive Surgery are popular procedures that correct vision problems like nearsightedness and astigmatism. They reshape the cornea using lasers to improve focus, reducing the need for glasses or contacts. These quick, safe surgeries offer fast recovery and clearer vision.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e7467d8d00bcdae764eee124eb3c9bcfd354822",
      linkTo: "/services/lasik-refractive-surgery",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/264a0c885e273c14d6a748716d9983cff7d5ebeb",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3280ca29e21eab46380d1e82556fde0d7ba4aca1",
      title: "Pterygium surgery",
      description:
        "Pterygium surgery is performed to remove a non-cancerous growth on the eye's surface that can cause redness, irritation, and blurred vision. It is usually caused by UV exposure or dust. The procedure is safe and helps restore comfort and appearance, preventing the growth from affecting vision further.",
      hasIconBackground: true,
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/09f9ff2897d48b5e284b2b3267caf07d06180376",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1c48f67f1c0cea24079840719f00c544da674d9",
      title: "Collagen Cross-Linking",
      description:
        "Collagen Cross-Linking is a safe and effective procedure used to treat corneal ectasias like keratoconus. It strengthens the cornea by using UV light and vitamin B2 (riboflavin), helping to halt further thinning or bulging. This treatment helps preserve vision and prevent the condition from worsening.",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67143c61876d10e103b5995ddd4d03adbeebb2e8",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6625808479dddee9879939ab8620995589745a7",
      title: "Amniotic Membrane <br />Transplantation",
      description:
        "Amniotic membrane transplantation is a healing procedure used to treat damaged or diseased areas of the eye. It promotes tissue repair, reduces inflammation, and supports recovery in conditions like ulcers, burns, or severe dryness. It's a safe and effective method to restore eye health.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4901ed493c93e83ed7e91b2730055a9285fbfdb3",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73cc1b2570dc36605ef23987018cf5a3af5a7481",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a9a53306464f0e5589e9238ef432b4854dfe24a",
      title: "Chemical and Thermal<br />burns",
      description:
        "Chemical and thermal burns to the eyes are serious injuries that require immediate care to prevent vision loss. Prompt rinsing and medical attention are critical. Specialized treatment can reduce damage, relieve pain, and help restore eye health and function.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/206fd8c11dedd71d91be1495f871d7a4d1b248dc",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/792d3d8e87ef5f234d6d5f4dc5ebf67fb03225c0",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/20100e4d666157d8d5306c10397385b737237675",
      title: "Ocular allergy and dry <br />eyes clinic",
      description:
        "Ocular allergies and dry eyes cause irritation, redness, and discomfort. Specialized clinics offer targeted treatments like eye drops, lifestyle changes, and advanced therapies. Early diagnosis helps manage symptoms effectively and improves daily eye comfort.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4c7cf1fa5d0dcdad54ce593d0ed0dd73b9168b01",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e780389054858c63f022bf4a42f4f60fd4dd0f23",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6861ab045b8dc5dd66a7993098ed09a744ee45f",
      title: "Emergency eye care <br />services-Ocular Trauma",
      description:
        "Ocular trauma refers to sudden injuries to the eye that require immediate medical attention. Emergency eye care services treat conditions like cuts, blunt force injuries, burns, or foreign objects. Prompt treatment is crucial to prevent vision loss and protect long-term eye health.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/98a7792a945c3b69ed6028140b8ed12931e60bb6",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02ba5cfe619fc10a1d4bd80a7fff08542eb6cd95",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f753bc30909c58dc38268ce253cf6aa3ff338e5",
      title: "Corneal & Transplants",
      description:
        "The cornea is the eye's clear front layer essential for vision. When damaged by disease or injury, vision becomes blurry or lost. A corneal transplant replaces the damaged tissue with healthy donor tissue, restoring sight and eye health. It's a safe and effective procedure with high success rates. 4o",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e7467d8d00bcdae764eee124eb3c9bcfd354822",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0431daa6729c055130b32d07ad08f1171467a54f",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88c534480963fa83ff42e420fa92e28c09cac5ed",
      title: "Ocular surface <br />tumours",
      description:
        "Ocular surface tumours are abnormal growths on the eye's surface that can be benign or cancerous. Early diagnosis and treatment, including surgery or topical therapies, are essential to protect vision and eye health. Regular check-ups aid in early detection and better outcomes.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5d788f90adc7f665001046af52d17dfc9c4673a0",
      hasIconBackground: true,
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9d7c634dd3b1735184fd340e4406cca8134447d1",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a1b2f28e1ae197563667c40ceb4c09f344057ee",
      title: "Keratoconus clinic <br />surgery",
      description:
        "Keratoconus surgery helps treat the thinning and bulging of the cornea, improving vision and eye stability. Treatments include corneal cross-linking, implants, or corneal transplants, depending on severity. Early intervention can slow progression and protect long-term vision.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4d38a220956dceab479e76219df410ce7185c8",
      hasIconBackground: true,
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/af91e21ccf366adf43ac7ea868c967e55085f721",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79e2fa7c4d2e4fe80079bb9a18678313dc671227",
      title: "Dry Eye & Ocular <br />Surface Treatment",
      description:
        "Dry Eye is a common yet uncomfortable condition where the eyes produce insufficient tears or tears evaporate too quickly. This leads to irritation, redness, blurred vision, and general discomfort. Causes include prolonged screen time, environmental factors, aging, and underlying health conditions.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b3c838e6f10f3bdd092a0a715b0ba79c940ee1d",
    },
    {
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e15e207307ede18796ba4b43008cb9c18a70dcbd",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa0f198059d465164d5345a564bf01d8f488ecd9",
      title: "Comprehensive eye <br />care",
      description:
        "Regular eye care is key to maintaining good vision and overall eye health. It includes routine eye exams, proper screen habits, UV protection, and a healthy diet. Early detection through check-ups can prevent serious eye conditions. Protecting your eyes daily helps ensure clear vision for years to come.",
      bottomImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e1cf63881e303b462e5fde0da903aa2cf301fdfb",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-full px-2 md:px-16 pt-8 pb-2.5 bg-[#013A83] font-['Montserrat_Alternates']">
        {/* Background Image */}
        <img
          src="/service.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Add BackButton */}
        <BackButton />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Updated Header menu */}
          <div className="flex justify-end items-center px-2 md:px-16 pt-8 max-w-full text-white text-xl gap-10">
            <div
              onClick={() => scrollToSection("services")}
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              SERVICES
            </div>
            <div
              onClick={() => scrollToSection("testimonials")}
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              Testimonials
            </div>
          </div>

          {/* Page title */}
          <div className="flex justify-center mt-6 text-6xl max-md:text-4xl text-white font-medium">
            Services
          </div>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 mb-8 w-[95%] md:w-[90%] max-w-screen-sm md:max-w-none self-center">
            {servicesData.map((service, index) =>
              isMobile ? (
                <MobileServiceCard key={index} {...service} />
              ) : (
                <ServiceCard
                  key={index}
                  {...service}
                  className={`max-w-full ${index === servicesData.length - 1 ? "md:col-start-2" : ""}`}
                />
              ),
            )}
          </div>
        </div>
      </div>

      {/* Add ref to Testimonial component */}
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
    </>
  );
}

export default Services;
