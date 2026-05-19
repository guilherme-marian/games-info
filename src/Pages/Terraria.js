import GamePopup from '../Components/GamePopup';

function Terraria(){
    return (
        <div>
            <GamePopup 
            title="Terraria" 
            video1={process.env.PUBLIC_URL + '/videos/terrariaTrailer1.mp4'}

            image="https://minecraft.wiki/images/Terraria.jpg?a373d" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1769844435"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1769844435"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/ss_a34d1ebdc99634e012ea19759c12822802164b0e.1920x1080.jpg?t=1769844435"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/ss_fefd40cad50a10c09f928f9dc3f9017f8fe50213.1920x1080.jpg?t=1769844435"
            description="Cave, lute, explore, construa! Nada é impossível nesse jogo de aventura cheio de ação. O mundo é a sua tela de pintar e o chão em si é a sua tinta.
Pegue suas ferramentas e vá! Faça novas armas para lutar contra uma variedades de inimigos em numerosos biomas. Cave profundamente no subsolo para encontrar acessórios, dinheiro e outras coisas úteis. Reúna recursos para criar tudo o que você precisa para tornar o mundo o seu próprio. Construa uma casa, um forte ou até mesmo um castelo. Pessoas vão se mudar e viver lá e talvez até vender para você diferentes mercadorias para ajudá-lo em sua jornada." 
            playLink="https://store.steampowered.com/app/105600/Terraria/"
            />
        </div>
    );
}

export default Terraria;