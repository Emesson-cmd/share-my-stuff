import Title from '../../ui/Spinner/Title';

export default function SignUpForm() {
  return (
    <form className="flex flex-col space-y-4 max-w-sm mx-auto">
      <Title>Sign Up</Title>
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
  );
}
