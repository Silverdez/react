import hero from '../fixtures/hero'
import { Hero } from '../components'

export function HeroContainer() {
  return (
    <div className="App">
      <Hero.Container>
        {hero.map((item) => (
          <Hero key={item.id} direction={item.direction}>
            <Hero.Pane>
              <Hero.Title>{item.title}</Hero.Title>
              <Hero.SubTitle>{item.subTitle}</Hero.SubTitle>
            </Hero.Pane>
            <Hero.Pane>
              <Hero.Image src={item.image} alt={item.alt} />
            </Hero.Pane>
          </Hero>
        ))}
      </Hero.Container>
    </div>
  );
}