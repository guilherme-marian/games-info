import GamePopup from '../Components/GamePopup';

function Blasphemous(){
    return (
        <div>
            <GamePopup 
            title="Blasphemous" 
            video1={process.env.PUBLIC_URL + '/videos/blasphemousTrailer1.mp4'}
           
            image="https://store-images.s-microsoft.com/image/apps.48288.14467989922179877.4281a03c-f00f-4e46-b74d-f95353494fc6.30cea89c-6409-4ec1-afef-54946eed74c7" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/ss_770720a3db9408ae7ae6625ba157bfb9195a3a68.1920x1080.jpg?t=1766049817"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/ss_bd57bcb1e9183cbea61339727a97bcc5206677b2.1920x1080.jpg?t=1766049817"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/ss_547d75f45fc1a1b368638a849e3aaba624d7b139.1920x1080.jpg?t=1766049817"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/ss_67e9de6ea4dc169d21aaacb3d8625e2e0b3e025d.1920x1080.jpg?t=1766049817"
            description="Blasphemous é um jogo de ação em plataforma brutal com um combate desafiador. Explore o mundo sinistro de Cvstodia, melhore suas habilidades e execute com violência as hordas de inimigos que se colocam entre você e sua peregrinação para interromper o ciclo de perdição eterna." 
            playLink="https://store.steampowered.com/app/774361/Blasphemous/"
            />
        </div>
    );
}

export default Blasphemous;