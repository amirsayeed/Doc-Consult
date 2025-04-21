import {
    toast
} from 'react-toastify';

export const getStoredAppointment = () => {
    const storedAppointmentStr = localStorage.getItem('booking-list');
    if (storedAppointmentStr) {
        const storedAppointment = JSON.parse(storedAppointmentStr);
        return storedAppointment;
    } else {
        return [];
    }
}

export const addAppointmentToStore = (id, name) => {
    const storedAppointment = getStoredAppointment();
    if (storedAppointment.includes(id)) {
        toast.error('Appointment is already booked!');
        return;
    } else {
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('booking-list', storedAppointmentStr);
        toast.success(`Your appointment with ${name} is booked!`);
    }
}