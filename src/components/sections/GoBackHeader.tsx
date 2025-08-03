"use client"

import React, { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/router'

interface Props {
  title: string
  goBack?: () => void
  right?: ReactNode
  maxTitleLength?: number
}

export default function GoBackHeader({ title, goBack, right, maxTitleLength = 40 }: Props) {
  const navigate = useRouter()

  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max - 1) + '…' : text

  const goBackNavigate = () => {
    if (goBack) {
      goBack()
    } else {
      navigate.back()
    }
  }

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 px-4 py-4 border-b border-gray-700 flex items-center justify-between">
      {/* Back Button */}
      <button
        onClick={goBackNavigate}
        className="text-gray-300 hover:text-white flex items-center"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Title (truncated) */}
      <h1 className="flex-1 text-center text-base font-semibold truncate px-4">
        {truncate(title, maxTitleLength)}
      </h1>

      {/* Right content */}
      <div className="w-6 flex justify-end">
        {right || null}
      </div>
    </header>
  )
}
