import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const guideCards = [
  {
    title: 'Get oriented',
    description:
      'Learn the basic AcornBids workflow: search opportunities, save repeatable filters, ask questions, and track follow-up work.',
    to: '/docs/getting-started',
  },
  {
    title: 'Build saved searches',
    description:
      'Set up searches that keep your team focused on the contracts, grants, and agencies that matter most.',
    to: '/docs/saved-searches',
  },
  {
    title: 'Use insights',
    description:
      'Turn recurring qualification questions into repeatable answers across opportunities and saved searches.',
    to: '/docs/insights-and-questions',
  },
  {
    title: 'Track the pipeline',
    description:
      'Move promising opportunities into an action workflow so evaluation does not stop at search results.',
    to: '/docs/pipeline',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>AcornBids documentation</p>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
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
            to="/docs/faq">
            Read the FAQ
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
          <div className={styles.grid}>
            {guideCards.map((card) => (
              <Link className={styles.card} to={card.to} key={card.to}>
                <Heading as="h2">{card.title}</Heading>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
