import BasicTabs from "../components/BasicTabs"

function Favorite(){
    return (
        <>
        <div className="container m-0 sm:mx-40">
            <span className="text-xl text-primary px-8">รายการโปรด</span>
            <BasicTabs/>
        </div>
        </>
    )
}

export default Favorite