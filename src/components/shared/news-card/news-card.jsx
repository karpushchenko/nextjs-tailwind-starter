import Image from 'next/image';
import PropTypes from 'prop-types'
import React from 'react';
import './styles.css'

const NewsCard = ({ title, text, background, dotColor, logotype, logotypeWidth }) => (
	<div className="news-card overflow-hidden relative flex flex-col justify-between lg:min-h-[308px] md:min-h-[356px] px-7 pt-7 pb-6 rounded-md bg-black z-10">
		<Image src={ background } alt="background" className="absolute w-full h-full top-0 left-0 object-cover object-left-top -z-10" fill />
		<div className="news-card__border absolute w-full h-full inset-0 shadow-inner rounded-md mix-blend-overlay -z-10" />
		<div className='mb-8'>
			<div className={`w-[10px] h-[10px] mb-[18px] rounded-full ${dotColor}`} />
			<h5>{ title }</h5>
			<div className="news-card__text relative">
				<p>{ text }</p>
				<p>{ text }</p>
				<p>{ text }</p>
				<p>{ text }</p>
			</div>
		</div>
		<div>
			<div className="news-card__hr w-full h-px bg-white mix-blend-overlay" />
			<div className="pt-6">
				<div className="relative">
					<Image src={ logotype }  width={ logotypeWidth } height={ 32 } alt="logotype" className="news-card__logotype" />
					<Image src={ logotype }  width={ logotypeWidth } height={ 32 } alt="logotype" className="news-card__logotype" />
					<Image src={ logotype }  width={ logotypeWidth } height={ 32 } alt="logotype" className="news-card__logotype" />
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
	logotypeWidth: PropTypes.number.isRequired 
};

export default NewsCard;
