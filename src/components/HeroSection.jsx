import React, { useState } from "react";
import { motion } from "framer-motion";
import MandelaImage from "../assets/mandela-bg.png";
import CountdownTimer from "./CountdownTimer";
import MandelaModal from "./MandelaModal";

// Animation variants
const fadeInUp = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const HeroSection = ({ targetDate, onOpenModal }) => {
	// Animation variants
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

	const [showGlitchModal, setShowGlitchModal] = useState(false);

	return (
		<section className="min-h-screen flex items-start md:items-center px-4 sm:px-6 md:px-8 lg:px-16 relative pt-16 sm:pt-0">
			{/* Background with Mandela image */}
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

				{/* Countdown Timer */}
				<motion.div variants={fadeInUp} className="mb-8 sm:mb-10 lg:mb-12">
					<CountdownTimer targetDate={targetDate} />
				</motion.div>

				<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							duration: 0.2,
							type: "tween",
							ease: "easeOut",
						}}
						onClick={() => setShowGlitchModal(true)}
						className="px-6 sm:px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 active:bg-cyan-400/20 transition-colors duration-300 font-medium tracking-widest text-base sm:text-lg w-full sm:w-auto text-center transform-gpu"
					>
						ENTER THE GLITCH
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{
							duration: 0.2,
							type: "tween",
							ease: "easeOut",
						}}
						onClick={onOpenModal}
						className="px-6 sm:px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 active:bg-purple-400/20 transition-colors duration-300 font-medium tracking-widest text-sm sm:text-base md:text-lg w-full sm:w-auto text-center transform-gpu"
					>
						<span className="sm:hidden">WHAT IS THE MANDELA EFFECT?</span>
						<span className="hidden sm:inline">
							WHAT IS THE
							<br />
							MANDELA EFFECT?
						</span>
					</motion.button>
				</motion.div>

				{/* Social Info Component */}
				<SocialInfo />
			</motion.div>

			{/* Glitch Modal */}
			<MandelaModal
				isOpen={showGlitchModal}
				onClose={() => setShowGlitchModal(false)}
				glitchContent={
					<div className="space-y-6">
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.4 }}
							className="text-xl sm:text-2xl text-cyan-400 tracking-wider leading-relaxed"
						>
							SYSTEM INITIALIZING...
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.4 }}
							className="text-lg sm:text-xl text-purple-400 tracking-wider leading-relaxed"
						>
							REALITY PARAMETERS LOADING
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.4 }}
							className="text-lg sm:text-xl text-blue-400 tracking-wider leading-relaxed font-glitch"
						>
							COUNTDOWN IN PROGRESS...
						</motion.p>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, duration: 0.4 }}
							className="pt-4"
						>
							<CountdownTimer targetDate={targetDate} />
						</motion.div>
					</div>
				}
			/>
		</section>
	);
};

// Social Info Component
const SocialInfo = () => {
	return (
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
						href="https://x.com/MNDLzone"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300  hover:text-cyan-400 transition-colors duration-300 font-medium tracking-widest  sm:text-base md:text-lg truncate min-w-0"
					>
						@MNDLzone
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
						<span className="text-gray-400 sm:text-base md:text-lg font-medium tracking-widest">CONTRACT:</span>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigator.clipboard.writeText("COMING SOON")}
							className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-mono sm:text-base md:text-lg tracking-wider hover:bg-purple-400/5 px-2 py-1 rounded text-left w-fit max-w-full truncate"
							title="Click to copy"
						>
							CBdmrYv6Wos1Vhq1uoozQQ4uTSyDe7ZvJQeRFGPCpump
						</motion.button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default HeroSection;
