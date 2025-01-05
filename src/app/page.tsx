import ButtonRedirect from "@/app/components/ButtonRedirect";
import { redirect } from "next/navigation";

const isAuth = true;

export default function Home() {
  if (!isAuth) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Home Page</h1>
      <ButtonRedirect />
    </main>
  );
}
