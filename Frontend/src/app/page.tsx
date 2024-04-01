import { GradientBack, InputTask, Title } from "@/components";

export default function Home() {
  return (
    <GradientBack>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-5xl m-auto">
        <Title />
        <InputTask />
      </main>
    </GradientBack>
  );
}
