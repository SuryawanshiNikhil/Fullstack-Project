import { useAuth } from "../store/auth"

export const Service =()=>{

    const {servicess}=useAuth();
    return (
        <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">
Servicess
                </h1>
            </div>
            <div className="container grid grid-three-cols">
                {
                    servicess.map((currELem,index)=>{
                        const {provider,price,service,description}=currELem;

                        return(
                            <>
                            <div className="card" key={index}>
                    <div className="card-img">
                        <img src="/anime.PNG.jpg" width={200} height={200}/>
                    </div>
                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                            </>
                        )

                    })
                }
             
            </div>
        </section>
        </>
    )
}