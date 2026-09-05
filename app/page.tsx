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
          <p className="eyebrow"><span>Est.</span> Ontario · 2026 <span>No. 001</span></p>
          <h1 id="site-title">Fleetwood’s Field Guide <em>to Everything</em></h1>
          <div className="masthead-foot">
            <p>Notes, discoveries, important findings, and other things worth remembering.</p>
            <span className="edition-stamp" aria-label="First edition">First<br />edition</span>
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

        <section className="camping-journal" aria-labelledby="camping-title">
          <div className="camping-copy">
            <p className="section-kicker">Place no. 004 · Two nights</p>
            <h2 id="camping-title">We Went<br />Camping</h2>
            <blockquote>“The fire was the warmest part.”</blockquote>
            <p>We slept under very tall trees. In the morning everything was wet and the birds had already been awake for ages.</p>
            <dl className="camp-list">
              <div><dt>Best bit</dt><dd>The fire</dd></div>
              <div><dt>Night sounds</dt><dd>At least 7</dd></div>
              <div><dt>Marshmallows</dt><dd>Important</dd></div>
            </dl>
          </div>
          <div className="camping-photos">
            <figure className="camp-photo-large">
              <Image src={photos.campingNight} alt="A campfire glowing beside a tent in the forest" width={1600} height={1067} sizes="(max-width: 900px) 85vw, 48vw" />
              <figcaption>Night one · 8:14 pm</figcaption>
            </figure>
            <figure className="camp-photo-small">
              <span className="tape tape-two" aria-hidden="true" />
              <Image src={photos.campingTent} alt="A green tent among tall forest trees" width={1400} height={933} sizes="(max-width: 900px) 55vw, 28vw" />
              <figcaption>Our house, temporarily</figcaption>
            </figure>
            <Annotation className="smoke-note" tone="light">smoke follows you!</Annotation>
          </div>
        </section>

        <section className="made-feature" id="made" aria-labelledby="made-title">
          <figure className="made-photo">
            <Image src={photos.legoBuild} alt="A small Lego vehicle being examined by a child’s hand" width={1400} height={931} sizes="(max-width: 900px) 82vw, 55vw" />
            <figcaption>Object 005 · Built at the kitchen table</figcaption>
            <span className="made-box" aria-hidden="true" />
          </figure>
          <div className="made-copy">
            <p className="section-kicker dark-kicker">Things I made · No. 005</p>
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
            <a href="#journal"><span>01</span>Discoveries <b>12</b></a>
            <a href="#creatures"><span>02</span>Creatures <b>05</b></a>
            <a href="#made"><span>03</span>Things I Made <b>08</b></a>
            <a href="#places"><span>04</span>Places <b>04</b></a>
            <a href="#journal"><span>05</span>Field Notes <b>17</b></a>
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
