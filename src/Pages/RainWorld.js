import GamePopup from '../Components/GamePopup';

function RainWorld() {
    return (
        <div>
            <GamePopup 
            title="Rain World" 
            video1={process.env.PUBLIC_URL + '/videos/rainWorldTrailer1.mp4'}

            image="https://store-images.s-microsoft.com/image/apps.21995.14344758136653430.0a9ce6ed-b26d-40f7-a6e0-5e2514866b02.c5adc4e8-fba7-4ac5-b220-ca281c299074" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/312520/ss_d551eee41e60ba8f5f2005b3de41c5f2c27cb444.1920x1080.jpg?t=1772227582"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/312520/ss_ac9c5296916330c54c69302963d151ad261d6c14.1920x1080.jpg?t=1772227582"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/312520/ss_4dd9382b280de17b21bdff758200c32250078d80.1920x1080.jpg?t=1772227582"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/312520/ss_628274c84b196e270733f540139062f2787c4423.1920x1080.jpg?t=1772227582"

            description="Você é um lesgato. O mundo a sua volta é cheio de ameaças e você deve encará-lo – sozinho. Separado de sua família em uma inundação devastadora, você precisará encontrar comida e abrigo entre aguaceiros torrenciais assustadores, que ameaçam inundar toda forma de vida. Escale as ruínas de uma civilização antiga, fuja das garras de predadores cruéis e descubra novas terras repletas de criaturas estranhas e mistérios enterrados. Encontre sua família antes de virar a refeição de alguém!" 
            playLink="https://store.steampowered.com/app/312520/Rain_World/"
            />
        </div>
    );
}

export default RainWorld;