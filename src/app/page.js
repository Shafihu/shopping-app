import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
