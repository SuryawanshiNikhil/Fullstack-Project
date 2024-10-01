export const Home =()=>{
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcomr to thapa tehnical </p>
                        <h1>Welcome to thapa technical </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ducimus labore neque! Doloremque, pariatur quisquam explicabo illum perferendis consequatur qui officiis quo voluptas earum. Nam impedit officiis labore adipisci.</p>
                        <div className="btn btn-group">
                         <a href="/Contact"><button className="btn">connect </button></a>
                         <a href="/Service"><button className="btn">learn more</button></a>
                        </div>
                    </div>
                    <div className="hero-images">
                        <img src="./anime.PNG.jpg" width="400"  height="300"/>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}