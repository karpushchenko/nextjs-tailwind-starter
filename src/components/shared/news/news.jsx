import React from 'react';

import NewsCard from 'components/shared/news-card';

const News = () => ( 
	<section className="news-cards py-30 2xl:py-24 lg:py-19 sm:py-14">
		<div className="container">
			<h3 className="text-center">Latest news about Terzo</h3>
			<div className="grid grid-cols-4 place-content-stretch lg:grid-cols-2 sm:grid-cols-1 gap-10 xl:gap-5 lg:gap-6 md:gap-5 sm:gap-x-0 ">
				<NewsCard
					title="Terzo Announces $16M Series A Round"
					text="Managing your suppliers efficiently is nearly impossible if you have to juggle multiple systems and spreadsheets of data." 
					background="/img/news_card_background1.svg"
					dotColor="bg-primary-2"
					logotype="/img/news_card_logotype1.svg"
					logotypeWidth={ 48 }
				/>
				<NewsCard
					title="Terzo Named to 2022 ProcureTech 100 Lis" 
					text="Legal teams lose time and create risk due to demand from various departments, often buried with contract reviews and chasing" 
					background="/img/news_card_background2.svg" 
					dotColor="bg-secondary-2"
					logotype="/img/news_card_logotype2.svg"
					logotypeWidth={ 140 }
				/>
				<NewsCard 
					title="Terzo Named a 50 Best Companies to Watch in 2022" 
					text="Finance teams lack visibility into contract spend which complicates the budgeting process and creates inaccurate forecasting, posing risk to the business." 
					background="/img/news_card_background3.svg" 
					dotColor="bg-primary-3"
					logotype="/img/news_card_logotype3.svg"
					logotypeWidth={ 137 }
				/>
				<NewsCard 
					title="Terzo Announces Partnership with Prevalent" 
					text="Storing contracts across multiple systems makes renewal management extremely difficult, leading to unfavorable renewal terms and missed renewals." 
					background="/img/news_card_background4.svg" 
					dotColor="bg-primary-1"
					logotype="/img/news_card_logotype4.svg"
					logotypeWidth={ 106 }
				/>
			</div>	
		</div>
	</section>
);

export default News;