import { FaYoutube } from "react-icons/fa";

export const Youtube = () => {
    return <div className="flex flex-row">
        <div className="">
        <FaYoutube size={42} color="red"/>
        </div>
        <div className="text-3xl">
            YouTube
        </div>
        <div className="text-sm text-slate-500">
            IN
        </div>
    </div>
}