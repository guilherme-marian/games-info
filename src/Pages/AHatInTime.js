import GamePopup from '../Components/GamePopup';

function AHatInTime(){
    return (
        <div>
            <GamePopup 
            title="A Hat in Time" 
            video1={process.env.PUBLIC_URL + '/videos/ahatintimeTrailer1.mp4'}
           
            image="https://store-images.s-microsoft.com/image/apps.12367.63512599203033356.81dab591-4682-4592-bc32-cae9aff26cf2.1a370c08-6e4c-4679-8475-4b3f459e1509" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/253230/ss_eb442a7301b8a0d8e94c4064575ebe68d77deb12.1920x1080.jpg?t=1770044525"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/253230/ss_b53ce2961bf920347518950a2726b93f48a10606.1920x1080.jpg?t=1770044525"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/253230/ss_88ea21213a4c788a1736dd45a70ae0f85ae4746d.1920x1080.jpg?t=1770044525"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/253230/ss_6453e79583a08067dca7ed933628b3f6ff102bf6.1920x1080.jpg?t=1770044525"
            description="Em A Hat in Time, você joga como uma pequena garota viajante espacial com uma cartola enorme. Sua aventura é interrompida quando todo o seu combustível, as Peças do Tempo, se perde e se espalha por um planeta próximo. A Hat Kid agora precisa pular, lutar e costurar novos chapéus para explorar cada canto deste novo mundo, recuperar seu combustível e retomar sua jornada. Em seu caminho, ela encontrará a ameaçadora Máfia dos Cozinheiros, os pássaros atrapalhados do Estúdio Pássaro Morto, as sombras assustadoras da Floresta Subcon e muito mais!" 
            playLink="https://store.steampowered.com/app/253230/A_Hat_in_Time/"
            />
        </div>
    );
}

export default AHatInTime;