export default function SectionTitle({ children }) {
    return <>
        <h2 className="text-center md:text-start relative flex items-center gap-4">
            <div className="h-[1px] w-full bg-gray-600 md:hidden" />
            <span className="whitespace-nowrap">{children}</span>
            <div className="h-[1px] w-full bg-gray-600" />
        </h2>
    </>
}