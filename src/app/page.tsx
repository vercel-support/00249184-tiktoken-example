import Tokenize from "@/components/tokenize";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-semibold">Tiktoken example</h1>
      <Tokenize />
    </main>
  );
}
