import Link from 'next/link';
import Image from 'next/image';
import {
  Annotation,
  DoodleArrow,
  EntryPreview,
  FieldMeta,
  PhotoGallery,
  PineDoodle,
  SiteHeader,
  SquiggleUnderline,
  StarDoodle,
  WaveDoodle,
} from '@/components/field-guide';
import { discoveries, photos, sections } from '@/lib/discoveries';

export default function Home() {
  const caterpillar = discoveries.caterpillar;
  const snail = discoveries.snail;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="site-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">Kept by Fleetwood · Ontario · Est. 2026</p>

              <h1 id="site-title">
                A field guide<br />to{' '}
                <span className="hero-script">
                  everything
                  <svg className="hero-underline" viewBox="0 0 300 18" aria-hidden="true">
                    <path d="M5 9c47-5 97-6 149-4 42 2 84 5 143 2" />
                    <path d="M12 14c58-4 121-5 179-3 34 1 67 3 105 0" />
                  </svg>
                </span>
              </h1>

              <p className="hero-lede">
                Creatures, rocks, plants, places, and things I made — all of it written
                down before I forget.
              </p>

              <p className="hero-margin-note">
                <span aria-hidden="true">*</span> write it down before you forget
              </p>

              <svg className="hero-sprig" viewBox="0 0 80 170" aria-hidden="true">
                <path d="M44 164C42 132 42 98 46 70c3-20 8-36 15-50" />
                <path d="M43 150c-11 1-21-5-28-15" />
                <path d="M43 143c11 1 21-5 28-15" />
                <path d="M43 129c-10 0-19-6-25-15" />
                <path d="M43 122c10 0 19-6 25-15" />
                <path d="M45 108c-9-1-17-6-22-14" />
                <path d="M45 101c9-1 17-7 22-15" />
                <path d="M48 87c-8-1-15-7-19-14" />
                <path d="M49 80c8-2 14-7 18-14" />
                <path d="M52 66c-7-2-12-7-15-13" />
                <path d="M54 59c7-2 12-7 15-13" />
                <path d="M56 45c-6-2-10-6-12-11" />
                <path d="M58 38c6-2 10-6 12-11" />
              </svg>
            </div>

            <figure className="hero-plate">
              <span className="tape hero-tape" aria-hidden="true" />
              <div className="hero-plate-photo">
                <Image
                  src={photos.beachRocks}
                  alt="Beach stones and a curved piece of driftwood laid out on wet sand"
                  width={1400}
                  height={1960}
                  sizes="(max-width: 980px) 92vw, 54vw"
                  priority
                />
                <span className="photo-number">Plate I</span>
              </div>
              <figcaption>everything on one beach, left where we found it</figcaption>

              <Annotation className="hero-note-rock" tone="ink">best rock (so far)</Annotation>
              <svg className="hero-circle" viewBox="0 0 160 110" aria-hidden="true">
                <path d="M18 62C10 26 58 6 108 13c44 6 62 34 38 62-27 31-98 34-122 5C6 60 18 38 38 25" />
              </svg>
            </figure>
          </div>

          <nav className="hero-tabs" aria-label="Field guide subjects">
            {sections.map((section) => (
              <a key={section.id} className={`hero-tab sec-${section.id}`} href={`#${section.id}`}>
                <span><b>{section.number}</b> · {section.count} notes</span>
                <strong>{section.label}</strong>
              </a>
            ))}
          </nav>
        </section>

        <article className="featured-discovery" id="featured">
          <div className="featured-heading">
            <div>
              <p className="section-kicker">Discovery No. {caterpillar.number} · {caterpillar.category}</p>
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
            <Image src={caterpillar.image} alt="A very large green caterpillar on a plant stem" width={1800} height={775} sizes="100vw" />
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
              <SquiggleUnderline className="heading-squiggle" />
            </div>
            <p>Small wonders, important questions,<br />and several very good sticks.</p>
          </header>

          <div className="findings-grid" id="creatures">
            <div className="snail-wrap" id="snail">
              <EntryPreview
                number={snail.number}
                category={snail.category}
                title={snail.title}
                date={snail.date}
                image={snail.image}
                alt="A large snail making its way through green leaves"
                observation={snail.observation}
                className="snail-entry"
              />
              <Annotation className="snail-speed" tone="blue">striped shell</Annotation>
              <svg className="snail-circle" viewBox="0 0 160 120" aria-hidden="true"><path d="M12 69C8 25 49 5 103 12c50 7 67 42 40 73-29 34-102 39-126 7C6 78 7 47 26 28" /></svg>
            </div>

            <article className="lightning-note">
              <p className="section-kicker dark-kicker">No. 004 · Field note</p>
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
            <p className="section-kicker dark-kicker">No. 003 · Places</p>
            <WaveDoodle className="beach-wave" />
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
            <Annotation className="best-rock" tone="light">biggest shell!</Annotation>
            <svg className="beach-arrow" viewBox="0 0 190 100" aria-hidden="true"><path d="M7 92C47 74 84 52 145 34c15-5 25-8 37-8" /><path d="m164 13 19 13-13 18" /></svg>
          </div>
        </section>

        <section className="interest-cabinets" aria-labelledby="interests-title">
          <header className="interests-heading">
            <div>
              <p className="eyebrow-label">Main subjects</p>
              <h2 id="interests-title">Things from the ground.<br />Things from the garden.</h2>
            </div>
            <p>The collection keeps growing. Some specimens are dug up; others need sun, rain, and patience.</p>
          </header>

          <div className="interest-spread">
            <article className="rocks-interest" id="rocks">
              <figure>
                <div className="rock-photo">
                  <Image src={photos.rocksGems} alt="A sunlit tray of collected rocks and mineral specimens" width={2200} height={1467} sizes="(max-width: 760px) 100vw, 62vw" />
                  <Annotation className="sparkly-note" tone="rust">smoothest one ↓</Annotation>
                  <svg className="gem-circle" viewBox="0 0 170 120" aria-hidden="true"><path d="M15 71C8 34 53 8 105 14c46 5 67 33 43 63-27 34-103 39-129 8C5 69 16 44 36 29" /></svg>
                </div>
                <figcaption>Specimen tray · found, sorted, compared</figcaption>
              </figure>
              <div className="interest-copy">
                <p className="section-kicker dark-kicker">No. 005 · Rocks &amp; Gems</p>
                <h3>Heavy, sparkly,<br />stripey, strange.</h3>
                <p>Stones worth carrying home, even when your pockets are already full.</p>
              </div>
            </article>

            <article className="growing-interest" id="growing">
              <figure>
                <span className="tape garden-tape" aria-hidden="true" />
                <Image src={photos.growingStrawberries} alt="Small hands holding a handful of tiny wild strawberries" width={1800} height={1350} sizes="(max-width: 760px) 88vw, 32vw" />
                <Annotation className="berry-note" tone="light">all the red ones</Annotation>
                <svg className="berry-circle" viewBox="0 0 160 120" aria-hidden="true"><path d="M13 66C10 27 46 8 99 12c48 4 66 35 43 66-25 35-99 40-124 10C6 74 5 46 23 29" /></svg>
                <figcaption>Harvest no. 01 · the tiny ones count too</figcaption>
              </figure>
              <p className="section-kicker dark-kicker">No. 006 · Growing Things</p>
              <h3>The first<br />handful</h3>
              <blockquote>“I found all the red ones.”</blockquote>
            </article>
          </div>
        </section>

        <section className="camping-journal" aria-labelledby="camping-title">
          <div className="camping-copy">
            <p className="section-kicker">No. 007 · Places · Killbear Provincial Park</p>
            <h2 id="camping-title">The Pop-Up<br />at Killbear</h2>
            <blockquote>“It gets bigger when you open it.”</blockquote>
            <p>Our little house arrived folded up. Then the roof went up, the beds slid out both ends, and we had a base camp near the rocks, pines, and Georgian Bay.</p>
            <dl className="camp-list">
              <div><dt>Base camp</dt><dd>The pop-up</dd></div>
              <div><dt>Place</dt><dd>Killbear</dd></div>
              <div><dt>Beds</dt><dd>Fold out both ends</dd></div>
              <div><dt>Water</dt><dd>Georgian Bay</dd></div>
            </dl>
            <p className="camp-note">
              <PineDoodle className="camp-pine" />
              <span>the roof cranks up by hand</span>
            </p>
          </div>
          <div className="camping-photos">
            <figure className="camp-photo-large">
              <Image src={photos.popupCamper} alt="A canvas pop-up trailer opened at a lakeside campsite in autumn" width={1400} height={933} sizes="(max-width: 900px) 100vw, 58vw" />
              <svg className="camper-bed camper-bed-left" viewBox="0 0 170 110" aria-hidden="true"><path d="M12 60C9 22 52 7 110 15c48 7 62 35 34 62-30 30-102 32-126 3C6 65 7 40 28 25" /></svg>
              <svg className="camper-bed camper-bed-right" viewBox="0 0 170 110" aria-hidden="true"><path d="M12 60C9 22 52 7 110 15c48 7 62 35 34 62-30 30-102 32-126 3C6 65 7 40 28 25" /></svg>
              <Annotation className="camper-note" tone="light">bed ← &nbsp;&nbsp; → bed</Annotation>
              <figcaption>Base camp · roof up, beds out</figcaption>
            </figure>
            <div className="killbear-strip" aria-label="Photographs from Killbear Provincial Park">
              <figure>
                <Image src={photos.killbearRockShore} alt="Layered Canadian Shield rock meeting the water at Killbear Provincial Park" width={780} height={520} sizes="(max-width: 900px) 31vw, 18vw" />
                <figcaption>Rock shore</figcaption>
              </figure>
              <figure>
                <Image src={photos.killbearFunOnRocks} alt="Children exploring the smooth granite shoreline at Killbear Provincial Park" width={780} height={520} sizes="(max-width: 900px) 31vw, 18vw" />
                <figcaption>Run on the rocks</figcaption>
              </figure>
              <figure>
                <Image src={photos.killbearKayak} alt="A red kayak resting on the granite shoreline at Killbear Provincial Park" width={780} height={520} sizes="(max-width: 900px) 31vw, 18vw" />
                <figcaption>Ready to launch</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="made-feature" id="made" aria-labelledby="made-title">
          <figure className="made-photo">
            <Image src={photos.legoBuild} alt="A child building a red Lego rover at a wooden table" width={2200} height={1467} sizes="(max-width: 900px) 82vw, 55vw" />
            <figcaption>Red rover · built at the kitchen table</figcaption>
            <svg className="made-box" viewBox="0 0 180 110" aria-hidden="true"><path d="M9 14C49 7 119 8 168 13c5 28 4 59-2 88-48 3-110 2-157-4-4-30-4-56 0-83Z" /></svg>
            <Annotation className="important-part" tone="light">this part opens ↑</Annotation>
          </figure>
          <div className="made-copy">
            <StarDoodle className="made-star" />
            <p className="section-kicker dark-kicker">No. 008 · Things I Made</p>
            <h2 id="made-title">Something<br />I Made</h2>
            <blockquote>“It can go underwater but also on the moon.”</blockquote>
            <p>A red rover with four wheels, a hinged back, and enough room for a very small moon sample.</p>
          </div>
        </section>

        <section className="field-index" id="index" aria-labelledby="index-title">
          <div className="index-intro">
            <p className="eyebrow-label">The cabinet</p>
            <h2 id="index-title">Explore the guide</h2>
            <p>Everything belongs somewhere. Some things belong in more than one place.</p>
            <p className="index-note"><span aria-hidden="true">*</span> the list keeps getting longer</p>
          </div>
          <nav className="category-list" aria-label="Categories">
            {sections.map((section) => (
              <a key={section.id} className={`sec-${section.id}`} href={`#${section.id}`}>
                <span><i aria-hidden="true" />{section.number}</span>{section.label} <b>{String(section.count).padStart(2, '0')}</b>
              </a>
            ))}
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <p>Fleetwood’s Field Guide to Everything</p>
        <p className="footer-note">More findings soon <span aria-hidden="true">✣</span></p>
        <p>Ontario · 2026</p>
      </footer>
    </>
  );
}
