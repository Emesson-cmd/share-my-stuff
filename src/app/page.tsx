export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <form className="flex flex-col space-y-4 max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-4 uppercase">Sign Up</h1>
        <input type="text" placeholder="Email" className="border p-2 rounded" />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Repeat password"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded uppercase font-semibold hover:bg-blue-600 transition-colors "
        >
          Create account
        </button>
      </form>
    </div>
  );
}
