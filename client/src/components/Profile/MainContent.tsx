import Header from "./Header";
import Form from "./Form";

export default function MainContent() 
{

    return (
        <>
            <main className="flex-grow-1 p-3 p-md-4 overflow-auto w-100">
        
                {/* الهيدر العلوي */}
                 <Header/>

                {/* نموذج إضافة / تعديل منتج (Styling المحدث للحالة) */}
            
                 <Form/>
              
        

            </main>
        
        </>
    )
}