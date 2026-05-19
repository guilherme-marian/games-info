import GamePopup from '../Components/GamePopup';

function Ultrakill(){
    return (
        <div>
            <GamePopup 
            title="Ultrakill" 
            video1={process.env.PUBLIC_URL + '/videos/ultrakillTrailer1.mp4'}

            image="https://m.media-amazon.com/images/M/MV5BNGIyZDE4OTYtNjBhOS00NzFkLTkyYWMtYzAzNWUxZThmMDBlXkEyXkFqcGc@._V1_.jpg" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/ss_8c743b6de2d6124bd583d8764f28cafe2b7ecb3f.1920x1080.jpg?t=1774188523"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/ss_c579ccd183640ee8f50ea1a86b27d1f2948b642c.1920x1080.jpg?t=1774188523"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/ss_4b2bd2e468488b646b4e5b2f1160db8896867238.1920x1080.jpg?t=1774188523"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/ss_ef6457357ca8a934ca9bf41bb6ac7785ddb5e912.1920x1080.jpg?t=1774188523"
            description="ULTRAKILL é um FPS retrô frenético e ultraviolento que combina a pontuação baseada em habilidade dos jogos de ação com a carnificina desenfreada inspirada nos melhores jogos de tiro dos anos 90. Destrua seus inimigos com um arsenal variado e banhe-se em seu sangue para recuperar sua saúde." 
            playLink="https://store.steampowered.com/app/1229490/ULTRAKILL/"
            />
        </div>
    );
}

export default Ultrakill;