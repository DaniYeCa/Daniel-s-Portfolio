import "./Card-personal.css";

export const cardPersonal = (photo, alt, desc) => {
  return `
    <div class="card-personal">
        <img src=${photo} alt=${alt} />
        <p>${desc}</p>
    </div>
    `;
}