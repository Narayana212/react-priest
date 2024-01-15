import {MapPin} from "lucide-react";

export default function Hero() {
  return (
    <section>
     <div className="flex flex-col justify-center gap-y-5  md:flex-row md:justify-between">
     <div className="flex flex-col gap-2 justify-center ">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Rama Krishna Shastry
        </h1>
        <p className=" text-[#5191fa] flex items-center gap-x-1">
          <MapPin className="h-4 w-4" />Dublin, CA
        </p>

      </div>
      <div>
       <div className="hidden md:flex flex-col gap-2 justify-center">
       <p className=" text-xl">Ratings 5.0<span className="text-xs">/5</span></p>
       <p className="text-[#5191fa] text-xs flex items-center ">
        from 50 reviews
       </p>

       </div>
      </div>
     </div>
    </section>
  );
}
