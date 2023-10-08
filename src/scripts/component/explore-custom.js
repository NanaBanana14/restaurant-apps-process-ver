class ExploreComponent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .section-title {
          margin: 20px;
          text-align: center;
          color: #C63D2F;
          font-size: 20px;
        }
        .explore {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          align-items: flex-start;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
        }

        .headline {
          display: grid;
          grid-template-columns: 1fr;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s, background-color 0.3s, color 0.3s;
          cursor: pointer;
        }

        .headline:hover {
          transform: translateY(-10px);
          background-color: #FF9B50;
          color: white;
        }

        .headline__figure {
          width: 100%;
          position: relative;
        }

        .headline__figure img {
          width: 100%;
          height: auto;
          border-radius: 5px 5px 0 0;
        }

        .headline__figure figcaption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          background-color: #C63D2F;
          color: white;
          font-size: 13px;
          padding: 8px 0;
        }

        .headline__content {
          padding: 20px;
        }

        .headline__title {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }

        .headline__description {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        .headline__button {
          text-transform: uppercase;
          margin-top: 24px;
          cursor: pointer;
          padding: 20px;
          color: white;
          border: none;
          border-radius: 5px;
          background-color: #C63D2F;
          transition: opacity 0.3s;
        }

        .headline__button:hover {
          opacity: 0.8;
        }
      </style>
      <div class="section-title">
        <h1>Apa Yang Bisa Kamu Temukan Disini ?</h1>
      </div>
      <div class="explore">
        <article class="headline">
          <div class="headline__figure">
            <img src="https://img.freepik.com/premium-photo/cooked-roasted-chicken-legs_89816-7044.jpg?w=740"
              alt="cooked-roasted-chicken-legs" />
            <figcaption>cooked-roasted-chicken-legs</figcaption>
          </div>
          <div class="headline__content">
            <h1 class="headline__title">Berbagai Macam Menu ada disini</h1>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Restaurant" />
            <figcaption>Restaurant</figcaption>
          </div>
          <div class="headline__content">
            <h1 class="headline__title">Mau pilih berdasarkan Restoran nya ?</h1>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img src="https://test.hypermart.co.id/wp-content/uploads/2021/03/25e.jpg" alt="Bahan Makanan" />
            <figcaption>Resep Makanan</figcaption>
          </div>
          <div class="headline__content">
            <h1 class="headline__title">Ingin tahu Resep dari suatu Menu ?</h1>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img src="https://i.pinimg.com/564x/8b/a6/66/8ba6661d3053eb6ee76a1fa2c2da3ce5.jpg" alt="Blog Kuliner" />
            <figcaption>Blog Kuliner</figcaption>
          </div>
          <div class="headline__content">
            <h1 class="headline__title">Update seputar kuliner ada disini</h1>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>
      </div>
    `;
  }
}

customElements.define('explore-component', ExploreComponent);