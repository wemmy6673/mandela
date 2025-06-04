import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MandelaModal = ({ isOpen, onClose, glitchContent }) => {
	const modalVariants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
			y: 20,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			scale: 0.95,
			y: 10,
			transition: {
				duration: 0.2,
				ease: "easeIn",
			},
		},
	};

	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: "easeIn",
			},
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						variants={backdropVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
					>
						{/* Modal Content */}
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-lg w-[90%] bg-black/90 border-2 border-purple-400 p-8 sm:p-10"
						>
							{/* Close Button */}
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.15 }}
								onClick={onClose}
								className="absolute -top-4 -right-4 w-8 h-8 bg-black border-2 border-purple-400 text-purple-400 rounded-full flex items-center justify-center hover:bg-purple-400/10 transition-colors z-10"
							>
								×
							</motion.button>

							{/* Content */}
							{glitchContent || (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1, duration: 0.4 }}
									className="space-y-6"
								>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2, duration: 0.4 }}
										className="text-xl sm:text-2xl text-cyan-400 tracking-wider leading-relaxed"
									>
										The Mandela Effect — when you remember something that never happened.
									</motion.p>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3, duration: 0.4 }}
										className="text-lg sm:text-xl text-purple-400 tracking-wider leading-relaxed"
									>
										Glitches in reality, timeline shifts, or mass illusion?
									</motion.p>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4, duration: 0.4 }}
										className="text-lg sm:text-xl text-blue-400 tracking-wider leading-relaxed"
									>
										Are you sure the world was always this way?
									</motion.p>
								</motion.div>
							)}
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default MandelaModal;
