import { deleteReservation, getReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("reservation--")) {
    const [, reservationId] = click.target.id.split("--");
    deleteReservation(parseInt(reservationId));
  }
});

export const Reservations = () => {
  const reservations = getReservations(); // grab the local state of the reservations data

  let html = `
        <ul class = "reservationClass">
            ${reservations
              .map(
                (reservation) => `
                <li class="reservationClass_bullet">
                    <input type="radio" value=reservation--${reservation.id} name="reservation"> 
                    ${reservation.child_name}
                    ${reservation.address_of_party}
                    ${reservation.dateOfParty}
                    ${reservation.length_of_party_in_hours}
                    <button class="reservation__delete"
                            id="reservation--${reservation.id}"
                            style="margin: 1rem 0 2rem 2rem;
                            padding: 0.5rem;
                            background-color: #0d023f;
                            color: lightgoldenrodyellow;
                            font-size: 1rem;">
                        Delete
                    </button>
                </li>`
              )
              .join("")}
        </ul>`;

  return html;
};