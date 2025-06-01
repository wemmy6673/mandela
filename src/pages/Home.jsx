import React from "react";
import { motion } from "framer-motion";
import Card1Image from "../assets/froot.png";
import Card2Image from "../assets/pikachu.png";
import Card3Image from "../assets/darth.png";
import Card4Image from "../assets/monopoly.png";
import MandelaImage from "../assets/mandela-bg.png";

function Home() {
	// Memory card data with exact content from the image
	const memoryCards = [
		{
			title: "WHAT YOU REMEMBER",
			borderColor: "border-cyan-400",
			textColor: "text-cyan-400",
			topImage: Card1Image,
			bottomImage: Card1Image,
		},
		{
			title: "WHAT YOU REMEMBER",
			borderColor: "border-purple-400",
			textColor: "text-purple-400",
			topImage: Card2Image,
			bottomImage: Card3Image,
		},
		{
			title: "WHAT YOU REMEMBER",
			borderColor: "border-cyan-400",
			textColor: "text-cyan-400",
			topImage: Card4Image,
			bottomImage: Card4Image,
		},
		{
			title: "WHAT WAS REAL",
			borderColor: "border-purple-400",
			textColor: "text-purple-400",
			topText: "LUKE, I AM TM FATHER",
			bottomText: "NO, I AM TM FATHER",
			topTextColor: "text-cyan-400",
			bottomTextColor: "text-blue-400",
		},
	];

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const cardVariant = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	return (
		<>
			{/* Google Fonts Import */}

			<div className="min-h-screen bg-black text-white relative overflow-hidden font-['Bebas_Neue']">
				{/* Subtle dotted/grain texture background */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.15 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="fixed inset-0 pointer-events-none z-20"
					style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
						backgroundSize: "8px 8px",
					}}
				></motion.div>

				{/* Main Content Container */}
				<div className="relative z-30 max-w-7xl mx-auto">
					{/* Hero Section */}
					<section className="min-h-screen flex items-start md:items-center  px-4 sm:px-6 md:px-8 lg:px-16 relative pt-16 sm:pt-0">
						{/* Background with Mandela image - full width across viewport */}
						<motion.div
							initial={{ opacity: 0, scale: 1.1 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="absolute inset-0 -left-[50vw] -right-[50vw] ml-[50%] mr-[50%]"
						>
							<img
								src={MandelaImage}
								alt="Nelson-bg Mandela"
								className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
						</motion.div>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={staggerContainer}
							className="max-w-2xl relative z-10 w-full"
						>
							<motion.h1
								variants={fadeInUp}
								className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-cyan-400 leading-tight mb-6 sm:mb-8 tracking-wider"
							>
								YOU REMEMBER
								<br />
								IT DIFFERENTLY.
								<br />
								SO DO WE.
							</motion.h1>

							<motion.p
								variants={fadeInUp}
								className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-lg leading-relaxed tracking-wide"
							>
								Explore the phenomenon of fractured memory, alternate timelines, and digital delusion.
							</motion.p>

							<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
								<motion.button
									whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
									whileTap={{ scale: 0.95 }}
									transition={{ duration: 0.15 }}
									className="px-6 sm:px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300 font-medium tracking-widest text-base sm:text-lg w-full sm:w-auto text-center"
								>
									ENTER THE GLITCH
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
									whileTap={{ scale: 0.95 }}
									transition={{ duration: 0.15 }}
									className="px-6 sm:px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors duration-300 font-medium tracking-widest text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
								>
									<span className="sm:hidden">WHAT IS THE MANDELA EFFECT?</span>
									<span className="hidden sm:inline">
										WHAT IS THE
										<br />
										MANDELA EFFECT?
									</span>
								</motion.button>
							</motion.div>

							{/* Social & Contract Info */}
							<motion.div variants={fadeInUp} className="mt-12 sm:mt-16 space-y-4 sm:space-y-6">
								{/* Twitter */}
								<motion.div
									whileHover={{ x: 10 }}
									transition={{ duration: 0.2 }}
									className="flex items-center gap-2 sm:gap-3 md:gap-4 group overflow-hidden"
								>
									<div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60 flex-shrink-0"></div>
									<div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
										<motion.svg
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.4 }}
											className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</motion.svg>
										<a
											href="https://x.com/MNDLZone"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium tracking-widest text-xs sm:text-sm md:text-base truncate min-w-0"
										>
											@MNDLZone
										</a>
									</div>
								</motion.div>

								{/* Contract Address */}
								<motion.div
									whileHover={{ x: 10 }}
									transition={{ duration: 0.2 }}
									className="flex items-start gap-2 sm:gap-3 md:gap-4 group overflow-hidden"
								>
									<div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 flex-shrink-0 mt-1"></div>
									<div className="flex items-start gap-2 sm:gap-3 min-w-0 flex-1">
										<motion.div
											whileHover={{ scale: 1.2 }}
											transition={{ duration: 0.2 }}
											className="w-4 sm:w-5 h-4 sm:h-5 border border-purple-400 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<motion.div
												animate={{ opacity: [0.6, 1, 0.6] }}
												transition={{ duration: 1.5, repeat: Infinity }}
												className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full"
											></motion.div>
										</motion.div>

										<div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
											<span className="text-gray-400 text-xs sm:text-sm font-medium tracking-widest">CONTRACT:</span>
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												onClick={() => navigator.clipboard.writeText("COMING SOON")}
												className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono text-xs sm:text-sm md:text-base tracking-wider hover:bg-purple-400/5 px-2 py-1 rounded text-left w-fit max-w-full truncate"
												title="Click to copy"
											>
												COMING SOON
											</motion.button>
										</div>
									</div>
								</motion.div>
							</motion.div>
						</motion.div>
					</section>

					{/* Subtle divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true }}
						className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 mx-4 sm:mx-6 md:px-8 lg:mx-16"
					></motion.div>

					{/* Memory Glitches Section */}
					<motion.section
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={staggerContainer}
						className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 lg:py-24"
					>
						<motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
							<motion.h2
								variants={fadeInUp}
								className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-6 sm:mb-8 tracking-wider"
							>
								MEMORY GLITCHES
							</motion.h2>
							<motion.div
								variants={fadeInUp}
								className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl leading-relaxed space-y-2 sm:space-y-3 tracking-wide"
							>
								<motion.p variants={fadeIn}>Some remember events that never happened.</motion.p>
								<motion.p variants={fadeIn}>Others swear the past has changed.</motion.p>
								<motion.p variants={fadeIn}>This isn't confusion, it's corruption.</motion.p>
								<motion.p variants={fadeIn}>Of memory, of data, of reality.</motion.p>
							</motion.div>
							<motion.button
								variants={fadeInUp}
								whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.15 }}
								className="px-6 sm:px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors duration-300 font-medium tracking-widest text-base sm:text-lg w-full sm:w-auto"
							>
								READ THE ORIGIN
							</motion.button>
						</motion.div>

						{/* Subtle divider */}
						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							viewport={{ once: true }}
							className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 mb-12 sm:mb-16"
						></motion.div>

						{/* Second Memory Glitches Title */}
						<motion.h2
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							viewport={{ once: true }}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-12 sm:mb-16 tracking-wider"
						>
							MEMORY GLITCHES
						</motion.h2>

						{/* Memory Cards Grid */}
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
						>
							{memoryCards.map((card, index) => (
								<motion.div
									key={index}
									variants={cardVariant}
									whileHover={{
										y: -10,
										scale: 1.02,
										boxShadow: card.borderColor.includes("cyan")
											? "0 20px 40px rgba(34, 211, 238, 0.2)"
											: "0 20px 40px rgba(168, 85, 247, 0.2)",
									}}
									transition={{ duration: 0.2 }}
									className={`border-2 ${card.borderColor} bg-black/40 backdrop-blur-sm`}
								>
									{/* Card Header */}
									<div className={`border-b-2 ${card.borderColor} p-3 sm:p-4 text-center`}>
										<motion.h3
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.15 }}
											className={`${card.textColor} font-medium text-base sm:text-lg tracking-widest`}
										>
											{card.title}
										</motion.h3>
									</div>

									{/* Card Content - Top Half */}
									<motion.div
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.2 }}
										className={`border-b-2 ${card.borderColor} p-4 sm:p-6 h-36 sm:h-40 lg:h-48 flex items-center justify-center`}
									>
										{card.topImage ? (
											<motion.img
												whileHover={{ scale: 1.1, rotate: 2 }}
												transition={{ duration: 0.2 }}
												src={card.topImage}
												alt="Memory item"
												className="max-w-full max-h-full object-contain"
											/>
										) : (
											<motion.p
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.15 }}
												className={`${card.topTextColor} text-lg sm:text-xl font-bold text-center leading-tight tracking-wide px-2`}
											>
												{card.topText}
											</motion.p>
										)}
									</motion.div>

									{/* Card Content - Bottom Half */}
									<motion.div
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.2 }}
										className="p-4 sm:p-6 h-36 sm:h-40 lg:h-48 flex items-center justify-center"
									>
										{card.bottomImage ? (
											<motion.img
												whileHover={{ scale: 1.1, rotate: -2 }}
												transition={{ duration: 0.2 }}
												src={card.bottomImage}
												alt="Memory item"
												className="max-w-full max-h-full object-contain"
											/>
										) : (
											<motion.p
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.15 }}
												className={`${card.bottomTextColor} text-lg sm:text-xl font-bold text-center leading-tight tracking-wide px-2`}
											>
												{card.bottomText}
											</motion.p>
										)}
									</motion.div>
								</motion.div>
							))}
						</motion.div>
					</motion.section>

					{/* Bottom spacing */}
					<div className="h-8 sm:h-12 lg:h-16"></div>
				</div>
			</div>
		</>
	);
}

export default Home;
