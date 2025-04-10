import { Certificate } from "@/types/portfolio"; // Adjust path if needed
import { FaReact, FaShieldAlt } from "react-icons/fa";

export const certificates: Certificate[] = [
  {
    name: "Web Security: OAuth and OpenID Connect",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/05fa190755889d1d65f2ddf1920ea0376625255b68e4e478f8a851f71eadd905?accountId=0&u=0&success=true&authUUID=6tiHKbfcTFOi24OyNxIeGw%3D%3D",
    icon: FaShieldAlt,
  },
  {
    name: "Epic React",
    issuer: "Kent C. Dodds",
    url: "https://drive.google.com/file/d/11NekirBDKQ6f-qY7O278_sKdl-Ot9Me8/view?usp=sharing",
    icon: FaReact,
  },
];
