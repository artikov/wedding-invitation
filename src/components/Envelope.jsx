import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

// Full-screen forest-green envelope intro with a gilded wax seal.
//
// Opening sequence (graceful, wedding-paced ~1.6s):
//   1. the wax seal presses in and fades,
//   2. the top flap swings open in true 3D (perspective + transform-origin top),
//   3. the letter rises out from inside the envelope,
//   4. onOpen() lets the parent dissolve this overlay into the invitation.
//
// Note: the letter and seal are centred with left/right insets and a flex
// wrapper (not Tailwind's -translate-*), because Framer Motion owns the
// `transform` property on animated elements and would otherwise wipe a
// translate-based centre offset.
export default function Envelope({ onOpen }) {
	const { t } = useLanguage()
	const e = t.envelope
	const [opening, setOpening] = useState(false)
	const reduce = useReducedMotion()

	const handleOpen = () => {
		if (opening) return
		setOpening(true)
		setTimeout(onOpen, reduce ? 350 : 1500)
	}

	// Exit: the whole scene lifts toward the viewer and dissolves, handing off
	// to the invitation beneath it.
	const exit = reduce
		? { opacity: 0, transition: { duration: 0.4 } }
		: { opacity: 0, scale: 1.08, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }

	return (
		<motion.div
			className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-forest px-6 text-ivory"
			initial={{ opacity: 1 }}
			exit={exit}
		>
			{/* faint engraved frame */}
			<motion.div
				className="pointer-events-none absolute inset-4 rounded-sm border border-goldlight/20"
				animate={{ opacity: opening ? 0 : 1 }}
				transition={{ duration: 0.6 }}
			/>

			<div className="relative flex flex-col items-center">
				{/* heading — recedes as the envelope opens */}
				<motion.div
					className="flex flex-col items-center"
					initial={{ opacity: 0, y: 16 }}
					animate={opening ? { opacity: 0, y: -14 } : { opacity: 1, y: 0 }}
					transition={{ duration: opening ? 0.5 : 0.8, delay: opening ? 0.25 : 0.1 }}
				>
					<p className="font-serif text-2xl uppercase tracking-[0.3em] text-ivory sm:text-3xl">
						{e.invited}
					</p>
					<p className="-mt-1 font-script text-5xl text-goldlight sm:text-6xl">
						{e.toWedding}
					</p>
				</motion.div>

				{/* envelope — perspective wrapper enables the real 3D flap fold */}
				<div
					className="relative mt-10 h-48 w-80 sm:h-56 sm:w-96"
					style={{ perspective: '1400px' }}
				>
					<div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
						{/* back panel */}
						<div className="absolute inset-0 rounded-sm border border-goldlight/25 bg-forestdark shadow-2xl" />

						{/* letter — hidden inside, rises out on open. Centred via
						    left/right insets (not transform). */}
						<motion.div
							className="absolute inset-x-[8%] top-3 z-10 flex h-[86%] flex-col items-center justify-center rounded-sm border border-gold/30 bg-ivory px-4 text-center text-ink shadow-xl"
							initial={false}
							animate={
								opening
									? { y: reduce ? 0 : -180, opacity: 1, scale: reduce ? 1 : 1.06 }
									: { y: 0, opacity: 0, scale: 1 }
							}
							transition={{ delay: opening ? 0.6 : 0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						>
							<p className="font-script text-2xl text-forest">{t.names.groom}</p>
							<span className="my-1 font-serif text-xs italic text-rose">
								{t.names.connector}
							</span>
							<p className="font-script text-2xl text-forest">{t.names.bride}</p>
						</motion.div>

						{/* front pockets (V) — sit in FRONT so the letter emerges from inside */}
						<div
							className="absolute inset-y-0 left-0 z-20 w-1/2"
							style={{
								clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
								background: 'linear-gradient(135deg, #2c4536, #223526)',
							}}
						/>
						<div
							className="absolute inset-y-0 right-0 z-20 w-1/2"
							style={{
								clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
								background: 'linear-gradient(225deg, #2c4536, #223526)',
							}}
						/>
						<div
							className="absolute inset-x-0 bottom-0 z-20 h-1/2 border-t border-goldlight/15"
							style={{ background: 'linear-gradient(180deg, #2f4a3a, #28402f)' }}
						/>

						{/* top flap — folds open in 3D around its top edge. Inside a
						    preserve-3d context z-index is ignored, so backface-visibility
						    is what keeps the flap from painting over the rising letter:
						    once it folds past 90° its back face is hidden and it stops
						    covering the letter. */}
						<motion.div
							className="absolute left-0 top-0 z-30 h-1/2 w-full"
							style={{
								clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
								background: 'linear-gradient(180deg, #3a583f, #2c4433)',
								transformOrigin: 'top center',
								backfaceVisibility: 'hidden',
							}}
							initial={false}
							animate={{ rotateX: opening ? 180 : 0 }}
							transition={{ delay: opening ? 0.2 : 0, duration: 0.8, ease: [0.45, 0, 0.2, 1] }}
						/>
					</div>

					{/* wax seal button — centred on the flap seam via a flex wrapper */}
					<div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
						<motion.button
							type="button"
							onClick={handleOpen}
							disabled={opening}
							aria-label={e.seal}
							className="group pointer-events-auto flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28"
							initial={{ scale: 0, rotate: -25, opacity: 0 }}
							animate={
								opening
									? { scale: 0.4, opacity: 0, y: 10 }
									: { scale: 1, rotate: 0, opacity: 1, y: 0 }
							}
							transition={
								opening
									? { duration: 0.3, ease: 'easeIn' }
									: { delay: 0.5, type: 'spring', stiffness: 150, damping: 12 }
							}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.92 }}
						>
							<span className="absolute inset-0 rounded-full bg-black/30 blur-md" />
							<span
								className="relative flex h-full w-full items-center justify-center rounded-full"
								style={{
									background:
										'radial-gradient(circle at 36% 30%, #d8b878, #b0894f 48%, #876338 100%)',
									boxShadow:
										'inset 0 3px 8px rgba(255,255,255,0.4), inset 0 -7px 14px rgba(0,0,0,0.4)',
								}}
							>
								<span className="absolute inset-[6px] rounded-full border border-forest/30" />
								<span className="absolute inset-[10px] rounded-full border border-dashed border-forest/25" />
								<span className="font-serif text-[0.7rem] font-medium uppercase tracking-[0.2em] text-forestdark">
									{e.seal}
								</span>
							</span>
						</motion.button>
					</div>
				</div>

				{/* intro — recedes as the envelope opens */}
				<motion.p
					className="mt-12 max-w-sm text-center text-sm leading-relaxed text-ivory/80"
					initial={{ opacity: 0 }}
					animate={{ opacity: opening ? 0 : 1, y: opening ? -10 : 0 }}
					transition={{ duration: opening ? 0.4 : 1, delay: opening ? 0 : 0.9 }}
				>
					{e.intro}
				</motion.p>
			</div>
		</motion.div>
	)
}
