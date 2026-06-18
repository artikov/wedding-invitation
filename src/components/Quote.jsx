import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { Flourish } from "./Illustrations";

// A quiet band — candles, a romantic quote in a forest-green badge, and a key.
export default function Quote() {
	const { t } = useLanguage();

	return (
		<section className="relative overflow-hidden bg-ivory px-6 py-20">
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
