import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[700px] h-[700px] bg-red-300">
        <Image
          src="/images/music.jpg"
          alt="music"
          width={500}
          height={500}
          quality={100}
          className="w-[500px] h-[500px] object-cover"
        />
      </div>
    </main>
  );
}
