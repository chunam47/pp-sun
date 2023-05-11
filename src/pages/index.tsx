import Image from "next/image";
import Layout from "@/layouts";
import HomeContainer from "@containers/HomeContainer";
import GetPepe from "../containers/GetPepe";
import WelcomeToPepe from "../containers/WelcomeToPepe";
import Pepetomomics from "../containers/Pepetomomics";

export default function Home() {
  return (
    <>
      <Layout title="Pepe" description="" showFooter>
        <HomeContainer />
        <GetPepe />
        <WelcomeToPepe />
        <Pepetomomics />
      </Layout>
    </>
  );
}
