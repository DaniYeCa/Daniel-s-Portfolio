import "./Avatar.css";

export const Avatar = (image, descrip) => {
  return `
        <div class="avatar">
            <img src=${image} alt=${descrip} />
        </div>
    `;
}