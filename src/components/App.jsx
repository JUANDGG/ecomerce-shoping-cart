
import { GlobalContextProvider } from '@context/GlobalContext.jsx';


//components 
import CategoryFilter from '@components/CategoryFilter.jsx';
import Card from '@components/Card.jsx'

function App() {    

    return (
        <GlobalContextProvider>
            <div>
                <Card />
                <CategoryFilter />
            </div>
        </GlobalContextProvider>
    );
}

export default App;
