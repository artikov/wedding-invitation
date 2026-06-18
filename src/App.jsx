import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Envelope from "./components/Envelope";
import Names from "./components/Names";
import Guests from "./components/Guests";
import Venues from "./components/Venues";
import Quote from "./components/Quote";

function Footer() {
	const { t } = useLanguage();
	return (
		<footer className="bg-forest px-6 py-12 text-center text-ivory">
			<p className="font-script text-3xl text-goldlight">
				{t.names.groom} &amp; {t.names.bride}
			</p>
			<p className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-ivory/50">
				{t.footer.madeWith}
			</p>
		</footer>
	);
}

function Invitation() {
	const reduce = useReducedMotion();
	return (
		<motion.main
			initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
		>
			<Names />
			<Guests />
			<Venues />
			<Quote />
			<Footer />
		</motion.main>
	);
}

function Experience() {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<LanguageSwitcher />
			{/* Invitation mounts beneath the envelope so it can rise in as the
          envelope dissolves, giving a seamless page-to-page handoff. */}
			{opened && <Invitation />}
			<AnimatePresence>
				{!opened && <Envelope key="envelope" onOpen={() => setOpened(true)} />}
			</AnimatePresence>
		</>
	);
}

export default function App() {
	return (
		<LanguageProvider>
			<Experience />
		</LanguageProvider>
	);
}
