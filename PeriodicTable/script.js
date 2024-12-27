document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        { number: 1, symbol: 'H', name: 'Hydrogen', mass: '1.008', category: 'nonmetal', xpos: 1, ypos: 1 },
        { number: 2, symbol: 'He', name: 'Helium', mass: '4.0026', category: 'noble-gas', xpos: 18, ypos: 1 },
        { number: 3, symbol: 'Li', name: 'Lithium', mass: '6.94', category: 'alkali-metal', xpos: 1, ypos: 2 },
        { number: 4, symbol: 'Be', name: 'Beryllium', mass: '9.0122', category: 'alkaline-earth-metal', xpos: 2, ypos: 2 },
        { number: 5, symbol: 'B', name: 'Boron', mass: '10.81', category: 'metalloid', xpos: 13, ypos: 2 },
        { number: 6, symbol: 'C', name: 'Carbon', mass: '12.011', category: 'nonmetal', xpos: 14, ypos: 2 },
        { number: 7, symbol: 'N', name: 'Nitrogen', mass: '14.007', category: 'nonmetal', xpos: 15, ypos: 2 },
        { number: 8, symbol: 'O', name: 'Oxygen', mass: '15.999', category: 'nonmetal', xpos: 16, ypos: 2 },
        { number: 9, symbol: 'F', name: 'Fluorine', mass: '18.998', category: 'halogen', xpos: 17, ypos: 2 },
        { number: 10, symbol: 'Ne', name: 'Neon', mass: '20.180', category: 'noble-gas', xpos: 18, ypos: 2 },
        { number: 11, symbol: 'Na', name: 'Sodium', mass: '22.990', category: 'alkali-metal', xpos: 1, ypos: 3 },
        { number: 12, symbol: 'Mg', name: 'Magnesium', mass: '24.305', category: 'alkaline-earth-metal', xpos: 2, ypos: 3 },
        { number: 13, symbol: 'Al', name: 'Aluminum', mass: '26.982', category: 'post-transition-metal', xpos: 13, ypos: 3 },
        { number: 14, symbol: 'Si', name: 'Silicon', mass: '28.085', category: 'metalloid', xpos: 14, ypos: 3 },
        { number: 15, symbol: 'P', name: 'Phosphorus', mass: '30.974', category: 'nonmetal', xpos: 15, ypos: 3 },
        { number: 16, symbol: 'S', name: 'Sulfur', mass: '32.06', category: 'nonmetal', xpos: 16, ypos: 3 },
        { number: 17, symbol: 'Cl', name: 'Chlorine', mass: '35.45', category: 'halogen', xpos: 17, ypos: 3 },
        { number: 18, symbol: 'Ar', name: 'Argon', mass: '39.948', category: 'noble-gas', xpos: 18, ypos: 3 },
        { number: 19, symbol: 'K', name: 'Potassium', mass: '39.098', category: 'alkali-metal', xpos: 1, ypos: 4 },
        { number: 20, symbol: 'Ca', name: 'Calcium', mass: '40.078', category: 'alkaline-earth-metal', xpos: 2, ypos: 4 },
        { number: 21, symbol: 'Sc', name: 'Scandium', mass: '44.956', category: 'transition-metal', xpos: 3, ypos: 4 },
        { number: 22, symbol: 'Ti', name: 'Titanium', mass: '47.867', category: 'transition-metal', xpos: 4, ypos: 4 },
        { number: 23, symbol: 'V', name: 'Vanadium', mass: '50.942', category: 'transition-metal', xpos: 5, ypos: 4 },
        { number: 24, symbol: 'Cr', name: 'Chromium', mass: '51.996', category: 'transition-metal', xpos: 6, ypos: 4 },
        { number: 25, symbol: 'Mn', name: 'Manganese', mass: '54.938', category: 'transition-metal', xpos: 7, ypos: 4 },
        { number: 26, symbol: 'Fe', name: 'Iron', mass: '55.845', category: 'transition-metal', xpos: 8, ypos: 4 },
        { number: 27, symbol: 'Co', name: 'Cobalt', mass: '58.933', category: 'transition-metal', xpos: 9, ypos: 4 },
        { number: 28, symbol: 'Ni', name: 'Nickel', mass: '58.693', category: 'transition-metal', xpos: 10, ypos: 4 },
        { number: 29, symbol: 'Cu', name: 'Copper', mass: '63.546', category: 'transition-metal', xpos: 11, ypos: 4 },
        { number: 30, symbol: 'Zn', name: 'Zinc', mass: '65.38', category: 'transition-metal', xpos: 12, ypos: 4 },
        { number: 31, symbol: 'Ga', name: 'Gallium', mass: '69.723', category: 'post-transition-metal', xpos: 13, ypos: 4 },
        { number: 32, symbol: 'Ge', name: 'Germanium', mass: '72.63', category: 'metalloid', xpos: 14, ypos: 4 },
        { number: 33, symbol: 'As', name: 'Arsenic', mass: '74.922', category: 'metalloid', xpos: 15, ypos: 4 },
        { number: 34, symbol: 'Se', name: 'Selenium', mass: '78.971', category: 'nonmetal', xpos: 16, ypos: 4 },
        { number: 35, symbol: 'Br', name: 'Bromine', mass: '79.904', category: 'halogen', xpos: 17, ypos: 4 },
        { number: 36, symbol: 'Kr', name: 'Krypton', mass: '83.798', category: 'noble-gas', xpos: 18, ypos: 4 },
        { number: 37, symbol: 'Rb', name: 'Rubidium', mass: '85.468', category: 'alkali-metal', xpos: 1, ypos: 5 },
        { number: 38, symbol: 'Sr', name: 'Strontium', mass: '87.62', category: 'alkaline-earth-metal', xpos: 2, ypos: 5 },
        { number: 39, symbol: 'Y', name: 'Yttrium', mass: '88.906', category: 'transition-metal', xpos: 3, ypos: 5 },
        { number: 40, symbol: 'Zr', name: 'Zirconium', mass: '91.224', category: 'transition-metal', xpos: 4, ypos: 5 },
        { number: 41, symbol: 'Nb', name: 'Niobium', mass: '92.906', category: 'transition-metal', xpos: 5, ypos: 5 },
        { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: '95.95', category: 'transition-metal', xpos: 6, ypos: 5 },
        { number: 43, symbol: 'Tc', name: 'Technetium', mass: '[98]', category: 'transition-metal', xpos: 7, ypos: 5 },
        { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: '101.07', category: 'transition-metal', xpos: 8, ypos: 5 },
        { number: 45, symbol: 'Rh', name: 'Rhodium', mass: '102.91', category: 'transition-metal', xpos: 9, ypos: 5 },
        { number: 46, symbol: 'Pd', name: 'Palladium', mass: '106.42', category: 'transition-metal', xpos: 10, ypos: 5 },
        { number: 47, symbol: 'Ag', name: 'Silver', mass: '107.87', category: 'transition-metal', xpos: 11, ypos: 5 },
        { number: 48, symbol: 'Cd', name: 'Cadmium', mass: '112.41', category: 'transition-metal', xpos: 12, ypos: 5 },
        { number: 49, symbol: 'In', name: 'Indium', mass: '114.82', category: 'post-transition-metal', xpos: 13, ypos: 5 },
        { number: 50, symbol: 'Sn', name: 'Tin', mass: '118.71', category: 'post-transition-metal', xpos: 14, ypos: 5 },
        { number: 51, symbol: 'Sb', name: 'Antimony', mass: '121.76', category: 'metalloid', xpos: 15, ypos: 5 },
        { number: 52, symbol: 'Te', name: 'Tellurium', mass: '127.60', category: 'metalloid', xpos: 16, ypos: 5 },
        { number: 53, symbol: 'I', name: 'Iodine', mass: '126.90', category: 'halogen', xpos: 17, ypos: 5 },
        { number: 54, symbol: 'Xe', name: 'Xenon', mass: '131.29', category: 'noble-gas', xpos: 18, ypos: 5 },
        { number: 55, symbol: 'Cs', name: 'Cesium', mass: '132.91', category: 'alkali-metal', xpos: 1, ypos: 6 },
        { number: 56, symbol: 'Ba', name: 'Barium', mass: '137.33', category: 'alkaline-earth-metal', xpos: 2, ypos: 6 },
        { number: 57, symbol: 'La', name: 'Lanthanum', mass: '138.91', category: 'lanthanide', xpos: 3, ypos: 9 },
        { number: 58, symbol: 'Ce', name: 'Cerium', mass: '140.12', category: 'lanthanide', xpos: 4, ypos: 9 },
        { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: '140.91', category: 'lanthanide', xpos: 5, ypos: 9 },
        { number: 60, symbol: 'Nd', name: 'Neodymium', mass: '144.24', category: 'lanthanide', xpos: 6, ypos: 9 },
        { number: 61, symbol: 'Pm', name: 'Promethium', mass: '[145]', category: 'lanthanide', xpos: 7, ypos: 9 },
        { number: 62, symbol: 'Sm', name: 'Samarium', mass: '150.36', category: 'lanthanide', xpos: 8, ypos: 9 },
        { number: 63, symbol: 'Eu', name: 'Europium', mass: '151.96', category: 'lanthanide', xpos: 9, ypos: 9 },
        { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: '157.25', category: 'lanthanide', xpos: 10, ypos: 9 },
        { number: 65, symbol: 'Tb', name: 'Terbium', mass: '158.93', category: 'lanthanide', xpos: 11, ypos: 9 },
        { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: '162.50', category: 'lanthanide', xpos: 12, ypos: 9 },
        { number: 67, symbol: 'Ho', name: 'Holmium', mass: '164.93', category: 'lanthanide', xpos: 13, ypos: 9 },
        { number: 68, symbol: 'Er', name: 'Erbium', mass: '167.26', category: 'lanthanide', xpos: 14, ypos: 9 },
        { number: 69, symbol: 'Tm', name: 'Thulium', mass: '168.93', category: 'lanthanide', xpos: 15, ypos: 9 },
        { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: '173.04', category: 'lanthanide', xpos: 16, ypos: 9 },
        { number: 71, symbol: 'Lu', name: 'Lutetium', mass: '174.97', category: 'lanthanide', xpos: 17, ypos: 9 },
        { number: 72, symbol: 'Hf', name: 'Hafnium', mass: '178.49', category: 'transition-metal', xpos: 4, ypos: 6 },
        { number: 73, symbol: 'Ta', name: 'Tantalum', mass: '180.95', category: 'transition-metal', xpos: 5, ypos: 6 },
        { number: 74, symbol: 'W', name: 'Tungsten', mass: '183.84', category: 'transition-metal', xpos: 6, ypos: 6 },
        { number: 75, symbol: 'Re', name: 'Rhenium', mass: '186.21', category: 'transition-metal', xpos: 7, ypos: 6 },
        { number: 76, symbol: 'Os', name: 'Osmium', mass: '190.23', category: 'transition-metal', xpos: 8, ypos: 6 },
        { number: 77, symbol: 'Ir', name: 'Iridium', mass: '192.22', category: 'transition-metal', xpos: 9, ypos: 6 },
        { number: 78, symbol: 'Pt', name: 'Platinum', mass: '195.08', category: 'transition-metal', xpos: 10, ypos: 6 },
        { number: 79, symbol: 'Au', name: 'Gold', mass: '196.97', category: 'transition-metal', xpos: 11, ypos: 6 },
        { number: 80, symbol: 'Hg', name: 'Mercury', mass: '200.59', category: 'transition-metal', xpos: 12, ypos: 6 },
        { number: 81, symbol: 'Tl', name: 'Thallium', mass: '204.38', category: 'post-transition-metal', xpos: 13, ypos: 6 },
        { number: 82, symbol: 'Pb', name: 'Lead', mass: '207.2', category: 'post-transition-metal', xpos: 14, ypos: 6 },
        { number: 83, symbol: 'Bi', name: 'Bismuth', mass: '208.98', category: 'post-transition-metal', xpos: 15, ypos: 6 },
        { number: 84, symbol: 'Po', name: 'Polonium', mass: '[209]', category: 'metalloid', xpos: 16, ypos: 6 },
        { number: 85, symbol: 'At', name: 'Astatine', mass: '[210]', category: 'halogen', xpos: 17, ypos: 6 },
        { number: 86, symbol: 'Rn', name: 'Radon', mass: '[222]', category: 'noble-gas', xpos: 18, ypos: 6 },
        { number: 87, symbol: 'Fr', name: 'Francium', mass: '[223]', category: 'alkali-metal', xpos: 1, ypos: 7 },
        { number: 88, symbol: 'Ra', name: 'Radium', mass: '[226]', category: 'alkaline-earth-metal', xpos: 2, ypos: 7 },
        { number: 89, symbol: 'Ac', name: 'Actinium', mass: '[227]', category: 'actinide', xpos: 3, ypos: 10 },
        { number: 90, symbol: 'Th', name: 'Thorium', mass: '232.04', category: 'actinide', xpos: 4, ypos: 10 },
        { number: 91, symbol: 'Pa', name: 'Protactinium', mass: '231.04', category: 'actinide', xpos: 5, ypos: 10 },
        { number: 92, symbol: 'U', name: 'Uranium', mass: '238.03', category: 'actinide', xpos: 6, ypos: 10 },
        { number: 93, symbol: 'Np', name: 'Neptunium', mass: '[237]', category: 'actinide', xpos: 7, ypos: 10 },
        { number: 94, symbol: 'Pu', name: 'Plutonium', mass: '[244]', category: 'actinide', xpos: 8, ypos: 10 },
        { number: 95, symbol: 'Am', name: 'Americium', mass: '[243]', category: 'actinide', xpos: 9, ypos: 10 },
        { number: 96, symbol: 'Cm', name: 'Curium', mass: '[247]', category: 'actinide', xpos: 10, ypos: 10 },
        { number: 97, symbol: 'Bk', name: 'Berkelium', mass: '[247]', category: 'actinide', xpos: 11, ypos: 10 },
        { number: 98, symbol: 'Cf', name: 'Californium', mass: '[251]', category: 'actinide', xpos: 12, ypos: 10 },
        { number: 99, symbol: 'Es', name: 'Einsteinium', mass: '[252]', category: 'actinide', xpos: 13, ypos: 10 },
        { number: 100, symbol: 'Fm', name: 'Fermium', mass: '[257]', category: 'actinide', xpos: 14, ypos: 10 },
        { number: 101, symbol: 'Md', name: 'Mendelevium', mass: '[258]', category: 'actinide', xpos: 15, ypos: 10 },
        { number: 102, symbol: 'No', name: 'Nobelium', mass: '[259]', category: 'actinide', xpos: 16, ypos: 10 },
        { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: '[262]', category: 'actinide', xpos: 17, ypos: 10 },
        { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: '[267]', category: 'transition-metal', xpos: 4, ypos: 7 },
        { number: 105, symbol: 'Db', name: 'Dubnium', mass: '[270]', category: 'transition-metal', xpos: 5, ypos: 7 },
        { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: '[271]', category: 'transition-metal', xpos: 6, ypos: 7 },
        { number: 107, symbol: 'Bh', name: 'Bohrium', mass: '[270]', category: 'transition-metal', xpos: 7, ypos: 7 },
        { number: 108, symbol: 'Hs', name: 'Hassium', mass: '[277]', category: 'transition-metal', xpos: 8, ypos: 7 },
        { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: '[278]', category: 'transition-metal', xpos: 9, ypos: 7 },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: '[281]', category: 'transition-metal', xpos: 10, ypos: 7 },
        { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: '[282]', category: 'transition-metal', xpos: 11, ypos: 7 },
        { number: 112, symbol: 'Cn', name: 'Copernicium', mass: '[285]', category: 'transition-metal', xpos: 12, ypos: 7 },
        { number: 113, symbol: 'Nh', name: 'Nihonium', mass: '[286]', category: 'post-transition-metal', xpos: 13, ypos: 7 },
        { number: 114, symbol: 'Fl', name: 'Flerovium', mass: '[289]', category: 'post-transition-metal', xpos: 14, ypos: 7 },
        { number: 115, symbol: 'Mc', name: 'Moscovium', mass: '[290]', category: 'post-transition-metal', xpos: 15, ypos: 7 },
        { number: 116, symbol: 'Lv', name: 'Livermorium', mass: '[293]', category: 'post-transition-metal', xpos: 16, ypos: 7 },
        { number: 117, symbol: 'Ts', name: 'Tennessine', mass: '[294]', category: 'halogen', xpos: 17, ypos: 7 },
        { number: 118, symbol: 'Og', name: 'Oganesson', mass: '[294]', category: 'noble-gas', xpos: 18, ypos: 7 }
    ];

    const periodicTable = document.getElementById('periodic-table');
    
    // Create table rows and cells
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 18; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        periodicTable.appendChild(row);
    }
    
    // Populate elements in the correct positions
    elements.forEach(element => {
        const cell = periodicTable.rows[element.ypos - 1].cells[element.xpos - 1];
        cell.classList.add('element', element.category);
        cell.innerHTML = `
            <strong>${element.symbol}</strong>
            <small>${element.number}</small>
            <small>${element.mass}</small>
        `;
        cell.addEventListener('click', () => showElementDetails(element));
    });
});

function showElementDetails(element) {
    document.getElementById('element-name').innerText = element.name;
    document.getElementById('element-details').innerHTML = `
        <p>Symbol: ${element.symbol}</p>
        <p>Atomic Number: ${element.number}</p>
        <p>Atomic Mass: ${element.mass}</p>
        <p>Category: ${element.category}</p>
    `;
    document.getElementById('element-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('element-modal').style.display = 'none';
}

function searchElement() {
    const query = document.getElementById('search').value.toLowerCase();
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        const name = element.querySelector('strong').innerText.toLowerCase();
        const number = element.querySelector('small').innerText.toLowerCase();
        const symbol = element.querySelector('strong').innerText.toLowerCase();
        
        if (name.includes(query) || number.includes(query) || symbol.includes(query)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}




