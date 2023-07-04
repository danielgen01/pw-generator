"use client"
import React, { useState, useEffect } from "react"
import { IoReload } from "react-icons/io5"
import { AiOutlineCopy } from "react-icons/ai"
import Slider from "./Slider"
import CheckBox from "../CustomCheckbox/CheckBox"
import axios from "axios"

const Hero: React.FC = () => {
	const handleCheckboxChange = (label: string, checked: boolean) => {
		// Aktualisiere den Zustand für jede Checkbox basierend auf dem Label
		switch (label) {
			case "uppercase":
				setUppercaseChecked(checked)
				break
			case "lowercase":
				setLowercaseChecked(checked)
				break
			case "Numbers":
				setNumbersChecked(checked)
				break
			case "Symbols":
				setSymbolsChecked(checked)
				break
			default:
				break
		}
	}

	const [generatedPassword, setGeneratedPassword] = useState("")
	const [sliderValue, setSliderValue] = useState(10)
	const [uppercaseChecked, setUppercaseChecked] = useState(false)
	const [lowercaseChecked, setLowercaseChecked] = useState(false)
	const [numbersChecked, setNumbersChecked] = useState(false)
	const [symbolsChecked, setSymbolsChecked] = useState(false)

	const options = {
		method: "POST",
		url: "https://password-generator18.p.rapidapi.com/generate-password",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "021ee03ff7msh0047feed7112c0bp17ef1fjsnf4a359e2983f",
			"X-RapidAPI-Host": "password-generator18.p.rapidapi.com",
		},
		data: {
			length: sliderValue,
			numbers: numbersChecked,
			symbols: symbolsChecked,
			lowercase: lowercaseChecked,
			uppercase: uppercaseChecked,
			excludeSimilarCharacters: false,
			exclude: "1",
			strict: false,
		},
	}

	async function generatePW() {
		try {
			const response = await axios.request(options)
			setGeneratedPassword(response.data.password)
		} catch (error) {
			alert(`${error} PLEASE TICK THE NEEDED CHECKBOXES`)
		}
	}

	return (
		<section className="px-10 py-10 flex flex-col items-start gap-10 lg:col-span-2">
			<div className="generated-passwort h-20 bg-[#00F0FF19] border-bright-aque border-2 outline-none px-10 flex items-center justify-between w-full  rounded-md">
				<input
					type="text"
					className=" tracking-[3.2px] font-normal bg-transparent outline-none text-bright-aque w-3/4 h-full text-sm"
					readOnly={true}
					value={generatedPassword}
				/>
				<div className=" w-1/4 flex justify-end">
					<button
						className="hover:opacity-70 duration-150"
						onClick={generatePW}
					>
						<IoReload className="text-bright-aque text-3xl font-bold" />
					</button>
				</div>
			</div>

			<button className="uppercase bg-neon-yellow w-full h-24 text-black text-xl font-semibold tracking-[3.2px] flex justify-between items-center px-10 rounded-bl-3xl hover:opacity-75 duration-150">
				copy password_ <AiOutlineCopy className="text-2xl" />
			</button>

			<div className="range-slider w-full">
				<Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
			</div>

			<div className="checkboxes grid grid-cols-2 w-full gap-10">
				<CheckBox
					label="uppercase"
					onChange={(checked) => handleCheckboxChange("uppercase", checked)}
				/>
				<CheckBox
					label="lowercase"
					onChange={(checked) => handleCheckboxChange("lowercase", checked)}
				/>
				<CheckBox
					label="Numbers"
					onChange={(checked) => handleCheckboxChange("Numbers", checked)}
				/>
				<CheckBox
					label="Symbols"
					onChange={(checked) => handleCheckboxChange("Symbols", checked)}
				/>
			</div>
		</section>
	)
}

export default Hero
