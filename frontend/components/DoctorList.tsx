import React, { useEffect, useState } from "react";
import { fetchDoctors } from "../api";
import { Doctor } from "../types";

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors);
  }, []);

  return (
    <div>
      <h2>Available Doctors</h2>
      <ul>
        {doctors.map(doc => (
          <li key={doc._id}>
            {doc.name} - {doc.specialization} ({doc.location})
          </li>
        ))}

      </ul>
    </div>
  );
};

export default DoctorList;
