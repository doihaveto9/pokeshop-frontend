import React, { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomePage.css";

function HomePage() {
    const [index, setIndex] = useState(0);
    const [featured, setFeatured] = useState([]);
    const [loadingFeatured, setLoadingFeatured] = useState(false);

    useEffect(() => {
      setLoadingFeatured(true);

      axios.get('http://localhost:8080/getFeaturedItems')
      .then(response => {
        setFeatured(response.data);
        setLoadingFeatured(false);
      })
      .catch(error => {
        console.error("Error fetching stories:", error);
        setLoadingFeatured(false);
      });

    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Replace these with your actual image URLs
    const carouselImages = [
        "/Assets/PokemonImage-1.webp",
        "/Assets/PokemonImage-2.webp",
        "/Assets/PokemonImage-3.jpg"
    ];

    return (
        <Container fluid className="py-4">
            {/* Image Carousel */}
            <div className="carousel-container mx-5">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {carouselImages.map((image, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100 rounded"
                                    src={image}
                                    alt={`Slide ${idx + 1}`}
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
            </div>

            {/* Content Containers */}
            <Row className="g-3">
                {/* Left Container - 2/3 width */}
                <Col lg={8} md={12} className="mb-3">
                    <div className="translucent-container p-4 rounded">
                        <h3 className="text-dark mb-3">Featured</h3>
                        
                    </div>
                </Col>

                {/* Right Column - 1/3 width with 2 stacked containers */}
                <Col lg={4} md={12}>
                    {/* Top Right Container */}
                    <div className="translucent-container p-4 rounded mb-3">
                        <h4 className="text-dark mb-2">Section 1</h4>
                        <p className="text-dark text-sm">
                            This is the top right container.
                        </p>
                    </div>

                    {/* Bottom Right Container */}
                    <div className="translucent-container p-4 rounded">
                        <h4 className="text-dark mb-2">Section 2</h4>
                        <p className="text-dark text-sm">
                            This is the bottom right container.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;