/* ========================================
   Buba Clínica Integrada - Perfil do médico (página única medico.html?id=)
   ======================================== */

function escapeHtml(text) {
    if (text == null) return '';
    var s = String(text);
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeAttr(text) {
    if (text == null) return '';
    return String(text).replace(/"/g, '&quot;');
}

function getSpecialtyTags(doctor) {
    if (doctor.specialtyTags && doctor.specialtyTags.length) {
        return doctor.specialtyTags;
    }
    if (!doctor.specialty) return [];
    return doctor.specialty.split('|').map(function (t) { return t.trim(); }).filter(Boolean);
}

function getAreaLabel(area) {
    if (area === 'medica') return 'Medicina';
    if (area === 'odontologica') return 'Odontologia';
    return 'Equipe';
}

var CLINIC_WHATSAPP_NUMBER = '5547999300027';

function buildAgendarConsultaWhatsappUrl(doctor) {
    var name = (doctor.name || '').trim();
    var tituloAgenda = doctor.tituloParaAgendamento && String(doctor.tituloParaAgendamento).trim();
    /* Dra. antes de Dr.: senão "Dr" casa no início de "Dra." e sobra "a. Beatriz…" */
    var bare = name.replace(/^(Dra\.?|Dr\.?)\s*/i, '').trim() || name;
    var msg;
    if (tituloAgenda) {
        msg = 'Olá, gostaria de agendar uma consulta com ' + tituloAgenda + ' ' + bare + '.';
    } else {
        var isDra = /^Dra\.?\s/i.test(name);
        msg = isDra
            ? 'Olá, gostaria de agendar uma consulta com a doutora ' + bare + '.'
            : 'Olá, gostaria de agendar uma consulta com o doutor ' + bare + '.';
    }
    return 'https://wa.me/' + CLINIC_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
}

function renderProfilePhoto(doctor) {
    if (doctor.photo) {
        return (
            '<div class="doctor-profile-photo-trigger">' +
            '<img src="' + escapeAttr(doctor.photo) + '" alt="' + escapeHtml(doctor.name) + '" class="doctor-profile__photo">' +
            '</div>'
        );
    }
    return (
        '<div class="doctor-profile__photo-placeholder" role="img" aria-label="' + escapeHtml(doctor.name) + ' — sem foto">' +
        '<span>Sem foto</span></div>'
    );
}

function renderDoctorProfile() {
    var root = document.getElementById('doctor-profile-root');
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var doctor = id && typeof getDoctorById === 'function' ? getDoctorById(id) : null;

    if (!doctor) {
        document.title = 'Profissional não encontrado - Buba Clínica Integrada';
        var meta = document.getElementById('page-meta-description');
        if (meta) meta.setAttribute('content', 'Equipe da Buba Clínica Integrada.');
        root.innerHTML =
            '<section class="section">' +
            '<div class="container text-center">' +
            '<h1 class="section-title">Profissional não encontrado</h1>' +
            '<p style="margin: var(--spacing-md) 0; color: var(--color-text-secondary);">Verifique o link ou retorne à listagem da equipe.</p>' +
            '<a href="medicos.html" class="btn btn-primary">Ver toda a equipe</a>' +
            '</div></section>';
        return;
    }

    document.title = doctor.name + ' - Buba Clínica Integrada';
    var meta = document.getElementById('page-meta-description');
    if (meta) {
        var snippet = (doctor.description || '').slice(0, 155);
        if (snippet.length === 155) snippet += '…';
        meta.setAttribute('content', snippet);
    }

    var tags = getSpecialtyTags(doctor);
    var tagsHtml = tags.map(function (t) {
        return '<span class="doctor-profile__tag">' + escapeHtml(t) + '</span>';
    }).join('');

    var formacao = doctor.formacao && doctor.formacao.length
        ? '<section class="section doctor-profile__formacao-section">' +
          '<div class="container doctor-profile__formacao-inner">' +
          '<h2 class="doctor-profile__section-title">Formação e trajetória</h2>' +
          '<ul class="doctor-profile__formacao-list">' +
          doctor.formacao.map(function (item) {
              return '<li>' + escapeHtml(item) + '</li>';
          }).join('') +
          '</ul></div></section>'
        : '';

    var bioExtra = doctor.bioExtended
        ? '<p class="doctor-profile__bio-p">' + escapeHtml(doctor.bioExtended) + '</p>'
        : '';

    var agendarHref = escapeAttr(buildAgendarConsultaWhatsappUrl(doctor));

    root.innerHTML =
        '<nav class="doctor-profile__breadcrumb container" aria-label="Navegação">' +
        '<a href="index.html">Início</a> <span aria-hidden="true">/</span> ' +
        '<a href="medicos.html">Médicos</a> <span aria-hidden="true">/</span> ' +
        '<span class="doctor-profile__breadcrumb-current">' + escapeHtml(doctor.name) + '</span></nav>' +

        '<section class="section doctor-profile__hero">' +
        '<div class="container doctor-profile__layout">' +
        '<div class="doctor-profile__media">' + renderProfilePhoto(doctor) + '</div>' +
        '<div class="doctor-profile__main">' +
        '<p class="doctor-profile__area">' + escapeHtml(getAreaLabel(doctor.area)) + '</p>' +
        '<h1 class="doctor-profile__name">' + escapeHtml(doctor.name) + '</h1>' +
        '<p class="doctor-profile__council">' + escapeHtml(doctor.conselhoDeClasse) + '</p>' +
        (tagsHtml ? '<div class="doctor-profile__tags">' + tagsHtml + '</div>' : '') +
        '<div class="doctor-profile__bio">' +
        '<p class="doctor-profile__bio-p">' + escapeHtml(doctor.description) + '</p>' +
        bioExtra +
        '</div>' +
        '<div class="doctor-profile__actions">' +
        '<a href="' + agendarHref + '" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Agendar consulta</a>' +
        '<a href="medicos.html" class="btn btn-outline">Voltar à equipe</a>' +
        '</div></div></div></section>' +
        formacao;
}

document.addEventListener('DOMContentLoaded', function () {
    renderDoctorProfile();
});
