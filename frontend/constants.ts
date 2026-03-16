import { Doctor } from './types';

// Backend API base URL
export const API_BASE_URL = "http://localhost:5000";

// Fetch doctors from backend
export async function fetchDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/doctors`);
    const json = await response.json();
    return json || [];
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}

// SPECIALIZATIONS can still be derived dynamically later, but we’ll keep them static for now
export const SPECIALIZATIONS: string[] = [
  'Cardiologist',
  'Dermatologist',
  'Pediatrician',
  'Orthopedic Surgeon',
  'Gynecologist & Obstetrician',
  'Neurologist',
  'General Physician',
  'Ophthalmologist',
  'ENT Specialist',
  'Dentist',
  'Psychiatrist',
  'Pulmonologist',
  'Gastroenterologist',
  'Nephrologist',
  'Oncologist',
  'Endocrinologist',
  'Urologist',
  'Radiologist',
  'Pathologist',
  'General Surgeon',
];

export const SERVICE_ICONS: { [key: string]: string } = {
  'Cardiologist': 'HeartPulse', 
  'Dermatologist': 'Activity', 
  'Pediatrician': 'Baby',
  'Orthopedic Surgeon': 'Bone', 
  'Gynecologist & Obstetrician': 'PersonStanding',
  'Neurologist': 'BrainCircuit',
  'General Physician': 'Stethoscope',
  'Ophthalmologist': 'Eye',
  'ENT Specialist': 'Ear',
  'Dentist': 'Tooth',
  'Psychiatrist': 'BrainCog',
  'Pulmonologist': 'Lung',
  'Gastroenterologist': 'Activity',
  'Nephrologist': 'Droplets',
  'Oncologist': 'Ribbon',
  'Endocrinologist': 'FlaskConical',
  'Urologist': 'Filter',
  'Radiologist': 'ScanLine',
  'Pathologist': 'Microscope',
  'General Surgeon': 'Scissors',
};
