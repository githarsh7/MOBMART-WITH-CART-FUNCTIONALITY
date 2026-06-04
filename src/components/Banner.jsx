import { useState, useEffect } from 'react';

const slides = [
  {
    tag: 'PREMIUM SMARTPHONE COLLECTION',
    headline: 'Discover The Future\nOf Mobile Technology',
    desc: 'Explore flagship smartphones with premium design, powerful cameras, and next-generation performance.',
    // Free-use Unsplash photo of phones
    photo: 'https://images.pexels.com/photos/16442035/pexels-photo-16442035.jpeg?_gl=1*1t5hed2*_ga*OTQ4MjIwNzk0LjE3Nzg5NDk3MDg.*_ga_8JE65Q40S6*czE3ODA1NjI3OTYkbzckZzEkdDE3ODA1NjI4NTUkajEkbDAkaDA.',
  },
  {
    tag: 'LIMITED TIME OFFER',
    headline: 'Next-Gen Cameras\nIn Your Pocket',
    desc: 'Professional-grade photography meets sleek design. Capture every moment in stunning detail.',
    photo: 'https://images.pexels.com/photos/32335308/pexels-photo-32335308.jpeg?_gl=1*jf61ow*_ga*OTQ4MjIwNzk0LjE3Nzg5NDk3MDg.*_ga_8JE65Q40S6*czE3Nzk0NzA4MzAkbzMkZzEkdDE3Nzk0NzE0NTMkajQyJGwwJGgw',
  },
  {
    tag: 'NEW ARRIVALS',
    headline: 'Power Meets\nElegance',
    desc: 'Experience lightning-fast performance and all-day battery life wrapped in premium materials.',
    photo: 'https://images.pexels.com/photos/19022728/pexels-photo-19022728.jpeg?_gl=1*1pqew0i*_ga*OTQ4MjIwNzk0LjE3Nzg5NDk3MDg.*_ga_8JE65Q40S6*czE3ODA1NjI3OTYkbzckZzEkdDE3ODA1NjI5MzckajI3JGwwJGgw',
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const s = slides[current];

  return (
    <div className="banner-wrapper">
      <div className="banner-slide">

        {/* Full-bleed photo background */}
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${s.photo})` }}
        />

        {/* Dark overlay for text readability */}
        <div className="banner-overlay" />

        {/* Centered headline */}
        <div className="banner-center">
          <span className="banner-tag">{s.tag}</span>
          <h1 className="banner-headline">
            {s.headline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="banner-desc">{s.desc}</p>
        </div>

        {/* Slide dots */}
        <div className="banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? ' dot-active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;