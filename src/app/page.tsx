'use client';
import { Section, Container, TextBlock, SkillBox, SkillsGrid } from './styles';
import { useLanguage} from '../context/LanguageContext';
import translations from "../data/translate.json";
import Image from "next/image";


export default function Home() {
	const skill= [
		{ name: 'Node', icon: '/utils/icon/node-js-svgrepo-com.svg' },
		{ name: 'TypeScript', icon: '/utils/icon/typescript-official-svgrepo-com.svg' },
		{ name: 'ReactJs', icon: '/utils/icon/react-javascript-js-framework-facebook-svgrepo-com.svg' },
		{ name: 'Python', icon: '/utils/icon/python-svgrepo-com.svg'}
	];
	
	const { lang, setLang } = useLanguage();
  const { home } = translations[lang];
	const { imAmanda, position, text, skills } = home; 
	

  return (
    <Container>
      <Section>
        <Image src="/im.png" alt="Minha foto" 
  				width={300}
  				height={300}
  				style={{
    				borderRadius: "50%",
    				objectFit: "cover"
  			}} />
        <TextBlock>
          <h1 className='name'>{imAmanda}</h1>
					<h2>{position}</h2>
          <p>{text}</p>
					<a href='https://www.linkedin.com/in/amanda-hoffmann/' target="_blank" rel="noopener noreferrer">Linkedin</a>
					<a href='https://github.com/amandahp' target="_blank" rel="noopener noreferrer">GitHub</a>
        </TextBlock>
      </Section>
			<Section>
        <TextBlock>
          <h1 className='about'>About me</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TextBlock>
      </Section>
      <Section>
				<TextBlock>
					<h1 className='skills'>{skills}</h1>
        	<SkillsGrid>
						{skill.map((skill) => (
    					<SkillBox key={skill.name}>
      					<img src={skill.icon} alt={skill.name} />
      					<span>{skill.name}</span>
    					</SkillBox>
  					))}
        	</SkillsGrid>
				</TextBlock>
      </Section>
    </Container>
  );
}