import GamePopup from '../Components/GamePopup';

function Mewgenics(){
    return (
        <div>
            <GamePopup 
            title="Mewgenics" 
            video1={process.env.PUBLIC_URL + '/videos/mewgenicsTrailer.mp4'}

            image="https://upload.wikimedia.org/wikipedia/pt/thumb/a/a5/Mewgenics_Poster.jpg/250px-Mewgenics_Poster.jpg" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/686060/b76bf94de0b466797f9455a6da347507020a9966/ss_b76bf94de0b466797f9455a6da347507020a9966.1920x1080.jpg?t=1771573546"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/686060/a49301637adf55a2fad26305272829a0f47b478d/ss_a49301637adf55a2fad26305272829a0f47b478d.1920x1080.jpg?t=1771573546"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/686060/2b1f8ec2befd90418edd6d1c154bd494ba066821/ss_2b1f8ec2befd90418edd6d1c154bd494ba066821.1920x1080.jpg?t=1771573546"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/686060/d8fca4059f3f9494d35c2ae50399a28b303fa3b3/ss_d8fca4059f3f9494d35c2ae50399a28b303fa3b3.1920x1080.jpg?t=1771573546"
            description="Construa o exército de gatos definitivo através de uma procriação estratégica e envie-o em desafiadoras aventuras em turnos. Selecione habilidades, colete itens e manipule a genética neste roguelite de estratégia dos mesmos criadores de The Binding of Isaac e The End is Nigh." 
            playLink="https://store.steampowered.com/app/686060/Mewgenics/"
            />
        </div>
    );
}

export default Mewgenics;