import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import MemoryCards from "../components/MemoryCards";
import MandelaModal from "../components/MandelaModal";

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Set target date for countdown (YYYY, MM-1, DD, HH, MM, SS)
	const targetDate = new Date(2025, 5, 27, 12, 0, 0);

	return (
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
			/>

			{/* Main Content Container */}
			<div className="relative z-30 max-w-7xl mx-auto">
				{/* Hero Section */}
				<HeroSection targetDate={targetDate} onOpenModal={() => setIsModalOpen(true)} />

				{/* Memory Cards Section */}
				<MemoryCards />

				{/* Bottom spacing */}
				<div className="h-8 sm:h-12 lg:h-16" />
			</div>

			{/* Modal */}
			<MandelaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</div>
	);
}

export default Home;
