const applicationState = {
    reservations: [],
  };
  
  export const getReservations = () => {
    return [...applicationState.reservations];
  };
  
  const API = "http://localhost:8088";
  
  export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
      .then((response) => response.json())
      .then((serviceReservations) => {
        // Store the external state in application state
        applicationState.reservations = serviceReservations;
      });
  };
  
  export const sendReservation = (userServiceReservation) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userServiceReservation),
    };
  
    return fetch(`${API}/reservations`, fetchOptions)
      .then((response) => response.json())
      .then(() => {
        const mainContainer = document.querySelector("#container");
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
      });
  };
  
  export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" }).then(() => {
      const mainContainer = document.querySelector("#container");
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
  };