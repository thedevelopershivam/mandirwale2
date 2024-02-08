function DashboardCard({ label = "create category", count = "120" }) {
    return (
        <div className="flex justify-center items-center w-full shadow-shadowDown rounded-md px-3 py-5 max-h-[130px] bg-bgSafron text-textWhite odd:bg-bgNeel hover:bg-bgMaroon hover:shadow-none hover:scale-[0.97] duration-200">
            <section className="flex flex-col gap-2 text-center">
                <span className="text-[calc(20px+0.5vw)] font-semibold capitalize">
                    {label}
                </span>
                <span className="text-[calc(30px+0.5vw)] font-bold">
                    {count}
                </span>
            </section>
        </div>
    )
}

export default DashboardCard