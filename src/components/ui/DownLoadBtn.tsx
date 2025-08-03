import React, { useState } from 'react'
import { Download, Loader2, Check, X } from 'lucide-react'
import clsx from 'clsx'

interface DownloadBtnProps {
  fileUrl: string
  fileName?: string
  label?: string
  className?: string
}

export default function DownloadBtn({
  fileUrl,
  fileName = 'document',
  label = 'Télécharger',
  className = '',
}: DownloadBtnProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleDownload = async () => {
    setStatus('loading')

    try {
      const response = await fetch(fileUrl)
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)

      setStatus('done')
      setTimeout(() => setStatus('idle'), 2000)
    } catch (err) {
      console.error('Download error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
    }
  }

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="animate-spin" size={18} />
      case 'done':
        return <Check className="text-green-500" size={18} />
      case 'error':
        return <X className="text-red-500" size={18} />
      default:
        return <Download size={18} />
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={status === 'loading'}
      className={clsx(
        'inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
        className
      )}
      aria-label={`Télécharger le fichier ${fileName}`}
    >
      {getIcon()}
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
