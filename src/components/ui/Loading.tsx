
// Composant Loading principal avec plusieurs variantes
export default function Loading({ 
  variant = 'spinner', 
  size = 'medium', 
  fullScreen = false, 
  text = 'Chargement...',
  color = 'blue' 
}) {
  
  // Classes de taille
  const sizeClasses = {
    small: {
      spinner: 'w-6 h-6',
      dots: 'w-2 h-2',
      text: 'text-sm'
    },
    medium: {
      spinner: 'w-10 h-10',
      dots: 'w-3 h-3',
      text: 'text-base'
    },
    large: {
      spinner: 'w-16 h-16',
      dots: 'w-4 h-4',
      text: 'text-lg'
    }
  };

  // Classes de couleur
  const colorClasses = {
    blue: 'text-blue-600',
    cyan: 'text-cyan-500',
    gray: 'text-gray-600',
    white: 'text-white'
  };

  // Spinner classique
  const SpinnerLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size].spinner} ${colorClasses[color]} animate-spin`}>
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83"
          />
        </svg>
      </div>
      {text && (
        <p className={`${sizeClasses[size].text} ${colorClasses[color]} font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  // Dots loader
  const DotsLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size].dots} bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      {text && (
        <p className={`${sizeClasses[size].text} ${colorClasses[color]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  // Pulse loader (logo Ouaké-Infos)
  const PulseLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className={`${size === 'small' ? 'w-12 h-12' : size === 'medium' ? 'w-20 h-20' : 'w-28 h-28'} bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse`}>
          <span className={`text-white font-bold ${size === 'small' ? 'text-lg' : size === 'medium' ? 'text-2xl' : 'text-4xl'}`}>
            O
          </span>
        </div>
        
        {/* Rings animés */}
        <div className="absolute inset-0 rounded-2xl border-4 border-blue-400/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="text-center">
        <h3 className={`font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ${size === 'small' ? 'text-lg' : size === 'medium' ? 'text-xl' : 'text-2xl'}`}>
          Ouaké-Infos
        </h3>
        {text && (
          <p className={`${sizeClasses[size].text} text-gray-600 font-medium mt-2`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );

  // Skeleton pour articles
  const SkeletonLoader = () => (
    <div className="space-y-6">
      {/* Skeleton card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="space-y-1">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded-xl w-24"></div>
          </div>
        </div>
      </div>
      
      {/* Skeleton card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  // Wave loader
  const WaveLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`${size === 'small' ? 'w-1 h-8' : size === 'medium' ? 'w-2 h-12' : 'w-3 h-16'} bg-gradient-to-t from-blue-600 to-cyan-400 animate-pulse`}
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
      {text && (
        <p className={`${sizeClasses[size].text} ${colorClasses[color]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  // Sélection du loader selon la variante
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'skeleton':
        return <SkeletonLoader />;
      case 'wave':
        return <WaveLoader />;
      default:
        return <SpinnerLoader />;
    }
  };

  // Container principal
  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      {renderLoader()}
    </div>
  );
}

// Composants spécialisés pour différents usages
export function LoadingSpinner({ size = 'medium', color = 'blue' }) {
  return <Loading variant="spinner" size={size} color={color} />;
}

export function LoadingDots({ size = 'medium', text = 'Chargement...' }) {
  return <Loading variant="dots" size={size} text={text} />;
}

export function LoadingPage({ text = 'Chargement de la page...' }) {
  return <Loading variant="pulse" size="large" fullScreen={true} text={text} />;
}

export function LoadingSkeleton() {
  return <Loading variant="skeleton" />;
}

export function LoadingWave({ size = 'medium', text = 'Chargement...' }) {
  return <Loading variant="wave" size={size} text={text} />;
}

// Exemple d'utilisation
export function LoadingDemo() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Composants Loading - Ouaké-Infos
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Spinner */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Spinner</h3>
          <Loading variant="spinner" size="medium" text="Chargement..." />
        </div>
        
        {/* Dots */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Dots</h3>
          <Loading variant="dots" size="medium" text="Traitement..." />
        </div>
        
        {/* Pulse (Logo) */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Logo Pulse</h3>
          <Loading variant="pulse" size="medium" text="Ouaké-Infos" />
        </div>
        
        {/* Wave */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Wave</h3>
          <Loading variant="wave" size="medium" text="Synchronisation..." />
        </div>
        
        {/* Différentes tailles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Tailles</h3>
          <div className="space-y-4">
            <Loading variant="spinner" size="small" text="Petit" />
            <Loading variant="spinner" size="medium" text="Moyen" />
            <Loading variant="spinner" size="large" text="Grand" />
          </div>
        </div>
      </div>
      
      {/* Skeleton */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-lg font-semibold mb-6">Skeleton (Articles)</h3>
        <Loading variant="skeleton" />
      </div>
      
      {/* Boutons de test */}
      <div className="text-center space-x-4">
        <button 
          onClick={() => document.body.appendChild(Object.assign(document.createElement('div'), {
            innerHTML: '<div id="fullscreen-loading"></div>'
          }))}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Test Full Screen Loading
        </button>
      </div>
    </div>
  );
}