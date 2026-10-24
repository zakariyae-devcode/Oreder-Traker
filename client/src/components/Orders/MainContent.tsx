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

                {/* نموذج إضافة / تعديل طلب جديد (Order & OrderItem) */}
                <Form/>

                {/* جدول عرض الطلبات */}
                <Table/>
        

            </main>
        
        </>
    )
}