export const TextField = ({ 
    label, 
    value, 
    onChange, 
    placeholder = "", 
    multiline = false,
    rows = 3
  }: any) => {
    return (
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-300">{label}</label>
        {multiline ? (
          <textarea
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
          />
        ) : (
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };
  