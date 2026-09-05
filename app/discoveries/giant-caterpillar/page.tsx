import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Annotation,
  EntryNavigation,
  FieldGuideEntry,
  PhotoGallery,
  SiteHeader,
} from '@/components/field-guide';
import { discoveries, photos } from '@/lib/discoveries';

const discovery = discoveries.caterpillar;

export const metadata: Metadata = {
  title: `${discovery.title} — Fleetwood’s Field Guide`,
  description: `${discovery.observation} A field note from September 2026.`,
  openGraph: {
    title: `${discovery.title} — Fleetwood’s Field Guide`,
    description: discovery.observation,
    images: [{ url: photos.caterpillar }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${discovery.title} — Fleetwood’s Field Guide`,
    description: discovery.observation,
    images: [photos.caterpillar],
  },
};

export default function GiantCaterpillarPage() {
  return (
    <>
      <SiteHeader />
      <main className="entry-page">
        <div className="entry-breadcrumb">
          <Link href="/">← All discoveries</Link>
          <span>Field note / 001</span>
        </div>

        <FieldGuideEntry
          number={discovery.number}
          title={discovery.title}
          meta={[
            { label: 'Recorded', value: discovery.date },
            { label: 'Location', value: discovery.location },
            { label: 'Category', value: discovery.category },
            { label: 'Status', value: 'Still wondering' },
          ]}
          image={discovery.image}
          imageAlt="A huge green caterpillar with a red horn walking along a plant stem"
          observation={discovery.observation}
        >
          <section className="entry-notes" aria-labelledby="notes-title">
            <div className="entry-narrative">
              <p className="eyebrow-label">The full account</p>
              <h2 id="notes-title">It had somewhere<br />important to be.</h2>
              <p>We found it outside, balanced on a stem. It was green, obviously, with a red point at one end and lots of small feet underneath.</p>
              <p>We watched for a while. It did not seem bothered by us. Then it kept going.</p>
            </div>
            <aside className="margin-notes" aria-label="Field details">
              <h3>Notes from the scene</h3>
              <ul>
                <li><span>Colour</span><strong>Very green</strong></li>
                <li><span>Length</span><strong>Nearly one finger</strong></li>
                <li><span>Speed</span><strong>Steady</strong></li>
                <li><span>Direction</span><strong>Unknown</strong></li>
              </ul>
              <Annotation className="scene-question" tone="blue">why the red spike?</Annotation>
            </aside>
          </section>

          <section className="detail-study" aria-labelledby="detail-title">
            <header>
              <p className="section-kicker dark-kicker">Closer inspection</p>
              <h2 id="detail-title">Details worth noting</h2>
            </header>
            <PhotoGallery
              className="detail-gallery"
              images={[
                { src: photos.caterpillar, alt: 'Close crop of the caterpillar’s tiny feet', caption: 'Lots of tiny gripping feet', className: 'detail-feet' },
                { src: photos.caterpillar, alt: 'Close crop of the caterpillar’s red tail horn', caption: 'One surprising red point', className: 'detail-horn' },
              ]}
            />
            <Annotation className="feet-note" tone="rust">how many feet??</Annotation>
          </section>

          <section className="fact-slip" aria-labelledby="fact-title">
            <div>
              <p className="eyebrow-label">What we know so far</p>
              <h2 id="fact-title">A working theory</h2>
            </div>
            <p>This looks like a kind of hornworm. The pointed part is called a horn, though it does not sting. Caterpillars use soft, hooked “prolegs” to hold on while they travel.</p>
            <Annotation className="theory-note" tone="rust">probably!</Annotation>
          </section>

          <EntryNavigation />
        </FieldGuideEntry>
      </main>
      <footer className="site-footer entry-footer">
        <p>Fleetwood’s Field Guide to Everything</p>
        <p className="footer-note">End of field note 001</p>
        <p>Filed September 2026</p>
      </footer>
    </>
  );
}
