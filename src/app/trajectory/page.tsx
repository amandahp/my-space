'use client';
import { useState } from 'react';
import {
	TimelineContainer,
	CentralLine,
	YearMarker,
	YearContentWrapper, TitleContainer
} from './styles';
import { Container } from '../styles';
import { useLanguage } from '../lib/context/LanguageContext';
import translate from '../../data/translate.json';
import DownloadButton from '../components/downloadButton';

export default function Timeline() {
	const [activeItem, setActiveItem] = useState(null);
	const { lang } = useLanguage();

	const toggleItem = (index) => {
		setActiveItem(activeItem === index ? null : index);
	};

	const { timeline, trajectory } = translate[lang];

	const { title } = trajectory;
	const timelineEntries = Object.entries(timeline).sort((a, b) => Number(b[0]) - Number(a[0]));

	return (
		<Container>
			<TitleContainer>
				<h1>{title}</h1>
			</TitleContainer>
			<TimelineContainer>
				<CentralLine />

				{timelineEntries.map(([year, items], index) => (
					<YearContentWrapper key={year}>
						<YearMarker onClick={() => toggleItem(index)}>
							{year}
						</YearMarker>

						{activeItem === index && items.length > 0 && (
							<>
								{items.map((item) => (
									<div key={Math.random()} className='item-box'>
										<h3>{item.title}</h3>
										<small><strong>{year}</strong></small>
										<p>{item.description}</p>
										{item.details && <p>{item.details}</p>}
									</div>
								))}
							</>
						)}
					</YearContentWrapper>
				))}
			</TimelineContainer>
			<DownloadButton />
		</Container>

	);
}