import { useEffect } from "react";

const CodeOfConduct = () => {
  useEffect(() => {
    // Replace with the correct relative or public URL
    window.location.href = "/AMFI_Code-of-Conduct.pdf";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-700">
        Redirecting to AMFI Code of Conduct PDF...
      </p>
    </div>
  );
};

export default CodeOfConduct;
