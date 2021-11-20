import React from 'react';
import Navigation from '../../../Components/Navigation';
import NavigationBar from '../../../Components/NavigationBar';
import { Wrapper } from '../../../Components/Wrapper';
import { ContainerTemplate } from '../../../Components/ContainerTemplate';
import { Heading } from '../../../Components/Heading';

import './article.scss';
import { ArticleList } from '../../../Components/ArticleList';

import { ArticleImages, Newspaper } from '../../../Components/Newspaper';

const article = [
	{
		content:
			'Traviscot got many humiliating from his concert dsadssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertvdvcxzbczbvzbzdfgfdz'
	},
	{
		content:
			'Traviscot got many humiliating from his concertfdg gfdsssssgggfsdfgsd'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfsssssssssssssssssssssssssssg'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgffgssssssssssssssssssssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfsssssssssssssssssssssssssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfssssssssssssssssssssssssssssssssssssssss'
	}
];
export const Articles = () => {
	return (
		<>
			<Wrapper>
				<Navigation></Navigation>

				<ContainerTemplate>
					<div className='articles-leftcontainer'>
						<Newspaper
							link='https://img.wattpad.com/e730b0898d0418b446135de802256129da9d2169/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f563157715f33666a33382d6c57673d3d2d3538313835373338362e313533333732643430383662613536663633363331303039383132382e6a7067'
							heading='KANYE WEST CALLS FOR AN END TO DRAKE BEEF WITH J PRINCE BY HIS SIDE'
							content='“I’m making this video to address the ongoing back and forth between myself and Drake,” he says. “Both me and Drake have taken shots at each other and it’s time to put it to rest. I’m asking Drake on December 7 to join me on stage as a special guest to share the two biggest albums of the year live in Los Angeles with the ultimate purpose being to free Larry Hoover.'
							inforimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0OyqAQDJsRYUObsRMVEgge1KD0pWz3kLJ7M4aIIONrGKWQgE4VPAty7IYt_Ieh3S744&usqp=CAU'
							writer='võ sư 1 mắt'
							date='Nov 17th , 3:53 PM'></Newspaper>
					</div>

					<div>
						<Heading name='hiphop ' desc='Article'></Heading>
						<ArticleList data={article}></ArticleList>
					</div>
				</ContainerTemplate>
			</Wrapper>
		</>
	);
};
