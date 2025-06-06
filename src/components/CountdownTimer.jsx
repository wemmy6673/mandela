import React from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="relative"
		>
			{/* Background layer with cyber grid */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-lg overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(34, 211, 238, 0.03) 1px, transparent 1px),
										linear-gradient(to bottom, rgba(34, 211, 238, 0.03) 1px, transparent 1px)`,
						backgroundSize: "24px 24px",
					}}
				/>
			</div>

			{/* Main container */}
			<div className="relative p-6 sm:p-8">
				<div className="flex flex-col items-center gap-4">
					{/* LIVE NOW! text */}
					<motion.div
						className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-cyan-400 tracking-wider"
						animate={{
							scale: [1, 1.05, 1],
							textShadow: [
								"0 0 8px rgba(34, 211, 238, 0.3)",
								"0 0 20px rgba(34, 211, 238, 0.8)",
								"0 0 8px rgba(34, 211, 238, 0.3)",
							],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						LIVE NOW!
					</motion.div>

					{/* Animated line */}
					<motion.div
						className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
						animate={{
							opacity: [0.3, 1, 0.3],
							scaleX: [0.8, 1, 0.8],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					{/* Status indicator */}
					<div className="flex items-center gap-2">
						<motion.div
							className="w-2 h-2 rounded-full bg-cyan-400"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.5, 1, 0.5],
							}}
							transition={{
								duration: 1,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.span
							className="text-sm text-cyan-400/80 tracking-wider"
							animate={{
								opacity: [0.6, 1, 0.6],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							SYSTEM ACTIVE
						</motion.span>
					</div>
				</div>

				{/* Decorative corner elements */}
				{["-top-px -left-px", "-top-px -right-px", "-bottom-px -left-px", "-bottom-px -right-px"].map(
					(position, index) => (
						<div key={index} className={`absolute w-4 h-4 ${position}`}>
							<motion.div
								className="absolute inset-0 border-cyan-400"
								style={{
									borderWidth: index < 2 ? "2px 2px 0 0" : "0 0 2px 2px",
								}}
								animate={{
									opacity: [0.2, 0.5, 0.2],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									delay: index * 0.5,
								}}
							/>
						</div>
					)
				)}
			</div>

			{/* Animated scan line effect */}
			<motion.div
				className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
				initial={{ opacity: 0 }}
				animate={{
					opacity: [0, 0.1, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				<motion.div
					className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
					animate={{
						y: ["-100%", "400%"],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

export default CountdownTimer;
