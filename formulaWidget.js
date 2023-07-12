/**
 * control
 * 
 * canlander
 * 2.39 2 2 2 0 0 'can'
 * 37.08
 * 
 * edh
 * 2.34 11 6 0 0 0 'commander' 1
 * 33.99
 * 
 * aus
 * 2.34 11 6 0 0 0 'aus'
 * 19.28
 */
function karsten(avgmv, draw, ramp, fast, mdfc1, mdfc2, format, commanders) {
    let output;

    switch (format) {
        case 'aus':
            return (19.59  + (1.90 * avgmv) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2) + (0.27 * (commanders || 0))).toPrecision(4);
        case 'edh':
            output = (((100 - commanders) / 60) * (19.59 + (1.90 * avgmv) + (0.27 * commanders)) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2) - 1.35).toPrecision(4);
            break;
        case 'can':
        case 'gla':
        case 'eur':
        default:
            return (32.65 + (3.16 * avgmv) - (0.28 * (ramp + draw)) - fast - (0.74 * mdfc1) - (0.38 * mdfc2)).toPrecision(4);
    }
    return output;
}

function toggleInputs(e) {
    const inputGroup = document.getElementById('input-group');
    const edhGroup = document.getElementById('edhGroup');
    const ausGroup = document.getElementById('ausGroup');
    const output = document.getElementById('output');

    inputGroup.hidden = true;
    edhGroup.hidden = true;
    ausGroup.hidden = true;
    output.hidden = true;

    if (e.target.value === 'edh') {
        edhGroup.hidden = false;
    } else if (e.target.value === 'aus') {
        ausGroup.hidden = false;
    }
    if (e.target.value !== '') {
        inputGroup.hidden = false;
    }
}

function calculate() {
    const output = document.getElementById('output');
    const format = document.getElementById('format-select').value;

    try {
        const args = [
            Number(document.getElementById('avgmv').value),
            Number(document.getElementById('draw').value),
            Number(document.getElementById('ramp').value),
            Number(document.getElementById('fast').value),
            Number(document.getElementById('mdfc1').value),
            Number(document.getElementById('mdfc2').value),
            format
        ];
        if (format === 'edh') {
            args.push(Number(document.getElementById('commanders').value));
        }
        if (format === 'aus') {
            args.push(Number(document.getElementById('companion').value));
        }
    
        output.innerHTML = `Recommended number of lands: <strong>${karsten(...args)}</strong>`;
        output.hidden = false;
    } catch (err) {
        console.error(err);
        output.innerHTML = `Error: ${err.message}`;
        output.hidden = false;
    }
}

const select = document.getElementById('format-select');
select.addEventListener('change', toggleInputs, false);

const button = document.getElementById('calc');
button.addEventListener('click', calculate, false);
