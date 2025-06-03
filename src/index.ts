function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('birthdate') as HTMLInputElement;
    const button = document.getElementById('calculate') as HTMLButtonElement;
    const result = document.getElementById('result') as HTMLElement;

    button.addEventListener('click', () => {
        if (input.value) {
            const birth = new Date(input.value);
            const age = calculateAge(birth);
            result.textContent = `You are ${age} years old.`;
        } else {
            result.textContent = 'Please enter a valid birth date.';
        }
    });
});
