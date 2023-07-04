import React from "react"
import { FiCopy } from "react-icons/fi"

const History = () => {
	return (
		<section className="px-10 py-10 w-full">
			<h2 className="uppercase font-semibold tracking-[4px] leading-6 text-lg">
				password history
			</h2>

                <div className="password-history-container flex flex-col gap-5 mt-5">
			<Password />
			<Password />
			<Password />
			<Password />
			<Password />
			<Password />
			<Password />
            </div>
		</section>
	)
}

export default History

function Password({}) {
	return (
		<div className="password flex items-center w-full justify-between">
			<h2 className="text-lg font-normal tracking-[3.2px] leading-[24px]">
				passsword
			</h2>
			<button>
				<FiCopy className="text-2xl" title="copy" />
			</button>
		</div>
	)
}
