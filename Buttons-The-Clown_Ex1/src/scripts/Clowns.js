import { Reservations } from "./Reservations.js"

export const Clowns = () => {
    return `
        <h1>Party With Clowns</h1>
        <section class="serviceForm">
            
        </section>

        <section class="serviceReservations">
            <h2>Service Reservations</h2>
            ${Reservations()}
        </section>
    `
}
