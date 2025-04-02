'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    title: 'Tanning',
    description: 'Pre-tanners for wet-white leather.',
    link: '/',
  },
  {
    id: 2,
    title: 'Re-tanning',
    description: 'Bio-collagens and re-tanners for all kinds of leather.',
    link: '/',
  },
  {
    id: 3,
    title: 'Soaking',
    description: 'Probiotics, fermentation biochemicals and blend of organic acids.',
    link: '/',
  },
  {
    id: 4,
    title: 'Greasing',
    description: 'Oils for re-hydration of the leather.',
    link: '/',
  },
  {
    id: 5,
    title: 'Anilines',
    description: 'Industrial colorants.',
    link: '/',
  },
]

export default function SolidBento() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={product.link}
            className={`group relative flex overflow-hidden rounded-2xl bg-zinc-950/50 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 ${
              index === 0
                ? 'md:col-span-8'
                : index === 1
                ? 'md:col-span-4'
                : index === 2
                ? 'md:col-span-5'
                : index === 3
                ? 'md:col-span-4'
                : 'md:col-span-3'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent" />
            <div className="relative flex h-full w-full flex-col justify-center p-6">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {product.title}
              </h2>
              <p className="text-zinc-400 text-sm">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
