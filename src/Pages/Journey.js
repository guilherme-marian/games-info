import GamePopup from '../Components/GamePopup';

function Journey(){
    return (
        <div>
            <GamePopup 
            title="Journey" 
            video1={process.env.PUBLIC_URL + '/videos/journeyTrailer1.mp4'}

            image="https://image.api.playstation.com/vulcan/img/rnd/202010/2917/97DxCJOxjXRuK74AagHwhrit.png" 
            image1="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638230/ss_d4c7bfb15df749b78b6957320a4a23d71d531858.1920x1080.jpg?t=1729099361"
            image2="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638230/ss_c7741b2d22bdd5e5765816c9ef1b1e675616ce81.1920x1080.jpg?t=1729099361"
            image3="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638230/ss_ed77e7844e32c4cb181ce585fa1a368285c66ec5.1920x1080.jpg?t=1729099361"
            image4="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638230/ss_678009919bc0a5876ec7f4e60e8ec3070c090b58.1920x1080.jpg?t=1729099361"
            description="Explore o mundo misterioso ancestral de Journey enquanto plana sobre as ruínas e voa cruzando areias para descobrir seus segredos. Jogue sozinho ou na companhia de outro viajante e explorem seu vasto mundo juntos. Com visuais incríveis e uma trilha musical indicada para o Grammy, Journey apresenta uma experiência de tirar o fôlego como nenhuma outra." 
            playLink="https://store.steampowered.com/app/638230/Journey/"
            />
        </div>
    );
}

export default Journey;