import Image from 'next/image';
import { HeroContainer } from './HeroContainer';
// import heroImg from '/images/hero.jpg';

interface IHeroProps {
	isAppleM1: boolean;
}

export const Hero: React.FC<IHeroProps> = ({ isAppleM1 }: IHeroProps) => {
	const heroImg = 'img/hero.jpg';
	return (
		<HeroContainer>
			<Image
				src={heroImg}
				width={800}
				height={540}
				alt={'greg-rakozy-unsplash'}
				unoptimized={
					process.env.NODE_ENV === 'development' && isAppleM1
				}
			/>
		</HeroContainer>
	);
};
