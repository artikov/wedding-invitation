import { useLanguage } from "../i18n/LanguageContext";
import { EVENTS } from "../i18n/translations";
import Reveal from "./Reveal";
import { Heart, Flourish } from "./Illustrations";

const WEDDING = EVENTS.wedding;

// Day grid for the wedding month, Monday-first.
function buildMonth(year, monthIndex) {
	const first = new Date(year, monthIndex, 1);
	const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
	const offset = (first.getDay() + 6) % 7;
	const cells = Array(offset).fill(null);
	for (let d = 1; d <= daysInMonth; d++) cells.push(d);
	while (cells.length % 7 !== 0) cells.push(null);
	return cells;
}

// Section 2 — heartfelt address to the guests, the calendar with the wedding
// day marked by a heart, and an engraved doorway.
export default function Guests() {
	const { t } = useLanguage();
	const g = t.guests;
	const c = t.calendar;
	const cells = buildMonth(WEDDING.year, WEDDING.monthIndex);

	return (
		<section className="relative overflow-hidden bg-ivory px-6 py-24">
			<div className="mx-auto max-w-xl text-center">
				<Reveal>
					<h2 className="font-script text-5xl text-forest sm:text-6xl">
						{g.title}
					</h2>
				</Reveal>

				<Reveal delay={0.1}>
					<p className="mx-auto mt-6 max-w-md font-serif text-lg leading-relaxed text-forest/80">
						{g.body1}
					</p>
				</Reveal>
				<Reveal delay={0.15}>
					<p className="mx-auto mt-4 max-w-md font-serif text-lg leading-relaxed text-forest/80">
						{g.body2}
					</p>
				</Reveal>

				{/* calendar */}
				<Reveal delay={0.2}>
					<div className="mx-auto mt-12 max-w-sm rounded-2xl border border-rose/25 bg-paper/70 p-6 shadow-sm sm:p-7">
						<div className="grid grid-cols-7 gap-1 text-center">
							{c.weekdays.map((w) => (
								<div
									key={w}
									className="pb-2 text-[0.65rem] font-medium uppercase tracking-wide text-rose"
								>
									{w}
								</div>
							))}
							{cells.map((day, i) => {
								const highlight = day === WEDDING.day;
								return (
									<div
										key={i}
										className="flex aspect-square items-center justify-center"
									>
										{day && (
											<span className="relative flex h-9 w-9 items-center justify-center text-sm text-forest/80">
												{highlight && (
													<Heart className="absolute inset-0 h-9 w-9 animate-heartbeat text-rose" />
												)}
												<span
													className={
														highlight ? "relative font-medium text-ivory" : ""
													}
												>
													{day}
												</span>
											</span>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</Reveal>

				<Reveal delay={0.3}>
					<p className="mt-7 font-script text-4xl text-forest">
						{c.monthLabel}
					</p>
					<p className="mt-2 font-serif text-base italic text-forest/70">
						{c.note}
					</p>
				</Reveal>

				<Reveal delay={0.35}>
					<Flourish className="mx-auto mt-8 w-64 text-gold" />
				</Reveal>
			</div>
		</section>
	);
}
