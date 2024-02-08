import DashboardCard from "@/app/components/admin/DashboardCard"


function page() {
    return (
        <section className="flex justify-center items-center w-full px-5">
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
                <DashboardCard label="cateories" count={120} />
                <DashboardCard label="Country" count={248} />
                <DashboardCard label="Religion" count={4} />
                <DashboardCard label="Gods" count={120} />
                <DashboardCard label="View" count={220} />
                <DashboardCard label="Register" count={220} />
            </div>
        </section>
    )
}

export default page