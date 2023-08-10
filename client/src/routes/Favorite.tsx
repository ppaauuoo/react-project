import BasicTabs from "../components/BasicTabs"

function Favorite(){
    return (
        <>
        <div className="px-4 py-6 min-h-screen">
            <span className="text-xl text-primary px-8">รายการโปรด</span>
            <BasicTabs/>
        </div>
        </>
    )
}

export default Favorite