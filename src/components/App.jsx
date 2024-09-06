
import { GlobalContextProvider } from '@context/GlobalContext.jsx';


//components 
import CategoryFilter from '@components/CategoryFilter.jsx';
import Card from '@components/Card.jsx'


//style sheets

import '@styleSheets/App.css'

function App() {    

    return (
        <GlobalContextProvider>
            
                <section className='st-header'>
                    <header>
                        <img  src='https://companieslogo.com/img/orig/MELI-ec0c0e4f.png?t=1720244492'/>
                        <input type="text" placeholder='Phones , mackbooks ...' />
                        
                    </header>
                </section>
                <section className='st-products '>
                    <main>
                        <Card />
                    </main>

                    <aside>
                    <CategoryFilter />
                    </aside>
                </section>
                
                
            
        </GlobalContextProvider>
    );
}

export default App;
