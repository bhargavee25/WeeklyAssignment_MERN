import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$999", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Tablet", price: "$499", img: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <span className="font-bold">MyStore</span>
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">Products</a>
        </div>
      </nav>

      <header className="text-center p-10 bg-blue-100">
        <h1 className="text-4xl font-bold">Amazing Products</h1>
        <p className="text-lg mt-2">Find your next great device</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 flex-grow">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.img} alt={product.name} className="mb-2 w-full" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Follow us:</p>
        <div className="space-x-4">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
