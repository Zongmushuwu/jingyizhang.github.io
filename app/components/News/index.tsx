import Link from 'next/link';
import { newsItems } from '../../data/news';

export default function News() {
  const updates = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section aria-labelledby="news-heading" className="mt-8">
        <h2 id="news-heading" className="mb-3 text-xl font-semibold text-black">News</h2>
        <p id="news-scroll-hint" className="sr-only">Scroll to read older updates. Each update links to the related publication or website.</p>

        <div
          className="news-scroll"
          role="region"
          aria-labelledby="news-heading"
          aria-describedby="news-scroll-hint"
          tabIndex={0}
        >
          <ul className="news-list">
            {updates.map((item) => {
              const external = item.href.startsWith('https://');

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="news-link"
                    title={item.title}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    <time dateTime={item.date} className="news-date">{item.displayDate}</time>
                    <p className="news-copy">
                      {item.text}
                      {external && <span className="sr-only"> Opens in a new tab.</span>}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </section>
  );
}
