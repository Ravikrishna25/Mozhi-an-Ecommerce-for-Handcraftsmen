import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/jaipur-rajasthan.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>`Leather Elegance`</h3>
                    <p>"Explore the timeless artistry of leather scripture work, where skilled artisans transform words into intricate masterpieces, preserving culture and heritage."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/elephant.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>`Sacred Woodcraft`</h3>
                    <p>
"Discover the exquisite fusion of craftsmanship and tradition in our wooden elephant sculptures adorned with intricate scripture work."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/saree.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>`Silken Grace`</h3>
                    <p>
                    "Elegantly handcrafted sarees embodying traditional artistry and exquisite handwork."
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/handweaving.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>`Threaded Artistry`</h3>
                    <p>
                    "Immerse yourself in the rich tapestry of tradition woven with hand-picked threads, a testament to craftsmanship."
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/pot.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>`Crafted Treasures`</h3>
                    <p>
                    "Explore tea pots and other items crafted with traditional hand-picked materials, each a unique masterpiece of heritage."
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;
