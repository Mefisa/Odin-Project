const root = document.querySelector('#content');

export default function buildPage() {
    const header = document.createElement('div');
    header.textContent = "Yoshan's curry house";
    header.setAttribute("id", "headline");

    const body = document.createElement('div');
    body.textContent = "this is the best curry house in Vaughan"

    const image = document.createElement('img');
    image.setAttribute("src", "../images/Chicken_makhani.jpg");

    root.appendChild(header);
    root.appendChild(body);
    root.appendChild(image);
}