import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

const NewsCard = ({ title, text, background, dotColor, logotype, logotypeWidth }) => (
  <div className="news-card relative z-10 flex flex-col justify-between overflow-hidden rounded-md bg-black px-7 pt-7 pb-6 lg:min-h-[308px] md:min-h-[356px]">
    <Image
      src={background}
      alt="background"
      className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-left-top"
      fill
    />
    <div className="news-card__border absolute inset-0 -z-10 h-full w-full rounded-md mix-blend-overlay shadow-inner" />
    <div className="mb-8">
      <div className={`mb-[18px] h-[10px] w-[10px] rounded-full ${dotColor}`} />
      <h5>{title}</h5>
      <div className="news-card__text relative">
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </div>
    <div>
      <div className="news-card__hr h-px w-full bg-white mix-blend-overlay" />
      <div className="pt-6">
        <div className="relative">
          <Image
            src={logotype}
            width={logotypeWidth}
            height={32}
            alt="logotype"
            className="news-card__logotype"
          />
          <Image
            src={logotype}
            width={logotypeWidth}
            height={32}
            alt="logotype"
            className="news-card__logotype"
          />
          <Image
            src={logotype}
            width={logotypeWidth}
            height={32}
            alt="logotype"
            className="news-card__logotype"
          />
        </div>
      </div>
    </div>
  </div>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  dotColor: PropTypes.string.isRequired,
  logotype: PropTypes.string.isRequired,
  logotypeWidth: PropTypes.number.isRequired,
};

export default NewsCard;
