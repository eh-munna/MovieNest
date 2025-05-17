import { useState } from 'react';
import Panel from './Panel';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Panel
        isOpen={activeIndex === 0}
        title="About"
        content="With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
        onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
      />
      <Panel
        isOpen={activeIndex === 1}
        title="Etymology"
        content="The name comes from алма, the Kazakh word for 'apple' and is often translated as 'full of apples'. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
        onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
      />
    </>
  );
}
