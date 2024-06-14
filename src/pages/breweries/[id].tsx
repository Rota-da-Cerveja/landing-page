import { useRouter } from 'next/router'
import { Footer } from "@/app/component/footer/footer";
import { NavegationBar } from "@/app/component/navegation/bar";
import "@/app/globals.css";

export default function Page() {
  const router = useRouter();

  return <>
  <NavegationBar></NavegationBar>
  <main>
    {router.query.id}
  </main>
  <Footer></Footer>
  </>
}