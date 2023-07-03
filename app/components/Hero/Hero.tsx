import React from "react"
import { IoReload } from "react-icons/io5"

const Hero: React.FC = () => {
	return (
		<section className="px-10 py-10 flex flex-col">
			<div className="generated-passwort h-20 bg-[#00F0FF19] border-bright-aque border-2 outline-none px-10 flex items-center justify-between">
				<input
					type="text"
					className=" tracking-[3.2px] font-normal bg-transparent outline-none text-bright-aque w-3/4"
					readOnly={false}
				/>
				<button className="hover:opacity-70 duration-150 w-1/4 flex justify-end">
					<IoReload className="text-bright-aque text-3xl font-bold" />
				</button>
			</div>
		</section>
	)
}

export default Hero
