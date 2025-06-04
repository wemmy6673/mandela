import React from "react";
import { motion } from "framer-motion";
import FrootImage from "../assets/froot.png";
import FruitsImage from "../assets/fruits.jpg";
import PikachuImage from "../assets/pikachu.png";
import Pikachu2Image from "../assets/pikachu2.png";
import DarthVaderImage from "../assets/darth.png";
import MonopolyImage from "../assets/monopoly.png";
import FighterImage from "../assets/fighter.png";
import Fighter2Image from "../assets/fighter2.png";

const MemoryCards = () => {
	// Memory card data
	const memoryCards = [
		{
			title: "WHAT YOU REMEMBER?",
			borderColor: "border-cyan-400",
			textColor: "text-cyan-400",
			topImage: FrootImage,
			bottomImage: FruitsImage,
			// shrink: true,
		},
		{
			title: "WHAT YOU REMEMBER?",
			borderColor: "border-purple-400",
			textColor: "text-purple-400",
			topImage: PikachuImage,
			bottomImage: Pikachu2Image,
		},
		{
			title: "WHAT YOU REMEMBER?",
			borderColor: "border-cyan-400",
			textColor: "text-cyan-400",
			topImage: DarthVaderImage,
			bottomImage: MonopolyImage,
		},
		{
			title: "WHAT WAS REAL?",
			borderColor: "border-purple-400",
			textColor: "text-purple-400",
			topText: "LUKE, I AM YOUR FATHER",
			bottomText: "NO, I AM YOUR FATHER",
			topTextColor: "text-cyan-400",
			bottomTextColor: "text-blue-400",
			topImage: FighterImage,
			bottomImage: Fighter2Image,
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
		<section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
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
				<motion.div>
					<motion.a
						href="https://medium.com/@mndl.fun"
						target="_blank"
						rel="noopener noreferrer"
						variants={fadeInUp}
						whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.15 }}
						className="px-6 sm:px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors duration-300 font-medium tracking-widest text-base sm:text-lg w-full sm:w-auto inline-block text-center"
					>
						READ THE ORIGIN
					</motion.a>
				</motion.div>
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
					<MemoryCard key={index} card={card} variant={cardVariant} />
				))}
			</motion.div>
		</section>
	);
};

const MemoryCard = ({ card, variant }) => {
	return (
		<motion.div
			variants={variant}
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
				className={`border-b-2 ${card.borderColor} p-4 sm:p-6 h-36 sm:h-40 lg:h-48 flex flex-col items-center justify-center gap-2`}
			>
				{card.topText && (
					<motion.p
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.15 }}
						className={`${card.topTextColor} text-base sm:text-lg font-bold text-center leading-tight tracking-wide px-2`}
					>
						{card.topText}
					</motion.p>
				)}
				{card.topImage && (
					<img src={card.topImage} alt="Memory item" className="max-w-full max-h-[70%] object-contain" />
				)}
			</motion.div>

			{/* Card Content - Bottom Half */}
			<motion.div
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.2 }}
				className="p-4 sm:p-6 h-36 sm:h-40 lg:h-48 flex flex-col items-center justify-center gap-2"
			>
				{card.bottomText && (
					<motion.p
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.15 }}
						className={`${card.bottomTextColor} text-base sm:text-lg font-bold text-center leading-tight tracking-wide px-2`}
					>
						{card.bottomText}
					</motion.p>
				)}
				{card.bottomImage && (
					<img
						src={card.bottomImage}
						alt="Memory item"
						className={`max-w-full max-h-[70%] object-contain ${
							card.shrink ? "w-[32%] sm:w-[30%] md:w-[45%] lg:w-[65%]" : ""
						}`}
					/>
				)}
			</motion.div>
		</motion.div>
	);
};

export default MemoryCards;
