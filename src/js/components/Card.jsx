import React from "react";

function Card() {

    const cardsData = [
        {
            id: 1,
            img: "https://picsum.photos/id/237/500/325",
            title: "Card title 1",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nostrum assumenda!"
        },
        {
            id: 2,
            img: "https://picsum.photos/id/238/500/325",
            title: "Card title 2",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nostrum assumenda!"
        },
        {
            id: 3,
            img: "https://picsum.photos/id/239/500/325",
            title: "Card title 3",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nostrum assumenda!"
        },
        {
            id: 4,
            img: "https://picsum.photos/id/240/500/325",
            title: "Card title 4",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nostrum assumenda!"
        }
    ];

    return (
        <div className="container-card container my-4">
            <div className="row g-4 justify-content-center">
                {cardsData.map((item) => (
                    <div className="col-md-3" key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={item.img} className="card-img-top" alt={item.title} />
                            <div className="card-body text-center py-2">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                            </div>
                            <div className="border-top py-2 bg-light d-flex justify-content-center">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>

                    </div>

                ))}

            </div>
        </div>

    );
}

export default Card;
