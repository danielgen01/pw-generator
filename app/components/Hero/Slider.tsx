"use client"
import React, { ChangeEvent, useState } from "react"

const Slider = () => {
	const [value, setValue] = useState(10)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(Number(event.target.value))
	}

	return (
		<div className="w-full">
			<input
				type="range"
				min="0"
				max="50"
				value={value}
				onChange={handleChange}
				className="w-full appearance-none bg-bright-aque h-1 rounded-lg outline-none thumb-red-500 thumb-w-6 thumb-h-6 thumb-rounded-full "
			/>
			<p>Value: {value}</p>
		</div>
	)
}

export default Slider
