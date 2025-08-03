import { LucideIcon } from "lucide-react";





export const ActionButton = ({ 
  icon: Icon, 
  label, 
  count, 
  active = false,
  onClick 
}: { 
  icon: LucideIcon; 
  label: string; 
  count?: number; 
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    className={`flex items-center gap-1 transition-colors ${
      active ? "text-green-400" : "text-gray-400 hover:text-gray-200"
    }`}
    onClick={onClick}
    title={label}
  >
    <Icon size={18} />
    {count !== undefined && <span className="text-sm">{count}</span>}
  </button>
);
