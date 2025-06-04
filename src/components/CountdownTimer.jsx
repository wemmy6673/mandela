import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			if (distance < 0) {
				clearInterval(timer);
				setProgress(100);
				return;
			}

			// Calculate days remaining
			const daysRemaining = distance / (1000 * 60 * 60 * 24);
			// Assuming 100 days total duration
			const totalDays = 100;
			// Calculate progress percentage
			const newProgress = Math.max(0, Math.min(100, ((totalDays - daysRemaining) / totalDays) * 100));

			setProgress(newProgress);
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

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

			{/* Main timer container */}
			<div className="relative p-6 sm:p-8">
				<div className="flex flex-col items-center gap-4">
					{/* FRIDAY text */}
					<motion.div
						className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-cyan-400 tracking-wider"
						animate={{
							textShadow: [
								"0 0 8px rgba(34, 211, 238, 0.3)",
								"0 0 16px rgba(34, 211, 238, 0.6)",
								"0 0 8px rgba(34, 211, 238, 0.3)",
							],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						FRIDAY
					</motion.div>

					{/* Progress bar */}
					<div className="w-full max-w-md relative h-4 bg-black/50 rounded-full overflow-hidden border border-cyan-400/30">
						{/* Main progress fill */}
						<motion.div
							className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400/80 to-purple-400/80"
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						/>

						{/* Animated highlight effect */}
						<motion.div
							className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent"
							animate={{
								left: ["-50%", "150%"],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "linear",
							}}
						/>

						{/* Progress percentage */}
						<motion.div
							className="absolute inset-0 flex items-center justify-center text-xs font-mono text-cyan-400/90"
							animate={{
								opacity: [0.7, 1, 0.7],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							{Math.round(progress)}%
						</motion.div>
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
