"use client"
import React, { ChangeEvent, useState } from "react"

type sliderProps = {
	setSliderValue:any
	sliderValue:number
}
const Slider:React.FC<sliderProps> = ({sliderValue, setSliderValue}) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSliderValue(Number(event.target.value))
	}

	return (
		<div className="w-full">
			<input
				type="range"
				min="0"
				max="50"
				value={sliderValue}
				onChange={handleChange}
				className="w-full appearance-none bg-bright-aque h-1 rounded-lg outline-none thumb-red-500 thumb-w-6 thumb-h-6 thumb-rounded-full "
			/>
			<p>Value: {sliderValue}</p>
		</div>
	)
}

export default Slider
