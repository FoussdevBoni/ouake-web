import { Upload } from "lucide-react";
import React from "react";

interface FileUploadProps {
  name: string;
  label: string;
  value: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  name,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>

      <div className="flex items-center justify-center w-full">
          <label
            htmlFor={name}
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-300 text-center">
                <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
              </p>
              <p className="text-xs text-gray-400">
                {value ? value.name : "PNG, JPG"}
              </p>
            </div>
            <input
              id={name}
              name={name}
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png"
              onChange={onChange}
            />
          </label>
        </div>
    </div>
  );
};
