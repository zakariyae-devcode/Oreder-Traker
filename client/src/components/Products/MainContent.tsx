import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
export default function MainContent() 
{

    return (
        <>
             <main className="flex-grow-1 p-3 p-md-4 overflow-auto w-100">
        
                {/* الهيدر العلوي */}
                 <Header/>

                {/* نموذج إضافة / تعديل منتج (Styling المحدث للحالة) */}
            
                 <Form/>
                {/* جدول عرض المنتجات وتنسيق الحالة الجديد */}
                <Table/>
        

            </main>
        
        </>
    )
}