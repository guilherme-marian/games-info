import GamePopup from '../Components/GamePopup';

function TheBindingOfIsaac(){
    return (
        <div>
            <GamePopup 
            title="The Binding of Isaac" 
            video1={process.env.PUBLIC_URL + '/videos/bindingofisaacTrailer1.mp4'}
            
            image="https://store-images.s-microsoft.com/image/apps.58856.69039762475408619.1f9f3938-799b-4ad8-a607-676e85baba27.95ed1dc8-4ddf-43fb-8a87-f54c81f96879" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250900/ss_25a4a446a433218d41a7e87e35b60c297e68e7a4.1920x1080.jpg?t=1731977365"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250900/ss_19ef624e8d97136ba6f928d389b85f7b8130c37a.1920x1080.jpg?t=1731977365"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250900/ss_b146a76ac5348e1cf958c3d01834e13b33c4e561.1920x1080.jpg?t=1731977365"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250900/ss_89aa019b678e96fd13367a5fda6145ed0bc79fce.1920x1080.jpg?t=1731977365"
            description="The Binding of Isaac é um RPG de ação com geração aleatória e fortes elementos de roguelike. Seguindo Isaac em sua jornada, os jogadores encontrarão tesouros bizarros que mudam a forma de Isaac, dando-lhe habilidades sobre-humanas e permitindo que ele lute contra hordas de criaturas misteriosas, descubra segredos e abra caminho para a segurança." 
            playLink="https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
            />
        </div>
    );
}

export default TheBindingOfIsaac;