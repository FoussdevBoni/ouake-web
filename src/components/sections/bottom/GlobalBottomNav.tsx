import BottomNav from "./Bottomnav";

import { Calendar, Home, Library, Store } from "lucide-react";

interface Props {
 
}

export default function GlobalBottomNav({  }: Props) {
 


  const userTabs: any[] = [
    {
      icon: <Home size={24} />,
      label: 'Accueil',
      active: true,
       path: '/',
    },
   
    {
      icon: <Library size={22} />,
      label: 'Bibliothèque',
       path: '/explore',
    },
  
    {
      icon: <Calendar size={22} />,
      label: 'Annonnces',
      path: '/events',
    },
  ];

  return (
    <>
      <BottomNav
        tabs={ userTabs}
      />

   
    </>
  );
}