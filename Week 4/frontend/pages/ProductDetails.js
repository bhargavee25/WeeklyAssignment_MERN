import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Product Details - ID: {id}</h1>
      <p>This is a placeholder for detailed info about product {id}.</p>
    </div>
  );
}
