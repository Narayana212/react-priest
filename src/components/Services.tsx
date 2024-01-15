import { Check,CheckCircle2, Mail, Phone, Plus } from "lucide-react";

export default function Services() {
  const services = [
    "Specialized bilingual guide",
    "Private Transport",
    "Entrance fees (Cable and car and Moon Valley)",
    "Box lunch water, banana apple and chocolate",
  ];
  const areas = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    
];

  return (
    <>
      <div className="pt-5">
        <h1 className="text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
          Services
        </h1>
        <div className="flex pt-3 flex-col justify-center gap-y-2 space-y-2">
          {services.map((a, index) => (
            <p className="flex items-center gap-x-2" key={index}>
              <Check className="text-blue-500 h-4 w-4" />
              {a}
            </p>
          ))}
        </div>
      </div>

      <div className="pt-5">
        <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
          Areas Servered
        </h1>
        <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
          {areas.map((a, index) => (
            <div key={index} className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2 className="text-blue-500 h-4 w-4" /> {a}
            </div>
          ))}
          <div className="text-blue-500 flex gap-2 items-center">
            <Plus className="text-gray-700 h-4 w-4" /> 60 More cites
          </div>
        </div>

        <div className="pt-5">
          <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
            Accreditations
          </h1>
          <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
            <div className="text-gray-500 flex gap-2 items-center">
              <Phone className="text-white h-4 w-4" fill="#3b82f6"  /> Phone verified
            </div>
            <div className="text-gray-500 flex gap-2 items-center">
              <Mail className="text-white h-4 w-4" fill="#3b82f6"  /> Mail verified
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}
