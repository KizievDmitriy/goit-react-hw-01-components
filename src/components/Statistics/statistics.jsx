import PropTypes from 'prop-types';
import styles from './statistics.css';
import { StatisticItem } from '../StatisticItem/statisticItem';

export const Statistics = ({ title, stats }) => {
  return (
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={styles.item}
              key={id}
            >
              <StatisticItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

