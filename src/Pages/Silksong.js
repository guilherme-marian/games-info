import GamePopup from "../Components/GamePopup";

function Silksong() {
    return (
        <div>
            <GamePopup 
            title="Silksong"
            video1={process.env.PUBLIC_URL + '/videos/silksongTrailer1.mp4'}

            image="https://upload.wikimedia.org/wikipedia/pt/8/86/Hollow_Knight_Silksong_cover.jpeg" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/26950369fe4b03c2268620eb9815c8a246aa0b06/ss_26950369fe4b03c2268620eb9815c8a246aa0b06.1920x1080.jpg?t=1776125736"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/d1a893ec6357b347a55ed929833ba793b57a79d2/ss_d1a893ec6357b347a55ed929833ba793b57a79d2.1920x1080.jpg?t=1776125736"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/856e33e755a0b9a785c645d116036516ea08812b/ss_856e33e755a0b9a785c645d116036516ea08812b.1920x1080.jpg?t=1776125736"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/dae3a0798c6c59a433b46de8f5ec18b21ad97fcd/ss_dae3a0798c6c59a433b46de8f5ec18b21ad97fcd.1920x1080.jpg?t=1776125736"
            
            description="Como a letal caçadora Hornet, aventure-se por um reino governado pela seda e por canções! Capturada e levada para um mundo desconhecido, prepare-se para enfrentar inimigos poderosos e desvendar mistérios antigos enquanto ascende em uma perigosa peregrinação até o pico do reino.

Hollow Knight: Silksong é a épica continuação de Hollow Knight, o premiado jogo de ação e aventura. Explore novos territórios, descubra novos poderes, combata vastas hordas de insetos e feras e revele segredos antigos ligados à sua natureza e ao seu passado." 
            playLink="https://store.steampowered.com/app/1030300/Silksong/"
            />
        </div>
    );
}

export default Silksong;