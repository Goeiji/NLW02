import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fcpq3-1.fna.fbcdn.net/v/t1.0-9/14358762_882238088573377_6045828005170227136_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeFHBs7sWuzYfZSrwK-ji24QkF0sHi5NOTyQXSweLk05PMvzqxK0K5cE8loeGQxlauiLZLlY_LuDtneJQQxRBm_2&_nc_ohc=QOIc1MoJ1EYAX-OGqnd&_nc_oc=AQkbk6nJORXyn3Ot8TicnVfEicnbkPW6kgSsPoxxnrR_LHctKsPxBYBMivJmY0VNqhI&_nc_ht=scontent.fcpq3-1.fna&oh=96a62993aea22db60fbfb0af7a83e3a8&oe=5F523C06" 
                alt="Rodrigo-Eiji"/>
                <div>
                    <strong>Rodrigo Eiji</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta em teconologias matemáticas básicas.
                <br/><br/>
                Gostava de número, porém, ao se deparar com o conceito de derivadas e integrais, quase desistiu da carreira, porém, passa bem.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;