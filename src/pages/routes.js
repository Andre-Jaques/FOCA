import { 
    Routes, 
    Route, 
    } from 'react-router-dom';

    

    import TelaInicial from '../pages/TelaInicial/TelaInicial';
    import Login from '../pages/Login/login';
    import Regras from '../pages/Regras/regras';
    import Teste from '../pages/Teste/teste';
    import Teste2 from '../pages/Teste/teste2';
    import NotFound from '../pages/NotFound/notFound';
    //import {TransitionGroup, CSSTransition} from 'react-transition-group';
    
    export default function MainRoutes(){
        return(
            
            <Routes >
                <Route path="/" element={<TelaInicial />} />
                <Route path="/login" element={<Login />} />
                <Route path="/regras" element={<Regras />} />

                <Route path="/teste" element={<Teste />}>
                                     
                </Route>

                <Route path="/teste2" element={<Teste2 />} />  

                <Route path="*" element={<NotFound />} />
                
            </Routes>
            
            
        );
    }
    