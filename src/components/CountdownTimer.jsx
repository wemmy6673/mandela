import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			if (distance < 0) {
				clearInterval(timer);
				return;
			}

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
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
				<div className="flex justify-between items-center gap-4 sm:gap-6">
					{Object.entries(timeLeft).map(([unit, value], index) => (
						<div key={unit} className="relative group">
							{/* Vertical line separators */}
							{index < 3 && (
								<div className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 w-px h-12 sm:h-16">
									<motion.div
										className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
										animate={{
											scaleY: [0.3, 1, 0.3],
											opacity: [0.3, 0.7, 0.3],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "linear",
										}}
									/>
								</div>
							)}

							{/* Number Container */}
							<div className="relative">
								{/* Glowing background effect */}
								<motion.div
									className="absolute inset-0 bg-cyan-400/5 rounded-lg -z-10"
									animate={{
										boxShadow: [
											"0 0 20px rgba(34, 211, 238, 0.1)",
											"0 0 40px rgba(34, 211, 238, 0.2)",
											"0 0 20px rgba(34, 211, 238, 0.1)",
										],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>

								{/* Number Display */}
								<motion.div
									className="relative px-3 py-2 sm:px-4 sm:py-3"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.2 }}
								>
									{/* Top label */}
									<motion.div
										className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400/70 uppercase tracking-[0.2em] whitespace-nowrap"
										animate={{
											opacity: [0.5, 1, 0.5],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
									>
										{unit}
									</motion.div>

									{/* Number */}
									<div className="relative">
										<motion.div
											className="font-['Bebas_Neue'] text-2xl sm:text-3xl md:text-4xl text-cyan-400"
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
											{String(value).padStart(2, "0")}
										</motion.div>

										{/* Animated underline */}
										<motion.div
											className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
											animate={{
												scaleX: [0, 1, 0],
												opacity: [0, 1, 0],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										/>
									</div>
								</motion.div>
							</div>
						</div>
					))}
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
