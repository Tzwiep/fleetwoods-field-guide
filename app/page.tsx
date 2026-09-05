import Link from 'next/link';
import Image from 'next/image';
import {
  Annotation,
  DoodleArrow,
  EntryPreview,
  FieldMeta,
  PhotoGallery,
  SiteHeader,
} from '@/components/field-guide';
import { discoveries, photos } from '@/lib/discoveries';

export default function Home() {
  const caterpillar = discoveries.caterpillar;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="masthead" aria-labelledby="site-title">
          <div className="masthead-topline">
            <p className="eyebrow hero-eyebrow"><span>Est. 2026</span><i aria-hidden="true">—</i><span>Ontario</span></p>
            <span className="hero-asterisk" aria-hidden="true">*</span>
          </div>
          <h1 id="site-title">Fleetwood’s Field Guide <em>to Everything</em></h1>
          <div className="masthead-foot">
            <p>Notes, discoveries, important findings, and other things worth remembering.</p>
            <div className="hero-margin-note" aria-label="Handwritten note: leave room for more">
              <Annotation tone="rust">leave room for more</Annotation>
              <svg viewBox="0 0 150 58" aria-hidden="true"><path d="M143 9C105 6 78 16 43 32 30 38 18 44 7 49" /><path d="m18 36-11 13 17 2" /></svg>
            </div>
          </div>
        </section>

        <article className="featured-discovery" id="journal">
          <div className="featured-heading">
            <div>
              <p className="section-kicker">Discovery no. {caterpillar.number}</p>
              <h2>The Giant<br />Caterpillar</h2>
            </div>
            <FieldMeta
              light
              items={[
                { label: 'Date', value: caterpillar.date },
                { label: 'Location', value: caterpillar.location },
                { label: 'Filed under', value: caterpillar.category },
              ]}
            />
          </div>

          <Link className="specimen-photo" href={caterpillar.href} aria-label="Read The Giant Caterpillar field note">
            <Image src={caterpillar.image} alt="A very large green caterpillar on a plant stem" width={1800} height={775} sizes="100vw" priority />
            <span className="photo-number">Fig. 01</span>
            <Annotation className="very-big" tone="light">VERY BIG.</Annotation>
            <Annotation className="green-note" tone="light">green, obviously</Annotation>
            <Annotation className="question-note" tone="light">where was he going?</Annotation>
            <DoodleArrow />
          </Link>

          <div className="featured-footer">
            <blockquote>“{caterpillar.observation}”</blockquote>
            <p>We found this caterpillar crossing a leaf as if it had somewhere important to be. It was almost as big as my finger.</p>
            <Link className="read-note" href={caterpillar.href}>Open field note <span aria-hidden="true">→</span></Link>
          </div>
        </article>

        <section className="recent-findings" aria-labelledby="recent-title">
          <header className="section-heading">
            <div>
              <p className="eyebrow-label">Recently observed</p>
              <h2 id="recent-title">From the field</h2>
            </div>
            <p>Small wonders, important questions,<br />and several very good sticks.</p>
          </header>

          <div className="findings-grid" id="creatures">
            <div className="snail-wrap" id="snail">
              <EntryPreview
                number="002"
                category="Creatures"
                title="A Really Big Snail"
                date="September 2026 · The backyard"
                image={photos.snail}
                alt="A large snail making its way through green leaves"
                observation="I think he’s going to his home."
                href="/#snail"
                className="snail-entry"
              />
              <Annotation className="snail-speed" tone="blue">not very fast</Annotation>
              <svg className="snail-circle" viewBox="0 0 160 90" aria-hidden="true"><path d="M15 50C21 12 116 3 145 30c31 30-35 58-93 46C4 67 4 42 25 23" /></svg>
            </div>

            <article className="lightning-note">
              <p className="section-kicker dark-kicker">Field note · Question 04</p>
              <span className="lightning-glyph" aria-hidden="true">↯</span>
              <h3>How Lightning Works</h3>
              <blockquote>“The clouds smash together really hard.”</blockquote>
              <p className="note-copy">Current working theory, recorded during a loud storm.</p>
              <Annotation className="research-note" tone="rust">needs further research →</Annotation>
              <span className="rough-underline" aria-hidden="true" />
            </article>
          </div>
        </section>

        <section className="beach-discovery" id="places" aria-labelledby="beach-title">
          <header className="beach-heading">
            <p className="section-kicker dark-kicker">Collection no. 003 · Places</p>
            <h2 id="beach-title">Things We Found<br />at the Beach</h2>
            <p>Rocks, shells, two excellent sticks, one feather, and something we could not identify.</p>
          </header>

          <div className="beach-board">
            <span className="tape tape-one" aria-hidden="true" />
            <PhotoGallery
              className="contact-sheet"
              images={[
                { src: photos.beachShells, alt: 'Shells and stones scattered across a beach', caption: 'The shell place', className: 'contact-wide' },
                { src: photos.beachRocks, alt: 'Blue and brown stones with pieces of driftwood', caption: 'The stripey one', className: 'contact-tall' },
                { src: photos.beachShells, alt: 'A close view of clam shells in sand', caption: 'Possible treasure', className: 'contact-detail' },
              ]}
            />
            <Annotation className="best-rock" tone="ink">best rock?</Annotation>
            <svg className="beach-arrow" viewBox="0 0 190 100" aria-hidden="true"><path d="M7 92C47 74 84 52 145 34c15-5 25-8 37-8" /><path d="m164 13 19 13-13 18" /></svg>
          </div>
        </section>

        <section className="interest-cabinets" aria-labelledby="interests-title">
          <header className="interests-heading">
            <div>
              <p className="eyebrow-label">Main subjects · New shelves</p>
              <h2 id="interests-title">Things from the ground.<br />Things from the garden.</h2>
            </div>
            <p>The collection keeps growing. Some specimens are dug up; others need sun, rain, and patience.</p>
          </header>

          <div className="interest-spread">
            <article className="rocks-interest" id="rocks">
              <figure>
                <Image src={photos.rocksGems} alt="A close collection of colourful polished stones and raw mineral crystals" width={1600} height={1067} sizes="(max-width: 760px) 100vw, 62vw" />
                <figcaption>Specimen tray · Rocks &amp; minerals</figcaption>
              </figure>
              <div className="interest-copy">
                <p className="section-kicker dark-kicker">Rocks &amp; Gems · Cabinet 04</p>
                <h3>Heavy, sparkly,<br />stripey, strange.</h3>
                <p>Stones worth carrying home, even when your pockets are already full.</p>
              </div>
              <Annotation className="sparkly-note" tone="rust">this one is REALLY shiny</Annotation>
              <svg className="gem-circle" viewBox="0 0 170 120" aria-hidden="true"><path d="M15 71C8 34 53 8 105 14c46 5 67 33 43 63-27 34-103 39-129 8C5 69 16 44 36 29" /></svg>
            </article>

            <article className="growing-interest" id="growing">
              <figure>
                <span className="tape garden-tape" aria-hidden="true" />
                <Image src={photos.growingStrawberries} alt="A ripe red strawberry held in a hand in the garden" width={1400} height={934} sizes="(max-width: 760px) 88vw, 32vw" />
                <figcaption>Harvest no. 01 · One perfect berry</figcaption>
              </figure>
              <p className="section-kicker dark-kicker">Growing things · Plot 01</p>
              <h3>The first<br />strawberry</h3>
              <blockquote>“The red one is ready.”</blockquote>
              <Annotation className="berry-note" tone="blue">we grew this!</Annotation>
            </article>
          </div>
        </section>

        <section className="camping-journal" aria-labelledby="camping-title">
          <div className="camping-copy">
            <p className="section-kicker">Place no. 006 · The pop-up</p>
            <h2 id="camping-title">We Went<br />Camping</h2>
            <blockquote>“It gets bigger when you open it.”</blockquote>
            <p>Our little house arrived folded up. Then the roof went up, the beds came out, and we had a base camp beside the trees and water.</p>
            <dl className="camp-list">
              <div><dt>Our house</dt><dd>The pop-up</dd></div>
              <div><dt>Beds</dt><dd>Fold out sideways</dd></div>
              <div><dt>Marshmallows</dt><dd>Important</dd></div>
            </dl>
          </div>
          <div className="camping-photos">
            <figure className="camp-photo-large">
              <Image src={photos.popupCamperAutumn} alt="A pop-up camper beside a calm wooded lake" width={1400} height={933} sizes="(max-width: 900px) 85vw, 48vw" />
              <figcaption>Base camp · beside the water</figcaption>
            </figure>
            <figure className="camp-photo-small">
              <span className="tape tape-two" aria-hidden="true" />
              <Image src={photos.popupCamperLake} alt="A pop-up camper beneath wooded hills by a lake" width={1800} height={3200} sizes="(max-width: 900px) 55vw, 28vw" />
              <figcaption>Our house, unfolded</figcaption>
            </figure>
            <Annotation className="smoke-note" tone="light">beds come out here →</Annotation>
          </div>
        </section>

        <section className="made-feature" id="made" aria-labelledby="made-title">
          <figure className="made-photo">
            <Image src={photos.legoBuild} alt="A small Lego vehicle being examined by a child’s hand" width={1400} height={931} sizes="(max-width: 900px) 82vw, 55vw" />
            <figcaption>Object 005 · Built at the kitchen table</figcaption>
            <span className="made-box" aria-hidden="true" />
          </figure>
          <div className="made-copy">
            <p className="section-kicker dark-kicker">Things I made · No. 007</p>
            <h2 id="made-title">Something<br />I Made</h2>
            <blockquote>“It can go underwater but also on the moon.”</blockquote>
            <p>A vehicle with four wheels, a secret compartment, and no need for instructions.</p>
            <Annotation className="important-part" tone="rust">← important part</Annotation>
          </div>
        </section>

        <section className="field-index" id="index" aria-labelledby="index-title">
          <div className="index-intro">
            <p className="eyebrow-label">The cabinet</p>
            <h2 id="index-title">Explore the guide</h2>
            <p>Everything belongs somewhere. Some things belong in more than one place.</p>
          </div>
          <nav className="category-list" aria-label="Categories">
            <a href="#creatures"><span>01</span>Creatures <b>05</b></a>
            <a href="#places"><span>02</span>Places <b>04</b></a>
            <a href="#growing"><span>03</span>Growing Things <b>03</b></a>
            <a href="#rocks"><span>04</span>Rocks &amp; Gems <b>11</b></a>
            <a href="#made"><span>05</span>Things I Made <b>08</b></a>
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <p>Fleetwood’s Field Guide to Everything</p>
        <p className="footer-note">More findings soon <span aria-hidden="true">✣</span></p>
        <p>Vol. I · 2026</p>
      </footer>
    </>
  );
}
