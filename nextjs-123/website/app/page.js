import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="" fill={true} src="https://imgs.search.brave.com/1c1ZO4wFiV4-ErYO_OZldL0gkKMjyJrSAOuz7k1xrsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUx/MTMyOTkwNy9waG90/by9tZXRhdmVyc2Ut/cG9ydGFsLmpwZz9z/PTYxMng2MTImdz1n/aSZrPTIwJmM9MGJO/MGtRR1BWeTJRcWZv/b3F0Q1pQZ3VTbTZT/WnZsVktUNnRqRS04/aVU3TT0" alt="" />
     </div>
  );
}