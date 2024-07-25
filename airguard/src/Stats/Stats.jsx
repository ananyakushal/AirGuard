import React, { useEffect, useRef } from 'react';
import "../Stats/Stats.css";

const Stats = () => {
  const stats = [
    { icon: 'fa-code', count: 900000, label: 'Lines of code' },
    { icon: 'fa-check', count: 280, label: 'Projects done' },
    { icon: 'fa-user', count: 75, label: 'Happy clients' },
    { icon: 'fa-coffee', count: 999, label: 'Cups of coffee' },
  ];

  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      const countTo = stats[index].count;
      let countNum = 0;
      const updateCount = () => {
        const increment = countTo / 100;
        countNum = Math.min(countNum + increment, countTo);
        counter.textContent = Math.floor(countNum);
        if (countNum < countTo) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = countTo;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
      <div className="stats-container">
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-lg-3 stats" key={index}>
              <i className={`fa ${stat.icon}`} aria-hidden="true"></i>
              <div
                className="counting"
                data-count={stat.count}
                ref={(el) => (countersRef.current[index] = el)}
              >
                0
              </div>
              <h5>{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
