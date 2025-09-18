import Title from '../components/ui/Title';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 h-full flex flex-col">
      <Title>About</Title>
      <div className="container mx-auto p-4">
        <p className="mb-3">
          Share My Stuff is a simple app that allows you to share your stuff
          with other users.
        </p>
        <p className="mb-3">
          The app is built with Next.js, Tailwind CSS, and TypeScript.
        </p>
        <p className="mb-3">
          You can create an account, log in, and start sharing your stuff with
          others.
        </p>
        <p className="mb-3">
          Feel free to explore the app and share your stuff!
        </p>
      </div>
    </div>
  );
}
