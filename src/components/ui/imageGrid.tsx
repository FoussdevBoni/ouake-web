import { useState } from 'react';
import { X } from 'lucide-react';

interface GridImageProps {
  images: string[];
  columns: number;
  onDelete: (index: number) => void;
}

export default function GridImage({ images, columns, onDelete }: GridImageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Dynamically calculate grid columns based on the props
  const gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

  return (
    <div className="w-full">
      <div 
        className="grid gap-4" 
        style={{ gridTemplateColumns }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative rounded-lg overflow-hidden aspect-square"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={image} 
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity">
                <button
                  onClick={() => onDelete(index)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  aria-label="Delete image"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
