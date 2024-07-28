import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to NeetCode</h1>
          <p className="text-xl">Your journey to mastering coding interviews starts here.</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
