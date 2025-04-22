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
        toast.error('Appointment already scheduled for today');
        return false;
    } else {
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('booking-list', storedAppointmentStr);
        setTimeout(() => {
            toast.success(`Appointment scheduled for ${name} successfully`);
        }, 500)
        return true;
    }
}

export const removeFromStore = (bookedId) => {
    const storedAppointment = getStoredAppointment();
    const remainingAppointment = storedAppointment.filter(booking => booking !== bookedId)
    localStorage.setItem('booking-list', JSON.stringify(remainingAppointment));
}