import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { EVENTS } from "../i18n/translations";
import Reveal from "./Reveal";
import { Flourish } from "./Illustrations";

// A quiet band — candles, a romantic quote in a forest-green badge, and a key.
export default function Quote() {
	const { t } = useLanguage();

	function useCountdown(target) {
		const [diff, setDiff] = useState(() => target.getTime() - Date.now());
		useEffect(() => {
			const id = setInterval(
				() => setDiff(target.getTime() - Date.now()),
				1000,
			);
			return () => clearInterval(id);
		}, [target]);

		const clamped = Math.max(diff, 0);
		return {
			days: Math.floor(clamped / 86400000),
			hours: Math.floor((clamped / 3600000) % 24),
			minutes: Math.floor((clamped / 60000) % 60),
			seconds: Math.floor((clamped / 1000) % 60),
		};
	}
	const c = t.countdown;
	const countdown = useCountdown(EVENTS.wedding.date);
	const units = [
		{ value: countdown.days, label: c.days },
		{ value: countdown.hours, label: c.hours },
		{ value: countdown.minutes, label: c.minutes },
		{ value: countdown.seconds, label: c.seconds },
	];

	return (
		<section className="relative overflow-hidden bg-ivory px-6 pt-8 pb-20">
			<div className="mx-auto max-w-xl text-center">
				<Reveal>
					<h2 className="font-script text-5xl text-forest sm:text-6xl">
						{c.title}
					</h2>
				</Reveal>

				<Reveal delay={0.4}>
					<div className="mt-4 flex justify-center gap-3 sm:gap-4">
						{units.map((u) => (
							<div
								key={u.label}
								className="flex min-w-[4.2rem] flex-col items-center rounded-xl border border-gold/20 bg-ivory/70 px-3 py-3 shadow-sm"
							>
								<span className="font-serif text-3xl text-ink">
									{String(u.value).padStart(2, "0")}
								</span>
								<span className="mt-1 text-[0.6rem] uppercase tracking-wide text-ink/50">
									{u.label}
								</span>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal delay={0.3}>
					<p className="mt-7 font-script text-2xl text-forest">{c.closing}</p>
					<p className="mt-2 font-serif text-4xl italic text-forest/70">
						{c.signature}
					</p>
				</Reveal>
			</div>

			<Reveal delay={0.3}>
				<Flourish className="mx-auto mt-12 w-64 text-gold" />
			</Reveal>
			<div className="mx-auto max-w-md text-center">
				<Reveal delay={0.15}>
					<div className="relative mx-auto mt-8 rounded-[2rem] border border-rose/40 bg-forest px-8 py-8 shadow-lg">
						<p className="font-serif text-lg italic leading-relaxed text-ivory">
							{t.quote.text}
						</p>
					</div>
				</Reveal>
			</div>
			<Reveal delay={0.3}>
				<Flourish className="mx-auto mt-12 w-64 text-gold" />
			</Reveal>
		</section>
	);
}
