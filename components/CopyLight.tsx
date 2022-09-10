import React from "react";

export const CopyLight: React.FC = () => {
  
  const getYear = new Date().getFullYear();

  return (
    <>
      <p>
        &copy; {getYear} Temari. Inc
      </p>
    </>
  );
}
export default CopyLight
