import { useEffect, useState } from 'react'

const emailExamples = [
  'reshabhohall@gmail.com',
  'reshabhohall@hugecompany.in',
  'reshabhohall@example.com',
]

export default function useRotatingEmailPlaceholder() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % emailExamples.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return emailExamples[index]
}
