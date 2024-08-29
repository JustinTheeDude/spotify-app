export default function ResultLoaders() {
    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="w-1/3">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px] mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[60px] mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[30px] mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[20px] mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}