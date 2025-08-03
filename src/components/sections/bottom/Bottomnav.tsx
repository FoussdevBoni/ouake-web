"use client"
import { usePathname, useRouter } from "next/navigation";
import React, {  type FC } from "react";

interface Props {
  tabs: BottomTabButtonProps[];
}

export default function BottomNav({ tabs }: Props) {
const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed block lg:hidden bottom-0 z-50 left-0 right-0 flex items-center justify-around 
    bg-gray-900 shadow-lg rounded-t-xl h-16 border-t border-gray-900">
      {tabs.map((tab, index) => (
        <BottomTabButton
         path={tab.path}
          key={index}
          icon={tab.icon}
          label={tab.label}
          isActive={isActive(tab.path)}
        />
      ))}
    </div>
  );
}

export interface BottomTabButtonProps {
  icon: React.ReactNode;
  label: string;
  path: string,
  onPress?: () => void;
  isActive?: boolean;
}

const BottomTabButton: FC<BottomTabButtonProps> = ({
  icon,
  label,
  path,
  isActive = false
}) => {
  return (
    <a
      href={path}
      className={`flex flex-col items-center justify-center w-full h-full pt-1 pb-1 ${
        isActive ? "text-cyan-400" : "text-gray-500"
      }`}
    >
      <div className={`  ${isActive ? "text-cyan-400" : "text-gray-500"
      }`}>
        {icon}
      </div>
      <span className={`text-xs mt-1 ${isActive ? "font-medium" : "font-normal"}`}>
        {label}
      </span>
    </a>
  );
}