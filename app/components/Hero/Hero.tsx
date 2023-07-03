"use client"
import React from "react"
import { IoReload } from "react-icons/io5"
import { AiOutlineCopy } from "react-icons/ai"
import Slider from "./Slider"
import CheckBox from "../CustomCheckbox/CheckBox"

const Hero: React.FC = () => {
	const handleCheckboxChange = (checked: boolean) => {
		// Hier kannst du den aktualisierten Status der Checkbox verwenden
		console.log("Checkbox toggled:", checked)
	}

	return (
		<section className="px-10 py-10 flex flex-col items-start gap-10">
			<div className="generated-passwort h-20 bg-[#00F0FF19] border-bright-aque border-2 outline-none px-10 flex items-center justify-between w-full  rounded-md">
				<input
					type="text"
					className=" tracking-[3.2px] font-normal bg-transparent outline-none text-bright-aque w-3/4"
					readOnly={true}
					placeholder="la5642xt0#ßßgg!"
				/>
				<button className="hover:opacity-70 duration-150 w-1/4 flex justify-end">
					<IoReload className="text-bright-aque text-3xl font-bold" />
				</button>
			</div>

			<button className="uppercase bg-neon-yellow w-full h-24 text-black text-xl font-semibold tracking-[3.2px] flex justify-between items-center px-10 rounded-bl-3xl hover:opacity-75 duration-150">
				copy password_ <AiOutlineCopy className="text-2xl" />
			</button>

			<div className="range-slider w-full">
				<Slider />
			</div>

			<div className="checkboxes grid grid-cols-2 w-full gap-10 ">
				<CheckBox label="uppercase" onChange={handleCheckboxChange} />
				<CheckBox label="lowercase" onChange={handleCheckboxChange} />
				<CheckBox label="Numbers" onChange={handleCheckboxChange} />
				<CheckBox label="Symbols" onChange={handleCheckboxChange} />
			</div>
		</section>
	)
}

export default Hero
