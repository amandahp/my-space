'use client';
import { useState, useRef, useEffect } from 'react';
import { Section, Container, TextBlock, SkillBox, SkillsCarousel, SkillsTrack, CarouselButton } from './styles';
import { useLanguage } from '../context/LanguageContext';
import translations from "../data/translate.json";
import Image from "next/image";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const trackRef = useRef(null);

  const originalSkills = [
    { name: 'Node', icon: '/utils/icon/node-js-svgrepo-com.svg' },
    { name: 'TypeScript', icon: '/utils/icon/typescript-official-svgrepo-com.svg' },
    { name: 'ReactJs', icon: '/utils/icon/react-javascript-js-framework-facebook-svgrepo-com.svg' },
    { name: 'Python', icon: '/utils/icon/python-svgrepo-com.svg'},
		{ name: 'Next.js', icon: '/utils/icon/nextjs-svgrepo-com.svg'},
    { name: 'HTML5', icon: '/utils/icon/html-5-svgrepo-com.svg'},
    { name: 'CSS3', icon: 'utils/icon/css-3-svgrepo-com.svg'},
		{	name: 'JavaScript', icon: 'utils/icon/js-svgrepo-com.svg'},
		{ name: 'MongoDB', icon: 'utils/icon/mongodb-svgrepo-com.svg'},
		{ name: 'MySql', icon: 'utils/icon/mysql-logo-svgrepo-com.svg'},
		{ name: 'Numpy', icon: 'utils/icon/numpy-svgrepo-com.svg'},
    { name: 'Git', icon: 'utils/icon/git-svgrepo-com.svg'},
		{ name: 'Bitbucket', icon: 'utils/icon/bitbucket-svgrepo-com.svg'}
  ];

	const skills = [...originalSkills, ...originalSkills];

  const { lang } = useLanguage();
  const { home } = translations[lang];
  const { imAmanda, position, skills: skillsText, about, textAboutMe } = home; 

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 480) setVisibleItems(1);
      else if (window.innerWidth < 768) setVisibleItems(2);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const navigate = (direction) => {
    const newIndex = direction === 'prev' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(skills.length - visibleItems, currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <Section>
        <Image 
          src="/im.png" 
          alt="Minha foto" 
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            objectFit: "cover"
          }} 
        />
        <TextBlock style={{padding: '4rem 0rem 0rem 0rem'}}>
          <h1 className='name'>{imAmanda}</h1>
          <h2>{position}</h2>
          <a href='https://www.linkedin.com/in/amanda-hoffmann/' target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href='https://github.com/amandahp' target="_blank" rel="noopener noreferrer">GitHub</a>
        </TextBlock>
      </Section>
      
      <Section>
        <TextBlock>
          <h1 className='about'>{about}</h1>
          <p className='about-me'>{textAboutMe}</p>
        </TextBlock>
      </Section>
      
      <Section>
        <TextBlock>
          <h1 className='skills'>{skillsText}</h1>
          <SkillsCarousel>
            <CarouselButton className="prev" onClick={() => navigate('prev')}>
              &lt;
            </CarouselButton>
            
            <SkillsTrack 
              ref={trackRef}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` 
              }}
            >
              {skills.map((skill) => (
                <SkillBox key={skill.name}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </SkillBox>
              ))}
            </SkillsTrack>
            
            <CarouselButton className="next" onClick={() => navigate('next')}>
              &gt;
            </CarouselButton>
          </SkillsCarousel>
        </TextBlock>
      </Section>
    </Container>
  );
}