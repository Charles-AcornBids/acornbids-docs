import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const guideCards = [
  {
    eyebrow: 'Start',
    title: 'Learn the workflow',
    description:
      'Move from first login to a repeatable search, qualification, and follow-up rhythm.',
    to: '/docs/getting-started',
  },
  {
    eyebrow: 'Search',
    title: 'Build saved searches',
    description:
      'Keep your team focused on the contracts, grants, and agencies that matter most.',
    to: '/docs/saved-searches',
  },
  {
    eyebrow: 'Qualify',
    title: 'Use AI questions',
    description:
      'Turn recurring bid qualification questions into reusable answers across opportunities.',
    to: '/docs/questions-and-answers',
  },
  {
    eyebrow: 'Act',
    title: 'Track the pipeline',
    description:
      'Move promising opportunities into an action workflow after the first review.',
    to: '/docs/pipeline',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>AcornBids product docs</p>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          Turn public-sector opportunity data into bid decisions.
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Start with the workflow
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/saved-searches">
            Set up saved searches
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="AcornBids product documentation and user guides.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Core guides</p>
            <Heading as="h2">Documented around the AcornBids workflow</Heading>
          </div>
          <div className={styles.grid}>
            {guideCards.map((card) => (
              <Link className={styles.card} to={card.to} key={card.to}>
                <p>{card.eyebrow}</p>
                <Heading as="h2">{card.title}</Heading>
                <span>{card.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
