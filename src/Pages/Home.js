import GameIcon from '../Components/GameIcon';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Jogos</h1>

            <div className="games-container">
                <GameIcon 
                    game={{
                        title: "Rain World",
                        image: "https://store-images.s-microsoft.com/image/apps.21995.14344758136653430.0a9ce6ed-b26d-40f7-a6e0-5e2514866b02.c5adc4e8-fba7-4ac5-b220-ca281c299074"
                    }} 
                    onClick={() => navigate('/rain-world')} 
                />

                <GameIcon 
                    game={{
                        title: "Hollow Knight",
                        image: "https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                    }} 
                    onClick={() => navigate('/hollow-knight')} 
                />

                <GameIcon 
                    game={{
                        title: "Hollow Knight: Silksong",
                        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/86/Hollow_Knight_Silksong_cover.jpeg/250px-Hollow_Knight_Silksong_cover.jpeg"
                    }} 
                    onClick={() => navigate('/silksong')} 
                />

                <GameIcon
                    game={{
                        title: "A Hat in Time",
                        image: "https://store-images.s-microsoft.com/image/apps.12367.63512599203033356.81dab591-4682-4592-bc32-cae9aff26cf2.1a370c08-6e4c-4679-8475-4b3f459e1509"
                    }}
                    onClick={() => navigate('/a-hat-in-time')}
                /> 

                <GameIcon
                    game={{
                        title: "Mewgenics",
                        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a5/Mewgenics_Poster.jpg/250px-Mewgenics_Poster.jpg"
                    }}
                    onClick={() => navigate('/mewgenics')}
                /> 

                <GameIcon 
                    game={{
                        title: "Ultrakill",
                        image: "https://m.media-amazon.com/images/M/MV5BNGIyZDE4OTYtNjBhOS00NzFkLTkyYWMtYzAzNWUxZThmMDBlXkEyXkFqcGc@._V1_.jpg"
                    }} 
                    onClick={() => navigate('/ultrakill')} 
                />

                <GameIcon 
                    game={{
                        title: "Terraria",
                        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Terraria_Steam_artwork.jpg/250px-Terraria_Steam_artwork.jpg"
                    }} 
                    onClick={() => navigate('/terraria')} 
                />

                <GameIcon 
                    game={{
                        title: "The Binding of Isaac",
                        image: "https://store-images.s-microsoft.com/image/apps.58856.69039762475408619.1f9f3938-799b-4ad8-a607-676e85baba27.95ed1dc8-4ddf-43fb-8a87-f54c81f96879"
                    }} 
                    onClick={() => navigate('/the-binding-of-isaac')} 
                />

                <GameIcon
                    game={{
                        title: "Journey",
                        image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2917/97DxCJOxjXRuK74AagHwhrit.png"
                    }}
                    onClick={() => navigate('/journey')}
                /> 

                <GameIcon
                    game={{
                        title: "Blasphemous",
                        image: "https://store-images.s-microsoft.com/image/apps.48288.14467989922179877.4281a03c-f00f-4e46-b74d-f95353494fc6.30cea89c-6409-4ec1-afef-54946eed74c7"
                    }}
                    onClick={() => navigate('/blasphemous')}
                /> 
            
            </div>
        </>
    );
}

export default Home;