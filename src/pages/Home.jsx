import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import Resenas from '../components/Resenas';
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Resenas />
      <Contacto />
    </>
  );
}