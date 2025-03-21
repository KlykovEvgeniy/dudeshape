import { useLocation } from 'react-router-dom';
import { ProductInner } from '../components';

export default function Product() {
  const location = useLocation();

  return (
    <main className=" container mb-72 flex items-center justify-between">
      <ProductInner index={location.state} />
    </main>
  );
}
