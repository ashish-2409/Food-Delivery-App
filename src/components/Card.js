import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet..</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded">
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>
                        </select>
                        <div className='d-inline fs-5 h-100'>Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
