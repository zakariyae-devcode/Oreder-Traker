import Header from "./Header";
import MetricsCards from "./MetricsCards";
import RecentOrdersTable from "./RecentOrdersTable";
export default function MainContent() {

    return(

        <>
           
            <main className="flex-grow-1 p-4 overflow-auto">
            
            {/* الشريط العلوي (Top Header) */}
            <Header/>

            {/* بطاقات المؤشرات السريعة (Metrics Cards) */}
            <MetricsCards/>
            {/* جدول أحدث الطلبات (Recent Orders Table) */}
            <RecentOrdersTable/>

            </main>
        
        </>
    )


}