export function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
