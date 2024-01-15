import { CheckCircle2, Facebook, Instagram } from "lucide-react";


export default function Additional() {
  return (
   <div className="pt-10">
     <h1 className="text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
      Additional Busniess Information
    </h1>

    <div className="pt-5">
        <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
        Languages Known
        </h1>
        <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
          
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> English

            </div>
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> Hindi
              
            </div>
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> Telugu
              
            </div>
         
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> Gujarati
              
            </div>
         
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
        Accepted modes of payment
        </h1>
        <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
          
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> Cash

            </div>
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> Checks
              
           </div>
         
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
        Experience
        </h1>
        <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
          
            <div className="text-gray-600 flex gap-2 items-center">
              <CheckCircle2  className="text-blue-500 h-4 w-4" /> 5-15 years

            </div>
            
         
        </div>
      </div>
      <div className="pt-5">
        
       
        <h1 className="text-lg font-medium tracking-tight text-gray-900 ">
        Experience
        </h1>
        <div className="flex items-center gap-x-10 gap-y-3 pt-3 flex-wrap">
          
            <a  href="/" target="_blank" className="text-gray-600 flex gap-2 items-center">
              <Instagram  className="text-blue-500 h-4 w-4" /> 

            </a>
            <a href="/" target="_blank" className="text-gray-600 flex gap-2 items-center">

              <Facebook className="text-blue-500 h-4 w-4" /> 
            </a>
            
         
        </div>
      </div>
      
       
     
      
   </div>
  );
}
