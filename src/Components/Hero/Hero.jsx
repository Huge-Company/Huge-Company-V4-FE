import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const heroLines = [
	'A Document is a Lifeline',
	'Making products and intelligence for documents',
	'Building infrastructure for Document Ecosystem',
]

export default function Hero() {
	const [visibleLine, setVisibleLine] = useState(heroLines[0])

	useEffect(() => {
		let phraseIndex = 0
		let visibleCharacters = heroLines[0].length
		let deleting = false
		let timeoutId
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if (reduceMotion) return undefined

		const cycle = () => {
			const phrase = heroLines[phraseIndex]
			if (deleting) {
				visibleCharacters -= 1
				setVisibleLine(phrase.slice(0, visibleCharacters))
				if (visibleCharacters === 0) {
					deleting = false
					phraseIndex = (phraseIndex + 1) % heroLines.length
					timeoutId = window.setTimeout(cycle, 220)
				} else {
					timeoutId = window.setTimeout(cycle, 24)
				}
				return
			}

			if (visibleCharacters < phrase.length) {
				visibleCharacters += 1
				setVisibleLine(phrase.slice(0, visibleCharacters))
				timeoutId = window.setTimeout(cycle, 46)
				return
			}

			deleting = true
			timeoutId = window.setTimeout(cycle, 2200)
		}

		timeoutId = window.setTimeout(cycle, 3000)
		return () => window.clearTimeout(timeoutId)
	}, [])

	const lastWordStart = visibleLine.lastIndexOf(' ')
	const linePrefix = lastWordStart < 0 ? '' : visibleLine.slice(0, lastWordStart + 1)
	const highlightedWord = visibleLine.slice(lastWordStart + 1)

	return (
		<section className="Hero" aria-labelledby="home-hero-title">
			<div className="hero-content">
				<span className="hero-accent" aria-hidden="true" />
				<h1
					id="home-hero-title"
					className="S1"
					aria-label={visibleLine}
				>
					<span className="hero-cycle-text" aria-hidden="true">
						{linePrefix}<span className="hero-title-highlight">{highlightedWord}</span>
						<span className="hero-type-cursor" />
					</span>
				</h1>
				<nav className="buttons-pc" aria-label="Explore Huge Company">
					<Link to="/product" className="Define">See our Products</Link>
					<Link to="/service" className="VEY-button">Get a Service</Link>
				</nav>
			</div>
		</section>
	)
}
