import React, { useState, useRef } from "react";
import "@fontsource/montserrat-alternates";
import BackButton from "./BackButton";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

const services = [
	{
		id: 1,
		title: "LASIK & Refractive Surgery",
		heroImage:
			"https://cdn.builder.io/api/v1/image/assets/TEMP/684bf2e19ac736268f72310413b6d4473f85711a",
		backgroundImage: "path/to/blue-background.jpg",
		faqs: [
			{
				question: "What is the lasik?",
				answer:
					"LASIK (Laser-Assisted In Situ Keratomileusis) is a popular eye surgery that corrects vision problems like nearsightedness and astigmatism by reshaping the cornea with a laser. The procedure is quick, usually painless, and offers fast recovery, often improving vision within a day or two. It's a safe and effective alternative to glasses or contacts for many people.",
			},
			{
				question: "Benefits of lasik?",
				answer: (
					<div className="flex flex-col gap-2">
						<div>• Improves vision without the need for glasses or contact lenses.</div>
						<div>• Quick and painless procedure.</div>
						<div>• Fast recovery time, often within a day or two.</div>
						<div>• Long-lasting results with reduced dependence on corrective eyewear.</div>
						<div>• Enhances convenience in daily activities and sports.</div>
					</div>
				),
			},
			{
				question: "When to go for LASIK?",
				answer:
					"You should consider LASIK when your vision has been stable for at least one year, and you are tired of relying on glasses or contact lenses. It's ideal for adults over 18 with common vision problems like nearsightedness, farsightedness, or astigmatism. However, it's important to consult an eye specialist to ensure your eyes are healthy and suitable for the procedure before deciding.",
			},
			{
				question: "What is the procedure for undergoing LASIK?",
				answer:
					"During LASIK, the surgeon first creates a thin flap on the cornea's surface using a microkeratome or femtosecond laser. This flap is then gently lifted to expose the underlying corneal tissue. A precise excimer laser reshapes the cornea to correct your vision by removing microscopic amounts of tissue. After reshaping, the flap is carefully placed back, where it naturally adheres without stitches. The entire process is quick, usually lasting about 10-15 minutes per eye, and is mostly painless.",
			},
			{
				question: "Bynocs Therapy:",
				answer:
					"Bynocs Therapy is an advanced vision therapy program primarily designed to treat Lazy Eye (Amblyopia) in both children and adults. It uses a scientifically developed, computer-based platform that stimulates the weaker eye through engaging visual tasks and games, helping both eyes work together. Unlike traditional treatments like eye patching, Bynocs offers a non-invasive, screen-based approach that's more comfortable and often more effective. The therapy is guided by an eye specialist and usually requires regular sessions over several weeks to achieve optimal results.",
			},
		],
	},
	{
		id: 2,
		title: "Cataract surgery",
		heroImage: "/service2/hero.png", // Updated path to the hero image
		backgroundImage: "path/to/blue-background.jpg",
		faqs: [
			{
				question: "What is the Cataract?",
				answer:
					"Cataract is a common age condition where the natural lens of the eye becomes cloudy, leading to blurred or dim vision. It usually develops slowly with age but can also result from injury, diabetes, or prolonged exposure to UV rays. Symptoms include smokey-looking clarity, glare, halos around lights and faded colors. Cataracts can be treated effectively with a simple surgery where the cloudy lens is replaced with a clear artificial lens, restoring sharp vision.",
			},
			{
				question: "Benefits of Cataract?",
				answer: (
					<div className="flex flex-col gap-2">
						<div>• Clearer Vision - Restores sharp, bright, and focused vision.</div>
						<div>• Improved Quality of Life - Makes daily activities like reading, driving, and watching TV easier.</div>
						<div>• Quick and Safe Procedure - A simple outpatient surgery with fast recovery.</div>
						<div>• Reduced Dependence on Glasses - Many patients need little or no vision correction after surgery.</div>
						<div>• Better Color Perception - Colors appear brighter and more vibrant after the cloudy lens is removed.</div>
					</div>
				),
			},
			{
				question: "When to go for cataract?",
				answer:
					"You should consider cataract surgery when blurred or cloudy vision starts interfering with your daily activities like reading, driving, or recognizing faces. If you experience increased sensitivity to light, glare, or difficulty seeing at night, it may be time to consult an eye specialist. Surgery is usually recommended when the cataract significantly affects your quality of life, and glasses or contacts no longer help.",
			},
			{
				question: "What is the procedure for undergoing cataract?",
				answer:
					"Cataract surgery is a quick and safe procedure performed under local anesthesia. First, the surgeon makes a small incision in the eye. Then, the cloudy natural lens (cataract) is broken up using ultrasound (phacoemulsification) and gently removed. After that, a clear artificial lens (called an intraocular lens or IOL) is inserted in place of the old one. The incision usually heals on its own without stitches. The process takes about 15-30 minutes, and most patients go home the same day with improved vision.",
			},
		],
	},
];

// Updated FAQ Section Component
function FAQSection({ question, answer, isOpen, onClick }) {
	return (
		<div className="flex flex-col mb-4 sm:mb-6">
			<div className="flex gap-1.5 items-center cursor-pointer" onClick={onClick}>
				<div className="bg-white rounded-full h-[8px] w-[8px] sm:h-[11px] sm:w-[11px]" />
				<div className="flex justify-between items-center flex-1 bg-[#007FFF] rounded-[20px] sm:rounded-[30px] py-2 sm:py-3 px-4 sm:px-6 border border-white hover:bg-[#0066cc] transition-colors duration-300">
					<span className="text-white text-base sm:text-xl md:text-2xl font-medium pr-2">{question}</span>
					<div className="bg-white rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] flex items-center justify-center ml-2 sm:ml-4 flex-shrink-0">
						<span className={`text-sky-500 text-xl sm:text-2xl font-bold transition-all duration-300 ${
							isOpen ? "rotate-180" : "rotate-0"
						}`}>
							{isOpen ? "−" : "+"}
						</span>
					</div>
				</div>
			</div>
			<div 
				className={`overflow-hidden transition-all duration-500 ease-in-out origin-top ${
					isOpen 
						? "max-h-[2000px] opacity-100 scale-y-100 mt-3 sm:mt-4" 
						: "max-h-0 opacity-0 scale-y-95"
				}`}
			>
				<div className="text-white text-sm sm:text-base md:text-xl pl-4 sm:pl-[30px]">
					{answer}
				</div>
			</div>
		</div>
	);
}

function Service1() {
	const [openFaqIndices, setOpenFaqIndices] = useState({
		service1: null,
		service2: null
	});
	const autoplay = useRef(
		Autoplay({ delay: 3500, stopOnInteraction: false })
	);

	const handleFaqClick = (serviceId, index) => {
		setOpenFaqIndices(prev => ({
			...prev,
			[serviceId]: prev[serviceId] === index ? null : index
		}));
	};

	const renderService = (service, serviceId) => (
		<div className={`w-full flex flex-col items-center ${serviceId === 'service2' ? 'mt-16 sm:mt-24 md:mt-32' : ''}`}>
			<div className="inline-block bg-white text-[#007FFF] text-xl sm:text-2xl md:text-[2.5rem] font-medium rounded-full py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-12 text-center mb-6 sm:mb-8 md:mb-11">
				{service.title}
			</div>

			<div className="mb-6 sm:mb-8 md:mb-11 w-full px-4 sm:px-0">
				<img
					src={service.heroImage}
					className="w-full sm:w-xl mx-auto rounded-2xl sm:rounded-3xl"
					alt={service.title}
				/>
			</div>

			<div className="w-full px-2 sm:px-4 md:px-9">
				{service.faqs.map((faq, index) => (
					<FAQSection
						key={index}
						question={faq.question}
						answer={faq.answer}
						isOpen={openFaqIndices[serviceId] === index}
						onClick={() => handleFaqClick(serviceId, index)}
					/>
				))}
			</div>

			<div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-5/6 pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10 py-4 sm:py-6">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[autoplay.current]}
					className="w-full"
				>
					<CarouselContent className="-ml-2 sm:-ml-4">
						{[1, 2, 3, 4].map((id) => (
							<CarouselItem key={id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
								<div className="transform transition-transform duration-300 hover:scale-105">
									<img
										src={`/${serviceId === 'service1' ? 'services1' : 'service2'}/${id}.png`}
										alt={`Testimonial ${id}`}
										className="w-full h-auto rounded-xl sm:rounded-2xl"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);

	return (
		<div className="flex flex-col items-center min-h-screen bg-[#013A83] pt-16 sm:pt-12 md:pt-16 pb-20 sm:pb-10 md:pb-12 px-3 sm:px-4 md:px-6 font-['Montserrat_Alternates']">
			{/* Updated Back Button positioning */}
			<div className="fixed sm:absolute top-4 left-4 z-50 bg-white/10 rounded-full p-1.5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:top-6 md:top-8 sm:left-6 md:left-8">
				<BackButton />
			</div>

			{/* Services */}
			{renderService(services[0], 'service1')}
			{renderService(services[1], 'service2')}
		</div>
	);
}

export default Service1;


