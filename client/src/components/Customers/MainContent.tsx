import Header from "./Header"
import Forms from "./Forms"
import Table from "./Table"

export default function MainContent(){

    return(

        <>
            <main className="flex-grow-1 p-3 p-md-4 overflow-auto w-100">
        
                {/* الهيدر العلوي */}
                 <Header/>

                {/* نموذج إضافة / تعديل زبون صريح (مطابق لنموذج Customer) */}
                
                 <Forms/>
                 
                {/* جدول عرض الزبائن */}
                <Table/>
        

            </main>
    
    
        </>
    )
}