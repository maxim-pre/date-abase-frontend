import Login from "../components/login";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center flex-col bg-[url('../src/static/images/AdobeStock_88856691_Preview.jpeg')] bg-top bg-cover">
        <h1 className="text-6xl font-bold mb-4 text-white text-shadow ">
          Daterbase
        </h1>
        <p className="text-2xl font-bold mb-16 text-white text-shadow ">
          Dating for tech workers
        </p>
        <h2 className="text-4xl font-bold mb-4 text-white text-shadow ">
          Welcome Back!
        </h2>
        <Login />
      </div>
      <div className="bg-gradient-to-br from-gray-200 to-white-500">
        <h2 className="text-4xl font-bold mx-8 mb-4 pt-16 pb-12 text-black">
          About DaterBase
        </h2>
        <p className="mx-8">
          Welcome to our dating app designed exclusively for software
          developers! Our app is a platform that connects like-minded developers
          who are passionate about coding and technology. We understand that
          software developers often have unique interests, hobbies, and
          preferences that set them apart from the rest. That's why our app is
          tailored to their specific needs, helping them find meaningful
          connections with individuals who share their love for all things tech.
          <br />
          <br />
          Our app is designed to make it easy for developers to find potential
          matches based on their coding languages, projects, and other technical
          interests. Whether you're looking for a partner to collaborate on a
          new project, share coding tips and tricks, or simply bond over a love
          for programming, our app provides a safe and comfortable space to meet
          like-minded individuals.
          <br />
          <br />
          At our dating app, we believe that technology should be used to bring
          people together. That's why we've created a community of developers
          who can connect, share their knowledge, and potentially find love with
          someone who understands their passion for programming. We're excited
          to welcome you to our platform and help you find your perfect match!{" "}
        </p>
      </div>
    </>
  );
}

