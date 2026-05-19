import GamePopup from '../Components/GamePopup';

function HollowKnight(){
    return (
        <div>
            <GamePopup 
            title="Hollow Knight" 
            video1={process.env.PUBLIC_URL + '/videos/hollowknightTrailer1.mp4'}
           
            image="https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg?t=1776125684"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg?t=1776125684"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_92c7e8f34c00bdb455070ecdd5b746f0d2f6d808.1920x1080.jpg?t=1776125684"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_fbe692d154a3d9dd627966d5445c4647ae0f71ce.1920x1080.jpg?t=1776125684"
            description="Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão." 
            playLink="https://store.steampowered.com/app/367520/Hollow_Knight/"
            />
        </div>
    );
}

export default HollowKnight;