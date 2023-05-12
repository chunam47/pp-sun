import Image from "next/image";
import Layout from "@/layouts";
import HomeContainer from "@containers/HomeContainer";
import GetPepe from "../src/containers/GetPepe";
import WelcomeToPepe from "../src/containers/WelcomeToPepe";
import Pepetomomics from "../src/containers/Pepetomomics";

export default function Home() {
  return (
    <>
      <Layout title="PPSun" description="" showFooter>
        <HomeContainer />
        <GetPepe />
        <WelcomeToPepe />
        <Pepetomomics />
      </Layout>
    </>
  );
}
