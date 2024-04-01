import { Title } from "@/components";
import GradientBack from "@/components/GradientBack/GradientBack";
import InputTask from "@/components/InputTask/InputTask";

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
