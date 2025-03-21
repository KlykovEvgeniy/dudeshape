import { Hero, Trusted, About, Popular, Furniture, Header, Customers, Subscribe, Footer } from '../components';

export default function Main() {
  return (
    <>
      <Header />
      <main className="mt-[65px]">
        <Hero />
        <Trusted />
        <About />
        <Popular />
        <Furniture />
        <Customers />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
