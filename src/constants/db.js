import {img1,img2,img3} from "./домашний"
import {img4,img5} from "./effko food"
export function getData() {
	return [
		{
			title: 'JavaScript',
			price: 17.99,
			Image:img1,
			id: 1,
		},
		{
			title: 'ReactJS',
			price: 15,
			Image:img2,
			id: 2,
		},
		{
			title: 'VueJS',
			price: 13.5,
			Image:img3,
			id: 3,
		},
		{
			title: 'NodeJS',
			price: 13.99,
			Image:img4,
			id: 4,
		},
		{
			title: 'NestJS',
			price: 12.5,
			Image:img5,
			id: 5,
		},
		{
			title: 'NextJS',
			price: 12.99,
			Image:
				'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FPe94ubZPSCHgXDIPBxTr&w=3840&q=75',
			id: 6,
		},
		{
			title: 'TypeScript',
			price: 22.99,
			Image:
				'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FfZ3plnBeRQ2hJtZNbhNE&w=3840&q=75',
			id: 7,
		},
		{
			title: 'TensorflowJS',
			price: 28.99,
			Image:
				'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FtIMgibghQveiDeJeXDPI&w=3840&q=75',
			id: 8,
		},
	];
}
