import picture from '../images/white-chair.png';

export default function ProductInner({ index }) {
  const { name, cost, location, company } = index;
  return (
    <>
      <img  className='w-1/2 object-cover' src={picture} alt="cool image" />
      <div>
        <h2 className="text-black">{name}</h2>
        <h1>{cost}$</h1>
        <p>Location: {location}</p>
        <p>{company}</p>
      </div>
    </>
  );
}
