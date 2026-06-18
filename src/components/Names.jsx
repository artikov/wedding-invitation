import { useLanguage } from "../i18n/LanguageContext";
import { EVENTS, EVENT_ORDER } from "../i18n/translations";
import Reveal from "./Reveal";
import { ArchFrame, Flourish } from "./Illustrations";

// Section 1 — the couple inside a rounded cartouche (with a ring badge atop),
// the stacked wedding date, and the two event dates below.
export default function Names() {
	const { t } = useLanguage();
	const n = t.names;
	const d = EVENTS.wedding.date;
	const dd = String(d.getDate()).padStart(2, "0");
	const mm = String(d.getMonth() + 1).padStart(2, "0");
	const yy = String(d.getFullYear()).slice(-2);

	return (
		<section className="relative overflow-hidden bg-paper px-6 py-20">
			<div className="mx-auto max-w-xl">
				<Reveal>
					<ArchFrame>
						<h1 className="font-script text-5xl leading-none text-ivory sm:text-6xl">
							{n.groom}
						</h1>
						<span className="my-1 font-serif text-lg italic text-rose">
							{n.connector}
						</span>
						<h1 className="font-script text-5xl leading-none text-ivory sm:text-6xl">
							{n.bride}
						</h1>
						<p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-ivory/80">
							{n.intro}
						</p>
						<div className="mt-4 flex flex-col items-center font-script text-3xl text-goldlight">
							<span>{dd}</span>
							<span className="text-rose">·</span>
							<span>{mm}</span>
							<span className="text-rose">·</span>
							<span>{yy}</span>
						</div>
					</ArchFrame>
				</Reveal>

				<Reveal delay={0.2} className="mt-12">
					<div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-6">
						{EVENT_ORDER.map((key) => {
							const ev = t.events[key];
							return (
								<div
									key={key}
									className="flex-1 rounded-lg border border-rose/30 bg-ivory/70 px-6 py-5 text-center shadow-sm"
								>
									<p className="text-[0.7rem] uppercase tracking-[0.25em] text-rose">
										{ev.label}
									</p>
									<p className="mt-2 font-serif text-2xl text-forest">
										{ev.date}
									</p>
									<p className="mt-1 text-sm text-ink/60">{ev.time}</p>
									<p className="mt-0.5 text-sm text-ink/50">{ev.venue}</p>
								</div>
							);
						})}
					</div>
				</Reveal>

				<Reveal delay={0.3}>
					<Flourish className="mx-auto mt-12 w-64 text-gold" />
				</Reveal>
			</div>
		</section>
	);
}
