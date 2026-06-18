import { useLanguage } from "../i18n/LanguageContext";
import { EVENTS, EVENT_ORDER } from "../i18n/translations";
import Reveal from "./Reveal";
import { Flourish } from "./Illustrations";

function MapCard({ event, info, timePrefix, mapButton, delay }) {
	return (
		<Reveal delay={delay} className="h-full">
			<div className="flex h-full flex-col overflow-hidden rounded-2xl border border-rose/25 bg-ivory shadow-md">
				<div className="bg-forest px-6 py-4 text-center text-ivory">
					<p className="text-[0.7rem] uppercase tracking-[0.25em] text-goldlight">
						{info.label}
					</p>
					<p className="mt-1 font-serif text-2xl">{info.venue}</p>
				</div>
				<div className="aspect-[16/10] w-full bg-cream">
					<iframe
						title={info.venue}
						src={event.mapEmbed}
						className="h-full w-full border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
				<div className="flex flex-1 flex-col px-6 py-5 text-left">
					<p className="text-sm text-ink/70">{info.address}</p>
					<p className="mt-1 text-sm text-ink/60">
						{timePrefix}: {info.date}, {info.time}
					</p>
					<a
						href={event.mapLink}
						target="_blank"
						rel="noreferrer"
						className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory shadow-sm transition hover:bg-forestdark"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11Z"
								stroke="currentColor"
								strokeWidth="1.8"
							/>
							<circle
								cx="12"
								cy="10"
								r="2.5"
								stroke="currentColor"
								strokeWidth="1.8"
							/>
						</svg>
						{mapButton}
					</a>
				</div>
			</div>
		</Reveal>
	);
}

// Section 3 — both venues with embedded maps.
export default function Venues() {
	const { t } = useLanguage();
	const v = t.venues;

	return (
		<section className="relative overflow-hidden bg-paper px-6 py-24">
			<div className="mx-auto max-w-4xl text-center">
				<Reveal>
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-rose">
						{v.eyebrow}
					</p>
				</Reveal>
				<Reveal delay={0.1}>
					<h2 className="font-script text-5xl text-forest sm:text-6xl">
						{v.title}
					</h2>
				</Reveal>
				<Reveal delay={0.15}>
					<Flourish className="mx-auto my-8 w-64 text-gold" />
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{EVENT_ORDER.map((key, i) => (
						<MapCard
							key={key}
							event={EVENTS[key]}
							info={t.events[key]}
							timePrefix={v.timePrefix}
							mapButton={v.mapButton}
							delay={0.2 + i * 0.1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
