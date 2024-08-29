import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function BackButton() {
    const router = useRouter()

    return (
        <button
            className="flex items-center"
            onClick={() => router.back()}
        >
            <IoArrowBackOutline className="mr-2" />
            Back
        </button>
    )
}