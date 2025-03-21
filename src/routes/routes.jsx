import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Product from '../pages/Product';

export default function Routees() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path=":id" element={<Product />} />
    </Routes>
  );
}
