
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function PooyaPortfolio() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pooya Parsa</h1>
        <p className="text-xl text-gray-600">Dental Technician – Digital & Denture Specialist</p>
        <div className="flex justify-center space-x-4 text-gray-700">
          <div className="flex items-center space-x-1">
            <Phone size={16} /> <span>+1 (647)-550-5868</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={16} /> <span>Pooya.parsa.2000.10@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <Linkedin size={16} /> <a href="https://www.linkedin.com/in/pooya-parsa-6003a4316" className="underline">LinkedIn</a>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} /> <span>North York, Toronto</span>
          </div>
        </div>
      </section>

      {/* About Me */}
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>Pooya Parsa is a passionate Dental Technician skilled in both digital and traditional workflows. With a strong background in kinesiology and current training at George Brown College, Pooya specializes in night guards, crown and bridge design, and denture fabrication.</p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Skills & Tools</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>CAD/CAM: Exocad, 3Shape, Zirkonzahn</li>
            <li>3D Printing: Chitubox, Medit, Ulab</li>
            <li>Milling (Zirconia, E.max)</li>
            <li>Restorations: Night guards, Crowns, Bridges</li>
            <li>Dentures: Bite blocks, Custom trays, Tooth setups</li>
          </ul>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Mind Aesthetic Inc</strong> – Designed and milled restorations, set teeth, scanned models</li>
            <li><strong>Da Vinci Dental Studio</strong> – Thermoplastic night guards, denture fabrication</li>
            <li><strong>Ari Dental</strong> – Digital aligners and 3D printed models, crown and bridge work</li>
          </ul>
        </CardContent>
      </Card>

      {/* Certificates Section */}
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Dean’s Honour List – George Brown College</li>
            <li>Standard First Aid, AED & CPR-C – Red Cross & Life’s Emergency Training</li>
            <li>Mask Fit Test (3M 8210)</li>
            <li>WHMIS, PTC License</li>
          </ul>
        </CardContent>
      </Card>

      {/* Gallery Placeholder */}
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Project Gallery</h2>
          <p>Images coming soon – case photos, digital work, and denture setups will be displayed here.</p>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <section className="text-center space-y-2">
        <p>Interested in connecting? Feel free to reach out via email or LinkedIn!</p>
        <Button><a href="mailto:Pooya.parsa.2000.10@gmail.com">Contact Me</a></Button>
      </section>
    </div>
  );
}
