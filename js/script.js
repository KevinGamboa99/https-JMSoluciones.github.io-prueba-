const header = document.getElementById("header");
const menu = document.getElementById("menu");
const menuButton = document.querySelector(".menu-toggle");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function toggleMenu() {
    menu.classList.toggle("active");
    menuButton.textContent = menu.classList.contains("active") ? "×" : "☰";
}

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

elements.forEach(element => observer.observe(element));

const sections = document.querySelectorAll("main section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-pro a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


const serviceDetails = {
    "modal-contable": {
        title: "Servicios contables y tributarios",
        body: `
            <p>Servicio orientado a ordenar la información contable, cumplir obligaciones tributarias y reducir contingencias frente a fiscalizaciones o requerimientos.</p>
            <ul>
                <li>Registro y control contable.</li>
                <p>Declaración de libros electrónicos (SIRE), conciliación bancaria y elaboración de estados financieros.<p>
                <li>Gestión de planillas.</li>
                <p>Cálculo de sueldos, gratificaciones, CTS, liquidaciones y declaraciones de PLAME y AFP Net.<p>
                <li>Declaración de Impuestos.</li>
                <p>Declaración de impuestos mensuales, declaración anual de renta de empresas, declaración anual de personas naturales y gestión tributaria de no domiciliados.<p>
                <li>Gestión operativa.</li>
                <p>Constitución y formalización de empresas, emisión de facturas, gestión de detracciones, regularización de omisiones, atención de fiscalizaciones y elaboración de reportes contables.<p>
            </ul>`
    },
    "modal-contrataciones": {
        title: "Contrataciones Públicas",
        body: `
            <p>Asesoría para proveedores, contratistas y entidades vinculadas a procedimientos de selección, ejecución contractual y controversias con el Estado.</p>
            <ul>
                <li>Postulación a procedimientos de selección.</li>
                <li>Preparación y revisión de ofertas técnicas y económicas.</li>
                <li>Consultas, observaciones, subsanaciones y análisis de admisión de ofertas.</li>
                <li>Recursos de apelación ante el Tribunal de Contrataciones del Estado.</li>
                <li>Asesoría en ejecución contractual, ampliaciones, penalidades, adicionales, resolución contractual y arbitraje.</li>
            </ul>`
    },
    "modal-gestion": {
        title: "Gestión pública",
        body: `
            <p>Soporte técnico-legal para la actuación administrativa de entidades públicas, funcionarios y servidores, con enfoque en legalidad y cumplimiento.</p>
            <ul>
                <li>Elaboración y revisión de informes legales, administrativos y documentos de gestión.</li>
                <li>Asesoría en procedimientos internos, atención de requerimientos y control documentario.</li>
                <li>Apoyo en implementación de directivas, reglamentos y actos administrativos.</li>
                <li>Orientación en responsabilidades administrativas, funcionales y gestión preventiva de riesgos.</li>
                <li>Acompañamiento en trámites institucionales y cumplimiento normativo.</li>
            </ul>`
    },
    "modal-administrativo": {
        title: "Derecho administrativo",
        body: `
            <p>Defensa y asesoría frente a actos administrativos, procedimientos sancionadores y controversias derivadas de la actuación de entidades públicas.</p>
            <ul>
                <li>Recursos de reconsideración, apelación y nulidad administrativa.</li>
                <li>Defensa en procedimientos administrativos sancionadores.</li>
                <li>Impugnación de actos administrativos y medidas arbitrarias.</li>
                <li>Elaboración de descargos, escritos, solicitudes y medios probatorios.</li>
                <li>Procesos contencioso-administrativos y estrategias de defensa judicial.</li>
            </ul>`
    },
    "modal-laboral": {
        title: "Derecho laboral",
        body: `
            <p>Asesoría preventiva y defensa en conflictos laborales individuales y colectivos, tanto en el ámbito privado como público cuando corresponda.</p>
            <ul>
                <li>Revisión de contratos, régimen laboral y obligaciones del empleador.</li>
                <li>Cálculo y reclamación de beneficios sociales.</li>
                <li>Despido, reposición, indemnización y reconocimiento de vínculo laboral.</li>
                <li>Defensa en inspecciones laborales y actuaciones ante SUNAFIL.</li>
                <li>Patrocinio en procesos laborales y elaboración de escritos judiciales.</li>
            </ul>`
    },
    "modal-civil": {
        title: "Derecho civil y familia",
        body: `
            <p>Atención de controversias patrimoniales, contractuales, familiares y sucesorias, con enfoque en solución eficiente y defensa de derechos.</p>
            <ul>
                <li>Contratos, obligaciones, compraventa, arrendamiento y responsabilidad civil.</li>
                <li>Propiedad, posesión, reivindicación, desalojo y saneamiento documentario.</li>
                <li>Sucesiones, herencias, petición de herencia y división y partición.</li>
                <li>Alimentos, tenencia, régimen de visitas y divorcio.</li>
                <li>Conciliaciones, demandas, contestaciones y seguimiento judicial.</li>
            </ul>`
    },
    "modal-penal": {
        title: "Derecho penal",
        body: `
            <p>Defensa técnica y patrocinio durante investigaciones fiscales y procesos penales, resguardando garantías procesales y estrategia de defensa.</p>
            <ul>
                <li>Asistencia en denuncias, declaraciones, diligencias fiscales y policiales.</li>
                <li>Defensa en investigación preliminar, preparatoria y etapa intermedia.</li>
                <li>Audiencias de prisión preventiva, comparecencia y otras medidas coercitivas.</li>
                <li>Constitución en actor civil y defensa de agraviados.</li>
                <li>Elaboración de escritos, recursos y estrategia procesal penal.</li>
            </ul>`
    },
    "modal-constitucional": {
        title: "Derecho constitucional",
        body: `
            <p>Protección de derechos fundamentales frente a actos u omisiones arbitrarias de autoridades, entidades o particulares cuando la ley lo permita.</p>
            <ul>
                <li>Procesos de amparo por vulneración de derechos constitucionales.</li>
                <li>Habeas corpus frente a afectaciones a la libertad individual y derechos conexos.</li>
                <li>Habeas data para acceso, rectificación o protección de información personal.</li>
                <li>Proceso de cumplimiento frente a mandatos legales o actos administrativos firmes.</li>
                <li>Medidas urgentes y estrategias de tutela constitucional.</li>
            </ul>`
    }
};

const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalClose = document.querySelector(".modal-close");
let lastFocusedButton = null;

function openServiceModal(modalKey, trigger) {
    const detail = serviceDetails[modalKey];
    if (!detail || !modalOverlay) return;
    lastFocusedButton = trigger;
    modalTitle.textContent = detail.title;
    modalBody.innerHTML = detail.body;
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
}

function closeServiceModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedButton) lastFocusedButton.focus();
}

document.querySelectorAll(".btn-detalle").forEach(button => {
    button.addEventListener("click", () => openServiceModal(button.dataset.modal, button));
});

if (modalClose) modalClose.addEventListener("click", closeServiceModal);

if (modalOverlay) {
    modalOverlay.addEventListener("click", event => {
        if (event.target === modalOverlay) closeServiceModal();
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
        closeServiceModal();
    }
});
