import Link from 'next/link';
import Image from 'next/image';
import { sections } from '@/lib/discoveries';

type AnnotationProps = {
  children: React.ReactNode;
  className?: string;
  tone?: 'light' | 'ink' | 'rust' | 'blue';
};

type MetaItem = { label: string; value: string };

type PreviewProps = {
  number: string;
  category: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  observation: string;
  href?: string;
  className?: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

type FieldGuideEntryProps = {
  number: string;
  title: string;
  meta: MetaItem[];
  image: string;
  imageAlt: string;
  observation: string;
  children?: React.ReactNode;
};

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Fleetwood’s Field Guide home">
        <span className="wordmark-mark" aria-hidden="true">F.</span>
        <span>Fleetwood’s Field Guide</span>
      </Link>
      <nav className="primary-nav" aria-label="Field guide sections">
        {sections.map((section) => (
          <Link key={section.id} href={`/#${section.id}`}>{section.label}</Link>
        ))}
        <Link className="index-link" href="/#index">Index <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}

export function Annotation({ children, className = '', tone = 'ink' }: AnnotationProps) {
  return <span className={`annotation annotation-${tone} ${className}`}>{children}</span>;
}

export function DoodleArrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`doodle-arrow ${className}`} viewBox="0 0 190 100" aria-hidden="true">
      <path d="M7 92C47 74 84 52 145 34c15-5 25-8 37-8" />
      <path d="m164 13 19 13-13 18" />
    </svg>
  );
}

export function SquiggleUnderline({ className = '' }: { className?: string }) {
  return (
    <svg className={`doodle squiggle ${className}`} viewBox="0 0 320 14" aria-hidden="true">
      <path d="M4 8c50-5 104-6 162-4 41 1 82 4 150 2" />
      <path d="M9 12c56-4 116-5 174-3 38 1 76 3 130 1" />
    </svg>
  );
}

export function PineDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={`doodle pine ${className}`} viewBox="0 0 60 92" aria-hidden="true">
      <path d="M9 72 30 47 52 72" />
      <path d="M14 55 30 33 47 55" />
      <path d="M19 39 30 21 42 39" />
      <path d="M30 72v17" />
    </svg>
  );
}

export function StarDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={`doodle star ${className}`} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 4 30 18l15 1-11 10 4 15-14-8-14 8 3-15-11-10 15-2z" />
    </svg>
  );
}

export function WaveDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={`doodle wave ${className}`} viewBox="0 0 96 26" aria-hidden="true">
      <path d="M3 7c8-6 16 6 24 0s16-6 24 0 16 6 24 0" />
      <path d="M3 19c8-6 16 6 24 0s16-6 24 0 16 6 24 0" />
    </svg>
  );
}

export function FieldMeta({ items, light = false }: { items: MetaItem[]; light?: boolean }) {
  return (
    <dl className={`field-meta${light ? ' field-meta-light' : ''}`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function EntryPreview({ number, category, title, date, image, alt, observation, href, className = '' }: PreviewProps) {
  const photo = (
    <>
      <Image src={image} alt={alt} width={1200} height={972} sizes="(max-width: 680px) 100vw, 58vw" />
      <span className="photo-number">Fig. {number}</span>
    </>
  );

  return (
    <article className={`entry-preview ${className}`}>
      {href
        ? <Link className="entry-photo" href={href}>{photo}</Link>
        : <div className="entry-photo">{photo}</div>}
      <div className="entry-preview-copy">
        <p className="section-kicker dark-kicker">No. {number} · {category}</p>
        <h3>{href ? <Link href={href}>{title}</Link> : title}</h3>
        <blockquote>“{observation}”</blockquote>
        <p className="entry-date">{date}</p>
      </div>
    </article>
  );
}

export function PhotoGallery({ images, className = '' }: { images: GalleryImage[]; className?: string }) {
  return (
    <div className={`photo-gallery ${className}`}>
      {images.map((image, index) => (
        <figure className={image.className} key={`${image.src}-${index}`}>
          <Image src={image.src} alt={image.alt} width={1600} height={1200} sizes="(max-width: 680px) 100vw, 55vw" />
          {image.caption && <figcaption><span>0{index + 1}</span>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function FieldGuideEntry({ number, title, meta, image, imageAlt, observation, children }: FieldGuideEntryProps) {
  return (
    <article className="field-entry">
      <header className="entry-hero-copy">
        <p className="section-kicker dark-kicker">Discovery No. {number}</p>
        <h1>{title}</h1>
        <FieldMeta items={meta} />
      </header>

      <figure className="entry-hero-photo">
        <Image src={image} alt={imageAlt} width={1800} height={775} sizes="100vw" priority />
        <figcaption>Fig. {number} · Photographic evidence</figcaption>
        <Annotation className="entry-very-big" tone="light">VERY BIG.</Annotation>
        <Annotation className="entry-finger-note" tone="light">almost as big as my finger →</Annotation>
        <DoodleArrow className="entry-arrow" />
      </figure>

      <section className="observation-block" aria-labelledby="observation-title">
        <p id="observation-title">Fleetwood’s observation</p>
        <blockquote>“{observation}”</blockquote>
        <span className="observation-mark" aria-hidden="true">*</span>
      </section>
      {children}
    </article>
  );
}

export function EntryNavigation() {
  return (
    <nav className="entry-navigation" aria-label="Other discoveries">
      <Link href="/#made"><span>Previous</span><strong>Something I Made</strong></Link>
      <Link href="/#snail" className="next"><span>Next discovery</span><strong>A Really Big Snail →</strong></Link>
    </nav>
  );
}
