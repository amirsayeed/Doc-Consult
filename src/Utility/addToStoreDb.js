export const getStoredAppointment = () => {
    const storedAppointmentStr = localStorage.getItem('booking-list');
    if (storedAppointmentStr) {
        const storedAppointment = JSON.parse(storedAppointmentStr);
        return storedAppointment;
    } else {
        return [];
    }
}

export const addAppointmentToStore = (id) => {
    const storedAppointment = getStoredAppointment();
    if (storedAppointment.includes(id)) {
        alert(id + ' is already booked');
    } else {
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('booking-list', storedAppointmentStr);
    }
}